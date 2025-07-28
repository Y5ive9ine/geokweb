"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GoogleIcon } from "@/components/auth/GoogleIcon";
import {
  buildGoogleAuthUrl,
  validateOAuthCallback,
  cleanupUrlParams,
} from "@/lib/google-auth";
import { authApi } from "@/services/auth";

// 背景图片常量
const GRADIENT_BG = "/images/auth-gradient.svg";
const CONTENT_BG = "/images/content-placeholder.svg";

// OAuth处理组件 - 已经在 Suspense 内部使用，不需要额外包装
function OAuthHandler({
  onError,
  onGoogleAuth,
}: {
  onError: (error: string) => void;
  onGoogleAuth: (code: string) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const error = searchParams.get("error");

    if (error) {
      onError(`Google登录失败: ${error}`);
      cleanupUrlParams();
      return;
    }

    if (code && state) {
      // 验证state
      if (!validateOAuthCallback(code, state)) {
        onError("安全验证失败: 无效的state参数");
        cleanupUrlParams();
        return;
      }

      // 发送授权码到服务器
      onGoogleAuth(code);
    }
  }, [searchParams, onError, onGoogleAuth]);

  return null;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  // 检查是否有注册成功消息
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");
    if (message) {
      setSuccess(decodeURIComponent(message));
      // 清理URL参数
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("请输入邮箱地址");
      return;
    }

    if (!password) {
      setError("请输入密码");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await authApi.login({
        email: email,
        password,
      });

      if (response.success) {
        setSuccess("登录成功！");
        // 保存token到localStorage
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("user_info", JSON.stringify(response.data.user));

        // 检查用户是否刚完成注册
        const justRegistered = localStorage.getItem("just_registered");

        // 跳转到相应页面
        setTimeout(() => {
          if (justRegistered === "true") {
            // 清除注册标记
            localStorage.removeItem("just_registered");
            router.push("/auth/register/onboarding");
          } else {
            router.push("/dashboard");
          }
        }, 1500);
      } else {
        setError(response.error || response.message || "登录失败");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("网络错误，请重试");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setError("");
    setLoading(true);

    try {
      const redirectUri = window.location.origin + window.location.pathname;
      const authUrl = buildGoogleAuthUrl(redirectUri);
      window.location.href = authUrl;
    } catch (error) {
      console.error("Google login error:", error);
      setError("Google登录初始化失败");
      setLoading(false);
    }
  };

  const handleGoogleAuthCode = async (authCode: string) => {
    setLoading(true);
    setError("");

    try {
      const redirectUri = window.location.origin + window.location.pathname;
      // 使用authApi但传递Google OAuth参数
      const response = await authApi.login({
        username: "", // Google登录不需要用户名
        password: "", // Google登录不需要密码
        auth_code: authCode,
        redirect_uri: redirectUri,
      } as any);

      if (response.success) {
        setSuccess("Google登录成功！");
        // 保存token到localStorage
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("user_info", JSON.stringify(response.data.user));

        // 清理URL参数
        cleanupUrlParams();

        // 检查用户是否刚完成注册
        const justRegistered = localStorage.getItem("just_registered");

        // 跳转到相应页面
        setTimeout(() => {
          if (justRegistered === "true") {
            // 清除注册标记
            localStorage.removeItem("just_registered");
            router.push("/auth/register/onboarding");
          } else {
            router.push("/dashboard");
          }
        }, 1500);
      } else {
        setError(response.error || response.message || "Google登录失败");
        cleanupUrlParams();
      }
    } catch (error) {
      console.error("Google auth code error:", error);
      setError("Google登录处理失败");
      cleanupUrlParams();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Suspense fallback={<div></div>}>
        <OAuthHandler onError={setError} onGoogleAuth={handleGoogleAuthCode} />
      </Suspense>
      {/* 左侧登录表单 */}
      <div className="relative w-[900px]">
        <div className="absolute inset-0 flex flex-col justify-center px-[120px]">
          <div className="mb-[60px] text-center">
            <h1 className="text-[36px] text-black font-normal leading-[44px] font-['PingFang_SC']">
              欢迎回来
            </h1>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-[24px]">
            <div>
              <label
                htmlFor="email"
                className="block text-[14px] font-medium text-[#333333] mb-[8px]"
              >
                电子邮件
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-[4px] border border-[#CCCCCC] px-[16px] py-[12px] text-[14px] placeholder:text-[#999999] focus:border-[#2663FF] focus:outline-none"
                placeholder="输入您的电子邮件"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-[14px] font-medium text-[#333333] mb-[8px]"
              >
                密码
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-[4px] border border-[#CCCCCC] px-[16px] py-[12px] text-[14px] placeholder:text-[#999999] focus:border-[#2663FF] focus:outline-none"
                placeholder="输入您的密码"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-[4px] bg-[#2663FF] py-[12px] text-[14px] font-medium text-white hover:bg-[#1947B8] focus:outline-none disabled:opacity-50"
            >
              {loading ? "登录中..." : "使用电子邮件登录"}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#CCCCCC]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-[16px] text-[14px] text-[#999999]">
                  或
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center rounded-[4px] border border-[#CCCCCC] py-[12px] text-[14px] font-medium text-[#333333] hover:bg-[#F5F5F5] focus:outline-none"
            >
              <GoogleIcon />
              <span className="ml-[8px]">使用 Google 账号登录</span>
            </button>

            <div className="flex justify-center items-center mt-[24px]">
              <span className="text-[14px] text-[#666666] font-['PingFang_SC'] leading-[44px] mr-2">
                第一次接触GEOK？
              </span>
              <Link
                href="/auth/register"
                className="text-[14px] text-[#333333] font-['PingFang_SC'] leading-[44px] underline decoration-[#333333] underline-offset-[25%] hover:text-[#2663FF]"
              >
                创建一个账户
              </Link>
            </div>
          </form>

          {error && (
            <div className="mt-[24px] rounded-[4px] bg-red-50 p-[16px] text-[14px] text-red-500">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-[24px] rounded-[4px] bg-green-50 p-[16px] text-[14px] text-green-500">
              {success}
            </div>
          )}
        </div>
      </div>

      {/* 右侧背景图片 */}
      <div className="relative flex-1">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${GRADIENT_BG})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative w-full max-w-[886px] aspect-[886/799] bg-contain bg-center bg-no-repeat opacity-85"
              style={{
                backgroundImage: `url(${CONTENT_BG})`,
              }}
            ></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-[36px] text-[#2663FF] font-normal mb-4">
              深入了解AI搜索
            </h2>
            <p className="text-[20px] text-[#333333] font-['PingFang_SC'] font-normal leading-[44px]">
              通过GEOK.AI探索搜索可见性的最新见解
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
