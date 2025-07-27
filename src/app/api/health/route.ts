import { successResponse, corsHeaders } from '@/lib/api-utils'

// GET /api/health - 健康检查
export async function GET() {
  return successResponse('Service is healthy', {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  })
}

// OPTIONS 处理CORS预检请求
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders()
  })
} 