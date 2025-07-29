'use client'

import Image from 'next/image'
import { AIVisibilityReport } from '@/services/ai-visibility'

interface BrandMarketShareCardProps {
  data: AIVisibilityReport | null
  loading: boolean
  error: string | null
}

export function BrandMarketShareCard({ data, loading, error }: BrandMarketShareCardProps) {
  // 从API数据生成市场份额信息
  const getBrandShareData = () => {
    if (!data) {
      return [
        { name: 'Intel', percentage: '0%', color: '#2663ff' },
        { name: 'AMD', percentage: '0%', color: '#ffb200' },
        { name: 'Apple', percentage: '0%', color: '#11ca9c' },
        { name: 'Qualcomm', percentage: '0%', color: '#fa8919' },
        { name: 'ARM Holdings', percentage: '0%', color: '#ff4d4d' },
      ]
    }

    // 模拟基于API数据计算市场份额
    // 实际项目中应该从report中提取具体的竞品分析数据
    const currentBrandScore = Math.random() * 0.5 + 0.2 // 20%-70%
    const competitors = [
      Math.random() * 0.3 + 0.1,
      Math.random() * 0.2 + 0.05,
      Math.random() * 0.15 + 0.03,
      Math.random() * 0.1 + 0.02,
    ]
    
    const total = currentBrandScore + competitors.reduce((sum, val) => sum + val, 0)
    
    return [
      { 
        name: '当前品牌', 
        percentage: `${((currentBrandScore / total) * 100).toFixed(1)}%`, 
        color: '#2663ff' 
      },
      { 
        name: '竞品A', 
        percentage: `${((competitors[0] / total) * 100).toFixed(1)}%`, 
        color: '#ffb200' 
      },
      { 
        name: '竞品B', 
        percentage: `${((competitors[1] / total) * 100).toFixed(1)}%`, 
        color: '#11ca9c' 
      },
      { 
        name: '竞品C', 
        percentage: `${((competitors[2] / total) * 100).toFixed(1)}%`, 
        color: '#fa8919' 
      },
      { 
        name: '其他', 
        percentage: `${((competitors[3] / total) * 100).toFixed(1)}%`, 
        color: '#ff4d4d' 
      },
    ]
  }

  const brands = getBrandShareData()

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-8 h-[280px]">
      {/* 标题 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">品牌在AI市场的首推率</h3>
        <p className="text-xs font-light text-gray-600">品牌的在各竞争对手产品中分布情况</p>
      </div>

      {/* 加载状态 */}
      {loading && (
        <div className="flex items-center justify-center h-[180px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* 错误状态 */}
      {error && !loading && (
        <div className="flex items-center justify-center h-[180px]">
          <div className="text-center">
            <p className="text-red-500 text-sm mb-2">加载失败</p>
            <p className="text-gray-500 text-xs">{error}</p>
          </div>
        </div>
      )}

      {/* 正常显示 */}
      {!loading && !error && (
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

            {/* 中心显示当前品牌份额 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                <div>
                  <div className="text-lg font-bold text-gray-800">
                    {brands[0]?.percentage || '0%'}
                  </div>
                  <div className="text-xs text-gray-600">市场份额</div>
                </div>
              </div>
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
      )}

      {/* API数据指标 */}
      {data && !loading && !error && (
        <div className="mt-4 text-xs text-gray-500">
          <span>报告日期: {new Date(data.report_date).toLocaleDateString('zh-CN')}</span>
          {data.summary && (
            <span className="ml-4">总分析: {data.summary.total_analyzed || 0} 项</span>
          )}
        </div>
      )}
    </div>
  )
} 