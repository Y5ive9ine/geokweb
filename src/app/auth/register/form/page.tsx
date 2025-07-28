"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GoogleIcon } from "@/components/auth/GoogleIcon";
import { ArrowLeftIcon } from "@/components/auth/ArrowLeftIcon";
import { authApi, authUtils } from "@/services/auth";

// 将使用 useSearchParams 的逻辑分离到单独的组件中
function RegisterFormContent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // 从URL参数中获取邮箱
  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, [searchParams]);

  const validateForm = () => {
    if (!firstName.trim()) {
      setError("请输入名字");
      return false;
    }
    if (!lastName.trim()) {
      setError("请输入姓氏");
      return false;
    }
    if (!email.trim()) {
      setError("请输入邮箱地址");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("请输入有效的邮箱地址");
      return false;
    }
    if (!password) {
      setError("请输入密码");
      return false;
    }
    if (password.length < 6) {
      setError("密码至少需要6个字符");
      return false;
    }
    if (password !== confirmPassword) {
      setError("两次输入的密码不一致");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await authApi.register({
        username: email, // 使用邮箱作为用户名
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });

      if (response.success) {
        // 标记用户刚完成注册，需要进入onboarding流程
        localStorage.setItem("just_registered", "true");

        // 注册成功，跳转到登录页面
        router.push("/auth/login?message=注册成功，请登录");
      } else {
        setError(response.error || "注册失败，请重试");
      }
    } catch (error) {
      console.error("Register error:", error);
      setError("网络错误，请重试");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setError("");
    setLoading(true);

    try {
      // 标记用户刚完成注册，需要进入onboarding流程
      localStorage.setItem("just_registered", "true");

      // 模拟Google注册成功，跳转到登录页面
      router.push("/auth/login?message=Google注册成功，请登录");
    } catch (error) {
      console.error("Google register error:", error);
      setError("Google注册失败");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/auth-gradient.svg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-purple-700/60"></div>
      </div>

      {/* 主要表单容器 */}
      <div className="relative z-10 w-full max-w-lg mx-4">
        <div className="bg-white rounded-3xl shadow-xl p-12">
          {/* GEOK Logo */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center text-2xl font-bold text-gray-600">
              <ArrowLeftIcon />
              <span className="ml-2">GEOK</span>
            </div>
          </div>

          {/* Google 登录按钮 */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 text-gray-500 py-4 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 mb-6"
          >
            <GoogleIcon />
            使用Google登录
          </button>

          {/* 分隔符 */}
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500">或者</span>
          </div>

          {/* 表单 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 姓 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">姓</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                required
              />
            </div>

            {/* 名 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">名</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                required
              />
            </div>

            {/* 电子邮件 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                电子邮件
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                required
              />
            </div>

            {/* 密码 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">密码</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder="至少6个字符"
                required
              />
            </div>

            {/* 确认密码 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                确认密码
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder="再次输入密码"
                required
              />
            </div>

            {/* 错误提示 */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* 创建账户按钮 */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {loading ? "创建中..." : "创建您的账户"}
            </button>
          </form>

          {/* 登录链接 */}
          <div className="text-center pt-6">
            <span className="text-sm text-gray-600">已有账户？</span>
            <Link
              href="/auth/login"
              className="text-sm text-gray-600 ml-2 hover:text-gray-800 transition-colors"
            >
              登入
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// 主导出组件，使用 Suspense 包装
export default function RegisterFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterFormContent />
    </Suspense>
  );
}
