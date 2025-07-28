'use client'

import Image from 'next/image'

export function BrandRecommendationCard() {
  const brands = [
    { name: '其它品牌1', color: '#ffb200', percentage: '25%' },
    { name: '其它品牌2', color: '#11ca9c', percentage: '20%' },
    { name: '其它品牌3', color: '#ff4d4d', percentage: '15%' },
    { name: '品牌占比', color: '#333333', percentage: '40%' },
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-6 h-[326px]">
      {/* 标题和按钮 */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-800">品牌推荐率</h3>
        <button className="text-xs text-blue-600 border border-blue-600 rounded-sm px-3 py-1 hover:bg-blue-50 transition-colors">
          查看详情
        </button>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-2 mb-6">
        <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          当月搜索量
        </button>
        <button className="bg-blue-600/20 text-gray-800 text-xs px-4 py-2 rounded hover:bg-blue-600/30 transition-colors">
          当月流失量
        </button>
      </div>

      {/* 图表区域 */}
      <div className="relative flex items-center justify-center h-[200px]">
        {/* 主要饼图 */}
        <div className="relative w-[229px] h-[229px]">
          <Image
            src="/images/Group49.svg"
            alt="Brand recommendation chart"
            fill
            className="object-contain"
          />
        </div>

        {/* 品牌标签 */}
        <div className="absolute inset-0">
          {/* 品牌标签位置需要根据实际图表调整 */}
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="absolute text-xs font-light"
              style={{
                color: brand.color,
                // 根据原始设计的位置进行调整
                ...(index === 0 && { left: '25%', top: '20%' }),
                ...(index === 1 && { right: '20%', top: '35%' }),
                ...(index === 2 && { right: '15%', bottom: '25%' }),
                ...(index === 3 && { left: '5%', bottom: '40%' }),
              }}
            >
              {brand.name}
            </div>
          ))}
        </div>

        {/* 辅助图形 */}
        <div className="absolute w-[67.75px] h-[17px] bottom-[30%] left-[5%]">
          <Image
            src="/images/Vector7.svg"
            alt="Brand indicator 1"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute w-[64.75px] h-[16.5px] top-[25%] right-[25%]">
          <Image
            src="/images/Vector8.svg"
            alt="Brand indicator 2"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute w-[64.25px] h-[9px] bottom-[20%] right-[10%]">
          <Image
            src="/images/Vector9.svg"
            alt="Brand indicator 3"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute w-[72px] h-[24.5px] bottom-[10%] right-[20%]">
          <Image
            src="/images/Vector10.svg"
            alt="Brand indicator 4"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
} 