/**
 * AI Visibility API统一导出
 */

import { api } from "@/lib/api-client";

// AI可见性趋势查询参数接口
export interface AIVisibilityTrendParams {
  days?: number;
}

// AI可见性指标接口
export interface AIVisibilityMetrics {
  id?: string;
  ai_search_id?: string;
  ai_response_id?: string;
  brand_id?: string;
  visibility_data?: any;
  keyword_data?: any;
  overall_score?: string;
  frequency_score?: string;
  recommendation_score?: string;
  search_rate_score?: string;
  first_choice_score?: string;
  calculated_at?: string;
  ai_search?: {
    id?: string;
    question?: string;
    question_type?: string;
    keywords?: string;
    status?: string;
    region?: string;
    language?: string;
  };
  ai_response?: {
    id?: string;
    response?: string;
    brand_position?: number;
    brand_sentiment?: string;
    confidence?: string;
    relevance?: string;
  };
  brand?: {
    id?: string;
    name?: string;
    domain?: string;
    keywords?: string;
    description?: string;
  };
}

// AI可见性趋势响应接口
export interface AIVisibilityTrendResponse {
  brand_id: string;
  days: number;
  trend: AIVisibilityMetrics[];
  count: number;
  summary: {
    total_metrics: number;
    date_range_start: string;
    date_range_end: string;
  };
}

// AI可见性报告接口
export interface AIVisibilityReport {
  brand_id: string;
  report_date: string;
  summary: any;
  metrics: any;
  recommendations: string[];
}

// AI可见性对比接口
export interface AIVisibilityComparison {
  brand1: any;
  brand2: any;
  comparison: any;
  insights: string[];
}

// 批量计算请求接口
export interface BatchCalculateRequest {
  response_ids: string[];
}

// 批量计算响应接口
export interface BatchCalculateResponse {
  total: number;
  success_count: number;
  error_count: number;
  results: any;
}

// AI可见性统计接口
export interface AIVisibilityStats {
  total_metrics: number;
  average_score: string;
  brand_id?: string;
  timestamp: string;
}

// 专门的AI Visibility API方法
export const aiVisibilityApi = {
  /**
   * 获取品牌可见性趋势
   * GET /brands/{id}/ai-visibility/trend
   */
  getBrandVisibilityTrend: (brandId: string, params?: AIVisibilityTrendParams) => {
    const searchParams = new URLSearchParams();
    if (params?.days) searchParams.append("days", params.days.toString());
    
    const queryString = searchParams.toString();
    const endpoint = queryString 
      ? `/api/brands/${brandId}/ai-visibility/trend?${queryString}`
      : `/api/brands/${brandId}/ai-visibility/trend`;
    
    return api.get<AIVisibilityTrendResponse>(endpoint);
  },

  /**
   * 计算品牌可见性聚合
   * POST /brands/{id}/ai-visibility/aggregation
   */
  calculateBrandAggregation: (brandId: string) => {
    return api.post(`/api/brands/${brandId}/ai-visibility/aggregation`);
  },

  /**
   * 获取品牌可见性聚合历史
   * GET /brands/{id}/ai-visibility/aggregation
   */
  getBrandAggregationHistory: (brandId: string) => {
    return api.get(`/api/brands/${brandId}/ai-visibility/aggregation`);
  },

  /**
   * 生成品牌可见性报告
   * GET /brands/{id}/ai-visibility/report
   */
  generateBrandVisibilityReport: (brandId: string) => {
    return api.get<AIVisibilityReport>(`/api/brands/${brandId}/ai-visibility/report`);
  },

  /**
   * 品牌可见性对比
   * GET /ai-visibility/compare/brands/{id1}/{id2}
   */
  compareBrands: (brandId1: string, brandId2: string) => {
    return api.get<AIVisibilityComparison>(`/api/ai-visibility/compare/brands/${brandId1}/${brandId2}`);
  },

  /**
   * 计算AI响应可见性指标
   * POST /ai-visibility/responses/{responseId}/calculate
   */
  calculateResponseMetrics: (responseId: string) => {
    return api.post(`/api/ai-visibility/responses/${responseId}/calculate`);
  },

  /**
   * 获取AI响应可见性指标
   * GET /ai-visibility/responses/{responseId}/metrics
   */
  getResponseMetrics: (responseId: string) => {
    return api.get<AIVisibilityMetrics>(`/api/ai-visibility/responses/${responseId}/metrics`);
  },

  /**
   * 批量计算可见性指标
   * POST /ai-visibility/batch-calculate
   */
  batchCalculateMetrics: (data: BatchCalculateRequest) => {
    return api.post<BatchCalculateResponse>("/api/ai-visibility/batch-calculate", data);
  },

  /**
   * 获取可见性指标统计
   * GET /ai-visibility/stats
   */
  getVisibilityStats: (brandId?: string) => {
    const searchParams = new URLSearchParams();
    if (brandId) searchParams.append("brand_id", brandId);
    
    const queryString = searchParams.toString();
    const endpoint = queryString 
      ? `/api/ai-visibility/stats?${queryString}`
      : "/api/ai-visibility/stats";
    
    return api.get<AIVisibilityStats>(endpoint);
  },
};

// AI可见性相关的工具函数
export const aiVisibilityUtils = {
  // 格式化可见性分数
  formatVisibilityScore: (score: string | number): string => {
    const numScore = typeof score === 'string' ? parseFloat(score) : score;
    if (isNaN(numScore)) return "0%";
    return `${numScore.toFixed(1)}%`;
  },

  // 计算平均分数
  calculateAverageScore: (metrics: AIVisibilityMetrics[]): number => {
    if (!metrics || metrics.length === 0) return 0;
    
    const scores = metrics
      .map(m => parseFloat(m.overall_score || '0'))
      .filter(s => !isNaN(s));
    
    if (scores.length === 0) return 0;
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  },

  // 生成趋势分析文本
  generateTrendAnalysis: (trend: AIVisibilityMetrics[]): string => {
    if (!trend || trend.length < 2) return "数据不足，无法生成趋势分析";
    
    const latestScore = parseFloat(trend[trend.length - 1]?.overall_score || '0');
    const previousScore = parseFloat(trend[trend.length - 2]?.overall_score || '0');
    
    const change = latestScore - previousScore;
    if (change > 0) {
      return `品牌可见性提升了 ${change.toFixed(1)}%`;
    } else if (change < 0) {
      return `品牌可见性下降了 ${Math.abs(change).toFixed(1)}%`;
    } else {
      return "品牌可见性保持稳定";
    }
  },

  // 获取分数级别
  getScoreLevel: (score: string | number): "excellent" | "good" | "average" | "poor" => {
    const numScore = typeof score === 'string' ? parseFloat(score) : score;
    if (numScore >= 80) return "excellent";
    if (numScore >= 60) return "good";
    if (numScore >= 40) return "average";
    return "poor";
  },

  // 格式化日期范围
  formatDateRange: (startDate: string, endDate: string): string => {
    try {
      const start = new Date(startDate).toLocaleDateString('zh-CN');
      const end = new Date(endDate).toLocaleDateString('zh-CN');
      return `${start} - ${end}`;
    } catch {
      return "未知日期范围";
    }
  },
};

export default aiVisibilityApi; 