import { NextResponse } from 'next/server'
import { ApiResponse } from './types'

// 标准化API响应
export function createApiResponse<T>(
  success: boolean,
  message: string,
  data?: T,
  error?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  const response: ApiResponse<T> = {
    success,
    message,
    data,
    error,
    timestamp: new Date().toISOString()
  }

  return NextResponse.json(response, { status })
}

// 成功响应
export function successResponse<T>(
  message: string = 'Operation successful',
  data?: T,
  status: number = 200
) {
  return createApiResponse(true, message, data, undefined, status)
}

// 错误响应
export function errorResponse(
  message: string,
  error?: string,
  status: number = 400
) {
  return createApiResponse(false, message, undefined, error, status)
}

// 生成UUID
export function generateId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

// 生成JWT Token (模拟)
export function generateToken(userId: string): string {
  // 在实际项目中，这里应该使用真正的JWT库
  return `mock_token_${userId}_${Date.now()}`
}

// 验证Token (模拟)
export function verifyToken(token: string): { userId: string } | null {
  if (token.startsWith('mock_token_')) {
    const parts = token.split('_')
    if (parts.length >= 3) {
      return { userId: parts[2] }
    }
  }
  return null
}

// 分页工具
export function paginate<T>(
  items: T[],
  page: number = 1,
  pageSize: number = 10
) {
  const offset = (page - 1) * pageSize
  const paginatedItems = items.slice(offset, offset + pageSize)
  
  return {
    items: paginatedItems,
    total: items.length,
    page,
    page_size: pageSize,
    has_next: offset + pageSize < items.length,
    has_prev: page > 1
  }
}

// 获取请求头中的认证token
export function getAuthToken(request: Request): string | null {
  const authHeader = request.headers.get('Authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }
  return null
}

// 中间件：验证用户认证
export function requireAuth(request: Request): { userId: string } | NextResponse {
  const token = getAuthToken(request)
  if (!token) {
    return errorResponse('Authentication required', 'No token provided', 401)
  }

  const payload = verifyToken(token)
  if (!payload) {
    return errorResponse('Invalid token', 'Token verification failed', 401)
  }

  return payload
}

// 处理CORS
export function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
} 