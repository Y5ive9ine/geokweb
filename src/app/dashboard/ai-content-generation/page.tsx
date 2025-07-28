'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { TopNavigation } from '@/components/dashboard/TopNavigation'
import { AIContentGenerationContent } from '@/components/dashboard/AIContentGenerationContent'
import ErrorBoundary from '@/components/dashboard/ErrorBoundary'
import ToastProvider from '@/components/ToastProvider'
import { useSidebarState } from '@/hooks/useSidebarState'

export default function AIContentGenerationPage() {
  const [activeTab, setActiveTab] = useState('ai-content')
  const { 
    sidebarCollapsed, 
    mobileSidebarOpen, 
    toggleSidebar, 
    toggleMobileSidebar, 
    setMobileSidebarOpen 
  } = useSidebarState()

  return (
    <ToastProvider>
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
            currentPage="ai-content"
          />

          {/* 主要内容区域 */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* 顶部导航 */}
            <TopNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onMenuToggle={toggleMobileSidebar}
              onSidebarToggle={toggleSidebar}
              currentPage="ai-content"
            />

            {/* 主要内容 */}
            <ErrorBoundary>
              <AIContentGenerationContent />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </ToastProvider>
  )
}
