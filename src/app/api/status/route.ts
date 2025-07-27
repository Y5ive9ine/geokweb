import { successResponse, corsHeaders } from '@/lib/api-utils'

// GET /api/status - 获取详细的服务状态信息
export async function GET() {
  const status = {
    service: 'GEOK API',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    database: {
      status: 'connected', // 模拟数据库状态
      latency: Math.round(Math.random() * 10) + 'ms'
    },
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'MB',
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + 'MB'
    },
    features: {
      authentication: true,
      brand_management: true,
      ai_search: true,
      analytics: true,
      visibility_metrics: true
    }
  }

  return successResponse('Service status retrieved successfully', status)
}

// OPTIONS 处理CORS预检请求
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders()
  })
} 