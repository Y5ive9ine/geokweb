/**
 * 认证API统一导出
 */

import { api } from "@/lib/api-client";
import { LoginResponse, RegisterRequest } from "@/lib/types";

// 专门的认证API方法
export const authApi = {
  // 登录
  login: (credentials: { email: string; password: string }) =>
    api.post("/api/auth/login", credentials),

  // 注册
  register: (userData: RegisterRequest) =>
    api.post<LoginResponse>("/api/auth/register", userData),

  // 获取用户信息
  getMe: () => api.get("/api/auth/me"),

  // 更新个人资料
  updateProfile: (profileData: {
    first_name?: string;
    last_name?: string;
    bio?: string;
    phone?: string;
    company?: string;
    country?: string;
  }) => api.put("/api/auth/profile", profileData),

  // 更新邮箱
  updateEmail: (emailData: { new_email: string }) =>
    api.put("/api/auth/email", emailData),

  // 更新密码
  updatePassword: (passwordData: {
    current_password: string;
    new_password: string;
  }) => api.put("/api/auth/password", passwordData),

  // 更新头像
  updateAvatar: (avatarData: { url: string }) =>
    api.put("/api/auth/avatar", avatarData),

  // 登出
  logout: () => api.post("/api/auth/logout"),

  // 刷新token
  refresh: () => api.post("/api/auth/refresh"),
};

// 认证相关的工具函数
export const authUtils = {
  // 获取认证token
  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token");
    }
    return null;
  },

  // 设置认证token
  setToken: (token: string): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  },

  // 移除认证token
  removeToken: (): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_info");
    }
  },

  // 检查是否已登录
  isAuthenticated: (): boolean => {
    return !!authUtils.getToken();
  },

  // 获取用户信息
  getUserInfo: (): any | null => {
    if (typeof window !== "undefined") {
      const userInfo = localStorage.getItem("user_info");
      if (userInfo) {
        try {
          return JSON.parse(userInfo);
        } catch (error) {
          console.error("Error parsing user info:", error);
          return null;
        }
      }
    }
    return null;
  },

  // 设置用户信息
  setUserInfo: (userInfo: any): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user_info", JSON.stringify(userInfo));
    }
  },

  // 清除所有认证信息
  clearAuth: (): void => {
    authUtils.removeToken();
  },
};

export default authApi;
