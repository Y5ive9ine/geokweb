'use client'

import React, { useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { AIVisibilityStats } from '@/services/ai-visibility'

interface BrandMarketShareCardProps {
  data: AIVisibilityStats | null
  loading: boolean
  error: string | null
}

export function BrandMarketShareCard({ data, loading, error }: BrandMarketShareCardProps) {
  // 从API数据生成品牌首推率信息
  const brands = useMemo(() => {
    if (!data || !data.brand_first_choice_rate || data.brand_first_choice_rate.length === 0) {
      return [
        { name: '当前品牌', percentage: '35.6%', value: 35.6, color: '#4285F4' },
        { name: '竞品A', percentage: '18.7%', value: 18.7, color: '#FF9800' },
        { name: '竞品B', percentage: '12.2%', value: 12.2, color: '#4CAF50' },
        { name: '竞品C', percentage: '8.3%', value: 8.3, color: '#FF5722' },
        { name: '其他', percentage: '25.2%', value: 25.2, color: '#E91E63' },
      ]
    }

    // 使用品牌首推率数据
    const brandRateData = data.brand_first_choice_rate
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

    return brandsData;
  }, [data])

  // 自定义图例组件
  const CustomLegend = ({ payload }: { payload: any[] }) => {
    return (
      <div className="flex flex-col space-y-2 ml-8">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div 
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-700 font-medium">
              {entry.value}
            </span>
            <span className="text-sm text-gray-500 ml-auto">
              {brands[index]?.percentage}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-8 h-[280px]">
      {/* 标题 */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">品牌在AI市场的首推率</h3>
        <p className="text-sm text-gray-500">
          直接对比各类各产业和各种业务分析
        </p>
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
        <div className="flex items-center justify-between h-[180px]">
          {/* 半圆图表 */}
          <div className="flex-1">
            <ResponsiveContainer width={300} height={180}>
              <PieChart>
                <Pie
                  data={brands}
                  cx="50%"
                  cy="75%"
                  startAngle={180}
                  endAngle={0}
                  outerRadius={85}
                  innerRadius={55}
                  fill="#8884d8"
                  dataKey="value"
                  strokeWidth={0}
                >
                  {brands.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* 自定义图例 */}
          <div className="flex-1">
            <CustomLegend 
              payload={brands.map(item => ({ 
                value: item.name, 
                color: item.color 
              }))} 
            />
          </div>
        </div>
      )}

      {/* API数据指标 */}
      {data && !loading && !error && (
        <div className="mt-2 text-xs text-gray-500">
          <span>统计时间: {data.timestamp ? new Date(data.timestamp).toLocaleDateString('zh-CN') : '未知'}</span>
          <span className="ml-4">品牌ID: {data.brand_id}</span>
        </div>
      )}
    </div>
  )
} 