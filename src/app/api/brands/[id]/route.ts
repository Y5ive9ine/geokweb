import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, corsHeaders } from '@/lib/api-utils'
import { mockBrands } from '@/lib/mock-data'
import { CreateBrandRequest } from '@/lib/types'

// GET /api/brands/[id] - 获取品牌详情
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

    const { id } = params

    // 查找品牌
    const brand = mockBrands.find(b => b.id === id)
    if (!brand) {
      return errorResponse(
        'Brand not found',
        `Brand with ID ${id} does not exist`,
        404
      )
    }

    return successResponse('Brand retrieved successfully', brand)

  } catch (error) {
    console.error('Get brand error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to retrieve brand',
      500
    )
  }
}

// PUT /api/brands/[id] - 更新品牌
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    const { id } = params
    const body: Partial<CreateBrandRequest> = await request.json()

    // 查找品牌
    const brandIndex = mockBrands.findIndex(b => b.id === id)
    if (brandIndex === -1) {
      return errorResponse(
        'Brand not found',
        `Brand with ID ${id} does not exist`,
        404
      )
    }

    const existingBrand = mockBrands[brandIndex]

    // 验证域名格式（如果提供了新域名）
    if (body.domain) {
      const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/
      if (!domainRegex.test(body.domain)) {
        return errorResponse(
          'Invalid domain format',
          'Please provide a valid domain name',
          400
        )
      }

      // 检查域名是否已被其他品牌使用
      const existingBrandByDomain = mockBrands.find(b => 
        b.domain.toLowerCase() === body.domain.toLowerCase() && b.id !== id
      )
      if (existingBrandByDomain) {
        return errorResponse(
          'Domain already exists',
          'Another brand with this domain already exists',
          409
        )
      }
    }

    // 检查品牌名称是否已被其他品牌使用
    if (body.name) {
      const existingBrandByName = mockBrands.find(b => 
        b.name.toLowerCase() === body.name.toLowerCase() && b.id !== id
      )
      if (existingBrandByName) {
        return errorResponse(
          'Brand name already exists',
          'Another brand with this name already exists',
          409
        )
      }
    }

    // 更新品牌信息
    const updatedBrand = {
      ...existingBrand,
      ...body,
      updated_at: new Date().toISOString()
    }

    mockBrands[brandIndex] = updatedBrand

    return successResponse('Brand updated successfully', updatedBrand)

  } catch (error) {
    console.error('Update brand error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to update brand',
      500
    )
  }
}

// DELETE /api/brands/[id] - 删除品牌
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    const { id } = params

    // 查找品牌
    const brandIndex = mockBrands.findIndex(b => b.id === id)
    if (brandIndex === -1) {
      return errorResponse(
        'Brand not found',
        `Brand with ID ${id} does not exist`,
        404
      )
    }

    // 删除品牌
    mockBrands.splice(brandIndex, 1)

    return successResponse('Brand deleted successfully', {
      id,
      deleted_at: new Date().toISOString()
    })

  } catch (error) {
    console.error('Delete brand error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to delete brand',
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