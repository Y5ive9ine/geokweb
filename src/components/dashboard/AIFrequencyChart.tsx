"use client";

import React, { useMemo } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { AIVisibilityStats } from "@/services/ai-visibility";

interface AIFrequencyChartProps {
  data: AIVisibilityStats | null;
  loading: boolean;
  error: string | null;
}

export const AIFrequencyChart = React.memo<AIFrequencyChartProps>(
  ({ data, loading, error }) => {
    // 使用useMemo缓存数据点计算，避免每次render都重新计算
    const radarData = useMemo(() => {
      if (!data) {
        // 如果没有数据，返回默认的结构以确保雷达图能显示
        return [
          { subject: '品牌首选率', A: 0, fullMark: 100 },
          { subject: '品牌推荐率', A: 0, fullMark: 100 },
          { subject: '品牌搜索率', A: 0, fullMark: 100 },
        ];
      }

      // 从真实的stats数据中提取当前品牌的数据
      const getCurrentBrandRate = (rateArray: Array<{ brand: string; rate: number }>) => {
        if (!rateArray || rateArray.length === 0) return 0;
        
        // 尝试找到当前品牌的数据
        const currentBrand = rateArray.find(item => 
          item.brand === '当前品牌' || 
          item.brand.includes('当前') ||
          item.brand === data.brand_id
        );
        
        if (currentBrand) {
          return currentBrand.rate;
        }
        
        // 如果找不到当前品牌，返回第一个品牌的数据或0
        return rateArray.length > 0 ? rateArray[0].rate : 0;
      };

      // 基于真实的stats数据构建3个维度
      return [
        {
          subject: '品牌首选率',
          A: Math.max(0, Math.min(100, getCurrentBrandRate(data.brand_first_choice_rate || []))),
          fullMark: 100,
        },
        {
          subject: '品牌推荐率',
          A: Math.max(0, Math.min(100, getCurrentBrandRate(data.brand_recommend_rate || []))),
          fullMark: 100,
        },
        {
          subject: '品牌搜索率',
          A: Math.max(0, Math.min(100, getCurrentBrandRate(data.brand_search_rate || []))),
          fullMark: 100,
        },
      ];
    }, [data]);

    // 使用useMemo缓存渲染状态判断
    const renderState = useMemo(() => {
      if (loading) return "loading";
      if (error) return "error";
      // 始终显示雷达图
      return "normal";
    }, [loading, error]);

    return (
      <div className="bg-white rounded-2xl border border-gray-300 p-6 h-[523px]">
        {/* 标题 */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            在AI中出现频率
          </h3>
          <p className="text-xs text-gray-600">
            搜索关键词内容在人工智能中出现频率的三维度分析
          </p>
        </div>

        {/* 加载状态 */}
        {renderState === "loading" && (
          <div className="flex items-center justify-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* 错误状态 */}
        {renderState === "error" && (
          <div className="flex items-center justify-center h-[400px]">
            <div className="text-center">
              <p className="text-red-500 text-sm mb-2">加载失败</p>
              <p className="text-gray-500 text-xs">{error || "未知错误"}</p>
            </div>
          </div>
        )}

        {/* 雷达图 - 移除空数据状态检查 */}
        {renderState === "normal" && (
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e0e7ff" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fontSize: 12, fill: "#374151" }}
                  className="text-xs"
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  name="品牌AI可见性"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#3b82f6" }}
                />
                <Legend
                  wrapperStyle={{
                    paddingTop: "20px",
                    fontSize: "12px",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    );
  }
);

AIFrequencyChart.displayName = "AIFrequencyChart";
