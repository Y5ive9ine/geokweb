import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'
import { mockDashboardStats, mockBrands, mockAISearches, mockAIResponses, mockVisibilityMetrics } from '@/lib/mock-data'

// GET /api/analytics/dashboard - 获取仪表板统计数据
export async function GET(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    // 计算实时统计数据
    const dashboardData = {
      ...mockDashboardStats,
      total_brands: mockBrands.length,
      total_searches: mockAISearches.length,
      total_responses: mockAIResponses.length,
      avg_visibility_score: mockVisibilityMetrics.length > 0 
        ? Math.round(mockVisibilityMetrics.reduce((sum, m) => sum + m.overall_score, 0) / mockVisibilityMetrics.length * 10) / 10
        : 0,
      
      // 添加更多统计信息
      active_brands: mockBrands.filter(b => b.status === 'active').length,
      completed_searches: mockAISearches.filter(s => s.status === 'completed').length,
      processing_searches: mockAISearches.filter(s => s.status === 'processing').length,
      pending_searches: mockAISearches.filter(s => s.status === 'pending').length,
      
      // 最近7天的趋势数据（模拟）
      recent_trends: {
        searches_growth: 12.5,
        visibility_growth: 8.3,
        response_growth: 15.7
      },
      
      // 热门关键词
      top_keywords: [
        { keyword: '处理器', mentions: 156, growth: 15.2 },
        { keyword: '性能', mentions: 142, growth: 8.7 },
        { keyword: '游戏', mentions: 128, growth: 22.1 },
        { keyword: '价格', mentions: 98, growth: -3.2 },
        { keyword: '品牌', mentions: 87, growth: 5.8 }
      ]
    }

    return successResponse('Dashboard data retrieved successfully', dashboardData)

  } catch (error) {
    console.error('Get dashboard data error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to retrieve dashboard data',
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