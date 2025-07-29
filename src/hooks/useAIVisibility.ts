/**
 * AI Visibility数据管理的React Hooks
 */

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
  aiVisibilityApi,
  AIVisibilityTrendParams,
  AIVisibilityMetrics,
  AIVisibilityTrendResponse,
  AIVisibilityReport,
  AIVisibilityStats,
} from "@/services/ai-visibility";

// 缓存管理
const trendCache = new Map<
  string,
  { data: AIVisibilityTrendResponse; timestamp: number }
>();
const statsCache = new Map<
  string,
  { data: AIVisibilityStats; timestamp: number }
>();
const reportCache = new Map<
  string,
  { data: AIVisibilityReport; timestamp: number }
>();
const CACHE_DURATION = 5 * 60 * 1000; // 5分钟缓存

// 防抖函数
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// 品牌可见性趋势Hook - 优化版本
export const useBrandVisibilityTrend = (
  brandId: string,
  params?: AIVisibilityTrendParams
) => {
  const [trend, setTrend] = useState<AIVisibilityTrendResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 防抖brandId，避免频繁请求
  const debouncedBrandId = useDebounce(brandId, 300);

  // 用于控制请求的引用
  const abortControllerRef = useRef<AbortController | null>(null);

  // 生成缓存key
  const cacheKey = useMemo(() => {
    if (!debouncedBrandId) return "";
    return `trend-${debouncedBrandId}-${params?.days || 30}`;
  }, [debouncedBrandId, params?.days]);

  const fetchTrend = useCallback(async () => {
    if (!debouncedBrandId || !cacheKey) return;

    // 检查缓存
    const cached = trendCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      setTrend(cached.data);
      return;
    }

    // 取消之前的请求
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.getBrandVisibilityTrend(
        debouncedBrandId,
        params
      );

      if (response.success && response.data) {
        setTrend(response.data);
        // 更新缓存
        trendCache.set(cacheKey, {
          data: response.data,
          timestamp: Date.now(),
        });
      } else {
        const errorMsg =
          response.error ||
          response.message ||
          "Failed to fetch visibility trend";
        setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
      }
    } catch (err) {
      // 忽略被取消的请求错误
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
    } finally {
      setLoading(false);
    }
  }, [debouncedBrandId, cacheKey, params]);

  useEffect(() => {
    if (debouncedBrandId && cacheKey) {
      fetchTrend();
    }

    // 清理函数
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchTrend]);

  const refresh = useCallback(() => {
    if (cacheKey) {
      // 清除缓存后重新获取
      trendCache.delete(cacheKey);
      fetchTrend();
    }
  }, [cacheKey, fetchTrend]);

  return { trend, loading, error, refresh };
};

// 品牌可见性报告Hook - 优化版本
export const useBrandVisibilityReport = (brandId: string) => {
  const [report, setReport] = useState<AIVisibilityReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 防抖brandId，避免频繁请求
  const debouncedBrandId = useDebounce(brandId, 500); // 报告请求防抖时间稍长

  // 用于控制请求的引用
  const abortControllerRef = useRef<AbortController | null>(null);

  // 生成缓存key
  const cacheKey = useMemo(() => {
    if (!debouncedBrandId) return "";
    return `report-${debouncedBrandId}`;
  }, [debouncedBrandId]);

  const fetchReport = useCallback(async () => {
    if (!debouncedBrandId || !cacheKey) return;

    // 检查缓存
    const cached = reportCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      setReport(cached.data);
      return;
    }

    // 取消之前的请求
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.generateBrandVisibilityReport(
        debouncedBrandId
      );

      if (response.success && response.data) {
        setReport(response.data);
        // 更新缓存
        reportCache.set(cacheKey, {
          data: response.data,
          timestamp: Date.now(),
        });
      } else {
        const errorMsg =
          response.error ||
          response.message ||
          "Failed to generate visibility report";
        setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
      }
    } catch (err) {
      // 忽略被取消的请求错误
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
    } finally {
      setLoading(false);
    }
  }, [debouncedBrandId, cacheKey]);

  useEffect(() => {
    if (debouncedBrandId && cacheKey) {
      fetchReport();
    }

    // 清理函数
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchReport]);

  const refresh = useCallback(() => {
    if (cacheKey) {
      // 清除缓存后重新获取
      reportCache.delete(cacheKey);
      fetchReport();
    }
  }, [cacheKey, fetchReport]);

  return { report, loading, error, refresh };
};

