import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'
import { mockVisibilityMetrics, mockBrands } from '@/lib/mock-data'

// GET /api/ai-visibility/stats - 获取可见性指标的统计信息
export async function GET(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    const { searchParams } = new URL(request.url)
    const brandId = searchParams.get('brand_id')

    let filteredMetrics = mockVisibilityMetrics

    // 如果指定了品牌ID，过滤数据
    if (brandId) {
      filteredMetrics = mockVisibilityMetrics.filter(m => m.brand_id === brandId)
      
      // 验证品牌是否存在
      const brand = mockBrands.find(b => b.id === brandId)
      if (!brand) {
        return errorResponse(
          'Brand not found',
          `Brand with ID ${brandId} does not exist`,
          404
        )
      }
    }

    // 计算统计数据
    const stats = {
      total_metrics: filteredMetrics.length,
      average_score: filteredMetrics.length > 0 
        ? Math.round(filteredMetrics.reduce((sum, m) => sum + m.overall_score, 0) / filteredMetrics.length * 100) / 100
        : 0,
      brand_id: brandId || null,
      timestamp: new Date().toISOString(),
      
      // 详细分数统计
      score_breakdown: {
        overall: {
          min: filteredMetrics.length > 0 ? Math.min(...filteredMetrics.map(m => m.overall_score)) : 0,
          max: filteredMetrics.length > 0 ? Math.max(...filteredMetrics.map(m => m.overall_score)) : 0,
          avg: filteredMetrics.length > 0 
            ? Math.round(filteredMetrics.reduce((sum, m) => sum + m.overall_score, 0) / filteredMetrics.length * 100) / 100
            : 0
        },
        frequency: {
          min: filteredMetrics.length > 0 ? Math.min(...filteredMetrics.map(m => m.frequency_score)) : 0,
          max: filteredMetrics.length > 0 ? Math.max(...filteredMetrics.map(m => m.frequency_score)) : 0,
          avg: filteredMetrics.length > 0 
            ? Math.round(filteredMetrics.reduce((sum, m) => sum + m.frequency_score, 0) / filteredMetrics.length * 100) / 100
            : 0
        },
        recommendation: {
          min: filteredMetrics.length > 0 ? Math.min(...filteredMetrics.map(m => m.recommendation_score)) : 0,
          max: filteredMetrics.length > 0 ? Math.max(...filteredMetrics.map(m => m.recommendation_score)) : 0,
          avg: filteredMetrics.length > 0 
            ? Math.round(filteredMetrics.reduce((sum, m) => sum + m.recommendation_score, 0) / filteredMetrics.length * 100) / 100
            : 0
        },
        search_rate: {
          min: filteredMetrics.length > 0 ? Math.min(...filteredMetrics.map(m => m.search_rate_score)) : 0,
          max: filteredMetrics.length > 0 ? Math.max(...filteredMetrics.map(m => m.search_rate_score)) : 0,
          avg: filteredMetrics.length > 0 
            ? Math.round(filteredMetrics.reduce((sum, m) => sum + m.search_rate_score, 0) / filteredMetrics.length * 100) / 100
            : 0
        },
        first_choice: {
          min: filteredMetrics.length > 0 ? Math.min(...filteredMetrics.map(m => m.first_choice_score)) : 0,
          max: filteredMetrics.length > 0 ? Math.max(...filteredMetrics.map(m => m.first_choice_score)) : 0,
          avg: filteredMetrics.length > 0 
            ? Math.round(filteredMetrics.reduce((sum, m) => sum + m.first_choice_score, 0) / filteredMetrics.length * 100) / 100
            : 0
        }
      },
      
      // 性能等级分布
      performance_distribution: {
        excellent: filteredMetrics.filter(m => m.overall_score >= 90).length,
        good: filteredMetrics.filter(m => m.overall_score >= 70 && m.overall_score < 90).length,
        average: filteredMetrics.filter(m => m.overall_score >= 50 && m.overall_score < 70).length,
        poor: filteredMetrics.filter(m => m.overall_score < 50).length
      }
    }

    return successResponse('Statistics retrieved successfully', stats)

  } catch (error) {
    console.error('Get visibility stats error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to retrieve visibility statistics',
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