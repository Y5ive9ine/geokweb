/**
 * 品牌API统一导出
 */

import { api } from "@/lib/api-client";
import { Brand, CreateBrandRequest, PaginatedResponse } from "@/lib/types";

// 品牌列表响应类型（匹配后端API）
interface BrandListResponse {
  data: Brand[];
  meta: {
    page: number;
    page_size: number;
    total: number;
    total_pages: number;
  };
}

// 品牌API方法
export const brandApi = {
  // 创建品牌
  create: (brandData: CreateBrandRequest) =>
    api.post<Brand>("/api/brands", brandData),

  // 获取品牌列表
  list: (params?: {
    page?: number;
    page_size?: number;
    search?: string;
    status?: "active" | "inactive";
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append("page", params.page.toString());
    if (params?.page_size)
      searchParams.append("page_size", params.page_size.toString());
    if (params?.search) searchParams.append("search", params.search);
    if (params?.status) searchParams.append("status", params.status);

    const queryString = searchParams.toString();
    const endpoint = queryString ? `/api/brands?${queryString}` : "/api/brands";

    return api.get<BrandListResponse>(endpoint);
  },

  // 获取单个品牌详情
  get: (brandId: string) => api.get<Brand>(`/api/brands/${brandId}`),

  // 更新品牌
  update: (brandId: string, brandData: Partial<CreateBrandRequest>) =>
    api.put<Brand>(`/api/brands/${brandId}`, brandData),

  // 删除品牌
  delete: (brandId: string) => api.delete(`/api/brands/${brandId}`),

  // 验证品牌域名
  verifyDomain: (domain: string) =>
    api.post<{ verified: boolean; message: string }>(
      "/api/brands/verify-domain",
      {
        domain,
      }
    ),
};

// 品牌相关的工具函数
export const brandUtils = {
  // 验证品牌名称
  validateBrandName: (name: string): { valid: boolean; message?: string } => {
    if (!name || name.trim().length === 0) {
      return { valid: false, message: "品牌名称不能为空" };
    }
    if (name.trim().length < 2) {
      return { valid: false, message: "品牌名称至少需要2个字符" };
    }
    if (name.trim().length > 50) {
      return { valid: false, message: "品牌名称不能超过50个字符" };
    }
    return { valid: true };
  },

  // 验证域名格式
  validateDomain: (domain: string): { valid: boolean; message?: string } => {
    if (!domain || domain.trim().length === 0) {
      return { valid: false, message: "域名不能为空" };
    }

    // 移除协议前缀
    const cleanDomain = domain
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "");

    // 基本域名格式验证
    const domainRegex =
      /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!domainRegex.test(cleanDomain)) {
      return { valid: false, message: "请输入有效的域名格式" };
    }

    return { valid: true };
  },

  // 清理域名（移除协议和www前缀）
  cleanDomain: (domain: string): string => {
    return domain
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .toLowerCase()
      .trim();
  },

  // 验证关键词
  validateKeywords: (
    keywords: string
  ): { valid: boolean; message?: string } => {
    if (!keywords || keywords.trim().length === 0) {
      return { valid: false, message: "关键词不能为空" };
    }

    const keywordList = keywords
      .split(/[,\n]/)
      .map((k) => k.trim())
      .filter((k) => k.length > 0);

    if (keywordList.length === 0) {
      return { valid: false, message: "请至少输入一个关键词" };
    }

    if (keywordList.length > 100) {
      return { valid: false, message: "关键词数量不能超过100个" };
    }

    return { valid: true };
  },

  // 格式化关键词列表
  formatKeywords: (keywords: string): string[] => {
    return keywords
      .split(/[,\n]/)
      .map((k) => k.trim())
      .filter((k) => k.length > 0);
  },

  // 获取品牌状态显示文本
  getStatusText: (status: "active" | "inactive"): string => {
    return status === "active" ? "活跃" : "非活跃";
  },

  // 获取品牌状态颜色
  getStatusColor: (status: "active" | "inactive"): string => {
    return status === "active" ? "text-green-600" : "text-gray-500";
  },
};

export default brandApi;
