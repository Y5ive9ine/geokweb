'use client'

import Image from 'next/image'
import { AIVisibilityStats } from '@/services/ai-visibility'

interface BrandRecommendationCardProps {
  data: AIVisibilityStats | null
  loading: boolean
  error: string | null
}

export function BrandRecommendationCard({ data, loading, error }: BrandRecommendationCardProps) {
  // 从API数据生成品牌推荐率信息
  const getBrandData = () => {
    if (!data) {
      return [
        { name: '其它品牌1', color: '#ffb200', percentage: '0%', value: 0 },
        { name: '其它品牌2', color: '#11ca9c', percentage: '0%', value: 0 },
        { name: '其它品牌3', color: '#ff4d4d', percentage: '0%', value: 0 },
        { name: '当前品牌', color: '#333333', percentage: '0%', value: 0 },
      ]
    }

    // 模拟计算品牌推荐率，实际项目中应该从API获取具体数据
    const totalVisibility = data.total_visibility_score || 0
    const averagePosition = data.average_position || 0
    const mentionCount = data.mention_count || 0
    
    // 基于可见性数据计算推荐率分布
    const currentBrandRate = Math.min(totalVisibility * 0.6, 0.8) // 当前品牌最高80%
    const otherBrands = [
      Math.random() * 0.3,
      Math.random() * 0.25,
      Math.random() * 0.2
    ]
    
    const total = currentBrandRate + otherBrands.reduce((sum, val) => sum + val, 0)
    
    return [
      { 
        name: '其它品牌1', 
        color: '#ffb200', 
        percentage: `${((otherBrands[0] / total) * 100).toFixed(1)}%`,
        value: otherBrands[0] / total
      },
      { 
        name: '其它品牌2', 
        color: '#11ca9c', 
        percentage: `${((otherBrands[1] / total) * 100).toFixed(1)}%`,
        value: otherBrands[1] / total
      },
      { 
        name: '其它品牌3', 
        color: '#ff4d4d', 
        percentage: `${((otherBrands[2] / total) * 100).toFixed(1)}%`,
        value: otherBrands[2] / total
      },
      { 
        name: '当前品牌', 
        color: '#333333', 
        percentage: `${((currentBrandRate / total) * 100).toFixed(1)}%`,
        value: currentBrandRate / total
      },
    ]
  }

  const brands = getBrandData()
  const currentBrandData = brands.find(b => b.name === '当前品牌')

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

      {/* 加载状态 */}
      {loading && (
        <div className="flex items-center justify-center h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* 错误状态 */}
      {error && !loading && (
        <div className="flex items-center justify-center h-[200px]">
          <div className="text-center">
            <p className="text-red-500 text-xs mb-1">加载失败</p>
            <p className="text-gray-500 text-xs">{error}</p>
          </div>
        </div>
      )}

      {/* 图表区域 */}
      {!loading && !error && (
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

          {/* 数据显示 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {currentBrandData?.percentage || '0%'}
              </div>
              <div className="text-xs text-gray-600">推荐率</div>
            </div>
          </div>

          {/* 品牌标签 */}
          <div className="absolute inset-0">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className="absolute text-xs font-light flex items-center"
                style={{
                  color: brand.color,
                  // 根据原始设计的位置进行调整
                  ...(index === 0 && { left: '25%', top: '20%' }),
                  ...(index === 1 && { right: '20%', top: '35%' }),
                  ...(index === 2 && { right: '15%', bottom: '25%' }),
                  ...(index === 3 && { left: '5%', bottom: '40%' }),
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mr-1"
                  style={{ backgroundColor: brand.color }}
                />
                <span>{brand.name}</span>
                <span className="ml-1 font-medium">{brand.percentage}</span>
              </div>
            ))}
          </div>

          {/* API数据指标 */}
          {data && (
            <div className="absolute bottom-2 left-2 text-xs text-gray-500">
              <div>提及次数: {data.mention_count || 0}</div>
              <div>平均位置: {data.average_position?.toFixed(1) || 'N/A'}</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 