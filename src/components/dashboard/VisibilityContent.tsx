"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import {
  useBrandVisibilityTrend,
  useVisibilityStats,
  useBrandVisibilityReport,
} from "@/hooks/useAIVisibility";
import { authUtils } from "@/services/auth";
import { SearchSection } from "./SearchSection";
import { AIFrequencyChart } from "./AIFrequencyChart";
import { BrandSearchRateCard } from "./BrandSearchRateCard";
import { BrandRecommendationCard } from "./BrandRecommendationCard";
import { BrandMarketShareCard } from "./BrandMarketShareCard";

export function VisibilityContent() {
  const [currentBrandId, setCurrentBrandId] = useState<string>("");

  useEffect(() => {
    // 从localStorage获取用户信息，获取品牌ID
    const userInfo = authUtils.getUserInfo();
    if (userInfo?.current_brand_id) {
      setCurrentBrandId(userInfo.current_brand_id);
    } else {
      // 如果没有品牌ID，可以使用默认值或显示错误
      setCurrentBrandId("4fc86ecb-8e0e-476b-8826-bf4dc95fce0d");
    }
  }, []);

  // 使用useMemo缓存API参数，避免不必要的重新请求
  const trendParams = useMemo(() => ({ days: 30 }), []);

  // 只有当brandId存在时才发起API请求
  const shouldFetchData = Boolean(currentBrandId);

  // 获取API数据，传递给子组件
  const {
    trend,
    loading: trendLoading,
    error: trendError,
  } = useBrandVisibilityTrend(
    shouldFetchData ? currentBrandId : "",
    trendParams
  );
  const {
    stats,
    loading: statsLoading,
    error: statsError,
  } = useVisibilityStats(shouldFetchData ? currentBrandId : undefined);
  const {
    report,
    loading: reportLoading,
    error: reportError,
  } = useBrandVisibilityReport(shouldFetchData ? currentBrandId : "");

  // 使用useCallback缓存render函数
  const renderAIFrequencyChart = useCallback(
    () => (
      <AIFrequencyChart
        data={stats}
        loading={statsLoading}
        error={statsError}
      />
    ),
    [stats, statsLoading, statsError]
  );

  const renderBrandRecommendationCard = useCallback(
    () => (
      <BrandRecommendationCard
        data={stats}
        loading={statsLoading}
        error={statsError}
      />
    ),
    [stats, statsLoading, statsError]
  );

  const renderBrandSearchRateCard = useCallback(
    () => (
      <BrandSearchRateCard
        data={stats}
        loading={statsLoading}
        error={statsError}
      />
    ),
    [stats, statsLoading, statsError]
  );

  const renderBrandMarketShareCard = useCallback(
    () => (
      <BrandMarketShareCard
        data={report}
        loading={reportLoading}
        error={reportError}
      />
    ),
    [report, reportLoading, reportError]
  );

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
      {/* 搜索区域 */}
      <SearchSection />

      {/* 主要内容网格 - 响应式优化 */}
      <div className="mt-6 space-y-6">
        {/* 移动端：垂直布局，桌面端：网格布局 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* AI频率图表 */}
          <div className="xl:col-span-1 order-1">
            {renderAIFrequencyChart()}
          </div>

          {/* 右侧卡片区域 */}
          <div className="xl:col-span-2 order-2 space-y-6">
            {/* 上方两个卡片 - 响应式网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderBrandRecommendationCard()}
              {renderBrandSearchRateCard()}
            </div>

            {/* 下方市场占有率卡片 */}
            {renderBrandMarketShareCard()}
          </div>
        </div>
      </div>

      {/* 底部提示文本 */}
      <div className="mt-8 md:mt-12 text-center px-4">
        <p className="text-base md:text-lg text-gray-600 font-light">
          看看您的品牌关键词在 AI答案中出现的频率
        </p>
      </div>
    </div>
  );
}
