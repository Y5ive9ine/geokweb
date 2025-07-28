/**
 * Blog API统一导出
 */

import { api } from "@/lib/api-client";

// Blog API 查询参数接口
export interface BlogListParams {
  page?: number;
  page_size?: number;
  status?: "draft" | "published" | "scheduled" | "archived";
  category?: string;
  search?: string;
}

// 创建博客请求接口
export interface CreateBlogRequest {
  title: string;
  slug?: string;
  excerpt?: string;
  content: string;
  author?: {
    name: string;
    email: string;
    avatar?: string;
  };
  category: string;
  tags?: string[];
  status?: "draft" | "published" | "scheduled";
  featured_image?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
}

// 更新博客请求接口
export interface UpdateBlogRequest {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  author?: {
    name: string;
    email: string;
    avatar?: string;
  };
  category?: string;
  tags?: string[];
  status?: "draft" | "published" | "scheduled" | "archived";
  featured_image?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
}

// AI内容生成请求接口
export interface AIContentGenerationRequest {
  prompt: string;
  brand_id?: string;
  category?: string;
  keywords?: string[];
  tone?: "professional" | "casual" | "technical" | "marketing";
  length?: "short" | "medium" | "long";
  language?: "zh-CN" | "en-US";
  target_audience?: string;
  content_type?: "article" | "review" | "tutorial" | "news" | "opinion";
  include_seo?: boolean;
}

// AI内容生成响应接口
export interface AIContentGenerationResponse {
  title: string;
  content: string;
  excerpt?: string;
  suggested_tags?: string[];
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
  word_count?: number;
  reading_time?: number;
  seo_score?: number;
  generation_id?: string;
}

// AI内容生成历史记录接口
export interface AIGenerationHistory {
  id: string;
  prompt: string;
  generated_content: AIContentGenerationResponse;
  parameters: AIContentGenerationRequest;
  created_at: string;
  status: "success" | "failed" | "pending";
  error_message?: string;
}

// AI内容优化请求接口
export interface AIContentOptimizationRequest {
  content: string;
  optimization_type: "seo" | "readability" | "engagement" | "length";
  target_keywords?: string[];
  target_length?: number;
}

// AI内容优化响应接口
export interface AIContentOptimizationResponse {
  optimized_content: string;
  improvements: string[];
  seo_suggestions?: string[];
  readability_score?: number;
  optimization_score?: number;
}

