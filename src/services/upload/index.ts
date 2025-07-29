/**
 * 文件上传API服务
 */

// 上传响应接口
export interface UploadResponse {
  success: boolean;
  data?: {
    file_url: string;
    category: string;
  };
  message?: string;
  error?: string;
}

// 上传进度回调接口
export interface UploadProgressCallback {
  (progress: number): void;
}

// 上传配置接口
export interface UploadConfig {
  onProgress?: UploadProgressCallback;
  timeout?: number;
  maxSize?: number; // 最大文件大小（字节）
  allowedTypes?: string[]; // 允许的文件类型
}

// 文件上传API
export const uploadApi = {
  /**
   * 上传单个文件
   * POST /upload/file
   */
  uploadFile: async (
    file: File,
    config?: UploadConfig
  ): Promise<UploadResponse> => {
    const { onProgress, timeout = 30000, maxSize, allowedTypes } = config || {};

    // 文件大小验证
    if (maxSize && file.size > maxSize) {
      return {
        success: false,
        error: `文件大小超过限制 (${(maxSize / 1024 / 1024).toFixed(1)}MB)`,
      };
    }

    // 文件类型验证
    if (allowedTypes && !allowedTypes.includes(file.type)) {
      return {
        success: false,
        error: `不支持的文件类型: ${file.type}`,
      };
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      // 创建XMLHttpRequest以支持上传进度
      return new Promise<UploadResponse>((resolve) => {
        const xhr = new XMLHttpRequest();

        // 设置超时
        xhr.timeout = timeout;

        // 上传进度监听
        if (onProgress) {
          xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              const progress = (event.loaded / event.total) * 100;
              onProgress(progress);
            }
          });
        }

        // 请求完成监听
        xhr.addEventListener("load", () => {
          try {
            const response = JSON.parse(xhr.responseText);
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve({
                success: true,
                data: response.data || response,
                message: response.message || "上传成功",
              });
            } else {
              resolve({
                success: false,
                error: response.error || response.message || "上传失败",
              });
            }
          } catch (error) {
            resolve({
              success: false,
              error: "响应解析失败",
            });
          }
        });

        // 错误监听
        xhr.addEventListener("error", () => {
          resolve({
            success: false,
            error: "网络错误",
          });
        });

        // 超时监听
        xhr.addEventListener("timeout", () => {
          resolve({
            success: false,
            error: "上传超时",
          });
        });

        // 获取认证token
        const token = localStorage.getItem("auth_token");

        // 获取API基础URL
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://47.99.189.222:8012/api/v1";

        // 设置请求
        xhr.open("POST", `${baseUrl}/api/upload/file`);
        if (token) {
          xhr.setRequestHeader("Authorization", `Bearer ${token}`);
        }

        // 发送请求
        xhr.send(formData);
      });
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "上传失败",
      };
    }
  },
};

// 上传工具函数
export const uploadUtils = {
  /**
   * 格式化文件大小
   */
  formatFileSize: (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  },

  /**
   * 验证文件类型
   */
  validateFileType: (file: File, allowedTypes: string[]): boolean => {
    return allowedTypes.includes(file.type);
  },

  /**
   * 验证文件大小
   */
  validateFileSize: (file: File, maxSize: number): boolean => {
    return file.size <= maxSize;
  },

  /**
   * 获取文件扩展名
   */
  getFileExtension: (filename: string): string => {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
  },

  /**
   * 生成唯一文件名
   */
  generateUniqueFilename: (originalName: string): string => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    const extension = uploadUtils.getFileExtension(originalName);
    return `${timestamp}_${random}.${extension}`;
  },

  /**
   * 检查是否为图片文件
   */
  isImageFile: (file: File): boolean => {
    return file.type.startsWith("image/");
  },

  /**
   * 预览图片文件
   */
  previewImage: (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!uploadUtils.isImageFile(file)) {
        reject(new Error("不是图片文件"));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };
      reader.onerror = () => {
        reject(new Error("读取文件失败"));
      };
      reader.readAsDataURL(file);
    });
  },
};

export default uploadApi;
