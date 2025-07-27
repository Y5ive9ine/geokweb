import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'
import { mockBrands, mockVisibilityMetrics, mockBrandDistribution } from '@/lib/mock-data'

// GET /api/brands/[id]/ai-visibility/report - 生成指定品牌的综合可见性报告
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

    // 验证品牌是否存在
    const brand = mockBrands.find(b => b.id === brandId)
    if (!brand) {
      return errorResponse(
        'Brand not found',
        `Brand with ID ${brandId} does not exist`,
        404
      )
    }

    // 获取品牌的可见性指标
    const brandMetrics = mockVisibilityMetrics.filter(m => m.brand_id === brandId)
    const brandDistribution = mockBrandDistribution.find(d => d.brand_name === brand.name)
    
    // 生成综合报告
    const report = {
      brand_id: brandId,
      brand_name: brand.name,
      report_date: new Date().toISOString(),
      
      // 报告摘要
      summary: {
        overall_performance: brandMetrics.length > 0 
          ? brandMetrics.reduce((sum, m) => sum + m.overall_score, 0) / brandMetrics.length
          : 0,
        market_position: brandDistribution ? {
          rank: mockBrandDistribution.findIndex(d => d.brand_name === brand.name) + 1,
          market_share: brandDistribution.percentage,
          total_competitors: mockBrandDistribution.length
        } : null,
        total_measurements: brandMetrics.length,
        measurement_period: '30 days',
        report_status: 'completed'
      },
      
      // 详细指标
      metrics: {
        visibility_scores: {
          overall: brandMetrics.length > 0 
            ? Math.round(brandMetrics.reduce((sum, m) => sum + m.overall_score, 0) / brandMetrics.length * 100) / 100
            : 0,
          frequency: brandMetrics.length > 0 
            ? Math.round(brandMetrics.reduce((sum, m) => sum + m.frequency_score, 0) / brandMetrics.length * 100) / 100
            : 0,
          recommendation: brandMetrics.length > 0 
            ? Math.round(brandMetrics.reduce((sum, m) => sum + m.recommendation_score, 0) / brandMetrics.length * 100) / 100
            : 0,
          search_rate: brandMetrics.length > 0 
            ? Math.round(brandMetrics.reduce((sum, m) => sum + m.search_rate_score, 0) / brandMetrics.length * 100) / 100
            : 0,
          first_choice: brandMetrics.length > 0 
            ? Math.round(brandMetrics.reduce((sum, m) => sum + m.first_choice_score, 0) / brandMetrics.length * 100) / 100
            : 0
        },
        
        // 关键词分析
        keyword_analysis: {
          primary_keywords: brand.keywords ? brand.keywords.split(',').map(k => k.trim()) : [],
          keyword_performance: [
            { keyword: '处理器', mentions: 156, score: 85.2, trend: 'up' },
            { keyword: '性能', mentions: 142, score: 78.9, trend: 'stable' },
            { keyword: '游戏', mentions: 128, score: 92.1, trend: 'up' },
            { keyword: '技术', mentions: 98, score: 76.4, trend: 'down' }
          ],
          emerging_keywords: ['AI加速', '节能', '新架构'],
          declining_keywords: ['传统架构', '旧平台']
        },
        
        // 竞争分析
        competitive_analysis: {
          main_competitors: mockBrandDistribution
            .filter(d => d.brand_name !== brand.name)
            .slice(0, 3)
            .map(d => ({
              name: d.brand_name,
              market_share: d.percentage,
              gap: brandDistribution ? Math.abs(brandDistribution.percentage - d.percentage) : 0
            })),
          competitive_advantage: brandDistribution && brandDistribution.percentage > 50 
            ? 'market_leader' 
            : brandDistribution && brandDistribution.percentage > 20 
              ? 'strong_position' 
              : 'challenger',
          threats: [
            '竞争对手在AI推荐中的快速增长',
            '新兴技术领域的挑战者',
            '用户偏好的变化'
          ],
          opportunities: [
            '新兴市场的拓展机会',
            'AI相关应用的推广',
            '与生态伙伴的合作'
          ]
        },
        
        // 情感分析
        sentiment_analysis: {
          overall_sentiment: 78.5,
          positive_mentions: 892,
          negative_mentions: 156,
          neutral_mentions: 199,
          sentiment_trends: [
            { period: '本周', score: 79.2, change: '+1.8%' },
            { period: '本月', score: 78.5, change: '+2.1%' },
            { period: '本季度', score: 76.8, change: '+4.2%' }
          ]
        }
      },
      
      // 建议
      recommendations: [
        {
          priority: 'high',
          category: 'keyword_optimization',
          title: '优化关键词策略',
          description: '重点提升在"AI加速"和"节能"等新兴关键词上的表现',
          impact: 'high',
          effort: 'medium'
        },
        {
          priority: 'medium',
          category: 'content_strategy',
          title: '加强内容营销',
          description: '增加技术创新相关内容的输出，提升品牌在AI响应中的出现频率',
          impact: 'medium',
          effort: 'high'
        },
        {
          priority: 'medium',
          category: 'competitive_positioning',
          title: '竞争定位优化',
          description: '在游戏性能领域保持领先优势，关注新兴竞争对手动态',
          impact: 'medium',
          effort: 'medium'
        },
        {
          priority: 'low',
          category: 'monitoring',
          title: '持续监控',
          description: '建立定期的可见性监控机制，及时发现并应对市场变化',
          impact: 'low',
          effort: 'low'
        }
      ],
      
      // 行动计划
      action_plan: {
        immediate_actions: [
          '优化品牌关键词列表，增加新兴技术相关词汇',
          '分析竞争对手策略，制定差异化定位'
        ],
        short_term_goals: [
          '在30天内将整体可见性得分提升至85分以上',
          '在AI推荐频率上超越主要竞争对手'
        ],
        long_term_objectives: [
          '建立行业AI可见性的领导地位',
          '在新兴技术领域建立先发优势'
        ]
      }
    }

    return successResponse('Visibility report generated successfully', report)

  } catch (error) {
    console.error('Generate visibility report error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to generate visibility report',
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