/**
 * AI Visibility数据管理的React Hooks
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { aiVisibilityApi, AIVisibilityTrendParams, AIVisibilityMetrics, AIVisibilityTrendResponse, AIVisibilityReport, AIVisibilityStats } from "@/services/ai-visibility";

// 品牌可见性趋势Hook
export const useBrandVisibilityTrend = (brandId: string, params?: AIVisibilityTrendParams) => {
  const [trend, setTrend] = useState<AIVisibilityTrendResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrend = useCallback(async (days?: number) => {
    if (!brandId) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.getBrandVisibilityTrend(brandId, { ...params, days });
      
      if (response.success && response.data) {
        setTrend(response.data);
      } else {
        setError(response.error || response.message || "Failed to fetch visibility trend");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [brandId, params]);

  useEffect(() => {
    if (brandId) {
      fetchTrend(params?.days);
    }
  }, [brandId, params?.days, fetchTrend]);

  const refresh = useCallback(() => {
    fetchTrend(params?.days);
  }, [fetchTrend, params?.days]);

  return { trend, loading, error, refresh };
};

// 品牌可见性报告Hook
export const useBrandVisibilityReport = (brandId: string) => {
  const [report, setReport] = useState<AIVisibilityReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReport = useCallback(async () => {
    if (!brandId) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.generateBrandVisibilityReport(brandId);
      
      if (response.success && response.data) {
        setReport(response.data);
      } else {
        setError(response.error || response.message || "Failed to generate visibility report");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [brandId]);

  useEffect(() => {
    if (brandId) {
      fetchReport();
    }
  }, [brandId, fetchReport]);

  const refresh = useCallback(() => {
    fetchReport();
  }, [fetchReport]);

  return { report, loading, error, refresh };
};

// 可见性统计Hook
export const useVisibilityStats = (brandId?: string) => {
  const [stats, setStats] = useState<AIVisibilityStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.getVisibilityStats(brandId);
      
      if (response.success && response.data) {
        setStats(response.data);
      } else {
        setError(response.error || response.message || "Failed to fetch visibility stats");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [brandId]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const refresh = useCallback(() => {
    fetchStats();
  }, [fetchStats]);

  return { stats, loading, error, refresh };
};

// 品牌对比Hook
export const useBrandComparison = (brandId1?: string, brandId2?: string) => {
  const [comparison, setComparison] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const compare = useCallback(async () => {
    if (!brandId1 || !brandId2) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.compareBrands(brandId1, brandId2);
      
      if (response.success && response.data) {
        setComparison(response.data);
      } else {
        setError(response.error || response.message || "Failed to compare brands");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [brandId1, brandId2]);

  useEffect(() => {
    if (brandId1 && brandId2) {
      compare();
    }
  }, [brandId1, brandId2, compare]);

  return { comparison, loading, error, compare };
};

// 计算可见性聚合Hook
export const useBrandAggregation = (brandId: string) => {
  const [aggregation, setAggregation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculate = useCallback(async () => {
    if (!brandId) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.calculateBrandAggregation(brandId);
      
      if (response.success) {
        // 获取最新的聚合历史
        const historyResponse = await aiVisibilityApi.getBrandAggregationHistory(brandId);
        if (historyResponse.success && historyResponse.data) {
          setAggregation(historyResponse.data);
        }
      } else {
        setError(response.error || response.message || "Failed to calculate aggregation");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [brandId]);

  const fetchHistory = useCallback(async () => {
    if (!brandId) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.getBrandAggregationHistory(brandId);
      
      if (response.success && response.data) {
        setAggregation(response.data);
      } else {
        setError(response.error || response.message || "Failed to fetch aggregation history");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [brandId]);

  useEffect(() => {
    if (brandId) {
      fetchHistory();
    }
  }, [brandId, fetchHistory]);

  return { aggregation, loading, error, calculate, refresh: fetchHistory };
};

// 响应指标Hook
export const useResponseMetrics = (responseId?: string) => {
  const [metrics, setMetrics] = useState<AIVisibilityMetrics | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.getResponseMetrics(id);
      
      if (response.success && response.data) {
        setMetrics(response.data);
      } else {
        setError(response.error || response.message || "Failed to fetch response metrics");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  const calculateMetrics = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.calculateResponseMetrics(id);
      
      if (response.success) {
        // 重新获取计算后的指标
        await fetchMetrics(id);
      } else {
        setError(response.error || response.message || "Failed to calculate response metrics");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [fetchMetrics]);

  useEffect(() => {
    if (responseId) {
      fetchMetrics(responseId);
    }
  }, [responseId, fetchMetrics]);

  return { metrics, loading, error, fetchMetrics, calculateMetrics };
};

// 批量计算指标Hook
export const useBatchCalculateMetrics = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const batchCalculate = useCallback(async (responseIds: string[]) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await aiVisibilityApi.batchCalculateMetrics({ response_ids: responseIds });
      
      if (response.success && response.data) {
        setResult(response.data);
        return response.data;
      } else {
        const errorMsg = response.error || response.message || "Failed to batch calculate metrics";
        setError(errorMsg);
        throw new Error(errorMsg);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(errorMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { batchCalculate, loading, error, result };
}; 