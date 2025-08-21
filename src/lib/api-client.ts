/**
 * API客户端封装
 * 统一处理API请求，支持环境变量配置
 */

// 获取API基础URL
const getApiBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || "http://47.99.189.222:8012/api/v1";
};

// 请求配置接口
interface ApiRequestConfig {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
}

// 响应接口
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  status: number;
}

// 获取认证token
const getAuthToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token");
  }
  return null;
};

// 清除认证token并跳转到登录页面
const handleUnauthorized = (): void => {
  if (typeof window !== "undefined") {
    // 清除存储的token
    localStorage.removeItem("access_token");
    // 可选：清除其他相关的用户信息
    localStorage.removeItem("user_info");
    
    // 跳转到登录页面
    window.location.href = "/auth/login";
  }
};

// 封装的fetch请求
export const apiRequest = async <T = any>(
  endpoint: string,
  config: ApiRequestConfig = {}
): Promise<ApiResponse<T>> => {
  const { method = "GET", headers = {}, body, timeout = 10000 } = config;

  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${
    endpoint.startsWith("/") ? endpoint : `/${endpoint}`
  }`;

  // 默认请求头
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers,
  };

  // 自动添加认证token
  const token = getAuthToken();
  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }

  // 请求配置
  const requestConfig: RequestInit = {
    method,
    headers: defaultHeaders,
    signal: AbortSignal.timeout(timeout),
  };

  // 处理请求体
  if (body && method !== "GET") {
    if (typeof body === "string") {
      requestConfig.body = body;
    } else {
      requestConfig.body = JSON.stringify(body);
    }
  }

  try {
    console.log(`API Request: ${method} ${url}`, {
      headers: defaultHeaders,
      body,
    });

    const response = await fetch(url, requestConfig);

    let data: any;
    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : null;
      } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        data = null;
      }
    } else {
      data = await response.text();
    }

    console.log(`API Response: ${response.status}`, data);

    // 处理401未授权错误
    if (response.status === 401) {
      console.warn("API Response: 401 Unauthorized, redirecting to login...");
      handleUnauthorized();
      // 返回特殊的401错误响应
      return {
        success: false,
        error: "Authentication required. Redirecting to login...",
        message: "You are not logged in",
        status: 401,
      };
    }

    const result: ApiResponse<T> = {
      success: response.ok && data?.success !== false,
      data: response.ok ? data?.data || data : undefined,
      message: data?.message || (response.ok ? "Success" : "Error"),
      error: response.ok
        ? data?.success === false
          ? data?.error
          : undefined
        : data?.error || data,
      status: response.status,
    };

    return result;
  } catch (error) {
    console.error("API Request Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return {
      success: false,
      error: errorMessage,
      message: "Network error or timeout",
      status: 0,
    };
  }
};

// 便捷方法
export const api = {
  get: <T = any>(endpoint: string, config?: Omit<ApiRequestConfig, "method">) =>
    apiRequest<T>(endpoint, { ...config, method: "GET" }),

  post: <T = any>(
    endpoint: string,
    body?: any,
    config?: Omit<ApiRequestConfig, "method" | "body">
  ) => apiRequest<T>(endpoint, { ...config, method: "POST", body }),

  put: <T = any>(
    endpoint: string,
    body?: any,
    config?: Omit<ApiRequestConfig, "method" | "body">
  ) => apiRequest<T>(endpoint, { ...config, method: "PUT", body }),

  delete: <T = any>(
    endpoint: string,
    config?: Omit<ApiRequestConfig, "method">
  ) => apiRequest<T>(endpoint, { ...config, method: "DELETE" }),

  patch: <T = any>(
    endpoint: string,
    body?: any,
    config?: Omit<ApiRequestConfig, "method" | "body">
  ) => apiRequest<T>(endpoint, { ...config, method: "PATCH", body }),
};

export default api;
