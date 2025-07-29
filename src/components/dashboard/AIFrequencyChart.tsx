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
        return [];
      }

      // 从真实数据中提取三个维度的平均值
      const calculateAverageRate = (rateArray: Array<{ brand: string; rate: number }>) => {
        if (!rateArray || rateArray.length === 0) return 0;
        const totalRate = rateArray.reduce((sum, item) => sum + item.rate, 0);
        return totalRate / rateArray.length;
      };

      const metrics = [
        {
          subject: '品牌首选率',
          data: data.brand_first_choice_rate,
        },
        {
          subject: '品牌推荐率',
          data: data.brand_recommend_rate,
        },
        {
          subject: '品牌搜索率',
          data: data.brand_search_rate,
        },
      ];

      return metrics.map(({ subject, data: rateData }) => {
        const avgRate = calculateAverageRate(rateData);
        return {
          subject,
          A: Math.max(0, Math.min(100, avgRate)), // 确保在0-100范围内
          fullMark: 100,
        };
      }).filter(item => item.A > 0); // 只保留有数据的维度
    }, [data]);

    // 使用useMemo缓存渲染状态判断
    const renderState = useMemo(() => {
      if (loading) return "loading";
      if (error) return "error";
      if (radarData.length === 0) return "empty";
      return "normal";
    }, [loading, error, radarData.length]);

    return (
      <div className="bg-white rounded-2xl border border-gray-300 p-6 h-[523px]">
        {/* 标题 */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            在AI中出现频率
          </h3>
          <p className="text-xs text-gray-600">
            搜索关键词内容在人工智能中出现频率的多维度分析
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

        {/* 空数据状态 */}
        {renderState === "empty" && (
          <div className="flex items-center justify-center h-[400px]">
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-2">暂无数据</p>
              <p className="text-gray-400 text-xs">请检查数据源或稍后重试</p>
            </div>
          </div>
        )}

        {/* 雷达图 */}
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
                  name="AI可见性分数"
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
