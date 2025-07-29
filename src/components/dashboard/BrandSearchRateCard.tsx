'use client'

import React, { useMemo } from 'react'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { AIVisibilityStats } from '@/services/ai-visibility'

interface BrandSearchRateCardProps {
  data: AIVisibilityStats | null
  loading: boolean
  error: string | null
}

export function BrandSearchRateCard({ data, loading, error }: BrandSearchRateCardProps) {
  // 从API数据计算搜索率
  const { searchData, chartData } = useMemo(() => {
    if (!data || !data.brand_first_choice_rate || data.brand_first_choice_rate.length === 0) {
      return {
        searchData: {
          currentRate: '0%',
          totalSearches: 0,
          metrics: ['0%', '0%'],
          trend: '无数据'
        },
        chartData: [
          { name: '1月', value: 20 },
          { name: '2月', value: 32 },
          { name: '3月', value: 28 },
          { name: '4月', value: 45 },
          { name: '5月', value: 38 },
          { name: '6月', value: 62 },
          { name: '7月', value: 55 }
        ]
      }
    }

    // 基于品牌首选率数据计算搜索率
    const brandRates = data.brand_first_choice_rate
    const totalRate = brandRates.reduce((sum, item) => sum + item.rate, 0)
    const currentBrandRate = brandRates.find(item => 
      item.brand === '当前品牌' || 
      item.brand.includes('当前') || 
      brandRates.indexOf(item) === 0
    )?.rate || 0
    
    // 计算搜索率（基于当前品牌在总数中的占比）
    const searchRate = totalRate > 0 ? (currentBrandRate / totalRate) * 100 : 0
    const weeklyGrowth = Math.min(searchRate * 1.1, 100) // 模拟周增长
    const monthlyGrowth = Math.min(searchRate * 0.9, 100) // 模拟月增长
    
    const searchResult = {
      currentRate: `${searchRate.toFixed(1)}%`,
      totalSearches: totalRate,
      metrics: [`${weeklyGrowth.toFixed(0)}%`, `${monthlyGrowth.toFixed(0)}%`],
      trend: searchRate > 60 ? '增长趋势' : searchRate > 30 ? '平稳增长' : '待提升'
    }

    // 基于品牌评分生成图表数据
    const baseValue = currentBrandRate / 10 // 缩放到合适的图表范围
    const chartResult = [
      { name: '1月', value: Math.max(10, baseValue * 0.6) },
      { name: '2月', value: Math.max(15, baseValue * 0.7) },
      { name: '3月', value: Math.max(12, baseValue * 0.5) },
      { name: '4月', value: Math.max(20, baseValue * 0.8) },
      { name: '5月', value: Math.max(18, baseValue * 0.6) },
      { name: '6月', value: Math.max(25, baseValue * 1.1) },
      { name: '7月', value: Math.max(22, baseValue) }
    ]

    return {
      searchData: searchResult,
      chartData: chartResult
    }
  }, [data])

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
        <div className="flex items-center justify-center h-[180px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* 错误状态 */}
      {error && !loading && (
        <div className="flex items-center justify-center h-[180px]">
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

          {/* 面积图 */}
          <div className="h-[120px] mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4285f4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4285f4" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#9ca3af' }}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    border: 'none',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '12px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#4285f4" 
                  fillOpacity={1} 
                  fill="url(#colorUv)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* 图表底部 */}
          <div className="flex justify-between text-xs text-gray-500">
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