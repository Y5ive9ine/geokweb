"use client";

import { useState } from "react";
import { Sidebar } from '@/components/dashboard/Sidebar'
import { TopNavigation } from '@/components/dashboard/TopNavigation'
import ErrorBoundary from '@/components/dashboard/ErrorBoundary'
import { useSidebarState } from '@/hooks/useSidebarState'
import { GeoDatabaseTable } from "@/components/geo";

export default function DatabasePage() {
  const [activeTab, setActiveTab] = useState('database')
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
          currentPage="geo-optimization"
        />

        {/* 主要内容区域 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* 顶部导航 */}
          <TopNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onMenuToggle={toggleMobileSidebar}
            onSidebarToggle={toggleSidebar}
            currentPage="geo-optimization"
          />

          {/* 主要内容 */}
          <ErrorBoundary>
            <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
              <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
                {/* 数据库标题 */}
                <div className="bg-white rounded-xl border border-gray-300 p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">数据库</h1>
                  <p className="text-gray-600">构建客户搜索内容数据库，实时记录并分析用户查询关键词</p>
                </div>

                {/* 筛选区域 */}
                <div className="bg-white rounded-xl border border-gray-300 p-6">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2">
                      <option>最近7日</option>
                      <option>最近30日</option>
                      <option>最近90日</option>
                    </select>
                    
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2">
                      <option>排序方式：主题</option>
                      <option>排序方式：时间</option>
                      <option>排序方式：相关性</option>
                    </select>
                    
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2">
                      <option>区域选择</option>
                      <option>中国</option>
                      <option>美国</option>
                      <option>欧洲</option>
                    </select>
                    
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2">
                      <option>话题筛选</option>
                      <option>技术</option>
                      <option>产品</option>
                      <option>市场</option>
                    </select>
                    
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2">
                      <option>AI平台选择</option>
                      <option>ChatGPT</option>
                      <option>Claude</option>
                      <option>Gemini</option>
                    </select>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-colors">
                      查询
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      下载/导出
                    </button>
                  </div>
                </div>

                {/* 数据表格区域 */}
                <div className="bg-white rounded-xl border border-gray-300 p-6">
                  <GeoDatabaseTable
                    brandId="4fc86ecb-8e0e-476b-8826-bf4dc95fce0d"
                    onRowClick={(record) => {
                      console.log("点击行:", record);
                    }}
                  />
                </div>
              </div>
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
