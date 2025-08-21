"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authUtils } from "@/services/auth";
import { getProxyImageUrl } from "@/lib/image-proxy";

interface TopNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onMenuToggle?: () => void;
  onSidebarToggle?: () => void;
  currentPage?: string;
}

export function TopNavigation({
  activeTab,
  setActiveTab,
  onMenuToggle,
  onSidebarToggle,
  currentPage = "home",
}: TopNavigationProps) {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [userAvatar, setUserAvatar] = useState<string>("");

  useEffect(() => {
    // 从localStorage获取用户信息
    const userInfo = authUtils.getUserInfo();
    if (userInfo) {
      const displayName =
        [userInfo.first_name, userInfo.last_name].filter(Boolean).join(" ") ||
        userInfo.username ||
        userInfo.email ||
        "用户";
      setUserName(displayName);
      setUserAvatar(userInfo.avatar || "");
    }
  }, []);

  const homeTabs = [
    { id: "visibility", label: "可见性", href: "/dashboard" },
    { id: "tips", label: "提示", href: "/dashboard/tips" },
    { id: "references", label: "引用", href: "/dashboard/references" },
  ];

  const settingsTabs = [
    { id: "账户设置", label: "账户设置", href: "/dashboard/settings" },
    { id: "订阅信息", label: "订阅信息", href: "/dashboard/settings" },
    { id: "用户管理", label: "用户管理", href: "/dashboard/settings" },
    { id: "通知", label: "通知", href: "/dashboard/settings" },
    { id: "日志", label: "日志", href: "/dashboard/settings" },
    { id: "授权插件", label: "授权插件", href: "/dashboard/settings" },
  ];

  const geoOptimizationTabs = [
    {
      id: "geo-optimization",
      label: "GEO",
      href: "/dashboard/geo-optimization",
    },
    {
      id: "database",
      label: "数据库",
      href: "/dashboard/geo-optimization/database",
    },
    {
      id: "pricing",
      label: "价格",
      href: "/dashboard/geo-optimization/pricing",
    },
  ];

  // 判断显示哪种导航
  const showFullNavigation = currentPage === "home";
  const showSettingsNavigation = currentPage === "settings";
  const showGeoOptimizationNavigation = currentPage === "geo-optimization";
  const tabs = showSettingsNavigation
    ? settingsTabs
    : showGeoOptimizationNavigation
    ? geoOptimizationTabs
    : homeTabs;

  const handleTabClick = (tab: { id: string; href: string }) => {
    // 对于引用页面，直接跳转而不更新 activeTab，避免页面抽动
    if (tab.id === "references") {
      router.push(tab.href);
    } else {
      setActiveTab(tab.id);
      router.push(tab.href);
    }
  };

  return (
    <div className="h-16 bg-blue-500/10 border-b border-gray-200 flex items-center justify-between px-4 md:px-6">
      {/* 左侧：菜单按钮和Tab导航 */}
      <div className="flex items-center space-x-4 md:space-x-8">
        {/* 移动端汉堡菜单 */}
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* 桌面端侧边栏切换 */}
        <button
          onClick={onSidebarToggle}
          className="hidden md:block p-2 rounded-md hover:bg-gray-200 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* 条件渲染导航栏 */}
        {(showFullNavigation ||
          showSettingsNavigation ||
          showGeoOptimizationNavigation) && (
          <>
            {/* Tab导航 */}
            <nav className="hidden md:flex space-x-6">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`
                    relative py-4 text-sm transition-colors cursor-pointer whitespace-nowrap
                    ${
                      activeTab === tab.id
                        ? "text-gray-900 font-bold"
                        : "text-gray-500 hover:text-gray-900"
                    }
                  `}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.label}
                  {/* 激活状态下划线 */}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                  )}
                </div>
              ))}
            </nav>

            {/* 移动端Tab导航 - 下拉菜单或简化显示 */}
            <div className="md:hidden">
              <span className="text-sm font-bold text-gray-900">
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </span>
            </div>
          </>
        )}
      </div>

      {/* 右侧：用户信息 */}
      <div className="flex items-center space-x-3">
        <div className="w-7 h-7 rounded-full bg-cover bg-center overflow-hidden bg-gray-200">
          {userAvatar ? (
            <img
              src={getProxyImageUrl(userAvatar)}
              alt="用户头像"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white font-medium text-sm">
              {userName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <span className="text-sm text-gray-900">{userName}</span>
      </div>
    </div>
  );
}
