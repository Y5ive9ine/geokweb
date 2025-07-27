import React from 'react';
import Navigation from '@/components/Navigation';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero区域 */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            企业方案
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            为大型企业量身定制的AI品牌管理解决方案，助力您在人工智能时代保持竞争优势
          </p>
        </div>

        {/* 企业特色功能 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* 左侧内容 */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              专为企业设计的<br />
              <span className="text-[#2663FF]">全方位</span>品牌保护
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              GEOK企业方案提供更深层的AI监控覆盖、更精准的品牌分析，以及专业的客户服务团队支持。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#2663FF] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">无限品牌监控</h3>
                  <p className="text-gray-600">监控您的主品牌、子品牌和产品线在全球AI平台的表现</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#2663FF] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">24/7专属支持</h3>
                  <p className="text-gray-600">专业客户成功经理和技术团队随时为您提供支持</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#2663FF] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">定制化报告</h3>
                  <p className="text-gray-600">根据您的业务需求定制分析维度和报告格式</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧图片区域 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-[#2663FF] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10V14H16V20H8V14H9.2V10C9.2 8.6 10.6 7 12 7M12 8.2C11.2 8.2 10.4 8.7 10.4 10V14H13.6V10C13.6 8.7 12.8 8.2 12 8.2Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">企业级安全保障</h3>
              <p className="text-gray-600">银行级数据加密，确保您的品牌信息安全</p>
            </div>
          </div>
        </div>

        {/* 企业功能对比 */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">企业版 vs 标准版</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 功能对比项 */}
              <div className="space-y-6">
                <h3 className="font-bold text-gray-900 text-lg">功能特性</h3>
                <div className="space-y-4 text-gray-600">
                  <p>品牌监控数量</p>
                  <p>AI平台覆盖</p>
                  <p>数据导出</p>
                  <p>API访问</p>
                  <p>客户支持</p>
                  <p>自定义报告</p>
                  <p>团队协作</p>
                </div>
              </div>

              {/* 标准版 */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <h3 className="font-bold text-gray-900 text-lg">标准版</h3>
                  <p className="text-[#2663FF] font-bold">¥999/月</p>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>最多5个品牌</p>
                  <p>主流平台</p>
                  <p>基础导出</p>
                  <p>受限访问</p>
                  <p>邮件支持</p>
                  <p>模板报告</p>
                  <p>不支持</p>
                </div>
              </div>

              {/* 企业版 */}
              <div className="space-y-6">
                <div className="bg-[#2663FF] rounded-lg p-4 text-center text-white">
                  <h3 className="font-bold text-lg">企业版</h3>
                  <p className="font-bold">定制报价</p>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p className="text-[#2663FF] font-medium">无限制</p>
                  <p className="text-[#2663FF] font-medium">全球覆盖</p>
                  <p className="text-[#2663FF] font-medium">高级导出</p>
                  <p className="text-[#2663FF] font-medium">完整API</p>
                  <p className="text-[#2663FF] font-medium">24/7专属</p>
                  <p className="text-[#2663FF] font-medium">完全定制</p>
                  <p className="text-[#2663FF] font-medium">多用户</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 客户案例 */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">成功案例</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 案例1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-[#2663FF]">A</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">某知名科技公司</h3>
                  <p className="text-gray-600">全球500强企业</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-6">
                "使用GEOK企业方案后，我们的品牌在AI搜索中的曝光率提升了300%，显著改善了品牌认知度。"
              </blockquote>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#2663FF]">300%</div>
                  <div className="text-sm text-gray-600">曝光率提升</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#11CA9C]">6个月</div>
                  <div className="text-sm text-gray-600">见效时间</div>
                </div>
              </div>
            </div>

            {/* 案例2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-[#11CA9C]">B</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">领先消费品牌</h3>
                  <p className="text-gray-600">行业领导者</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-6">
                "GEOK帮助我们及时发现了竞争对手的策略变化，让我们能够快速调整品牌定位策略。"
              </blockquote>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#FFB200]">85%</div>
                  <div className="text-sm text-gray-600">推荐准确率</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#FA8919]">24h</div>
                  <div className="text-sm text-gray-600">响应时间</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA区域 */}
        <div className="text-center bg-gradient-to-r from-[#2663FF] to-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">开始您的企业级AI品牌管理</h2>
          <p className="text-xl mb-8 opacity-90">
            联系我们的专家团队，获取专属的企业解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#2663FF] font-medium text-lg rounded-lg hover:bg-gray-50 transition-colors">
              预约演示
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