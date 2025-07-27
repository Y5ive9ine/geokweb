import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'
import { mockKeywordFrequency } from '@/lib/mock-data'

// GET /api/analytics/ai-appearance - 获取品牌在AI响应中的出现指标
export async function GET(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    const { searchParams } = new URL(request.url)
    const brandId = searchParams.get('brand_id')

    // 模拟AI出现指标数据
    const aiAppearanceData = {
      keyword_frequency: mockKeywordFrequency,
      overall_metrics: {
        total_appearances: 1247,
        positive_mentions: 892,
        negative_mentions: 156,
        neutral_mentions: 199,
        sentiment_score: 78.5,
        trend_direction: 'up',
        trend_percentage: 12.3
      },
      time_series: [
        { date: '2024-07-14', appearances: 45, score: 76.2 },
        { date: '2024-07-15', appearances: 52, score: 78.1 },
        { date: '2024-07-16', appearances: 48, score: 75.8 },
        { date: '2024-07-17', appearances: 61, score: 79.4 },
        { date: '2024-07-18', appearances: 57, score: 80.2 },
        { date: '2024-07-19', appearances: 63, score: 81.1 },
        { date: '2024-07-20', appearances: 58, score: 78.9 }
      ],
      top_contexts: [
        { context: '处理器性能比较', frequency: 156, sentiment: 'positive' },
        { context: '游戏硬件推荐', frequency: 142, sentiment: 'positive' },
        { context: '性价比分析', frequency: 128, sentiment: 'neutral' },
        { context: '技术创新讨论', frequency: 98, sentiment: 'positive' },
        { context: '市场竞争分析', frequency: 87, sentiment: 'neutral' }
      ],
      recommendations: [
        '关注"游戏硬件推荐"场景，该场景下品牌提及率较高',
        '加强"技术创新"相关内容输出，提升正面提及率',
        '监控"性价比分析"场景，保持竞争优势',
        '持续优化产品在AI推荐中的表现'
      ]
    }

    // 如果指定了品牌ID，可以返回特定品牌的数据
    if (brandId) {
      aiAppearanceData.brand_id = brandId
      aiAppearanceData.brand_specific = {
        mentions_rank: 1,
        market_share: 72.5,
        competitor_gap: 56.8,
        growth_rate: 15.3
      }
    }

    return successResponse('AI appearance metrics retrieved successfully', aiAppearanceData)

  } catch (error) {
    console.error('Get AI appearance metrics error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to retrieve AI appearance metrics',
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