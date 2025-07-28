// API响应基础类型
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: string;
}

// 用户相关类型
export interface User {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  role: "user" | "admin";
  status: "active" | "inactive";
  bio?: string;
  phone?: string;
  company?: string;
  country?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface LoginRequest {
  email?: string;
  password?: string;
  id_token?: string; // Google OAuth
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

// 品牌相关类型
export interface Brand {
  id: string;
  name: string;
  domain: string;
  keywords?: string;
  description?: string;
  suggestions?: string[];
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
}

export interface CreateBrandRequest {
  name: string;
  domain: string;
  keywords?: string;
  description?: string;
  suggestions?: string[];
}

// AI搜索相关类型
export interface AISearch {
  id: string;
  brand_id: string;
  questions: string[];
  status: "pending" | "processing" | "completed" | "failed";
  created_at: string;
  updated_at: string;
}

export interface AIResponse {
  id: string;
  search_id: string;
  question: string;
  response: string;
  model_type: string;
  created_at: string;
}

// 可见性指标类型
export interface VisibilityMetrics {
  id: string;
  ai_response_id: string;
  brand_id: string;
  visibility_data: Record<string, any>;
  keyword_data: Record<string, any>;
  overall_score: number;
  frequency_score: number;
  recommendation_score: number;
  search_rate_score: number;
  first_choice_score: number;
  calculated_at: string;
}

// 分析统计类型
export interface DashboardStats {
  total_brands: number;
  total_searches: number;
  total_responses: number;
  avg_visibility_score: number;
}

export interface BrandDistribution {
  brand_name: string;
  percentage: number;
  color: string;
}

// 提示词类型
export interface Prompt {
  id: string;
  brand_id: string;
  title: string;
  content: string;
  description?: string;
  category?: string;
  created_at: string;
  updated_at: string;
}

// 引用类型
export interface Reference {
  id: string;
  brand_id: string;
  ai_response_id: string;
  url: string;
  title: string;
  domain: string;
  excerpt: string;
  created_at: string;
}

// 通知类型
export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  created_at: string;
}

// 博客相关类型
export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  status: "draft" | "published" | "scheduled" | "archived";
  featured_image?: string;
  word_count?: number;
  reading_time?: number;
  view_count?: number;
  like_count?: number;
  share_count?: number;
  comment_count?: number;
  brand_mentions?: Record<string, any>;
  mention_rate?: number;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
  published_at?: string;
  scheduled_at?: string;
  created_at: string;
  updated_at: string;
}

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

export interface BlogListResponse {
  blogs: Blog[];
  pagination: {
    current_page: number;
    page_size: number;
    total_items: number;
    total_pages: number;
  };
}

// GEO优化相关类型
export interface GeoOverview {
  id: string;
  total_regions: number;
  active_campaigns: number;
  global_reach_score: number;
  top_performing_region: string;
  created_at: string;
  updated_at: string;
}

export interface GeoPerformance {
  id: string;
  region: string;
  country: string;
  visibility_score: number;
  market_penetration: number;
  search_volume: number;
  competition_level: "low" | "medium" | "high" | "very_high";
  opportunity_score: number;
  recommended_actions: string[];
  key_metrics: Record<string, any>;
  trending_keywords: string[];
  created_at: string;
  updated_at: string;
}

export interface GeoOptimization {
  id: string;
  brand_id: string;
  region: string;
  country: string;
  optimization_type: string;
  status: "active" | "inactive" | "pending";
  performance_data: Record<string, any>;
  recommendations: string[];
  created_at: string;
  updated_at: string;
}

export interface CreateGeoOptimizationRequest {
  brand_id: string;
  region: string;
  country: string;
  optimization_type: string;
  performance_data?: Record<string, any>;
  recommendations?: string[];
}

export interface UpdateGeoOptimizationRequest {
  region?: string;
  country?: string;
  optimization_type?: string;
  status?: "active" | "inactive" | "pending";
  performance_data?: Record<string, any>;
  recommendations?: string[];
}

// 数据库相关类型
export interface DatabaseOverview {
  id: string;
  total_databases: number;
  active_connections: number;
  total_storage: string;
  average_performance: number;
  created_at: string;
  updated_at: string;
}

export interface DatabaseInfo {
  id: string;
  name: string;
  type: string;
  version: string;
  status: "online" | "offline" | "maintenance";
  host: string;
  port: number;
  size: string;
  connections: Record<string, any>;
  performance: Record<string, any>;
  backup_status: Record<string, any>;
  tables: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface GeoDatabase {
  id: string;
  geo_optimization_id: string;
  database_name: string;
  database_type: "mysql" | "postgresql" | "mongodb" | "redis";
  connection_string: string;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
}

export interface CreateGeoDatabaseRequest {
  geo_optimization_id: string;
  database_name: string;
  database_type: "mysql" | "postgresql" | "mongodb" | "redis";
  connection_string: string;
}

export interface UpdateGeoDatabaseRequest {
  database_name?: string;
  database_type?: "mysql" | "postgresql" | "mongodb" | "redis";
  connection_string?: string;
  status?: "active" | "inactive";
}

// Dashboard相关类型
export interface DashboardData {
  overview: {
    total_brands: number;
    total_searches: number;
    total_responses: number;
    avg_visibility_score: number;
  };
  recent_activity: Array<{
    id: string;
    type: string;
    description: string;
    timestamp: string;
  }>;
  performance_metrics: {
    visibility_trend: Array<{
      date: string;
      score: number;
    }>;
    brand_distribution: Array<{
      brand_name: string;
      percentage: number;
      color: string;
    }>;
  };
  geo_performance: GeoOverview;
  database_status: DatabaseOverview;
}

// 分页类型
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  page_size: number;
  has_next: boolean;
  has_prev: boolean;
}
