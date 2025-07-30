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

// API响应接口 - 支持嵌套数据结构
interface APIVisibilityResponse {
  data: AIVisibilityStats;
}

interface AIFrequencyChartProps {
  data: APIVisibilityResponse | AIVisibilityStats | null;
  loading: boolean;
  error: string | null;
}

export const AIFrequencyChart = React.memo<AIFrequencyChartProps>(
  ({ data, loading, error }) => {
    // 使用useMemo缓存数据点计算，避免每次render都重新计算
    const radarData = useMemo(() => {
      // 始终返回6个维度保持六边形
      const maxKeywords = 6;
      
      if (!data) {
        console.log("AIFrequencyChart: No data provided");
        return {
          data: Array.from({ length: maxKeywords }, (_, index) => ({
            subject: `关键词${index + 1}`,
            A: 0,
          })),
          maxValue: 100
        };
      }

      // 检查数据结构 - 支持两种可能的结构
      let keywordFrequency: any[] = [];
      if ('data' in data && data.data && 'keyword_frequency' in data.data) {
        // 嵌套结构：data.data.keyword_frequency
        keywordFrequency = data.data.keyword_frequency;
        console.log("AIFrequencyChart: Using nested data structure", keywordFrequency);
      } else if ('keyword_frequency' in data) {
        // 平铺结构：data.keyword_frequency
        keywordFrequency = data.keyword_frequency;
        console.log("AIFrequencyChart: Using flat data structure", keywordFrequency);
      }

      if (!keywordFrequency || keywordFrequency.length === 0) {
        console.log("AIFrequencyChart: No keyword_frequency data available");
        return {
          data: Array.from({ length: maxKeywords }, (_, index) => ({
            subject: `关键词${index + 1}`,
            A: 0,
          })),
          maxValue: 100
        };
      }

      // 过滤、排序和取前6个关键词
      const validKeywords = keywordFrequency
        .filter(item => item.keyword && item.frequency > 0) // 过滤有效数据
        .sort((a, b) => b.frequency - a.frequency) // 按频率降序排序
        .slice(0, maxKeywords); // 取前6个
      
      console.log("AIFrequencyChart: Processed keywords", validKeywords);
      
      // 计算最大frequency值，用于动态设置坐标轴范围
      const maxFrequency = validKeywords.length > 0 
        ? Math.max(...validKeywords.map(item => item.frequency))
        : 100;
      
      // 为坐标轴计算一个合适的最大值（稍微大于实际最大值，便于显示）
      const axisMaxValue = Math.ceil(maxFrequency * 1.1 / 50) * 50; // 向上取整到50的倍数
      
      // 构建雷达图数据 - 使用真实frequency值
      const result = validKeywords.map(item => ({
        subject: item.keyword,
        A: item.frequency, // 使用真实频率值，不再限制范围
      }));
      
      // 如果关键词不足6个，用空关键词填充
      while (result.length < maxKeywords) {
        result.push({
          subject: `关键词${result.length + 1}`,
          A: 0,
        });
      }
      
      console.log("AIFrequencyChart: Final radar data", result);
      console.log("AIFrequencyChart: Max frequency", maxFrequency, "Axis max", axisMaxValue);
      
      return {
        data: result,
        maxValue: axisMaxValue
      };
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

        {/* 雷达图 - 移除空数据状态检查 */}
        {renderState === "normal" && (
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData.data}>
                <PolarGrid stroke="#e0e7ff" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fontSize: 12, fill: "#374151" }}
                  className="text-xs"
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, radarData.maxValue]}
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