// 专门的Blog API方法
export const blogApi = {
  /**
   * 获取博客列表
   * GET /blogs
   */
  getBlogs: (params?: BlogListParams) => {
    const searchParams = new URLSearchParams();

    if (params?.page) searchParams.append("page", params.page.toString());
    if (params?.page_size)
      searchParams.append("page_size", params.page_size.toString());
    if (params?.status) searchParams.append("status", params.status);
    if (params?.category) searchParams.append("category", params.category);
    if (params?.search) searchParams.append("search", params.search);

    const queryString = searchParams.toString();
    const endpoint = queryString ? `/api/blogs?${queryString}` : "/api/blogs";

    return api.get(endpoint);
  },

  /**
   * 获取博客详情
   * GET /blogs/{id}
   */
  getBlog: (id: string) => {
    return api.get(`/api/blogs/${id}`);
  },

  /**
   * 创建博客
   * POST /blogs
   */
  createBlog: (blogData: CreateBlogRequest) => {
    return api.post("/api/blogs", blogData);
  },

  /**
   * 更新博客
   * PUT /blogs/{id}
   */
  updateBlog: (id: string, blogData: UpdateBlogRequest) => {
    return api.put(`/api/blogs/${id}`, blogData);
  },

  /**
   * 删除博客
   * DELETE /blogs/{id}
   */
  deleteBlog: (id: string) => {
    return api.delete(`/api/blogs/${id}`);
  },

  /**
   * 搜索博客
   * 便捷方法，基于getBlogs实现
   */
  searchBlogs: (query: string, params?: Omit<BlogListParams, "search">) => {
    return blogApi.getBlogs({ ...params, search: query });
  },

  /**
   * 按分类获取博客
   * 便捷方法，基于getBlogs实现
   */
  getBlogsByCategory: (
    category: string,
    params?: Omit<BlogListParams, "category">
  ) => {
    return blogApi.getBlogs({ ...params, category });
  },

  /**
   * 按状态获取博客
   * 便捷方法，基于getBlogs实现
   */
  getBlogsByStatus: (
    status: "draft" | "published" | "scheduled" | "archived",
    params?: Omit<BlogListParams, "status">
  ) => {
    return blogApi.getBlogs({ ...params, status });
  },

  /**
   * AI内容生成
   * POST /blogs/ai-generate
   */
  generateAIContent: (requestData: AIContentGenerationRequest) => {
    return api.post<AIContentGenerationResponse>(
      "/api/blogs/ai-generate",
      requestData
    );
  },

  /**
   * 基于AI生成内容创建博客
   * POST /blogs/ai-create
   */
  createBlogFromAI: (
    requestData: AIContentGenerationRequest & { auto_publish?: boolean }
  ) => {
    return api.post("/api/blogs/ai-create", requestData);
  },

  /**
   * 获取AI生成历史
   * GET /blogs/ai-history
   */
  getAIGenerationHistory: (params?: {
    page?: number;
    page_size?: number;
    status?: "success" | "failed" | "pending";
    date_from?: string;
    date_to?: string;
  }) => {
    const searchParams = new URLSearchParams();

    if (params?.page) searchParams.append("page", params.page.toString());
    if (params?.page_size)
      searchParams.append("page_size", params.page_size.toString());
    if (params?.status) searchParams.append("status", params.status);
    if (params?.date_from) searchParams.append("date_from", params.date_from);
    if (params?.date_to) searchParams.append("date_to", params.date_to);

    const queryString = searchParams.toString();
    const endpoint = queryString
      ? `/api/blogs/ai-history?${queryString}`
      : "/api/blogs/ai-history";

    return api.get<{ history: AIGenerationHistory[]; pagination: any }>(
      endpoint
    );
  },

  /**
   * 获取AI生成历史详情
   * GET /blogs/ai-history/{id}
   */
  getAIGenerationHistoryDetail: (id: string) => {
    return api.get<AIGenerationHistory>(`/api/blogs/ai-history/${id}`);
  },

  /**
   * 删除AI生成历史记录
   * DELETE /blogs/ai-history/{id}
   */
  deleteAIGenerationHistory: (id: string) => {
    return api.delete(`/api/blogs/ai-history/${id}`);
  },

  /**
   * AI内容优化
   * POST /blogs/ai-optimize
   */
  optimizeAIContent: (requestData: AIContentOptimizationRequest) => {
    return api.post<AIContentOptimizationResponse>(
      "/api/blogs/ai-optimize",
      requestData
    );
  },

  /**
   * 重新生成AI内容
   * POST /blogs/ai-regenerate/{id}
   */
  regenerateAIContent: (
    historyId: string,
    modifications?: Partial<AIContentGenerationRequest>
  ) => {
    return api.post<AIContentGenerationResponse>(
      `/api/blogs/ai-regenerate/${historyId}`,
      modifications
    );
  },

  /**
   * 获取AI内容生成模板
   * GET /blogs/ai-templates
   */
  getAIContentTemplates: (params?: { category?: string; type?: string }) => {
    const searchParams = new URLSearchParams();

    if (params?.category) searchParams.append("category", params.category);
    if (params?.type) searchParams.append("type", params.type);

    const queryString = searchParams.toString();
    const endpoint = queryString
      ? `/api/blogs/ai-templates?${queryString}`
      : "/api/blogs/ai-templates";

    return api.get(endpoint);
  },

  /**
   * 保存AI内容生成模板
   * POST /blogs/ai-templates
   */
  saveAIContentTemplate: (templateData: {
    name: string;
    description?: string;
    category: string;
    template: Partial<AIContentGenerationRequest>;
  }) => {
    return api.post("/api/blogs/ai-templates", templateData);
  },
};

