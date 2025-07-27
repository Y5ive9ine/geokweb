// API响应基础类型
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
  timestamp: string
}

// 用户相关类型
export interface User {
  id: string
  username: string
  email: string
  first_name: string
  last_name: string
  role: 'user' | 'admin'
  status: 'active' | 'inactive'
  bio?: string
  phone?: string
  company?: string
  country?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface LoginRequest {
  email?: string
  password?: string
  id_token?: string // Google OAuth
}

export interface LoginResponse {
  token: string
  user: User
}

export interface RegisterRequest {
  username: string
  email: string
  password: string
  first_name: string
  last_name: string
}

// 品牌相关类型
export interface Brand {
  id: string
  name: string
  domain: string
  keywords?: string
  description?: string
  status: 'active' | 'inactive'
  created_at: string
  updated_at: string
}

export interface CreateBrandRequest {
  name: string
  domain: string
  keywords?: string
  description?: string
}

// AI搜索相关类型
export interface AISearch {
  id: string
  brand_id: string
  questions: string[]
  status: 'pending' | 'processing' | 'completed' | 'failed'
  created_at: string
  updated_at: string
}

export interface AIResponse {
  id: string
  search_id: string
  question: string
  response: string
  model_type: string
  created_at: string
}

// 可见性指标类型
export interface VisibilityMetrics {
  id: string
  ai_response_id: string
  brand_id: string
  visibility_data: Record<string, any>
  keyword_data: Record<string, any>
  overall_score: number
  frequency_score: number
  recommendation_score: number
  search_rate_score: number
  first_choice_score: number
  calculated_at: string
}

// 分析统计类型
export interface DashboardStats {
  total_brands: number
  total_searches: number
  total_responses: number
  avg_visibility_score: number
}

export interface BrandDistribution {
  brand_name: string
  percentage: number
  color: string
}

// 提示词类型
export interface Prompt {
  id: string
  brand_id: string
  title: string
  content: string
  description?: string
  category?: string
  created_at: string
  updated_at: string
}

// 引用类型
export interface Reference {
  id: string
  brand_id: string
  ai_response_id: string
  url: string
  title: string
  domain: string
  excerpt: string
  created_at: string
}

// 通知类型
export interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  created_at: string
}

// 分页类型
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  page_size: number
  has_next: boolean
  has_prev: boolean
} 