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
import { AIVisibilityTrendResponse } from "@/services/ai-visibility";

interface AIFrequencyChartProps {
  data: AIVisibilityTrendResponse | null;
  loading: boolean;
  error: string | null;
}

export const AIFrequencyChart = React.memo<AIFrequencyChartProps>(
  ({ data, loading, error }) => {
    // 使用useMemo缓存数据点计算，避免每次render都重新计算
    const radarData = useMemo(() => {
      if (!data || !data.trend || data.trend.length === 0) {
        // 如果没有数据，返回默认的5维度结构以确保雷达图能显示
        return [
          { subject: '总体评分', A: 0, fullMark: 100 },
          { subject: '频率评分', A: 0, fullMark: 100 },
          { subject: '推荐评分', A: 0, fullMark: 100 },
          { subject: '搜索率评分', A: 0, fullMark: 100 },
          { subject: '首选评分', A: 0, fullMark: 100 },
        ];
      }

      // 从trend数据中获取最新的评分数据
      const latestTrend = data.trend[data.trend.length - 1] || data.trend[0];
      
      // 安全转换评分数据
      const parseScore = (score: string | undefined): number => {
        if (!score) return 0;
        const parsed = parseFloat(score);
        return isNaN(parsed) ? 0 : Math.max(0, Math.min(100, parsed));
      };

      return [
        {
          subject: '总体评分',
          A: parseScore(latestTrend.overall_score),
          fullMark: 100,
        },
        {
          subject: '频率评分',
          A: parseScore(latestTrend.frequency_score),
          fullMark: 100,
        },
        {
          subject: '推荐评分',
          A: parseScore(latestTrend.recommendation_score),
          fullMark: 100,
        },
        {
          subject: '搜索率评分',
          A: parseScore(latestTrend.search_rate_score),
          fullMark: 100,
        },
        {
          subject: '首选评分',
          A: parseScore(latestTrend.first_choice_score),
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
            搜索关键词内容在人工智能中出现频率的五维度综合分析
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
                  name="品牌综合评分"
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
