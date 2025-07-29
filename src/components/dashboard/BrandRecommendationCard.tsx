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
    if (!data || !data.brand_recommend_rate || data.brand_recommend_rate.length === 0) {
      return {
        brands: [
          { name: '其它品牌1', color: '#ffb200', percentage: '20%', value: 20 },
          { name: '其它品牌2', color: '#11ca9c', percentage: '25%', value: 25 },
          { name: '其它品牌3', color: '#ff4d4d', percentage: '15%', value: 15 },
          { name: '当前品牌', color: '#4285F4', percentage: '40%', value: 40 },
        ],
        currentBrandData: { name: '当前品牌', color: '#4285F4', percentage: '40%', value: 40 }
      }
    }

    // 使用API返回的实际数据 - 修正为品牌推荐率数据
    const brandRateData = data.brand_recommend_rate
    const total = brandRateData.reduce((sum, item) => sum + item.rate, 0)
    
    // 颜色映射
    const colors = ['#4285F4', '#FF9800', '#4CAF50', '#F44336', '#9C27B0']
    
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

  // 根据数值大小分配不同的外半径
  const getOuterRadius = (value: number) => {
    if (value >= 40) return 80;      // 最大扇形 (40%+)
    if (value >= 25) return 70;       // 较大扇形 (25%-40%)
    if (value >= 15) return 60;       // 中等扇形 (15%-25%)
    return 50;                        // 最小扇形 (<15%)
  };

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

      {/* 动态半径饼图区域 */}
      {!loading && !error && (
        <div className="relative h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              {/* 为每个数据项创建单独的Pie，实现不同半径的突出效果 */}
              {brands.map((item, index) => {
                const outerRadius = getOuterRadius(item.value);
                const innerRadius = 45;
                
                // 计算这个扇形的起始和结束角度
                let startAngle = 90; // 从顶部开始
                for (let i = 0; i < index; i++) {
                  startAngle -= (brands[i].value / 100) * 360;
                }
                const endAngle = startAngle - (item.value / 100) * 360;
                
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
                    strokeWidth={0}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    labelLine={false}
                    label={(entry) => {
                      const RADIAN = Math.PI / 180;
                      const midAngle = (startAngle + endAngle) / 2;
                      const radius = outerRadius + 15;
                      const x = entry.cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = entry.cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <g>
                          <line
                            x1={entry.cx + (outerRadius + 3) * Math.cos(-midAngle * RADIAN)}
                            y1={entry.cy + (outerRadius + 3) * Math.sin(-midAngle * RADIAN)}
                            x2={x - (x > entry.cx ? 10 : -10)}
                            y2={y}
                            stroke="#ccc"
                            strokeWidth={1}
                          />
                          <text
                            x={x}
                            y={y - 3}
                            fill="#666"
                            textAnchor={x > entry.cx ? 'start' : 'end'}
                            dominantBaseline="central"
                            fontSize="10"
                            className="font-medium"
                          >
                            {entry.name}
                          </text>
                          <text
                            x={x}
                            y={y + 8}
                            fill="#999"
                            textAnchor={x > entry.cx ? 'start' : 'end'}
                            dominantBaseline="central"
                            fontSize="9"
                          >
                            {(entry.value || 0).toFixed(1)}%
                          </text>
                        </g>
                      );
                    }}
                  >
                    <Cell fill={item.color} />
                  </Pie>
                );
              })}
            </PieChart>
          </ResponsiveContainer>

          {/* 中心显示当前品牌推荐率 */}
          <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-center bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
              <div>
                <div className="text-sm font-bold text-gray-800">
                  {currentBrandData?.percentage || '0%'}
                </div>
                <div className="text-xs text-gray-600">推荐率</div>
              </div>
            </div>
          </div>

          {/* API数据指标 */}
          {data && (
            <div className="absolute bottom-2 left-2 text-xs text-gray-500">
              <div>品牌数: {data.brand_recommend_rate?.length || 0}</div>
              <div>总评分: {data.brand_recommend_rate?.reduce((sum, item) => sum + item.rate, 0).toFixed(1) || 0}</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 