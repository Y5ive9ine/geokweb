/**
 * GEO概览和性能API接口调用
 * 基于swagger.json定义的GEO概览和性能相关API接口
 */

import { api } from "@/lib/api-client";

// GEO概览数据类型定义
export interface GeoOverview {
  id: string;
  total_regions: number;
  active_campaigns: number;
  global_reach_score: number;
  top_performing_region: string;
  created_at: string;
  updated_at: string;
}

// GEO性能数据类型定义
export interface GeoPerformance {
  id: string;
  region: string;
  country: string;
  visibility_score: number;
  market_penetration: number;
  search_volume: number;
  competition_level: "low" | "medium" | "high" | "very_high";
  opportunity_score: number;
  recommended_actions: string;
  key_metrics: string;
  trending_keywords: string;
  created_at: string;
  updated_at: string;
}

// 数据库概览类型定义
export interface DatabaseOverview {
  id: string;
  total_databases: number;
  active_connections: number;
  total_storage: string;
  average_performance: number;
  created_at: string;
  updated_at: string;
}

// 数据库信息类型定义
export interface DatabaseInfo {
  id: string;
  name: string;
  type: string;
  version: string;
  status: "online" | "offline" | "maintenance";
  host: string;
  port: number;
  size: string;
  connections: string;
  performance: string;
  backup_status: string;
  tables: string;
  created_at: string;
  updated_at: string;
}

// GEO概览和性能API接口
export const geoOverviewApi = {
  // 获取GEO概览数据 (基于schema定义，虽然swagger.json中没有明确的endpoint)
  getGeoOverview: () => api.get("/geo/overview"),

  // 获取GEO性能数据 (基于schema定义)
  getGeoPerformance: (params?: {
    region?: string;
    country?: string;
  }) => {
    const queryParams = new URLSearchParams();
    if (params?.region) queryParams.append("region", params.region);
    if (params?.country) queryParams.append("country", params.country);
    
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/geo/performance?${queryString}` : "/geo/performance";
    return api.get(endpoint);
  },

  // 获取数据库概览 (基于schema定义)
  getDatabaseOverview: () => api.get("/geo/database-overview"),

  // 获取数据库信息 (基于schema定义)
  getDatabaseInfo: (params?: {
    database_id?: string;
    type?: string;
  }) => {
    const queryParams = new URLSearchParams();
    if (params?.database_id) queryParams.append("database_id", params.database_id);
    if (params?.type) queryParams.append("type", params.type);
    
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/geo/database-info?${queryString}` : "/geo/database-info";
    return api.get(endpoint);
  },
};

export default geoOverviewApi;
