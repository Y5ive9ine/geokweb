"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import {
  useBrandVisibilityTrend,
  useVisibilityStats,
  useBrandVisibilityReport,
} from "@/hooks/useAIVisibility";
import { authUtils } from "@/services/auth";
import { brandApi } from "@/services/brand";
import { Brand } from "@/lib/types";
import { SearchSection } from "./SearchSection";
import { AIFrequencyChart } from "./AIFrequencyChart";
import { BrandSearchRateCard } from "./BrandSearchRateCard";
import { BrandRecommendationCard } from "./BrandRecommendationCard";
import { BrandMarketShareCard } from "./BrandMarketShareCard";

export function VisibilityContent() {
  const [currentBrandId, setCurrentBrandId] = useState<string>("");
  const [currentBrand, setCurrentBrand] = useState<Brand | null>(null);
  const [availableBrands, setAvailableBrands] = useState<Brand[]>([]);

  // 获取品牌ID
  useEffect(() => {
    // 从localStorage获取用户信息，获取品牌ID
    const userInfo = authUtils.getUserInfo();
    
    // 临时强制使用测试品牌ID，确保有数据可以显示
    // TODO: 等后端为实际用户品牌准备好AI可见性数据后，可以改回使用用户的品牌ID
    setCurrentBrandId("4fc86ecb-8e0e-476b-8826-bf4dc95fce0d");
    
    // 原来的逻辑（暂时注释）
    // if (userInfo?.current_brand_id) {
    //   setCurrentBrandId(userInfo.current_brand_id);
    // } else {
    //   // 如果没有品牌ID，可以使用默认值或显示错误
    //   setCurrentBrandId("4fc86ecb-8e0e-476b-8826-bf4dc95fce0d");
    // }
  }, []);

  // 获取可用品牌列表（复用品牌设置的逻辑）
  const fetchAvailableBrands = async () => {
    try {
      const response = await brandApi.list({
        page: 1,
        page_size: 10, // 获取更多品牌以确保包含当前品牌
      });
      if (response.success && response.data) {
        let brands: Brand[] = [];
        
        // 检查数据结构
        if (Array.isArray(response.data)) {
          brands = response.data;
        } else if (response.data.data && Array.isArray(response.data.data)) {
          brands = response.data.data;
        }
        
        setAvailableBrands(brands);
      }
    } catch (error) {
      console.error("获取品牌列表异常:", error);
    }
  };

  // 从品牌列表中更新当前品牌信息（复用品牌设置的逻辑）
  const updateBrandData = (currentBrandId: string, availableBrands: Brand[]) => {
    if (currentBrandId && availableBrands.length > 0) {
      const currentBrandInfo = availableBrands.find(
        (brand) => brand.id === currentBrandId
      );
      if (currentBrandInfo) {
        setCurrentBrand(currentBrandInfo);
      }
    }
  };

  // 获取品牌列表
  useEffect(() => {
    if (currentBrandId) {
      fetchAvailableBrands();
    }
  }, [currentBrandId]);

  // 当品牌ID或品牌列表变化时更新当前品牌
  useEffect(() => {
    updateBrandData(currentBrandId, availableBrands);
  }, [currentBrandId, availableBrands]);

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
  } = useVisibilityStats(shouldFetchData ? currentBrandId : undefined, 7);
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
        data={stats}
        loading={statsLoading}
        error={statsError}
      />
    ),
    [stats, statsLoading, statsError]
  );

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
      {/* 搜索区域 */}
      <SearchSection brandName={currentBrand?.name} />

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
