import { NextRequest } from 'next/server'
import { successResponse, errorResponse, generateToken, corsHeaders } from '@/lib/api-utils'
import { mockUsers } from '@/lib/mock-data'
import { LoginRequest, LoginResponse } from '@/lib/types'

// POST /api/auth/login - 用户登录
export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest & { auth_code?: string; redirect_uri?: string } = await request.json()
    
    // 验证请求数据
    if (!body.email && !body.id_token && !body.auth_code) {
      return errorResponse(
        'Email, Google ID token, or Google auth code is required',
        'Missing required authentication parameters',
        400
      )
    }

    let user = null

    // Google授权码登录
    if (body.auth_code && body.redirect_uri) {
      try {
        // 在实际项目中，这里应该：
        // 1. 使用auth_code和client_secret向Google交换access_token
        // 2. 使用access_token获取用户信息
        // 3. 验证用户身份并创建或更新用户记录
        
        // 模拟Google API调用成功，返回用户信息
        const mockGoogleUserInfo = {
          id: 'google_user_123',
          email: 'ethelbert@geok.com',
          name: 'Ethelbert Williams',
          given_name: 'Ethelbert',
          family_name: 'Williams',
          picture: 'https://lh3.googleusercontent.com/a/default-user'
        }
        
        // 查找或创建用户
        user = mockUsers.find(u => u.email === mockGoogleUserInfo.email)
        if (!user) {
          // 创建新用户
          const newUser = {
            id: `user_${Date.now()}`,
            username: mockGoogleUserInfo.email.split('@')[0],
            email: mockGoogleUserInfo.email,
            first_name: mockGoogleUserInfo.given_name,
            last_name: mockGoogleUserInfo.family_name,
            role: 'user' as const,
            status: 'active' as const,
            avatar_url: mockGoogleUserInfo.picture,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
          mockUsers.push(newUser)
          user = newUser
        }
        
        console.log('Google OAuth login successful for:', mockGoogleUserInfo.email)
        
      } catch (error) {
        console.error('Google OAuth error:', error)
        return errorResponse(
          'Google authentication failed',
          'Failed to process Google authorization code',
          401
        )
      }
    }
    // Google ID Token 登录
    else if (body.id_token) {
      // 在实际项目中，这里应该验证Google ID token
      // 这里模拟成功验证，根据token获取或创建用户
      user = mockUsers.find(u => u.email.includes('ethelbert')) || mockUsers[0]
    } 
    // 邮箱密码登录
    else if (body.email && body.password) {
      user = mockUsers.find(u => u.email === body.email)
      
      if (!user) {
        return errorResponse(
          'Invalid credentials',
          'User not found',
          401
        )
      }

      // 在实际项目中，这里应该验证密码哈希
      // 这里模拟验证成功
      if (body.password !== 'password123') {
        return errorResponse(
          'Invalid credentials',
          'Wrong password',
          401
        )
      }
    } else {
      return errorResponse(
        'Invalid request',
        'Email and password are required for email login',
        400
      )
    }

    if (!user) {
      return errorResponse(
        'Login failed',
        'User authentication failed',
        401
      )
    }

    // 生成访问令牌
    const token = generateToken(user.id)

    const responseData: LoginResponse = {
      token,
      user
    }

    return successResponse('Login successful', responseData, 200)

  } catch (error) {
    console.error('Login error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to process login request',
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