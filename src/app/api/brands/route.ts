import { NextRequest } from 'next/server'
import { successResponse, errorResponse, requireAuth, generateId, paginate, corsHeaders } from '@/lib/api-utils'
import { mockBrands } from '@/lib/mock-data'
import { CreateBrandRequest, Brand } from '@/lib/types'

// GET /api/brands - 获取品牌列表
export async function GET(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const pageSize = parseInt(searchParams.get('page_size') || '10')
    const search = searchParams.get('search') || ''

    // 过滤品牌（根据搜索关键词）
    let filteredBrands = mockBrands
    if (search) {
      const searchLower = search.toLowerCase()
      filteredBrands = mockBrands.filter(brand => 
        brand.name.toLowerCase().includes(searchLower) ||
        brand.domain.toLowerCase().includes(searchLower) ||
        (brand.keywords && brand.keywords.toLowerCase().includes(searchLower))
      )
    }

    // 分页
    const paginatedResult = paginate(filteredBrands, page, pageSize)

    return successResponse('Brands retrieved successfully', {
      brands: paginatedResult.items,
      ...paginatedResult
    })

  } catch (error) {
    console.error('Get brands error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to retrieve brands',
      500
    )
  }
}

// POST /api/brands - 创建品牌
export async function POST(request: NextRequest) {
  try {
    // 验证用户认证
    const authResult = requireAuth(request)
    if (authResult instanceof Response) {
      return authResult
    }

    const body: CreateBrandRequest = await request.json()

    // 验证必填字段
    if (!body.name || !body.domain) {
      return errorResponse(
        'Missing required fields',
        'name and domain are required',
        400
      )
    }

    // 验证域名格式
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/
    if (!domainRegex.test(body.domain)) {
      return errorResponse(
        'Invalid domain format',
        'Please provide a valid domain name',
        400
      )
    }

    // 检查品牌名称是否已存在
    const existingBrandByName = mockBrands.find(b => 
      b.name.toLowerCase() === body.name.toLowerCase()
    )
    if (existingBrandByName) {
      return errorResponse(
        'Brand name already exists',
        'A brand with this name already exists',
        409
      )
    }

    // 检查域名是否已存在
    const existingBrandByDomain = mockBrands.find(b => 
      b.domain.toLowerCase() === body.domain.toLowerCase()
    )
    if (existingBrandByDomain) {
      return errorResponse(
        'Domain already exists',
        'A brand with this domain already exists',
        409
      )
    }

    // 创建新品牌
    const newBrand: Brand = {
      id: generateId(),
      name: body.name,
      domain: body.domain,
      keywords: body.keywords || '',
      description: body.description || '',
      status: 'active',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    // 添加到模拟数据中
    mockBrands.push(newBrand)

    return successResponse('Brand created successfully', newBrand, 201)

  } catch (error) {
    console.error('Create brand error:', error)
    return errorResponse(
      'Internal server error',
      'Failed to create brand',
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