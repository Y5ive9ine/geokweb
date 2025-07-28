/**
 * References API统一导出
 */

import { api } from "@/lib/api-client";

// 引用查询参数接口
export interface ReferencesListParams {
  page?: number;
  page_size?: number;
  category?: string;
}

// 引用接口
export interface Reference {
  id?: string;
  brand_id?: string;
  ai_response_id?: string;
  url?: string;
  title?: string;
  description?: string;
  domain?: string;
  source_type?: string;
  position?: number;
  relevance_score?: number;
  extracted_date?: string;
  created_at?: string;
  updated_at?: string;
}

// 热门引用查询参数
export interface TopReferencesParams {
  limit?: number;
}

// 引用响应接口
export interface ReferencesResponse {
  references: Reference[];
  pagination?: {
    current_page: number;
    page_size: number;
    total_items: number;
    total_pages: number;
  };
}

// 引用提取请求接口
export interface ExtractReferencesRequest {
  response_id: string;
}

// 引用提取响应接口
export interface ExtractReferencesResponse {
  extracted_count: number;
  references: Reference[];
}

// 专门的References API方法
export const referencesApi = {
  /**
   * 获取品牌引用
   * GET /brands/{id}/references
   */
  getBrandReferences: (brandId: string, category?: string) => {
    const searchParams = new URLSearchParams();
    if (category) searchParams.append("category", category);
    
    const queryString = searchParams.toString();
    const endpoint = queryString 
      ? `/api/brands/${brandId}/references?${queryString}`
      : `/api/brands/${brandId}/references`;
    
    return api.get<ReferencesResponse>(endpoint);
  },

  /**
   * 获取引用列表
   * GET /references
   */
  getReferences: (params?: ReferencesListParams) => {
    const searchParams = new URLSearchParams();
    
    if (params?.page) searchParams.append("page", params.page.toString());
    if (params?.page_size) searchParams.append("page_size", params.page_size.toString());
    
    const queryString = searchParams.toString();
    const endpoint = queryString ? `/api/references?${queryString}` : "/api/references";
    
    return api.get<ReferencesResponse>(endpoint);
  },

  /**
   * 获取引用详情
   * GET /references/{id}
   */
  getReference: (id: string) => {
    return api.get<Reference>(`/api/references/${id}`);
  },

  /**
   * 删除引用
   * DELETE /references/{id}
   */
  deleteReference: (id: string) => {
    return api.delete(`/api/references/${id}`);
  },

  /**
   * 获取热门引用
   * GET /references/top
   */
  getTopReferences: (params?: TopReferencesParams) => {
    const searchParams = new URLSearchParams();
    if (params?.limit) searchParams.append("limit", params.limit.toString());
    
    const queryString = searchParams.toString();
    const endpoint = queryString 
      ? `/api/references/top?${queryString}` 
      : "/api/references/top";
    
    return api.get<ReferencesResponse>(endpoint);
  },

  /**
   * 按域名获取引用
   * GET /references/domain/{domain}
   */
  getReferencesByDomain: (domain: string) => {
    return api.get<ReferencesResponse>(`/api/references/domain/${domain}`);
  },

  /**
   * 从AI响应提取引用
   * POST /references/extract/{responseId}
   */
  extractReferences: (responseId: string) => {
    return api.post<ExtractReferencesResponse>(`/api/references/extract/${responseId}`);
  },

  /**
   * 按分类获取引用
   * 便捷方法，基于getReferences实现
   */
  getReferencesByCategory: (category: string, params?: Omit<ReferencesListParams, 'category'>) => {
    return referencesApi.getReferences({ ...params, category });
  },

  /**
   * 批量删除引用
   * 便捷方法
   */
  batchDeleteReferences: async (ids: string[]) => {
    const promises = ids.map(id => referencesApi.deleteReference(id));
    return Promise.all(promises);
  },
};