// Blog相关的工具函数
export const blogUtils = {
  // 格式化发布日期
  formatPublishDate: (dateString: string): string => {
    try {
      return new Date(dateString).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "未知日期";
    }
  },

  // 计算阅读时间（基于字数）
  calculateReadingTime: (content: string): number => {
    const wordsPerMinute = 200; // 中文阅读速度约200字/分钟
    const wordCount = content.length;
    return Math.ceil(wordCount / wordsPerMinute);
  },

  // 生成摘要
  generateExcerpt: (content: string, maxLength: number = 150): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  },

  // 验证博客数据
  validateBlogData: (data: CreateBlogRequest | UpdateBlogRequest): string[] => {
    const errors: string[] = [];

    if ("title" in data && !data.title?.trim()) {
      errors.push("标题不能为空");
    }

    if ("content" in data && !data.content?.trim()) {
      errors.push("内容不能为空");
    }

    if ("category" in data && !data.category?.trim()) {
      errors.push("分类不能为空");
    }

    return errors;
  },

  // 验证AI内容生成请求
  validateAIGenerationRequest: (data: AIContentGenerationRequest): string[] => {
    const errors: string[] = [];

    if (!data.prompt?.trim()) {
      errors.push("提示词不能为空");
    }

    if (data.prompt && data.prompt.length < 10) {
      errors.push("提示词至少需要10个字符");
    }

    if (data.prompt && data.prompt.length > 2000) {
      errors.push("提示词不能超过2000个字符");
    }

    if (data.keywords && data.keywords.length > 20) {
      errors.push("关键词数量不能超过20个");
    }

    return errors;
  },

  // 生成SEO友好的slug
  generateSlug: (title: string): string => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .substring(0, 100);
  },

  // 计算内容的SEO得分
  calculateSEOScore: (
    content: string,
    title: string,
    keywords: string[] = []
  ): number => {
    let score = 0;
    const contentLower = content.toLowerCase();
    const titleLower = title.toLowerCase();

    // 标题长度检查 (50-60字符最佳)
    if (title.length >= 50 && title.length <= 60) {
      score += 20;
    } else if (title.length >= 30 && title.length <= 70) {
      score += 10;
    }

    // 内容长度检查 (300字以上)
    if (content.length >= 300) {
      score += 20;
    } else if (content.length >= 150) {
      score += 10;
    }

    // 关键词密度检查
    keywords.forEach((keyword) => {
      const keywordLower = keyword.toLowerCase();
      const titleMatches = (
        titleLower.match(new RegExp(keywordLower, "g")) || []
      ).length;
      const contentMatches = (
        contentLower.match(new RegExp(keywordLower, "g")) || []
      ).length;

      if (titleMatches > 0) score += 15;
      if (contentMatches > 0 && contentMatches <= 5) score += 15;
    });

    // 标题中包含数字
    if (/\d/.test(title)) {
      score += 10;
    }

    // 内容结构检查（标题标签）
    const headingMatches = content.match(/#{1,6}\s/g) || [];
    if (headingMatches.length >= 2) {
      score += 20;
    } else if (headingMatches.length >= 1) {
      score += 10;
    }

    return Math.min(score, 100);
  },

  // 提取内容中的关键词
  extractKeywords: (content: string, maxKeywords: number = 10): string[] => {
    // 简单的关键词提取逻辑
    const words = content
      .toLowerCase()
      .replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s]/g, "")
      .split(/\s+/)
      .filter((word) => word.length >= 2);

    const wordCount: { [key: string]: number } = {};
    words.forEach((word) => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return Object.entries(wordCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word);
  },

  // 格式化AI生成历史状态
  formatAIGenerationStatus: (status: string): string => {
    const statusMap: { [key: string]: string } = {
      success: "生成成功",
      failed: "生成失败",
      pending: "生成中",
    };
    return statusMap[status] || status;
  },

  // 估算内容生成时间
  estimateGenerationTime: (
    length: string,
    complexity: string = "medium"
  ): number => {
    const baseTime = {
      short: 30,
      medium: 60,
      long: 120,
    };

    const complexityMultiplier = {
      simple: 0.8,
      medium: 1.0,
      complex: 1.5,
    };

    return Math.round(
      (baseTime[length as keyof typeof baseTime] || 60) *
        (complexityMultiplier[
          complexity as keyof typeof complexityMultiplier
        ] || 1.0)
    );
  },
};

export default blogApi;
