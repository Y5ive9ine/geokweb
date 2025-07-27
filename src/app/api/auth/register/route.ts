import { NextRequest } from 'next/server'
import { successResponse, errorResponse, generateId, corsHeaders } from '@/lib/api-utils'
import { mockUsers } from '@/lib/mock-data'
import { RegisterRequest, User } from '@/lib/types'

// POST /api/auth/register - 用户注册
export async function POST(request: NextRequest) {
  try {
    const body: RegisterRequest = await request.json()
    
    // 验证必填字段
    if (!body.username || !body.email || !body.password || !body.first_name || !body.last_name) {
      return errorResponse(
        'Missing required fields',
        'username, email, password, first_name, and last_name are required',
        400
      )
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return errorResponse(
        'Invalid email format',
        'Please provide a valid email address',
        400
      )
    }

    // 检查用户名是否已存在
    const existingUserByUsername = mockUsers.find(u => u.username === body.username)
    if (existingUserByUsername) {
      return errorResponse(
        'Username already exists',
        'Please choose a different username',
        409
      )
    }

    // 检查邮箱是否已存在
    const existingUserByEmail = mockUsers.find(u => u.email === body.email)
    if (existingUserByEmail) {
      return errorResponse(
        'Email already exists',
        'An account with this email already exists',
        409
      )
    }

    // 验证密码强度（简单验证）
    if (body.password.length < 6) {
      return errorResponse(
        'Password too weak',
        'Password must be at least 6 characters long',
        400
      )
    }

    // 创建新用户
    const newUser: User = {
      id: generateId(),
      username: body.username,
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      role: 'user',
      status: 'active',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    // 在实际项目中，这里应该保存到数据库
    // 这里我们只是模拟添加到内存中
    mockUsers.push(newUser)

    // 返回成功响应（不包含密码）
    return successResponse('User registered successfully', {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      created_at: newUser.created_at
    }, 201)

  } catch (error) {
    console.error('Registration error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to process registration request',
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