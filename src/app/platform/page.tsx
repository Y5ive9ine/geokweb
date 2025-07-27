import React from 'react';
import Navigation from '@/components/Navigation';

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero区域 */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            <span className="text-[#2663FF]">GEO</span><span className="text-[#FFB200]">K</span> 平台
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            全面的AI品牌监控和优化平台，帮助您在人工智能时代赢得更多品牌曝光
          </p>
        </div>

        {/* 平台特性 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* 实时监控 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[#2663FF] rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">实时监控</h3>
            <p className="text-gray-600 leading-relaxed">
              24/7监控您的品牌在AI搜索引擎和对话系统中的提及情况，及时发现品牌露出机会
            </p>
          </div>

          {/* 智能分析 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[#11CA9C] rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">智能分析</h3>
            <p className="text-gray-600 leading-relaxed">
              深度分析AI对您品牌的认知度、情感倾向和推荐频率，提供可操作的优化建议
            </p>
          </div>

          {/* 竞争优势 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[#FFB200] rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4l4 4-4 4-1.41-1.41L16.17 9H4V7h12.17l-1.58-1.59L16 4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">竞争优势</h3>
            <p className="text-gray-600 leading-relaxed">
              对比分析竞争对手在AI搜索中的表现，发现市场机会，制定差异化品牌策略
            </p>
          </div>
        </div>

        {/* 核心功能 */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">核心功能</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 品牌监控 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2663FF] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">品牌监控</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#2663FF] rounded-full mr-3"></span>
                  AI搜索引擎提及追踪
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#2663FF] rounded-full mr-3"></span>
                  对话系统品牌露出监控
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#2663FF] rounded-full mr-3"></span>
                  实时警报和通知
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#2663FF] rounded-full mr-3"></span>
                  历史数据趋势分析
                </li>
              </ul>
            </div>

            {/* AI分析 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#11CA9C] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI分析</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#11CA9C] rounded-full mr-3"></span>
                  品牌认知度评估
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#11CA9C] rounded-full mr-3"></span>
                  情感倾向分析
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#11CA9C] rounded-full mr-3"></span>
                  推荐频率统计
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#11CA9C] rounded-full mr-3"></span>
                  内容源头追踪
                </li>
              </ul>
            </div>

            {/* 竞品对比 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#FFB200] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-8H19V2h-2v1H7V2H5v1H1.5C.67 3 0 3.67 0 4.5v15C0 20.33.67 21 1.5 21h17c.83 0 1.5-.67 1.5-1.5v-15C20 3.67 19.33 3 18.5 3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">竞品对比</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFB200] rounded-full mr-3"></span>
                  竞争对手表现监控
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFB200] rounded-full mr-3"></span>
                  市场份额分析
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFB200] rounded-full mr-3"></span>
                  优势劣势对比
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFB200] rounded-full mr-3"></span>
                  策略建议生成
                </li>
              </ul>
            </div>

            {/* 优化建议 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#FA8919] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">优化建议</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FA8919] rounded-full mr-3"></span>
                  内容优化方案
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FA8919] rounded-full mr-3"></span>
                  SEO策略调整
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FA8919] rounded-full mr-3"></span>
                  品牌定位建议
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FA8919] rounded-full mr-3"></span>
                  执行效果评估
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA区域 */}
        <div className="text-center bg-gradient-to-r from-[#2663FF] to-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">开始使用GEOK平台</h2>
          <p className="text-xl mb-8 opacity-90">
            立即体验AI时代的品牌管理新方式
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#2663FF] font-medium text-lg rounded-lg hover:bg-gray-50 transition-colors">
              免费试用
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium text-lg rounded-lg hover:bg-white hover:text-[#2663FF] transition-colors">
              联系销售
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 