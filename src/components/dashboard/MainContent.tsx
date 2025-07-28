'use client'

import Image from 'next/image'
import { SearchSection } from './SearchSection'
import { AIFrequencyChart } from './AIFrequencyChart'
import { BrandSearchRateCard } from './BrandSearchRateCard'
import { BrandRecommendationCard } from './BrandRecommendationCard'
import { BrandMarketShareCard } from './BrandMarketShareCard'

export function MainContent() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
      {/* 搜索区域 */}
      <SearchSection />

      {/* 主要内容网格 - 响应式优化 */}
      <div className="mt-6 space-y-6">
        {/* 移动端：垂直布局，桌面端：网格布局 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* AI频率图表 */}
          <div className="xl:col-span-1 order-1">
            <AIFrequencyChart />
          </div>

          {/* 右侧卡片区域 */}
          <div className="xl:col-span-2 order-2 space-y-6">
            {/* 上方两个卡片 - 响应式网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BrandRecommendationCard />
              <BrandSearchRateCard />
            </div>

            {/* 下方市场占有率卡片 */}
            <BrandMarketShareCard />
          </div>
        </div>
      </div>

      {/* 底部提示文本 */}
      <div className="mt-8 md:mt-12 text-center px-4">
        <p className="text-base md:text-lg text-gray-600 font-light">
          看看您的品牌关键词在 AI答案中出现的频率
        </p>
      </div>
    </div>
  )
} 