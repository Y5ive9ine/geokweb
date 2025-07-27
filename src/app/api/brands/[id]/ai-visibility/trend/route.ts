import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'
import { mockBrands } from '@/lib/mock-data'

// GET /api/brands/[id]/ai-visibility/trend - 获取指定品牌的AI可见性趋势分析
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    const { id: brandId } = params
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '30')

    // 验证品牌是否存在
    const brand = mockBrands.find(b => b.id === brandId)
    if (!brand) {
      return errorResponse(
        'Brand not found',
        `Brand with ID ${brandId} does not exist`,
        404
      )
    }

    // 生成趋势数据
    const trendData = []
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      
      // 模拟趋势数据，添加一些波动
      const baseScore = 75 + Math.sin(i / 7) * 10 // 基础分数随时间波动
      const randomVariation = (Math.random() - 0.5) * 15 // 随机变化
      
      trendData.push({
        date: date.toISOString().split('T')[0],
        overall_score: Math.max(0, Math.min(100, Math.round((baseScore + randomVariation) * 100) / 100)),
        frequency_score: Math.max(0, Math.min(100, Math.round((baseScore - 5 + randomVariation) * 100) / 100)),
        recommendation_score: Math.max(0, Math.min(100, Math.round((baseScore + 10 + randomVariation) * 100) / 100)),
        search_rate_score: Math.max(0, Math.min(200, Math.round((120 + randomVariation * 2) * 100) / 100)),
        first_choice_score: Math.max(0, Math.min(100, Math.round((baseScore + 15 + randomVariation) * 100) / 100)),
        mentions_count: Math.floor(Math.random() * 20) + 10,
        sentiment_score: Math.round((75 + randomVariation / 2) * 100) / 100
      })
    }

    const trendAnalysis = {
      brand_id: brandId,
      brand_name: brand.name,
      days,
      date_range: {
        start: trendData[0].date,
        end: trendData[trendData.length - 1].date
      },
      trend: trendData,
      count: trendData.length,
      
      // 趋势分析
      analysis: {
        overall_trend: calculateTrend(trendData.map(d => d.overall_score)),
        frequency_trend: calculateTrend(trendData.map(d => d.frequency_score)),
        recommendation_trend: calculateTrend(trendData.map(d => d.recommendation_score)),
        search_rate_trend: calculateTrend(trendData.map(d => d.search_rate_score)),
        first_choice_trend: calculateTrend(trendData.map(d => d.first_choice_score))
      },
      
      // 关键指标
      key_metrics: {
        current_score: trendData[trendData.length - 1].overall_score,
        previous_score: trendData[0].overall_score,
        change_percentage: Math.round(
          ((trendData[trendData.length - 1].overall_score - trendData[0].overall_score) / trendData[0].overall_score) * 10000
        ) / 100,
        best_day: trendData.reduce((max, current) => 
          current.overall_score > max.overall_score ? current : max
        ),
        worst_day: trendData.reduce((min, current) => 
          current.overall_score < min.overall_score ? current : min
        )
      },
      
      // 建议
      recommendations: generateRecommendations(trendData, brand)
    }

    return successResponse('Visibility trend retrieved successfully', trendAnalysis)

  } catch (error) {
    console.error('Get visibility trend error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to retrieve visibility trend',
      500
    )
  }
}

// 计算趋势方向
function calculateTrend(scores: number[]): string {
  if (scores.length < 2) return 'stable'
  
  const first = scores.slice(0, Math.floor(scores.length / 3)).reduce((a, b) => a + b) / Math.floor(scores.length / 3)
  const last = scores.slice(-Math.floor(scores.length / 3)).reduce((a, b) => a + b) / Math.floor(scores.length / 3)
  
  const change = ((last - first) / first) * 100
  
  if (change > 5) return 'up'
  if (change < -5) return 'down'
  return 'stable'
}

// 生成建议
function generateRecommendations(trendData: any[], brand: any): string[] {
  const recommendations = []
  const latestData = trendData[trendData.length - 1]
  
  if (latestData.overall_score < 70) {
    recommendations.push(`${brand.name}的整体可见性得分偏低，建议优化品牌关键词策略`)
  }
  
  if (latestData.frequency_score < latestData.recommendation_score) {
    recommendations.push('频率得分低于推荐得分，建议增加品牌在AI响应中的出现频率')
  }
  
  if (latestData.search_rate_score > 150) {
    recommendations.push('搜索率表现优秀，可以继续保持当前策略')
  }
  
  const avgSentiment = trendData.reduce((sum, d) => sum + d.sentiment_score, 0) / trendData.length
  if (avgSentiment < 70) {
    recommendations.push('情感得分偏低，建议关注品牌声誉管理')
  }
  
  return recommendations
}

// OPTIONS 处理CORS预检请求
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders()
  })
} 