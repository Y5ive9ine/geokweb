import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'

// GET /api/dashboard/geo-optimization - 获取GEO优化仪表板数据
export async function GET(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    // 获取查询参数
    const searchParams = request.nextUrl.searchParams
    const brandId = searchParams.get('brand_id')
    const days = parseInt(searchParams.get('days') || '7')

    // 模拟 GEO 优化数据
    const geoOptimizationData = {
      summary: {
        total_optimizations: 24,
        active_campaigns: 8,
        completed_campaigns: 16,
        avg_performance_score: 78.5,
        total_coverage: 85.2,
        improvement_rate: 12.8
      },
      
      performance_metrics: {
        visibility_score: 82.3,
        search_ranking: 4.2,
        brand_mention_rate: 67.8,
        geographic_coverage: 78.5,
        recommendation_accuracy: 85.1
      },
      
      recent_activities: [
        {
          id: '1',
          type: 'optimization',
          description: '更新了美国西海岸地区的品牌关键词策略',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          impact_score: 8.5
        },
        {
          id: '2',
          type: 'analysis',
          description: '完成了欧洲市场的 GEO 表现分析',
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
          impact_score: 7.2
        },
        {
          id: '3',
          type: 'recommendation',
          description: '生成了亚太地区的优化建议',
          timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
          impact_score: 9.1
        }
      ],
      
      geographic_distribution: [
        { region: 'North America', score: 85.2, campaigns: 6, coverage: 92.1 },
        { region: 'Europe', score: 78.9, campaigns: 4, coverage: 78.5 },
        { region: 'Asia Pacific', score: 72.1, campaigns: 3, coverage: 65.8 },
        { region: 'Latin America', score: 68.5, campaigns: 2, coverage: 58.2 },
        { region: 'Middle East & Africa', score: 61.3, campaigns: 1, coverage: 42.7 }
      ],
      
      trending_keywords: [
        { keyword: 'sustainable technology', mentions: 245, growth: 18.5, regions: 3 },
        { keyword: 'AI innovation', mentions: 189, growth: 25.2, regions: 4 },
        { keyword: 'cloud solutions', mentions: 167, growth: 12.8, regions: 5 },
        { keyword: 'data security', mentions: 134, growth: 8.9, regions: 2 },
        { keyword: 'digital transformation', mentions: 98, growth: 15.3, regions: 3 }
      ],
      
      optimization_recommendations: [
        {
          id: '1',
          priority: 'high',
          title: '扩大亚太地区覆盖范围',
          description: '建议在新加坡和日本增加品牌关键词投放',
          potential_improvement: 15.2,
          effort_level: 'medium'
        },
        {
          id: '2',
          priority: 'medium',
          title: '优化欧洲市场策略',
          description: '调整德国和法国的本地化关键词策略',
          potential_improvement: 8.7,
          effort_level: 'low'
        },
        {
          id: '3',
          priority: 'medium',
          title: '强化北美表现',
          description: '增加加拿大市场的品牌曝光度',
          potential_improvement: 6.3,
          effort_level: 'high'
        }
      ],
      
      performance_trends: {
        labels: Array.from({ length: days }, (_, i) => {
          const date = new Date()
          date.setDate(date.getDate() - (days - 1 - i))
          return date.toISOString().split('T')[0]
        }),
        datasets: [
          {
            label: 'Visibility Score',
            data: Array.from({ length: days }, () => Math.floor(Math.random() * 20 + 70))
          },
          {
            label: 'Coverage Rate',
            data: Array.from({ length: days }, () => Math.floor(Math.random() * 15 + 75))
          },
          {
            label: 'Mention Rate',
            data: Array.from({ length: days }, () => Math.floor(Math.random() * 25 + 60))
          }
        ]
      }
    }

    return successResponse('GEO optimization dashboard data retrieved successfully', geoOptimizationData)

  } catch (error) {
    console.error('Get GEO optimization dashboard data error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to retrieve GEO optimization dashboard data',
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