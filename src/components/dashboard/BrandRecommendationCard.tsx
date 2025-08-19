'use client'

import React, { useMemo, useState, useCallback } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { AIVisibilityStats, BrandFirstChoiceRate } from '@/services/ai-visibility'

// 支持实际API返回的数据结构
interface APIVisibilityResponse {
  brand_id: string;
  data: {
    keyword_frequency: any[];
    brand_first_choice_rate: BrandFirstChoiceRate[];
    brand_recommend_rate: BrandFirstChoiceRate[];
    brand_search_rate: BrandFirstChoiceRate[];
  };
  days?: number;
  timestamp?: string;
}

interface BrandRecommendationCardProps {
  data: APIVisibilityResponse | AIVisibilityStats | null
  loading: boolean
  error: string | null
}

export function BrandRecommendationCard({ data, loading, error }: BrandRecommendationCardProps) {
  // 从API数据生成品牌推荐率信息
  const { brands, currentBrandData, hasRealData } = useMemo(() => {
    if (!data) {
      return {
        brands: [
          { name: '其它品牌1', color: '#ffb200', percentage: '20%', value: 20 },
          { name: '其它品牌2', color: '#11ca9c', percentage: '25%', value: 25 },
          { name: '其它品牌3', color: '#ff4d4d', percentage: '15%', value: 15 },
          { name: '当前品牌', color: '#4285F4', percentage: '40%', value: 40 },
        ],
        currentBrandData: { name: '当前品牌', color: '#4285F4', percentage: '40%', value: 40 },
        hasRealData: false
      }
    }

    // 检查数据结构 - 支持两种可能的结构
    let brandRecommendRate: BrandFirstChoiceRate[] = [];
    
    // 如果数据有嵌套的data字段
    if ('data' in data && data.data && 'brand_recommend_rate' in data.data) {
      brandRecommendRate = data.data.brand_recommend_rate;
    } 
    // 如果数据直接有brand_recommend_rate字段
    else if ('brand_recommend_rate' in data) {
      brandRecommendRate = data.brand_recommend_rate;
    }

    if (!brandRecommendRate || !Array.isArray(brandRecommendRate) || brandRecommendRate.length === 0) {
      return {
        brands: [
          { name: '其它品牌1', color: '#ffb200', percentage: '20%', value: 20 },
          { name: '其它品牌2', color: '#11ca9c', percentage: '25%', value: 25 },
          { name: '其它品牌3', color: '#ff4d4d', percentage: '15%', value: 15 },
          { name: '当前品牌', color: '#4285F4', percentage: '40%', value: 40 },
        ],
        currentBrandData: { name: '当前品牌', color: '#4285F4', percentage: '40%', value: 40 },
        hasRealData: false
      }
    }

    // 使用API返回的实际数据 - 修正为品牌推荐率数据
    const brandRateData = brandRecommendRate
    const total = brandRateData.reduce((sum, item) => sum + item.rate, 0)
    
    // 颜色映射
    const colors = ['#4285F4', '#FF9800', '#4CAF50', '#F44336', '#9C27B0']
    
    const brandsData = brandRateData.map((item, index) => {
      const percentage = total > 0 ? ((item.rate / total) * 100) : 0
      return {
        name: item.brand || `品牌${index + 1}`,
        color: colors[index % colors.length],
        percentage: `${percentage.toFixed(1)}%`,
        value: percentage
      }
    })

    // 找到当前品牌数据（通常是第一个或者品牌名包含"当前"的）
    const currentBrand = brandsData.find(b => 
      b.name === '当前品牌' || 
      (b.name && b.name.includes('当前')) || 
      brandsData.indexOf(b) === 0
    ) || brandsData[0]

    return {
      brands: brandsData,
      currentBrandData: currentBrand,
      hasRealData: true
    }
  }, [data])

  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null)
  const activeIndex = pinnedIndex !== null ? pinnedIndex : hoverIndex
  const MIN_LABEL = 8

  const handleSliceClick = useCallback((index: number) => {
    setPinnedIndex(prev => (prev === index ? null : index))
  }, [])

  const CustomTooltip = ({ active }: any) => {
    if (!active || hoverIndex === null || !brands[hoverIndex]) return null
    const hoveredBrand = brands[hoverIndex]
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-xl px-3 py-2 text-xs text-gray-800">
        <div className="font-medium mb-0.5">{hoveredBrand.name}</div>
        <div className="text-gray-600">{hoveredBrand.value.toFixed(1)}%</div>
      </div>
    )
  }

  // 计算统计数据用于底部显示
  const statsData = useMemo(() => {
    if (!data) return { count: 0, total: 0 };
    
    // 检查数据结构 - 支持两种可能的结构
    let brandRecommendRate: BrandFirstChoiceRate[] = [];
    
    if ('data' in data && data.data && 'brand_recommend_rate' in data.data) {
      brandRecommendRate = data.data.brand_recommend_rate;
    } 
    else if ('brand_recommend_rate' in data) {
      brandRecommendRate = data.brand_recommend_rate;
    }

    return {
      count: brandRecommendRate?.length || 0,
      total: brandRecommendRate?.reduce((sum, item) => sum + item.rate, 0) || 0
    };
  }, [data]);

  // 根据数值大小分配不同的外半径
  const getOuterRadius = (value: number, index?: number) => {
    const base = value >= 40 ? 80 : value >= 25 ? 70 : value >= 15 ? 60 : 50
    return activeIndex === index ? base + 8 : base
  }

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
        <div className="flex items-center justify-center h-[180px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* 错误状态 */}
      {error && !loading && (
        <div className="flex items-center justify-center h-[180px]">
          <div className="text-center">
            <p className="text-red-500 text-xs mb-1">加载失败</p>
            <p className="text-gray-500 text-xs">{error}</p>
          </div>
        </div>
      )}

      {/* 动态半径饼图区域或暂无数据状态 */}
      {!loading && !error && (
        <div className="relative h-[180px]">
          {/* 检查是否有有效数据 */}
          {hasRealData ? (
            <>
              <div className="h-full" style={{ outline: 'none' }} onFocus={(e) => e.preventDefault()}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    {pinnedIndex === null && (
                      <Tooltip 
                        content={<CustomTooltip />} 
                        wrapperStyle={{ outline: 'none', border: 'none', boxShadow: 'none', zIndex: 50 }} 
                      />
                    )}
                  {brands.map((item, index) => {
                    const outerRadius = getOuterRadius(item.value, index)
                    const innerRadius = 45

                    let startAngle = 90
                    for (let i = 0; i < index; i++) {
                      startAngle -= (brands[i].value / 100) * 360
                    }
                    const endAngle = startAngle - (item.value / 100) * 360

                    const showLabel = item.value >= MIN_LABEL

                    return (
                      <Pie
                        key={`pie-${index}`}
                        data={[item]}
                        cx="50%"
                        cy="50%"
                        outerRadius={outerRadius}
                        innerRadius={innerRadius}
                        fill={item.color}
                        dataKey="value"
                        stroke="#fff"
                        strokeWidth={2}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        isAnimationActive={false}
                        onClick={() => handleSliceClick(index)}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        labelLine={showLabel}
                        label={showLabel ? (entry) => {
                          const RADIAN = Math.PI / 180
                          const midAngle = (startAngle + endAngle) / 2
                          const radius = outerRadius + 15
                          const x = entry.cx + radius * Math.cos(-midAngle * RADIAN)
                          const y = entry.cy + radius * Math.sin(-midAngle * RADIAN)
                          return (
                            <g>
                              <text x={x} y={y - 3} fill="#666" textAnchor={x > entry.cx ? 'start' : 'end'} dominantBaseline="central" fontSize="10" className="font-medium">
                                {entry.name}
                              </text>
                              <text x={x} y={y + 8} fill="#999" textAnchor={x > entry.cx ? 'start' : 'end'} dominantBaseline="central" fontSize="9">
                                {(entry.value || 0).toFixed(1)}%
                              </text>
                            </g>
                          )
                        } : undefined}
                      >
                        <Cell fill={item.color} />
                      </Pie>
                    )
                  })}
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* 中心显示当前品牌推荐率 */}
              <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="text-center bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-sm">
                  <div>
                    <div className="text-sm font-bold text-gray-800">
                      {(activeIndex != null ? brands[activeIndex]?.percentage : currentBrandData?.percentage) || '0%'}
                    </div>
                    <div className="text-[10px] text-gray-600">
                      {activeIndex != null ? brands[activeIndex]?.name : '推荐率'}
                    </div>
                  </div>
                </div>
              </div>

              {/* API数据指标 */}
              <div className="absolute bottom-2 left-2 text-xs text-gray-500">
                <div>品牌数: {statsData.count}</div>
                <div>总评分: {statsData.total.toFixed(1) || 0}</div>
              </div>
            </>
          ) : (
            /* 暂无数据状态 */
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-gray-400 text-lg mb-2">暂无数据</div>
                <div className="text-gray-500 text-sm">当前品牌暂无推荐率数据</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 