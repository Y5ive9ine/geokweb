"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopNavigation } from "@/components/dashboard/TopNavigation";
import { SettingsContent } from "@/components/dashboard/SettingsContent";
import ErrorBoundary from "@/components/dashboard/ErrorBoundary";
import { useSidebarState } from '@/hooks/useSidebarState'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("账户设置");
  const { 
    sidebarCollapsed, 
    mobileSidebarOpen, 
    toggleSidebar, 
    toggleMobileSidebar, 
    setMobileSidebarOpen 
  } = useSidebarState()

  return (
    <div className="min-h-screen bg-gray-50 font-['PingFang_SC']">
      {/* 移动端遮罩 */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* 主要布局容器 */}
      <div className="flex h-screen">
        {/* 左侧边栏 */}
        <Sidebar 
          isCollapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
          currentPage="settings"
        />

                {/* 主要内容区域 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* 顶部导航 */}
          <TopNavigation 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            onMenuToggle={toggleMobileSidebar}
            onSidebarToggle={toggleSidebar}
            currentPage="settings"
          />
          
          {/* 主要内容 */}
          <ErrorBoundary>
            <SettingsContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </ErrorBoundary>
                      </div>
                      </div>
    </div>
  );
}
