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
  logout: async () => {
    try {
      // 调用服务器端logout API
      await api.post("/api/auth/logout");
    } catch (error) {
      // 即使服务器端失败，也要清除本地认证信息
      console.error("Server logout failed:", error);
    } finally {
      // 无论如何都清除本地认证信息
      authUtils.clearAuth();
    }
  },

  // 刷新token
  refresh: () => api.post("/api/auth/refresh"),

  // 获取当前品牌
  getCurrentBrand: () => api.get("/api/auth/current-brand"),

  // 更新当前品牌
  updateCurrentBrand: (brandData: { brand_id: string }) =>
    api.put("/api/auth/current-brand", brandData),
};

// Cookie操作工具函数
const cookieUtils = {
  // 设置cookie
  setCookie: (name: string, value: string, days: number = 7): void => {
    if (typeof window !== "undefined") {
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;secure;samesite=strict`;
    }
  },

  // 获取cookie
  getCookie: (name: string): string | null => {
    if (typeof window !== "undefined") {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  },

  // 删除cookie
  deleteCookie: (name: string): void => {
    if (typeof window !== "undefined") {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }
  }
};

// 认证相关的工具函数
export const authUtils = {
  // 获取认证token
  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      // 优先从localStorage获取，如果没有则从cookie获取
      return localStorage.getItem("auth_token") || cookieUtils.getCookie("auth_token");
    }
    return null;
  },

  // 设置认证token
  setToken: (token: string): void => {
    if (typeof window !== "undefined") {
      // 同时保存到localStorage和cookie
      localStorage.setItem("auth_token", token);
      cookieUtils.setCookie("auth_token", token, 7); // 7天过期
    }
  },

  // 移除认证token
  removeToken: (): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_info");
      cookieUtils.deleteCookie("auth_token");
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