// 引用相关的工具函数
export const referencesUtils = {
  // 引用来源类型
  SOURCE_TYPES: {
    article: "文章",
    blog: "博客",
    news: "新闻",
    forum: "论坛",
    social: "社交媒体",
    official: "官方网站",
    wiki: "维基",
    other: "其他",
  },

  // 格式化来源类型
  formatSourceType: (sourceType: string): string => {
    return referencesUtils.SOURCE_TYPES[sourceType as keyof typeof referencesUtils.SOURCE_TYPES] || sourceType;
  },

  // 提取域名
  extractDomain: (url: string): string => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return "未知域名";
    }
  },

  // 验证URL
  isValidUrl: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  // 计算引用质量分数
  calculateReferenceQualityScore: (reference: Reference): number => {
    let score = 0;

    // URL有效性
    if (reference.url && referencesUtils.isValidUrl(reference.url)) score += 20;

    // 标题完整性
    if (reference.title && reference.title.length >= 10) score += 20;

    // 描述完整性
    if (reference.description && reference.description.length >= 30) score += 20;

    // 相关性分数
    if (reference.relevance_score) {
      score += Math.min(reference.relevance_score * 20, 20);
    }

    // 位置权重（位置越靠前分数越高）
    if (reference.position && reference.position <= 3) score += 20;
    else if (reference.position && reference.position <= 10) score += 10;

    return Math.min(score, 100);
  },

  // 引用排序
  sortReferences: (references: Reference[], sortBy: 'date' | 'relevance' | 'position' = 'date'): Reference[] => {
    const sorted = [...references];
    
    switch (sortBy) {
      case 'date':
        return sorted.sort((a, b) => 
          new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
        );
      case 'relevance':
        return sorted.sort((a, b) => (b.relevance_score || 0) - (a.relevance_score || 0));
      case 'position':
        return sorted.sort((a, b) => (a.position || 999) - (b.position || 999));
      default:
        return sorted;
    }
  },

  // 按域名分组引用
  groupReferencesByDomain: (references: Reference[]): Record<string, Reference[]> => {
    const grouped: Record<string, Reference[]> = {};
    
    references.forEach(ref => {
      const domain = ref.domain || referencesUtils.extractDomain(ref.url || '');
      if (!grouped[domain]) {
        grouped[domain] = [];
      }
      grouped[domain].push(ref);
    });
    
    return grouped;
  },

  // 获取引用统计信息
  getReferencesStats: (references: Reference[]): {
    total: number;
    byDomain: Record<string, number>;
    bySourceType: Record<string, number>;
    averageRelevance: number;
    topDomains: Array<{ domain: string; count: number }>;
  } => {
    const stats = {
      total: references.length,
      byDomain: {} as Record<string, number>,
      bySourceType: {} as Record<string, number>,
      averageRelevance: 0,
      topDomains: [] as Array<{ domain: string; count: number }>,
    };

    let totalRelevance = 0;

    references.forEach(ref => {
      // 域名统计
      const domain = ref.domain || referencesUtils.extractDomain(ref.url || '');
      stats.byDomain[domain] = (stats.byDomain[domain] || 0) + 1;

      // 来源类型统计
      if (ref.source_type) {
        stats.bySourceType[ref.source_type] = (stats.bySourceType[ref.source_type] || 0) + 1;
      }

      // 相关性统计
      if (ref.relevance_score) {
        totalRelevance += ref.relevance_score;
      }
    });

    // 计算平均相关性
    if (stats.total > 0) {
      stats.averageRelevance = totalRelevance / stats.total;
    }

    // 获取前5个域名
    stats.topDomains = Object.entries(stats.byDomain)
      .map(([domain, count]) => ({ domain, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return stats;
  },

  // 生成引用摘要
  generateReferenceSummary: (reference: Reference): string => {
    const parts = [];
    
    if (reference.title) {
      parts.push(reference.title);
    }
    
    if (reference.domain) {
      parts.push(`来源: ${reference.domain}`);
    }
    
    if (reference.relevance_score) {
      parts.push(`相关性: ${(reference.relevance_score * 100).toFixed(0)}%`);
    }
    
    return parts.join(' | ');
  },

  // 检查是否为可信域名
  isTrustedDomain: (domain: string): boolean => {
    const trustedDomains = [
      'wikipedia.org',
      'baidu.com',
      'zhihu.com',
      'weibo.com',
      'gov.cn',
      'edu.cn',
      'org.cn',
    ];
    
    return trustedDomains.some(trusted => domain.endsWith(trusted));
  },
};

export default referencesApi; 