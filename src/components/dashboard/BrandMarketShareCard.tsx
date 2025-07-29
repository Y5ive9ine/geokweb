'use client'

import React, { useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { AIVisibilityReport } from '@/services/ai-visibility'

interface BrandMarketShareCardProps {
  data: AIVisibilityReport | null
  loading: boolean
  error: string | null
}

export function BrandMarketShareCard({ data, loading, error }: BrandMarketShareCardProps) {
  // 从API数据生成市场份额信息
  const brands = useMemo(() => {
    if (!data) {
      return [
        { name: '当前品牌', percentage: '35.6%', value: 35.6, color: '#4285f4' },
        { name: '竞品A', percentage: '18.7%', value: 18.7, color: '#ff9800' },
        { name: '竞品B', percentage: '12.2%', value: 12.2, color: '#4caf50' },
        { name: '竞品C', percentage: '8.3%', value: 8.3, color: '#f44336' },
        { name: '其他', percentage: '25.2%', value: 25.2, color: '#e0e0e0' },
      ]
    }

    // 模拟基于API数据计算市场份额
    // 实际项目中应该从report中提取具体的竞品分析数据
    const currentBrandScore = Math.random() * 30 + 20 // 20%-50%
    const competitors = [
      Math.random() * 20 + 10, // 10%-30%
      Math.random() * 15 + 5,  // 5%-20%
      Math.random() * 10 + 3,  // 3%-13%
    ]
    
    const otherShare = 100 - currentBrandScore - competitors.reduce((sum, val) => sum + val, 0)
    
    return [
      { 
        name: '当前品牌', 
        percentage: `${currentBrandScore.toFixed(1)}%`, 
        value: currentBrandScore,
        color: '#4285f4' 
      },
      { 
        name: '竞品A', 
        percentage: `${competitors[0].toFixed(1)}%`, 
        value: competitors[0],
        color: '#ff9800' 
      },
      { 
        name: '竞品B', 
        percentage: `${competitors[1].toFixed(1)}%`, 
        value: competitors[1],
        color: '#4caf50' 
      },
      { 
        name: '竞品C', 
        percentage: `${competitors[2].toFixed(1)}%`, 
        value: competitors[2],
        color: '#f44336' 
      },
      { 
        name: '其他', 
        percentage: `${otherShare.toFixed(1)}%`, 
        value: otherShare,
        color: '#e0e0e0' 
      },
    ]
  }, [data])

  const CustomLegend = ({ payload }: any) => (
    <div className="flex flex-col space-y-3">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className="w-3 h-3 rounded-sm border border-gray-300"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs font-light text-black">{entry.value}</span>
          </div>
          <span className="text-xs font-normal text-black">
            {brands.find(b => b.name === entry.value)?.percentage}
          </span>
        </div>
      ))}
    </div>
  )

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
        <div className="relative h-[180px]">
          <div className="flex items-center h-full">
            {/* 左侧饼图 */}
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={brands}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
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
                      width: '130px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* 中心显示当前品牌份额 */}
            <div className="absolute left-[20%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                <div>
                  <div className="text-sm font-bold text-gray-800">
                    {brands[0]?.percentage || '0%'}
                  </div>
                  <div className="text-xs text-gray-600">份额</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* API数据指标 */}
      {data && !loading && !error && (
        <div className="mt-2 text-xs text-gray-500">
          <span>报告日期: {new Date(data.report_date).toLocaleDateString('zh-CN')}</span>
          {data.summary && (
            <span className="ml-4">总分析: {data.summary.total_analyzed || 0} 项</span>
          )}
        </div>
      )}
    </div>
  )
} 