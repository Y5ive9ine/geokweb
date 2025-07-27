import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'

// GET /api/analytics/search-trends - 获取AI搜索趋势分析
export async function GET(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || '7d' // 7d, 30d, 90d

    // 根据周期生成不同的趋势数据
    let trendData = []
    let dateRange = 7

    switch (period) {
      case '30d':
        dateRange = 30
        break
      case '90d':
        dateRange = 90
        break
      default:
        dateRange = 7
    }

    // 生成模拟趋势数据
    for (let i = dateRange - 1; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      
      trendData.push({
        date: date.toISOString().split('T')[0],
        searches: Math.floor(Math.random() * 50) + 20,
        responses: Math.floor(Math.random() * 150) + 80,
        visibility_score: Math.round((Math.random() * 20 + 70) * 10) / 10,
        brand_mentions: Math.floor(Math.random() * 30) + 15
      })
    }

    const searchTrends = {
      period,
      date_range: {
        start: trendData[0].date,
        end: trendData[trendData.length - 1].date
      },
      data: trendData,
      summary: {
        total_searches: trendData.reduce((sum, day) => sum + day.searches, 0),
        total_responses: trendData.reduce((sum, day) => sum + day.responses, 0),
        avg_visibility_score: Math.round(
          trendData.reduce((sum, day) => sum + day.visibility_score, 0) / trendData.length * 10
        ) / 10,
        trend_analysis: {
          searches_trend: 'up',
          responses_trend: 'up',
          visibility_trend: 'stable',
          growth_rate: 15.2
        }
      },
      insights: [
        `过去${dateRange}天内搜索量保持稳定增长趋势`,
        'AI响应质量持续提升，可见性得分稳定',
        '品牌提及率与搜索量呈正相关',
        '建议继续优化关键词策略以提升可见性'
      ]
    }

    return successResponse('Search trends retrieved successfully', searchTrends)

  } catch (error) {
    console.error('Get search trends error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to retrieve search trends',
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