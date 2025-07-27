import React from 'react';
import Navigation from '@/components/Navigation';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero区域 */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            选择适合您的方案
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            无论是初创公司还是大型企业，我们都有适合您的AI品牌管理解决方案
          </p>
        </div>

        {/* 定价卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* 基础版 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">基础版</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                免费
              </div>
              <p className="text-gray-600">适合个人用户和小型团队体验</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">1个品牌监控</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">基础AI分析</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">月度报告</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">社区支持</span>
              </li>
            </ul>
            
            <button className="w-full py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
              免费开始
            </button>
          </div>

          {/* 功能增长版 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">功能增长版</h3>
              <div className="text-4xl font-bold text-[#2663FF] mb-4">
                ¥999 <span className="text-lg font-normal text-gray-600">/月</span>
              </div>
              <p className="text-gray-600">适合中小企业快速成长</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">最多5个品牌监控</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">高级AI分析</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">竞争对手分析</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">周报和月报</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">邮件支持</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">API访问</span>
              </li>
            </ul>
            
            <button className="w-full py-3 bg-[#2663FF] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              开始试用
            </button>
          </div>

          {/* 企业版 */}
          <div className="bg-gradient-to-br from-[#2663FF] to-blue-700 text-white rounded-2xl p-8 relative overflow-hidden transform hover:scale-105 transition-transform">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-[#FFB200] text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
                  推荐
                </div>
                <h3 className="text-2xl font-bold mb-2">企业版</h3>
                <div className="text-4xl font-bold mb-4">
                  联系我们 <span className="text-lg font-normal opacity-80">定制报价</span>
                </div>
                <p className="opacity-90">适合大型企业和复杂需求</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FFB200] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>无限品牌监控</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FFB200] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>深度AI洞察</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FFB200] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>自定义报告</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FFB200] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>专属客户经理</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FFB200] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>24/7技术支持</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FFB200] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>私有化部署选项</span>
                </li>
              </ul>
              
              <button className="w-full py-3 bg-white text-[#2663FF] font-medium rounded-lg hover:bg-gray-50 transition-colors">
                联系销售
              </button>
            </div>
            
            {/* 装饰性背景 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          </div>
        </div>

        {/* 功能对比表 */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">功能对比</h2>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">功能特性</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">基础版</th>
                  <th className="text-center py-4 px-6 font-bold text-[#2663FF]">功能增长版</th>
                  <th className="text-center py-4 px-6 font-bold text-[#2663FF]">企业版</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">品牌监控数量</td>
                  <td className="py-4 px-6 text-center text-gray-600">1个</td>
                  <td className="py-4 px-6 text-center text-gray-600">5个</td>
                  <td className="py-4 px-6 text-center text-[#2663FF] font-medium">无限制</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">AI平台覆盖</td>
                  <td className="py-4 px-6 text-center text-gray-600">基础平台</td>
                  <td className="py-4 px-6 text-center text-gray-600">主流平台</td>
                  <td className="py-4 px-6 text-center text-[#2663FF] font-medium">全球覆盖</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">数据更新频率</td>
                  <td className="py-4 px-6 text-center text-gray-600">每周</td>
                  <td className="py-4 px-6 text-center text-gray-600">每日</td>
                  <td className="py-4 px-6 text-center text-[#2663FF] font-medium">实时</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">竞争对手分析</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center text-green-500">✅</td>
                  <td className="py-4 px-6 text-center text-green-500">✅</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">API访问</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center text-gray-600">基础API</td>
                  <td className="py-4 px-6 text-center text-[#2663FF] font-medium">完整API</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">客户支持</td>
                  <td className="py-4 px-6 text-center text-gray-600">社区</td>
                  <td className="py-4 px-6 text-center text-gray-600">邮件</td>
                  <td className="py-4 px-6 text-center text-[#2663FF] font-medium">24/7专属</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">自定义报告</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center text-green-500">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">定价常见问题</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                可以随时升级或降级方案吗？
              </h3>
              <p className="text-gray-600 leading-relaxed">
                是的，您可以随时升级或降级您的方案。升级会立即生效，降级将在当前账单周期结束后生效。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                有免费试用期吗？
              </h3>
              <p className="text-gray-600 leading-relaxed">
                功能增长版和企业版都提供14天免费试用，无需信用卡。试用期间您可以体验所有功能。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                支持哪些支付方式？
              </h3>
              <p className="text-gray-600 leading-relaxed">
                我们支持信用卡、借记卡、支付宝、微信支付等多种支付方式。企业用户还可以选择银行转账和发票付款。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                企业版的定制服务包括什么？
              </h3>
              <p className="text-gray-600 leading-relaxed">
                企业版可以根据您的具体需求定制功能，包括私有化部署、自定义集成、专属训练模型等。
              </p>
            </div>
          </div>
        </div>

        {/* CTA区域 */}
        <div className="text-center bg-gradient-to-r from-[#2663FF] to-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">准备开始了吗？</h2>
          <p className="text-xl mb-8 opacity-90">
            选择适合您的方案，立即开始AI品牌管理之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#2663FF] font-medium text-lg rounded-lg hover:bg-gray-50 transition-colors">
              开始免费试用
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium text-lg rounded-lg hover:bg-white hover:text-[#2663FF] transition-colors">
              联系销售咨询
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 