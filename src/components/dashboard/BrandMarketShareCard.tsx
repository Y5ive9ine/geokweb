'use client'

import Image from 'next/image'

export function BrandMarketShareCard() {
  const brands = [
    { name: 'Intel', percentage: '72.5%', color: '#2663ff' },
    { name: 'AMD', percentage: '15.7%', color: '#ffb200' },
    { name: 'Apple', percentage: '9.3%', color: '#11ca9c' },
    { name: 'Qualcomm', percentage: '1.3%', color: '#fa8919' },
    { name: 'ARM Holdings', percentage: '1.2%', color: '#ff4d4d' },
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-8 h-[280px]">
      {/* 标题 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">品牌在AI市场的首推率</h3>
        <p className="text-xs font-light text-gray-600">品牌的在各竞争对手产品中分布情况</p>
      </div>

      <div className="flex items-center h-[180px]">
        {/* 左侧饼图 */}
        <div className="relative w-[316px] h-[158px] mr-8">
          {/* 饼图层叠 */}
          <div className="absolute inset-0">
            <Image
              src="/images/Ellipse14.png"
              alt="Main pie chart"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[12px] right-0 w-[108px] h-[134px]">
            <Image
              src="/images/Ellipse15.png"
              alt="Secondary pie slice"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[45px] right-0 w-[72px] h-[67px]">
            <Image
              src="/images/Ellipse16.png"
              alt="Tertiary pie slice"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[67px] right-0 w-[64px] h-[25px]">
            <Image
              src="/images/Ellipse17.png"
              alt="Fourth pie slice"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[73px] right-0 w-[63px] h-[12px]">
            <Image
              src="/images/Ellipse18.png"
              alt="Fifth pie slice"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 右侧品牌列表 */}
        <div className="flex-1 space-y-4">
          {brands.map((brand, index) => (
            <div key={brand.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className="w-3 h-3 rounded-sm border border-gray-300"
                  style={{ backgroundColor: brand.color }}
                />
                <span className="text-xs font-light text-black">{brand.name}</span>
              </div>
              <span className="text-xs font-normal text-black">{brand.percentage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 