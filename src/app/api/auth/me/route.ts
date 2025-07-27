import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'
import { mockUsers } from '@/lib/mock-data'

// GET /api/auth/me - 获取当前用户信息
export async function GET(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult // 返回错误响应
    }

    const { userId } = authResult

    // 查找用户
    const user = mockUsers.find(u => u.id === userId)
    if (!user) {
      return errorResponse(
        'User not found',
        'The authenticated user no longer exists',
        404
      )
    }

    // 返回用户信息（不包含敏感信息）
    const userInfo = {
      id: user.id,
      username: user.username,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role,
      status: user.status,
      bio: user.bio,
      phone: user.phone,
      company: user.company,
      country: user.country,
      avatar_url: user.avatar_url,
      created_at: user.created_at,
      updated_at: user.updated_at
    }

    return successResponse('User information retrieved successfully', userInfo)

  } catch (error) {
    console.error('Get user info error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to get user information',
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