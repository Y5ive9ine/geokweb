/**
 * 文件上传React Hook
 */

import { useState, useCallback } from "react";
import {
  uploadApi,
  uploadUtils,
  type UploadResponse,
  type UploadConfig,
} from "@/services/upload";

export interface UseUploadState {
  uploading: boolean;
  progress: number;
  error: string | null;
  success: boolean;
}

export interface UseUploadReturn {
  state: UseUploadState;
  uploadFile: (file: File, config?: UploadConfig) => Promise<UploadResponse>;
  uploadAvatar: (avatar_url: string) => Promise<UploadResponse>;
  reset: () => void;
}

export const useUpload = (): UseUploadReturn => {
  const [state, setState] = useState<UseUploadState>({
    uploading: false,
    progress: 0,
    error: null,
    success: false,
  });

  const reset = useCallback(() => {
    setState({
      uploading: false,
      progress: 0,
      error: null,
      success: false,
    });
  }, []);

  const uploadFile = useCallback(
    async (file: File, config?: UploadConfig): Promise<UploadResponse> => {
      setState({
        uploading: true,
        progress: 0,
        error: null,
        success: false,
      });

      try {
        const result = await uploadApi.uploadFile(file, {
          ...config,
          onProgress: (progress: number) => {
            setState((prev) => ({ ...prev, progress }));
            config?.onProgress?.(progress);
          },
        });

        setState({
          uploading: false,
          progress: result.success ? 100 : 0,
          error: result.success ? null : result.error || "上传失败",
          success: result.success,
        });

        return result;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "上传失败";
        setState({
          uploading: false,
          progress: 0,
          error: errorMessage,
          success: false,
        });

        return {
          success: false,
          error: errorMessage,
        };
      }
    },
    []
  );

  const uploadAvatar = useCallback(
    async (url: string): Promise<UploadResponse> => {
      setState({
        uploading: true,
        progress: 0,
        error: null,
        success: false,
      });

      try {
        // 调用auth服务更新头像
        const { authApi } = await import("../services/auth");
        const updateResult = await authApi.updateAvatar({ avatar_url: url });

        setState({
          uploading: false,
          progress: 100,
          error: updateResult.success
            ? null
            : updateResult.error || "头像更新失败",
          success: updateResult.success,
        });

        if (!updateResult.success) {
          return {
            success: false,
            error: updateResult.error || "头像更新失败",
          };
        }

        return {
          success: true,
          data: { file_url: url, category: "avatar" },
          message: "头像更新成功",
        };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "头像上传失败";
        setState({
          uploading: false,
          progress: 0,
          error: errorMessage,
          success: false,
        });

        return {
          success: false,
          error: errorMessage,
        };
      }
    },
    []
  );

  return {
    state,
    uploadFile,
    uploadAvatar,
    reset,
  };
};

// 专门用于头像上传的Hook
export const useAvatarUpload = () => {
  const upload = useUpload();

  const uploadAvatar = useCallback(
    async (file: File) => {
      // 验证是否为图片文件
      if (!uploadUtils.isImageFile(file)) {
        upload.reset();
        return {
          success: false,
          error: "请选择图片文件",
        };
      }

      // 验证文件大小 (5MB)
      const maxSize = 5 * 1024 * 1024;
      if (!uploadUtils.validateFileSize(file, maxSize)) {
        upload.reset();
        return {
          success: false,
          error: "图片大小不能超过5MB",
        };
      }

      // 先上传文件
      const uploadResult = await upload.uploadFile(file, {
        maxSize: 5 * 1024 * 1024,
        allowedTypes: [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/gif",
          "image/webp",
        ],
      });

      if (!uploadResult.success || !uploadResult.data) {
        return uploadResult;
      }

      // 获取文件URL
      const fileUrl =
        (uploadResult.data as any).url || (uploadResult.data as any).file_url;

      if (!fileUrl) {
        return {
          success: false,
          error: "上传成功但未获取到文件URL",
        };
      }

      // 然后更新头像
      return upload.uploadAvatar(fileUrl);
    },
    [upload]
  );

  return {
    ...upload,
    uploadAvatar,
  };
};

export default useUpload;
