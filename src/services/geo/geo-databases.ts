/*
 * @Description:
 * @Author: Devin
 * @Date: 2025-07-28 20:09:04
 */
/**
 * GEO数据库API接口调用
 * 基于swagger.json定义的GEO数据库相关API接口
 */

import { api } from "@/lib/api-client";

// GEO数据库类型定义
export type GeoDatabaseStatus = "active" | "inactive";

// GEO数据库API接口
export const geoDatabasesApi = {
  // GET /api/brands/{id}/geo-databases - 获取品牌的GEO数据库列表
  getBrandGeoDatabases: (brandId: string) =>
    api.get(`/api/brands/${brandId}/geo-databases`),

  // POST /api/geo-databases - 创建GEO数据库记录
  createGeoDatabase: (data: any) => api.post("/api/geo-databases", data),

  // GET /api/geo-databases/{id} - 获取GEO数据库详情
  getGeoDatabase: (id: string) => api.get(`/api/geo-databases/${id}`),

  // DELETE /api/geo-databases/{id} - 删除GEO数据库记录
  deleteGeoDatabase: (id: string) => api.delete(`/api/geo-databases/${id}`),
};

export default geoDatabasesApi;
