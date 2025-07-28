'use client'

import Image from 'next/image'

export function BrandSearchRateCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-8 h-[326px]">
      {/* 标题和数据 */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">品牌搜索率</h3>
          <div className="text-3xl font-bold text-gray-800">159.8%</div>
        </div>
        <div className="text-xs font-bold text-gray-500">总数据</div>
      </div>

      {/* 数据指标 */}
      <div className="space-y-2 mb-6">
        <div className="text-base font-bold text-gray-300">70%</div>
        <div className="text-base font-bold text-gray-300">50%</div>
      </div>

      {/* 图表区域 */}
      <div className="relative h-[183px] w-full">
        {/* 主要图表 */}
        <div className="absolute inset-0">
          <Image
            src="/images/Vector12.svg"
            alt="Brand search rate chart background"
            fill
            className="object-contain"
          />
        </div>
        
        {/* 前景图表线条 */}
        <div className="absolute inset-0 top-[-3px]">
          <Image
            src="/images/Vector1.svg"
            alt="Brand search rate chart line"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* 图表底部可以添加时间轴或其他标注 */}
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <span>过去7天</span>
        <span>增长趋势</span>
      </div>
    </div>
  )
} 