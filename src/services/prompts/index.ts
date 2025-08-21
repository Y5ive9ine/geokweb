/**
 * Prompts API统一导出
 */

import { api } from "@/lib/api-client";

// 提示词查询参数接口
export interface PromptsListParams {
  page?: number;
  page_size?: number;
  category?: string;
}

// 提示词接口
export interface Prompt {
  id?: string;
  brand_id?: string;
  ai_search_id?: string;
  title?: string;
  content?: string;
  prompt?: string; // 兼容旧字段
  description?: string;
  category?: string;
  score?: number;
  ranking?: number;
  ranking_tier?: string;
  share_rate?: number;
  click_count?: number;
  view_count?: number;
  share_count?: number;
  reference_count?: number;
  engagement_rate?: number;
  conversion_rate?: number;
  main_keywords?: Record<string, number>;
  keyword_frequency?: Record<string, number>;
  keyword_density?: number;
  quality_score?: number;
  relevance_score?: number;
  originality_score?: number;
  region?: string;
  platform?: string;
  language?: string;
  status?: string;
  priority?: number;
  is_featured?: boolean;
  is_public?: boolean;
  is_favorite?: boolean;
  usage_count?: number;
  created_at?: string;
  updated_at?: string;
  brand?: any;
  ai_search?: any;
}

// 创建提示词请求接口
export interface CreatePromptRequest {
  brand_id?: string;
  title?: string;
  content?: string;
  prompt?: string; // 兼容字段
  description?: string;
  category?: string;
  is_public?: boolean;
  metadata?: any;
}

// 更新提示词请求接口
export interface UpdatePromptRequest {
  title?: string;
  content?: string;
  description?: string;
  category?: string;
}

// 热门提示词查询参数
export interface TopPromptsParams {
  limit?: number;
}

// 提示词响应接口
export interface PromptsResponse {
  prompts?: Prompt[];
  data?: {
    prompts?: Prompt[];
    brand_id?: string | null;
    count?: number;
    pagination?: {
      page: number;
      page_size: number;
      total: number;
      total_pages: number;
    };
  };
  pagination?: {
    current_page: number;
    page_size: number;
    total_items: number;
    total_pages: number;
    page?: number;
    total?: number;
  };
}

// 专门的Prompts API方法
export const promptsApi = {
  /**
   * 获取品牌提示词
   * GET /brands/{id}/prompts
   */
  getBrandPrompts: (brandId: string, category?: string) => {
    const searchParams = new URLSearchParams();
    if (category) searchParams.append("category", category);
    
    const queryString = searchParams.toString();
    const endpoint = queryString 
      ? `/api/brands/${brandId}/prompts?${queryString}`
      : `/api/brands/${brandId}/prompts`;
    
    return api.get<PromptsResponse>(endpoint);
  },

  /**
   * 获取提示词列表
   * GET /prompts
   */
  getPrompts: (params?: PromptsListParams) => {
    const searchParams = new URLSearchParams();
    
    if (params?.page) searchParams.append("page", params.page.toString());
    if (params?.page_size) searchParams.append("page_size", params.page_size.toString());
    
    const queryString = searchParams.toString();
    const endpoint = queryString ? `/api/prompts?${queryString}` : "/api/prompts";
    
    return api.get<PromptsResponse>(endpoint);
  },

  /**
   * 创建提示词
   * POST /prompts
   */
  createPrompt: (promptData: CreatePromptRequest) => {
    return api.post<Prompt>("/api/prompts", promptData);
  },

  /**
   * 获取提示词详情
   * GET /prompts/{id}
   */
  getPrompt: (id: string) => {
    return api.get<Prompt>(`/api/prompts/${id}`);
  },

  /**
   * 更新提示词
   * PUT /prompts/{id}
   */
  updatePrompt: (id: string, promptData: UpdatePromptRequest) => {
    return api.put<Prompt>(`/api/prompts/${id}`, promptData);
  },

  /**
   * 删除提示词
   * DELETE /prompts/{id}
   */
  deletePrompt: (id: string) => {
    return api.delete(`/api/prompts/${id}`);
  },

  /**
   * 获取热门提示词
   * GET /prompts/top
   */
  getTopPrompts: (params?: TopPromptsParams) => {
    const searchParams = new URLSearchParams();
    if (params?.limit) searchParams.append("limit", params.limit.toString());
    
    const queryString = searchParams.toString();
    const endpoint = queryString 
      ? `/api/prompts/top?${queryString}` 
      : "/api/prompts/top";
    
    return api.get<PromptsResponse>(endpoint);
  },

  /**
   * 按分类获取提示词
   * 便捷方法，基于getPrompts实现
   */
  getPromptsByCategory: (category: string, params?: Omit<PromptsListParams, 'category'>) => {
    return promptsApi.getPrompts({ ...params, category });
  },

  /**
   * 收藏/取消收藏提示词
   * 便捷方法
   */
  toggleFavoritePrompt: (id: string, isFavorite: boolean) => {
    return promptsApi.updatePrompt(id, { /* is_favorite: isFavorite */ });
  },
};