// 可见性统计Hook - 优化版本
export const useVisibilityStats = (brandId?: string) => {
  const [stats, setStats] = useState<AIVisibilityStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 防抖brandId，避免频繁请求
  const debouncedBrandId = useDebounce(brandId || "", 300);

  // 用于控制请求的引用
  const abortControllerRef = useRef<AbortController | null>(null);

  // 生成缓存key
  const cacheKey = useMemo(() => {
    if (!debouncedBrandId) return "";
    return `stats-${debouncedBrandId}`;
  }, [debouncedBrandId]);

  const fetchStats = useCallback(async () => {
    if (!debouncedBrandId || !cacheKey) return;

    // 检查缓存
    const cached = statsCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      setStats(cached.data);
      return;
    }

    // 取消之前的请求
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.getVisibilityStats(
        debouncedBrandId
      );

      if (response.success && response.data) {
        setStats(response.data);
        // 更新缓存
        statsCache.set(cacheKey, {
          data: response.data,
          timestamp: Date.now(),
        });
      } else {
        const errorMsg =
          response.error ||
          response.message ||
          "Failed to fetch visibility stats";
        setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
      }
    } catch (err) {
      // 忽略被取消的请求错误
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
    } finally {
      setLoading(false);
    }
  }, [debouncedBrandId, cacheKey]);

  useEffect(() => {
    if (debouncedBrandId && cacheKey) {
      fetchStats();
    }

    // 清理函数
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchStats]);

  const refresh = useCallback(() => {
    if (cacheKey) {
      // 清除缓存后重新获取
      statsCache.delete(cacheKey);
      fetchStats();
    }
  }, [cacheKey, fetchStats]);

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
        const errorMsg =
          response.error || response.message || "Failed to compare brands";
        setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
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
        const historyResponse =
          await aiVisibilityApi.getBrandAggregationHistory(brandId);
        if (historyResponse.success && historyResponse.data) {
          setAggregation(historyResponse.data);
        }
      } else {
        const errorMsg =
          response.error ||
          response.message ||
          "Failed to calculate aggregation";
        setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
    } finally {
      setLoading(false);
    }
  }, [brandId]);

  const fetchHistory = useCallback(async () => {
    if (!brandId) return;

    setLoading(true);
    setError(null);

    try {
      const response = await aiVisibilityApi.getBrandAggregationHistory(
        brandId
      );

      if (response.success && response.data) {
        setAggregation(response.data);
      } else {
        const errorMsg =
          response.error ||
          response.message ||
          "Failed to fetch aggregation history";
        setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
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
        const errorMsg =
          response.error ||
          response.message ||
          "Failed to fetch response metrics";
        setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
    } finally {
      setLoading(false);
    }
  }, []);

  const calculateMetrics = useCallback(
    async (id: string) => {
      setLoading(true);
      setError(null);

      try {
        const response = await aiVisibilityApi.calculateResponseMetrics(id);

        if (response.success) {
          // 重新获取计算后的指标
          await fetchMetrics(id);
        } else {
          const errorMsg =
            response.error ||
            response.message ||
            "Failed to calculate response metrics";
          setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Unknown error";
        setError(typeof errorMsg === "string" ? errorMsg : String(errorMsg));
      } finally {
        setLoading(false);
      }
    },
    [fetchMetrics]
  );

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
      const response = await aiVisibilityApi.batchCalculateMetrics({
        response_ids: responseIds,
      });

      if (response.success && response.data) {
        setResult(response.data);
        return response.data;
      } else {
        const errorMsg =
          response.error ||
          response.message ||
          "Failed to batch calculate metrics";
        const errorStr =
          typeof errorMsg === "string" ? errorMsg : String(errorMsg);
        setError(errorStr);
        throw new Error(errorStr);
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
