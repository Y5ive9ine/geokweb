'use client'

import Image from 'next/image'
import { AIVisibilityStats } from '@/services/ai-visibility'

interface BrandSearchRateCardProps {
  data: AIVisibilityStats | null
  loading: boolean
  error: string | null
}

export function BrandSearchRateCard({ data, loading, error }: BrandSearchRateCardProps) {
  // 从API数据计算搜索率
  const getSearchRateData = () => {
    if (!data) {
      return {
        currentRate: '0%',
        totalSearches: 0,
        metrics: ['0%', '0%'],
        trend: '无数据'
      }
    }

    // 基于可见性数据计算搜索率
    const totalSearches = data.total_searches || 0
    const mentionCount = data.mention_count || 0
    const visibilityScore = data.total_visibility_score || 0
    
    // 计算搜索率（示例计算逻辑）
    const searchRate = totalSearches > 0 ? ((mentionCount / totalSearches) * 100) : 0
    const weeklyGrowth = visibilityScore * 50 // 模拟周增长
    const monthlyGrowth = visibilityScore * 20 // 模拟月增长
    
    return {
      currentRate: `${searchRate.toFixed(1)}%`,
      totalSearches,
      metrics: [`${weeklyGrowth.toFixed(0)}%`, `${monthlyGrowth.toFixed(0)}%`],
      trend: searchRate > 100 ? '增长趋势' : searchRate > 50 ? '平稳增长' : '待提升'
    }
  }

  const searchData = getSearchRateData()

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-8 h-[326px]">
      {/* 标题和数据 */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">品牌搜索率</h3>
          {loading ? (
            <div className="h-9 w-20 bg-gray-200 animate-pulse rounded"></div>
          ) : error ? (
            <div className="text-lg text-red-500">加载失败</div>
          ) : (
            <div className="text-3xl font-bold text-gray-800">{searchData.currentRate}</div>
          )}
        </div>
        <div className="text-xs font-bold text-gray-500">总搜索: {searchData.totalSearches}</div>
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
            <p className="text-red-500 text-xs mb-1">数据加载失败</p>
            <p className="text-gray-500 text-xs">{error}</p>
          </div>
        </div>
      )}

      {/* 正常显示 */}
      {!loading && !error && (
        <>
          {/* 数据指标 */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">周增长</span>
              <div className="text-base font-bold text-blue-600">{searchData.metrics[0]}</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">月增长</span>
              <div className="text-base font-bold text-green-600">{searchData.metrics[1]}</div>
            </div>
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

            {/* 数据点覆盖 */}
            {data && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-700">
                    提及次数: {data.mention_count || 0}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    平均位置: {data.average_position?.toFixed(1) || 'N/A'}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 图表底部 */}
          <div className="mt-4 flex justify-between text-xs text-gray-500">
            <span>过去7天</span>
            <span className={`font-medium ${
              searchData.trend === '增长趋势' ? 'text-green-600' :
              searchData.trend === '平稳增长' ? 'text-blue-600' : 'text-orange-600'
            }`}>
              {searchData.trend}
            </span>
          </div>
        </>
      )}
    </div>
  )
} 