"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authUtils } from "@/services/auth";

interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export default function AuthGuard({ 
  children, 
  redirectTo = "/auth/login" 
}: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = authUtils.isAuthenticated();
      setIsAuthenticated(authenticated);
      
      if (!authenticated) {
        // 保存当前路径以便登录后重定向
        const currentPath = window.location.pathname;
        router.replace(`${redirectTo}?redirect=${encodeURIComponent(currentPath)}`);
      }
    };

    checkAuth();
  }, [router, redirectTo]);

  // 显示加载状态
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // 如果未认证，显示空内容（因为已经重定向了）
  if (!isAuthenticated) {
    return null;
  }

  // 如果已认证，显示子组件
  return <>{children}</>;
}