// 提示词相关的工具函数
export const promptsUtils = {
  // 提示词分类
  PROMPT_CATEGORIES: {
    analysis: "分析",
    marketing: "营销",
    content: "内容",
    seo: "SEO",
    social: "社交",
    general: "通用",
  },

  // 格式化分类名称
  formatCategory: (category: string): string => {
    return promptsUtils.PROMPT_CATEGORIES[category as keyof typeof promptsUtils.PROMPT_CATEGORIES] || category;
  },

  // 验证提示词数据
  validatePromptData: (data: CreatePromptRequest | UpdatePromptRequest): string[] => {
    const errors: string[] = [];

    if ('title' in data && !data.title?.trim()) {
      errors.push("标题不能为空");
    }

    if ('content' in data && !data.content?.trim()) {
      errors.push("内容不能为空");
    }

    if ('brand_id' in data && !(data as CreatePromptRequest).brand_id?.trim()) {
      errors.push("品牌ID不能为空");
    }

    if ('title' in data && data.title && data.title.length > 100) {
      errors.push("标题不能超过100个字符");
    }

    if ('content' in data && data.content && data.content.length > 2000) {
      errors.push("内容不能超过2000个字符");
    }

    return errors;
  },

  // 生成提示词预览
  generatePromptPreview: (content: string, maxLength: number = 100): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  },

  // 计算提示词质量分数
  calculatePromptQualityScore: (prompt: Prompt): number => {
    let score = 0;

    // 标题完整性
    if (prompt.title && prompt.title.length >= 10) score += 20;

    // 内容丰富度
    if (prompt.content && prompt.content.length >= 50) score += 30;
    else if (prompt.content && prompt.content.length >= 20) score += 15;

    // 描述完整性
    if (prompt.description && prompt.description.length >= 20) score += 20;

    // 分类明确
    if (prompt.category) score += 15;

    // 使用频率
    if (prompt.usage_count && prompt.usage_count > 10) score += 15;
    else if (prompt.usage_count && prompt.usage_count > 5) score += 10;

    return Math.min(score, 100);
  },

  // 解析提示词中的变量
  parsePromptVariables: (content: string): string[] => {
    const variablePattern = /\{([^}]+)\}/g;
    const matches = content.match(variablePattern);
    
    if (!matches) return [];
    
    return matches.map(match => match.slice(1, -1));
  },

  // 填充提示词变量
  fillPromptVariables: (content: string, variables: Record<string, string>): string => {
    let filledContent = content;
    
    Object.entries(variables).forEach(([key, value]) => {
      const pattern = new RegExp(`\\{${key}\\}`, 'g');
      filledContent = filledContent.replace(pattern, value);
    });
    
    return filledContent;
  },

  // 提示词排序
  sortPrompts: (prompts: Prompt[], sortBy: 'date' | 'usage' | 'title' = 'date'): Prompt[] => {
    const sorted = [...prompts];
    
    switch (sortBy) {
      case 'date':
        return sorted.sort((a, b) => 
          new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
        );
      case 'usage':
        return sorted.sort((a, b) => (b.usage_count || 0) - (a.usage_count || 0));
      case 'title':
        return sorted.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
      default:
        return sorted;
    }
  },

  // 获取提示词统计信息
  getPromptsStats: (prompts: Prompt[]): {
    total: number;
    byCategory: Record<string, number>;
    averageUsage: number;
    favoriteCount: number;
  } => {
    const stats = {
      total: prompts.length,
      byCategory: {} as Record<string, number>,
      averageUsage: 0,
      favoriteCount: 0,
    };

    prompts.forEach(prompt => {
      // 分类统计
      if (prompt.category) {
        stats.byCategory[prompt.category] = (stats.byCategory[prompt.category] || 0) + 1;
      }

      // 使用次数统计
      stats.averageUsage += prompt.usage_count || 0;

      // 收藏统计
      if (prompt.is_favorite) {
        stats.favoriteCount++;
      }
    });

    if (stats.total > 0) {
      stats.averageUsage = Math.round(stats.averageUsage / stats.total);
    }

    return stats;
  },
};

export default promptsApi; 