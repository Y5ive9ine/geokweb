import React from 'react';
import Navigation from '@/components/Navigation';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero区域 */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            资源中心
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            获取最新的AI品牌推广洞察、实用指南和成功案例
          </p>
        </div>

        {/* 资源分类 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* 帮助文档 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#2663FF] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">帮助文档</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              详细的产品使用指南、最佳实践和常见问题解答
            </p>
            <button className="text-[#2663FF] font-medium hover:underline">
              查看文档 →
            </button>
          </div>

          {/* 案例研究 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#11CA9C] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">案例研究</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              真实客户成功故事和AI品牌推广的实战案例分析
            </p>
            <button className="text-[#11CA9C] font-medium hover:underline">
              查看案例 →
            </button>
          </div>

          {/* 最新资讯 */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#FFB200] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">最新资讯</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              AI搜索趋势、行业动态和产品更新资讯
            </p>
            <button className="text-[#FFB200] font-medium hover:underline">
              阅读资讯 →
            </button>
          </div>
        </div>

        {/* 热门文章 */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">热门文章</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 文章1 */}
            <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200"></div>
              <div className="p-6">
                <span className="text-sm text-[#2663FF] font-medium">指南</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  如何优化品牌在AI搜索中的表现
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  了解AI搜索引擎的工作原理，掌握提升品牌曝光率的关键策略...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">2024年1月15日</span>
                  <button className="text-[#2663FF] font-medium hover:underline">
                    阅读更多
                  </button>
                </div>
              </div>
            </article>

            {/* 文章2 */}
            <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200"></div>
              <div className="p-6">
                <span className="text-sm text-[#11CA9C] font-medium">案例</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  某知名品牌AI曝光率提升300%案例
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  通过GEOK平台，该品牌在6个月内实现了显著的品牌认知度提升...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">2024年1月10日</span>
                  <button className="text-[#11CA9C] font-medium hover:underline">
                    阅读更多
                  </button>
                </div>
              </div>
            </article>

            {/* 文章3 */}
            <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200"></div>
              <div className="p-6">
                <span className="text-sm text-[#FFB200] font-medium">趋势</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  2024年AI搜索市场预测报告
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  分析AI搜索技术发展趋势，预测对品牌营销的影响和机遇...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">2024年1月5日</span>
                  <button className="text-[#FFB200] font-medium hover:underline">
                    阅读更多
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">常见问题</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                GEOK如何监控AI搜索引擎？
              </h3>
              <p className="text-gray-600 leading-relaxed">
                GEOK通过API集成和智能爬虫技术，实时监控ChatGPT、Claude、Bard等主流AI平台，追踪品牌在AI对话中的提及情况。
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                多久能看到优化效果？
              </h3>
              <p className="text-gray-600 leading-relaxed">
                通常在开始使用GEOK优化建议后的2-4周内，您就能看到品牌在AI搜索中的提及率和认知度有所改善。
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                GEOK支持哪些语言和地区？
              </h3>
              <p className="text-gray-600 leading-relaxed">
                目前GEOK支持中文、英文等主要语言，覆盖中国、美国、欧洲等全球主要市场的AI搜索监控。
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                如何开始使用GEOK？
              </h3>
              <p className="text-gray-600 leading-relaxed">
                您可以注册免费试用账户，上传品牌信息后，GEOK会立即开始监控并提供初步分析报告。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 