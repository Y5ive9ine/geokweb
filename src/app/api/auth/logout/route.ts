import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'

// POST /api/auth/logout - 用户登出
export async function POST(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult // 返回错误响应
    }

    // 在实际项目中，这里应该：
    // 1. 将token加入黑名单
    // 2. 清除相关会话信息
    // 3. 可能需要通知其他服务

    return successResponse('Logout successful', {
      message: 'User logged out successfully',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Logout error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to process logout request',
      500
    )
  }
}

// OPTIONS 处理CORS预检请求
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders()
  })
} 