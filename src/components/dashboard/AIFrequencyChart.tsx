'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'
import { AIVisibilityTrendResponse } from '@/services/ai-visibility'

interface AIFrequencyChartProps {
  data: AIVisibilityTrendResponse | null
  loading: boolean
  error: string | null
}

export const AIFrequencyChart = React.memo<AIFrequencyChartProps>(({ data, loading, error }) => {
  // 使用useMemo缓存数据点计算，避免每次render都重新计算
  const dataPoints = useMemo(() => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      return [
        { label: '价格', value: 0, x: '38%', y: '45%' },
        { label: '质量', value: 0, x: '62%', y: '25%' },
        { label: '性能', value: 0, x: '78%', y: '45%' },
        { label: '性价比', value: 0, x: '78%', y: '75%' },
        { label: '品牌', value: 0, x: '62%', y: '85%' },
        { label: '产品', value: 0, x: '38%', y: '75%' },
      ]
    }

    // 从API数据计算最近的可见性分数
    const recentData = data.slice(-6) // 取最近6个数据点
    const labels = ['价格', '质量', '性能', '性价比', '品牌', '产品']
    const positions = [
      { x: '38%', y: '45%' },
      { x: '62%', y: '25%' },
      { x: '78%', y: '45%' },
      { x: '78%', y: '75%' },
      { x: '62%', y: '85%' },
      { x: '38%', y: '75%' },
    ]

    return labels.map((label, index) => ({
      label,
      value: recentData[index]?.visibility_score || 0,
      x: positions[index].x,
      y: positions[index].y,
    }))
  }, [data])

  // 使用useMemo缓存渲染状态判断
  const renderState = useMemo(() => {
    if (loading) return 'loading'
    if (error) return 'error'
    return 'normal'
  }, [loading, error])

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-6 h-[523px]">
      {/* 标题 */}
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">在AI中出现频率</h3>
        <p className="text-xs text-gray-600">搜索关键词内容在人工智能中出现频率</p>
      </div>

      {/* 加载状态 */}
      {renderState === 'loading' && (
        <div className="flex items-center justify-center h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* 错误状态 */}
      {renderState === 'error' && (
        <div className="flex items-center justify-center h-[400px]">
          <div className="text-center">
            <p className="text-red-500 text-sm mb-2">加载失败</p>
            <p className="text-gray-500 text-xs">{error}</p>
          </div>
        </div>
      )}

      {/* 图表容器 */}
      {renderState === 'normal' && (
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {/* 六边形图层 - 从外到内 */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* 最外层六边形 */}
            <div className="relative w-[294px] h-[294px]">
              <Image
                src="/images/Polygon2.svg"
                alt="Outer polygon"
                fill
                className="object-contain opacity-20"
                loading="lazy"
                sizes="(max-width: 768px) 250px, 294px"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {/* 第二层六边形 */}
            <div className="relative w-[235px] h-[235px]">
              <Image
                src="/images/Polygon3.svg"
                alt="Second polygon"
                fill
                className="object-contain opacity-40"
                loading="lazy"
                sizes="(max-width: 768px) 200px, 235px"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {/* 第三层六边形 */}
            <div className="relative w-[164px] h-[164px]">
              <Image
                src="/images/Polygon4.svg"
                alt="Third polygon"
                fill
                className="object-contain opacity-60"
                loading="lazy"
                sizes="(max-width: 768px) 140px, 164px"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {/* 最内层六边形 */}
            <div className="relative w-[150px] h-[150px]">
              <Image
                src="/images/Polygon5.svg"
                alt="Inner polygon"
                fill
                className="object-contain opacity-80"
                loading="lazy"
                sizes="(max-width: 768px) 130px, 150px"
              />
            </div>
          </div>

          {/* 连接线 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[326px] h-[301px]">
              <Image
                src="/images/Polygon6.svg"
                alt="Connection lines"
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 280px, 326px"
              />
            </div>
          </div>

          {/* 数据点 */}
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className="absolute w-[8px] h-[8px] group cursor-pointer"
              style={{ left: point.x, top: point.y, transform: 'translate(-50%, -50%)' }}
            >
              <div 
                className={`w-full h-full rounded-full ${
                  point.value > 0.7 ? 'bg-green-500' :
                  point.value > 0.4 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
              />
              
              {/* 悬停提示 */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                {point.label}: {(point.value * 100).toFixed(1)}%
              </div>
            </div>
          ))}

          {/* 标签 */}
          {dataPoints.map((point, index) => (
            <div
              key={`label-${index}`}
              className="absolute text-xs text-gray-600 font-medium"
              style={{ 
                left: point.x, 
                top: point.y,
                transform: 'translate(-50%, -50%)',
                marginTop: index % 2 === 0 ? '20px' : '-20px'
              }}
            >
              {point.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
})

AIFrequencyChart.displayName = 'AIFrequencyChart' 