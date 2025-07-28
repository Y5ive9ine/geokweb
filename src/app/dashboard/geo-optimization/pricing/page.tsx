'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { TopNavigation } from '@/components/dashboard/TopNavigation'
import ErrorBoundary from '@/components/dashboard/ErrorBoundary'
import { useSidebarState } from '@/hooks/useSidebarState'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('pricing')
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
                
                {/* GEO套餐标题 */}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-8">GEO套餐</h1>
                </div>

                {/* 价格卡片区域 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* 功能增长卡片 */}
                  <div className="bg-white rounded-xl border border-gray-300 shadow-lg p-6 relative">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900">功能增长</h3>
                      <div className="bg-blue-50 border border-blue-600 rounded-lg px-3 py-1">
                        <span className="text-blue-600 text-sm font-medium">最受欢迎</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">¥499</span>
                        <span className="text-gray-600 ml-2">/月 (年费用户)</span>
                      </div>
                      <p className="text-blue-600 font-medium mt-2">试用一个月</p>
                    </div>

                    {/* 功能列表 */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">
                          <span className="text-blue-600 font-semibold">1,000</span> 信用额度
                        </span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">每1000个信用额度充值100元</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">竞争对手分析</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">在所有平台上的AI可见性</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">情报数据汇总</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">内容投放的自动化外联</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">AI人工智能盲点检测</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">网页分析</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">多语言支持</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">自助服务</span>
                      </div>
                    </div>

                    {/* 激活按钮 */}
                    <button className="w-full border border-blue-600 text-blue-600 rounded-lg py-3 hover:bg-blue-50 transition-colors">
                      激活
                    </button>
                  </div>

                  {/* 功能增长高级版卡片 */}
                  <div className="bg-white rounded-xl border border-gray-300 shadow-lg p-6 relative">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900">功能增长</h3>
                      <div className="bg-blue-50 border border-blue-600 rounded-lg px-3 py-1">
                        <span className="text-blue-600 text-sm font-medium">最受欢迎</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">¥4999</span>
                        <span className="text-gray-600 ml-2">/月 (年费用户)</span>
                      </div>
                      <p className="text-blue-600 font-medium mt-2">试用一个月</p>
                    </div>

                    {/* 功能列表 */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">
                          <span className="text-blue-600 font-semibold">10,000</span> 信用额度
                        </span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">每1000个信用额度充值100元</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">竞争对手分析</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">在所有平台上的AI可见性</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">情报数据汇总</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">内容投放的自动化外联</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">AI人工智能盲点检测</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">网页分析</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">多语言支持</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">自助服务</span>
                      </div>
                    </div>

                    {/* 立即升级按钮 */}
                    <button className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition-colors">
                      立即升级
                    </button>
                  </div>
                </div>

                {/* 比较套餐标题 */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">比较套餐</h2>
                </div>

                {/* 比较套餐表格 */}
                <div className="bg-white rounded-xl border border-gray-300 overflow-hidden">
                  {/* 表格头部 */}
                  <div className="bg-blue-600 text-white">
                    <div className="grid grid-cols-4 px-6 py-4 font-semibold">
                      <div>项目</div>
                      <div className="text-center">专业</div>
                      <div className="text-center">专家</div>
                      <div className="text-center">企业</div>
                    </div>
                  </div>

                  {/* 表格内容 */}
                  <div className="divide-y divide-gray-200">
                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600">
                      <div>SEO Ideas 单位(每月)</div>
                      <div className="text-center">500</div>
                      <div className="text-center">800</div>
                      <div className="text-center">2000</div>
                    </div>
                    
                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600">
                      <div>每页自然流量洞察活动</div>
                      <div className="text-center">500</div>
                      <div className="text-center">800</div>
                      <div className="text-center">2000</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600 bg-gray-50">
                      <div>分享并包含查看或编辑权限</div>
                      <div className="text-center text-red-500">✗</div>
                      <div className="text-center text-green-500">✓</div>
                      <div className="text-center text-green-500">✓</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600">
                      <div>域名和关键词分析</div>
                      <div className="text-center">500</div>
                      <div className="text-center">800</div>
                      <div className="text-center">2000</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600 bg-gray-50">
                      <div>每份报告的结果</div>
                      <div className="text-center text-red-500">✗</div>
                      <div className="text-center text-green-500">✓</div>
                      <div className="text-center text-green-500">✓</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600">
                      <div>历史数据</div>
                      <div className="text-center">500</div>
                      <div className="text-center">800</div>
                      <div className="text-center">2000</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600">
                      <div>每日报告</div>
                      <div className="text-center">500</div>
                      <div className="text-center">800</div>
                      <div className="text-center">2000</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600 bg-gray-50">
                      <div>关键词指标每月更新</div>
                      <div className="text-center text-red-500">✗</div>
                      <div className="text-center text-green-500">✓</div>
                      <div className="text-center text-green-500">✓</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600">
                      <div>主题</div>
                      <div className="text-center">500</div>
                      <div className="text-center">800</div>
                      <div className="text-center">2000</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600 bg-gray-50">
                      <div>报告</div>
                      <div className="text-center text-red-500">✗</div>
                      <div className="text-center text-green-500">✓</div>
                      <div className="text-center text-green-500">✓</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600">
                      <div>基础报告</div>
                      <div className="text-center">500</div>
                      <div className="text-center">800</div>
                      <div className="text-center">2000</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600 bg-gray-50">
                      <div>报告分享</div>
                      <div className="text-center text-red-500">✗</div>
                      <div className="text-center text-green-500">✓</div>
                      <div className="text-center text-green-500">✓</div>
                    </div>

                    <div className="grid grid-cols-4 px-6 py-4 text-gray-600 bg-gray-50">
                      <div>Looker Studio 集成</div>
                      <div className="text-center text-red-500">✗</div>
                      <div className="text-center text-green-500">✓</div>
                      <div className="text-center text-green-500">✓</div>
                    </div>
                  </div>
                </div>

                {/* 竞争对手分析模块 */}
                <div className="space-y-6 md:space-y-8 mt-12">
                  <h2 className="font-bold text-gray-800 text-xl md:text-2xl">竞争对手分析模块</h2>
                </div>

                {/* 引用模块 */}
                <div className="space-y-6 md:space-y-8">
                  <h2 className="font-bold text-gray-800 text-xl md:text-2xl">引用</h2>
                  <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed max-w-3xl">
                    网站上的引用、引文和统计数据越多，被人工智能搜索选中并做出响应的可能性就越大。
                  </p>

                  <div className="space-y-4 md:space-y-6">
                    {[
                      { label: "引用率：", value: "1%", status: "（中等-可以）" },
                      { label: "报价比率：", value: "2%", status: "（中等-可以）" },
                      { label: "统计比率：", value: "3%", status: "（中等-可以）" }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
                        <span className="text-gray-600 text-sm md:text-base font-light w-full sm:w-28 mr-0 sm:mr-4">{item.label}</span>
                        <span className="text-gray-600 text-sm md:text-base font-bold mr-0 sm:mr-6">{item.value}</span>
                        <div className="bg-orange-100 rounded-lg px-3 py-1 w-fit">
                          <span className="text-orange-600 text-xs">{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 统计模块 */}
                <div className="space-y-6 md:space-y-8">
                  <h2 className="font-bold text-gray-800 text-xl md:text-2xl">统计</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* 品牌推荐率卡片 */}
                    <div className="bg-white rounded-xl md:rounded-[20px] h-80 border border-gray-300 relative overflow-hidden p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm md:text-base font-bold text-gray-800">品牌推荐率</h3>
                        <span className="text-xs font-bold text-gray-500">总数据</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex space-x-2">
                          <button className="bg-blue-600 h-6 px-3 rounded text-white text-xs">
                            当月搜索量
                          </button>
                          <button className="bg-blue-100 h-6 px-3 rounded text-blue-600 text-xs">
                            当月流失量
                          </button>
                        </div>
                        <button className="text-xs text-blue-600 border border-blue-600 rounded px-3 py-1 hover:bg-blue-50 transition-colors">
                          查看详情
                        </button>
                        
                        {/* 简化的图表 */}
                        <div className="relative w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">85.2%</div>
                            <div className="text-sm text-gray-600">推荐率</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 品牌被提及率卡片 */}
                    <div className="bg-white rounded-xl md:rounded-[20px] h-80 border border-gray-300 relative overflow-hidden p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm md:text-base font-bold text-gray-800">品牌被提及率</h3>
                        <span className="text-xs font-bold text-gray-500">总数据</span>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-gray-800 mb-4">71.5%</div>
                      <div className="space-y-2">
                        <div className="text-base font-bold text-gray-300">70%</div>
                        <div className="text-base font-bold text-gray-300">50%</div>
                      </div>
                      
                      {/* 简化的图表 */}
                      <div className="mt-4 h-32 bg-gradient-to-t from-blue-600 via-blue-400 to-blue-200 rounded-lg relative">
                        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-blue-600 rounded-lg"></div>
                      </div>
                    </div>

                    {/* 引用链接百分比卡片 */}
                    <div className="bg-white rounded-xl md:rounded-[20px] h-80 border border-gray-300 relative overflow-hidden p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm md:text-base font-bold text-gray-800">引用链接百分比</h3>
                      </div>
                      <p className="text-xs md:text-sm font-light text-gray-600 mb-4">全网链接占引用链接的百分比</p>
                      
                      {/* 简化的圆环图 */}
                      <div className="flex items-center justify-center mb-4">
                        <div className="relative w-24 h-24">
                          <div className="w-24 h-24 rounded-full border-8 border-gray-200"></div>
                          <div className="absolute inset-0 w-24 h-24 rounded-full border-8 border-transparent border-t-blue-600 border-r-orange-400 border-b-emerald-500"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold">100%</span>
                          </div>
                        </div>
                      </div>

                      {/* 图例 */}
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span>直接引用</span>
                          </div>
                          <span className="font-bold">30%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span>间接引用</span>
                          </div>
                          <span className="font-bold">40%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span>相关引用</span>
                          </div>
                          <span className="font-bold">30%</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  )
} 