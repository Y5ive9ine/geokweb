'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { TopNavigation } from '@/components/dashboard/TopNavigation'
import { MainContent } from '@/components/dashboard/MainContent'
import ErrorBoundary from '@/components/dashboard/ErrorBoundary'
import AuthGuard from '@/components/auth/AuthGuard'
import { useSidebarState } from '@/hooks/useSidebarState'

export default function TipsPage() {
  const [activeTab, setActiveTab] = useState('tips')
  const { 
    sidebarCollapsed, 
    mobileSidebarOpen, 
    toggleSidebar, 
    toggleMobileSidebar, 
    setMobileSidebarOpen 
  } = useSidebarState()

  return (
    <AuthGuard>
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
            currentPage="home"
          />

          {/* 主要内容区域 */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* 顶部导航 */}
            <TopNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onMenuToggle={toggleMobileSidebar}
              onSidebarToggle={toggleSidebar}
              currentPage="home"
            />

            {/* 主要内容 */}
            <ErrorBoundary>
              <MainContent activeTab={activeTab} />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}

