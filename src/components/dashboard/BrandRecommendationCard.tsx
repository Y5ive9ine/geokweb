'use client'

import React, { useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { AIVisibilityStats } from '@/services/ai-visibility'

interface BrandRecommendationCardProps {
  data: AIVisibilityStats | null
  loading: boolean
  error: string | null
}

export function BrandRecommendationCard({ data, loading, error }: BrandRecommendationCardProps) {
  // 从API数据生成品牌推荐率信息
  const { brands, currentBrandData } = useMemo(() => {
    if (!data || !data.brand_first_choice_rate || data.brand_first_choice_rate.length === 0) {
      return {
        brands: [
          { name: '其它品牌1', color: '#ffb200', percentage: '20%', value: 20 },
          { name: '其它品牌2', color: '#11ca9c', percentage: '25%', value: 25 },
          { name: '其它品牌3', color: '#ff4d4d', percentage: '15%', value: 15 },
          { name: '当前品牌', color: '#333333', percentage: '40%', value: 40 },
        ],
        currentBrandData: { name: '当前品牌', color: '#333333', percentage: '40%', value: 40 }
      }
    }

    // 使用API返回的实际数据
    const brandRateData = data.brand_first_choice_rate
    const total = brandRateData.reduce((sum, item) => sum + item.rate, 0)
    
    // 颜色映射
    const colors = ['#333333', '#ffb200', '#11ca9c', '#ff4d4d', '#9c27b0']
    
    const brandsData = brandRateData.map((item, index) => {
      const percentage = total > 0 ? ((item.rate / total) * 100) : 0
      return {
        name: item.brand,
        color: colors[index % colors.length],
        percentage: `${percentage.toFixed(1)}%`,
        value: percentage
      }
    })

    // 找到当前品牌数据（通常是第一个或者品牌名包含"当前"的）
    const currentBrand = brandsData.find(b => 
      b.name === '当前品牌' || 
      b.name.includes('当前') || 
      brandsData.indexOf(b) === 0
    ) || brandsData[0]

    return {
      brands: brandsData,
      currentBrandData: currentBrand
    }
  }, [data])

  const CustomLegend = ({ payload }: any) => (
    <div className="flex flex-col space-y-2 ml-4">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center space-x-2 text-sm">
          <div 
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-gray-700">{entry.value}</span>
          <span className="text-gray-500 ml-auto">
            {brands.find(b => b.name === entry.value)?.percentage}
          </span>
        </div>
      ))}
    </div>
  )

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

      {/* 饼图区域 */}
      {!loading && !error && (
        <div className="relative h-[180px]">
          <div className="flex items-center h-full">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={brands}
                    cx="40%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                  >
                    {brands.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend 
                    content={<CustomLegend />}
                    wrapperStyle={{ 
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '120px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* 中心显示推荐率 */}
            <div className="absolute left-[25%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800">
                  {currentBrandData?.percentage || '0%'}
                </div>
                <div className="text-xs text-gray-600">推荐率</div>
              </div>
            </div>

            {/* API数据指标 */}
            {data && (
              <div className="absolute bottom-2 left-2 text-xs text-gray-500">
                <div>品牌数: {data.brand_first_choice_rate?.length || 0}</div>
                <div>总评分: {data.brand_first_choice_rate?.reduce((sum, item) => sum + item.rate, 0) || 0}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 