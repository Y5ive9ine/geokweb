"use client";

import { useState, useRef, useEffect } from "react";
import { useAvatarUpload } from "@/hooks/useUpload";
import { authUtils } from "@/services/auth";
import { getProxyImageUrl } from "@/lib/image-proxy";

interface AvatarUploadProps {
  onSuccess?: (url: string) => void;
  onError?: (error: string) => void;
}

export function AvatarUpload({ onSuccess, onError }: AvatarUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [currentAvatar, setCurrentAvatar] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { uploadAvatar, state, reset } = useAvatarUpload();

  // 获取当前用户头像和用户名
  useEffect(() => {
    const userInfo = authUtils.getUserInfo();
    if (userInfo?.avatar) {
      setCurrentAvatar(userInfo.avatar);
    }

    // 设置用户名用于显示首字母
    const displayName =
      [userInfo?.first_name, userInfo?.last_name].filter(Boolean).join(" ") ||
      userInfo?.username ||
      userInfo?.email ||
      "用户";
    setUserName(displayName);
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 创建预览
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // 重置状态
    reset();
  };

  const handleUpload = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) return;

    try {
      const result = await uploadAvatar(file);

      if (result.success) {
        // 更新当前头像显示
        const fileUrl =
          (result.data as any)?.file_url || (result.data as any)?.url;
        if (fileUrl) {
          setCurrentAvatar(fileUrl);
          setPreview(null);

          // 更新localStorage中的用户信息
          const userInfo = authUtils.getUserInfo();
          if (userInfo) {
            userInfo.avatar = fileUrl;
            authUtils.setUserInfo(userInfo);
          }
        }

        onSuccess?.(fileUrl || "");
      } else {
        onError?.(result.error || "头像上传失败");
      }
    } catch (error) {
      onError?.(error instanceof Error ? error.message : "头像上传失败");
    }

    // 清空文件输入
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCancel = () => {
    setPreview(null);
    reset();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4">
        {/* 头像显示区域 */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
            {preview ? (
              <img
                src={preview}
                alt="头像预览"
                className="w-full h-full object-cover"
              />
            ) : currentAvatar ? (
              <img
                src={getProxyImageUrl(currentAvatar)}
                alt="当前头像"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white font-bold text-4xl">
                {userName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* 上传进度指示器 */}
          {state.uploading && (
            <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-sm font-medium">
                {Math.round(state.progress)}%
              </div>
            </div>
          )}
        </div>

        {/* 文件选择 */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-3">
          {!preview ? (
            <button
              onClick={handleChooseFile}
              disabled={state.uploading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              选择头像
            </button>
          ) : (
            <>
              <button
                onClick={handleUpload}
                disabled={state.uploading}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {state.uploading ? "上传中..." : "确认上传"}
              </button>
              <button
                onClick={handleCancel}
                disabled={state.uploading}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                取消
              </button>
            </>
          )}
        </div>

        {/* 进度条 */}
        {state.uploading && (
          <div className="w-full max-w-xs">
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${state.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* 错误信息 */}
        {state.error && (
          <div className="text-red-600 text-sm text-center max-w-xs">
            {state.error}
          </div>
        )}

        {/* 成功信息 */}
        {state.success && !state.uploading && (
          <div className="text-green-600 text-sm text-center">
            头像更新成功！
          </div>
        )}
      </div>

      {/* 使用说明 */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">上传要求：</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 支持 JPG、PNG、GIF、WebP 格式</li>
          <li>• 文件大小不超过 5MB</li>
          <li>• 建议使用正方形图片，比例 1:1</li>
          <li>• 推荐尺寸：400x400 像素或更高</li>
        </ul>
      </div>
    </div>
  );
}
