'use client'

import React, { useMemo } from 'react'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { AIVisibilityStats, BrandFirstChoiceRate } from '@/services/ai-visibility'

// 支持实际API返回的数据结构
interface APIVisibilityResponse {
  brand_id: string;
  data: {
    keyword_frequency: any[];
    brand_first_choice_rate: BrandFirstChoiceRate[];
    brand_recommend_rate: BrandFirstChoiceRate[];
    brand_search_rate: any[]; // 搜索率数据可能有特殊结构
  };
  days?: number;
  timestamp?: string;
}

interface BrandSearchRateCardProps {
  data: APIVisibilityResponse | AIVisibilityStats | null
  loading: boolean
  error: string | null
}

export function BrandSearchRateCard({ data, loading, error }: BrandSearchRateCardProps) {
  // 从API数据计算搜索率
  const { searchData, chartData, statsData } = useMemo(() => {
    if (!data) {
      return {
        searchData: {
          currentRate: '0%',
          totalSearches: 0
        },
        chartData: [
          { name: '1', value: 0 },
          { name: '2', value: 0 },
          { name: '3', value: 0 },
          { name: '4', value: 0 },
          { name: '5', value: 0 },
          { name: '6', value: 0 },
          { name: '7', value: 0 }
        ],
        statsData: {
          totalSearches: 0
        }
      }
    }

    // 检查数据结构 - 支持两种可能的结构
    let brandSearchRate: any[] = [];
    
    // 如果数据有嵌套的data字段
    if ('data' in data && data.data && 'brand_search_rate' in data.data) {
      brandSearchRate = data.data.brand_search_rate;
    } 
    // 如果数据直接有brand_search_rate字段
    else if ('brand_search_rate' in data) {
      brandSearchRate = data.brand_search_rate;
    }

    if (!brandSearchRate || !Array.isArray(brandSearchRate) || brandSearchRate.length === 0) {
      return {
        searchData: {
          currentRate: '0%',
          totalSearches: 0
        },
        chartData: [
          { name: '1', value: 0 },
          { name: '2', value: 0 },
          { name: '3', value: 0 },
          { name: '4', value: 0 },
          { name: '5', value: 0 },
          { name: '6', value: 0 },
          { name: '7', value: 0 }
        ],
        statsData: {
          totalSearches: 0
        }
      }
    }

    // 解析嵌套数据结构，计算每天的搜索率
    const dailyData = brandSearchRate.map((dayItem, index) => {
      // 从data字段中提取各个维度的数值
      const dayData = dayItem.data || {};
      
      // 获取各维度数据
      const directSearch = dayData['机械搜索'] || dayData['直接搜索'] || 0;
      const relatedSearch = dayData['相关搜索'] || 0;
      const competitorCompare = dayData['竞品对比'] || 0;
      const industrySearch = dayData['行业搜索'] || 0;
      
      // 计算总和
      const totalValue = directSearch + relatedSearch + competitorCompare + industrySearch;
      
      // 计算当天的搜索率：(直接搜索 + 相关搜索) / 总和 * 100%
      const searchRateValue = totalValue > 0 ? ((directSearch + relatedSearch) / totalValue * 100) : 0;
      
      return {
        day: index + 1,
        name: `${index + 1}`,
        value: searchRateValue,
        date: dayItem.date,
        totalValue: totalValue // 保留总值用于统计
      };
    });

    // 主搜索率：直接显示第7天的搜索率
    const day7SearchRate = dailyData[6]?.value || 0;
    const searchRate = day7SearchRate;
    
    // 计算总搜索数（所有天数的总数之和）
    const totalSearches = dailyData.reduce((sum, day) => sum + (day.totalValue || 0), 0);
    
    const searchResult = {
      currentRate: `${searchRate.toFixed(1)}%`,
      totalSearches: totalSearches
    };
    

    return {
      searchData: searchResult,
      chartData: dailyData,
      statsData: {
        totalSearches: totalSearches
      }
    };
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
        <div className="text-xs font-bold text-gray-500">总搜索: {statsData.totalSearches}</div>
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

      {/* 正常显示或仅坐标轴 */}
      {!loading && !error && (
        <>
          {/* 面积图或空图表 */}
          <div className="h-[120px] mt-8 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data && statsData.totalSearches > 0 ? chartData : []}>
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
                {/* 只有在有数据时才显示 Tooltip 和 Area */}
                {data && statsData.totalSearches > 0 && (
                  <>
                    <Tooltip 
                      contentStyle={{
                        background: 'rgba(0, 0, 0, 0.8)',
                        border: 'none',
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '12px'
                      }}
                      formatter={(value: number) => [`${value.toFixed(1)}%`, '搜索率']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#4285f4" 
                      fillOpacity={1} 
                      fill="url(#colorUv)"
                      strokeWidth={2}
                    />
                  </>
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  )
} 