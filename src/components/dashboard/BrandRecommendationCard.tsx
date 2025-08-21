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
  // 弹窗相关状态
  const [showModal, setShowModal] = useState(false)

  // 打开弹窗
  const handleShowDetails = useCallback(() => {
    setShowModal(true)
  }, [])

  // 关闭弹窗
  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

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
        <button 
          onClick={handleShowDetails}
          className="text-xs text-blue-600 border border-blue-600 rounded-sm px-3 py-1 hover:bg-blue-50 transition-colors"
        >
          查看详情
        </button>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-2 mb-6">
        <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          当月搜索量
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
      
      {/* 品牌详情弹窗 */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 双层遮罩效果 */}
          {/* 第一层：模糊背景 */}
          <div 
            className="absolute inset-0 bg-white/30 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* 第二层：渐变遮罩增强对比度 */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-900/20 to-gray-900/10"
            onClick={handleCloseModal}
          />
          
          {/* 弹窗内容 - 增强阴影效果 */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden mx-4 ring-1 ring-black/5">
            {/* 弹窗头部 - 增加背景色和阴影 */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-lg font-bold text-gray-800">
                {currentBrandData?.name || '当前品牌'} - 推荐率详情
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* 弹窗主体内容 */}
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(80vh-120px)] bg-gray-50/50">
              {loading && (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}
              
              {error && !loading && (
                <div className="text-center py-8">
                  <p className="text-red-500">{error}</p>
                </div>
              )}
              
              {!loading && !error && hasRealData && (
                <div className="space-y-6">
                  {/* 当前品牌总览 */}
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-base font-bold text-gray-800 mb-4">品牌总览</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{currentBrandData?.percentage || '0%'}</div>
                        <div className="text-sm text-gray-600 mt-1">当前推荐率</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{brands.length}</div>
                        <div className="text-sm text-gray-600 mt-1">品牌总数</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {brands.findIndex(b => b.name === currentBrandData?.name) + 1 || '-'}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">排名</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{statsData.total.toFixed(1)}</div>
                        <div className="text-sm text-gray-600 mt-1">总评分</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 品牌推荐率详细数据 */}
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-base font-bold text-gray-800 mb-4">推荐率分布详情</h3>
                    <div className="space-y-3">
                      {brands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-4 h-4 rounded-full" 
                              style={{ backgroundColor: brand.color }}
                            />
                            <span className={`font-medium ${brand.name === currentBrandData?.name ? 'text-blue-600' : 'text-gray-700'}`}>
                              {brand.name}
                              {brand.name === currentBrandData?.name && (
                                <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">当前品牌</span>
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="font-bold text-gray-800">{brand.percentage}</div>
                              <div className="text-xs text-gray-500">推荐率</div>
                            </div>
                            <div className="w-24">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="h-2 rounded-full transition-all duration-300"
                                  style={{ 
                                    width: `${brand.value}%`,
                                    backgroundColor: brand.color 
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 数据说明 */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">数据说明</p>
                        <ul className="space-y-1 text-blue-700">
                          <li>• 推荐率表示该品牌在AI搜索结果中被推荐的概率</li>
                          <li>• 数据基于最近 {data && 'days' in data ? data.days : 30} 天的搜索统计</li>
                          <li>• 排名根据推荐率从高到低排序</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {!loading && !error && !hasRealData && (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-lg mb-2">暂无数据</div>
                  <div className="text-gray-500 text-sm">当前品牌暂无推荐率数据</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 