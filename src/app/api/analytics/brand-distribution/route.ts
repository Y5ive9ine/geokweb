import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'
import { mockBrandDistribution } from '@/lib/mock-data'

// GET /api/analytics/brand-distribution - 获取品牌分布统计数据
export async function GET(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    // 计算品牌分布数据
    const distributionData = {
      chart_data: mockBrandDistribution,
      total_mentions: mockBrandDistribution.reduce((sum, brand) => sum + brand.percentage, 0),
      leading_brand: mockBrandDistribution[0],
      brand_count: mockBrandDistribution.length,
      market_concentration: {
        top_3_share: mockBrandDistribution.slice(0, 3).reduce((sum, brand) => sum + brand.percentage, 0),
        herfindahl_index: Math.round(
          mockBrandDistribution.reduce((sum, brand) => sum + Math.pow(brand.percentage / 100, 2), 0) * 10000
        ) / 10000
      },
      insights: [
        `${mockBrandDistribution[0].brand_name} 在AI推荐中占据主导地位，占比 ${mockBrandDistribution[0].percentage}%`,
        `前三大品牌占总市场份额的 ${Math.round(mockBrandDistribution.slice(0, 3).reduce((sum, brand) => sum + brand.percentage, 0) * 10) / 10}%`,
        `市场集中度较高，需要关注竞争态势变化`
      ]
    }

    return successResponse('Brand distribution data retrieved successfully', distributionData)

  } catch (error) {
    console.error('Get brand distribution error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to retrieve brand distribution data',
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