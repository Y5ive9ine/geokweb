import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, generateToken, corsHeaders } from '@/lib/api-utils'
import { mockUsers } from '@/lib/mock-data'

// POST /api/auth/refresh - 刷新JWT令牌
export async function POST(request: NextRequest) {
  try {
    // 验证当前token
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult // 返回错误响应
    }

    const { userId } = authResult

    // 确保用户仍然存在且处于活跃状态
    const user = mockUsers.find(u => u.id === userId && u.status === 'active')
    if (!user) {
      return errorResponse(
        'User not found or inactive',
        'Cannot refresh token for inactive user',
        401
      )
    }

    // 生成新的访问令牌
    const newToken = generateToken(userId)

    return successResponse('Token refreshed successfully', {
      token: newToken,
      expires_in: 3600, // 1小时
      token_type: 'Bearer'
    })

  } catch (error) {
    console.error('Token refresh error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to refresh token',
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