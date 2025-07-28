/*
 * @Description:
 * @Author: Devin
 * @Date: 2025-07-28 20:08:49
 */
/**
 * GEO优化API接口调用
 * 基于swagger.json定义的GEO优化相关API接口
 */

import { api } from "@/lib/api-client";

// GEO优化API接口
export const geoOptimizationApi = {
  // GET /api/brands/{brandId}/geo-optimizations - 获取品牌的GEO优化记录
  getBrandGeoOptimizations: (
    brandId: string,
    params?: {
      page?: number;
      page_size?: number;
    }
  ) => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.page_size)
      queryParams.append("page_size", params.page_size.toString());

    const queryString = queryParams.toString();
    const endpoint = queryString
      ? `/api/brands/${brandId}/geo-optimizations?${queryString}`
      : `/api/brands/${brandId}/geo-optimizations`;
    return api.get(endpoint);
  },

  // GET /api/brands/{brandId}/geo-optimizations/analysis - 分析品牌GEO表现
  analyzeBrandGeoPerformance: (brandId: string) =>
    api.get(`/api/brands/${brandId}/geo-optimizations/analysis`),

  // GET /api/brands/{brandId}/geo-optimizations/recommendations - 生成GEO优化建议
  generateGeoRecommendations: (brandId: string) =>
    api.get(`/api/brands/${brandId}/geo-optimizations/recommendations`),

  // GET /api/geo-optimizations/stats - 获取GEO统计数据
  getGeoStats: (params?: { brand_id?: string }) => {
    const queryParams = new URLSearchParams();
    if (params?.brand_id) queryParams.append("brand_id", params.brand_id);

    const queryString = queryParams.toString();
    const endpoint = queryString
      ? `/api/geo-optimizations/stats?${queryString}`
      : "/api/geo-optimizations/stats";
    return api.get(endpoint);
  },

  // GET /api/geo-optimizations/region/{region} - 按地区获取GEO优化
  getGeoOptimizationsByRegion: (region: string) =>
    api.get(`/api/geo-optimizations/region/${region}`),

  // GET /api/geo-optimizations/{id}/geo-databases - 获取GEO优化的数据库列表
  getGeoOptimizationDatabases: (geoOptimizationId: string) =>
    api.get(`/api/geo-optimizations/${geoOptimizationId}/geo-databases`),
};

export default geoOptimizationApi;
