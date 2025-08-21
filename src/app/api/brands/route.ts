import { NextRequest, NextResponse } from 'next/server'

// 模拟品牌数据
const mockBrandsData = {
  "success": true,
  "data": [
    {
      "id": "4fc86ecb-8e0e-476b-8826-bf4dc95fce0d",
      "user_id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "英伟达显卡",
      "domain": "nvidia.com",
      "keywords": "显卡,GPU,游戏,图形处理,人工智能,深度学习,RTX,GeForce,CUDA,游戏显卡",
      "linked_url": "https://www.nvidia.com",
      "description": "全球领先的图形处理器和人工智能计算平台制造商，专注于游戏、专业可视化、数据中心和汽车市场",
      "is_asset_verified": true,
      "status": "active",
      "origin_start_type": "geo_keywords",
      "created_at": "2025-07-29T18:09:16.19196+08:00",
      "updated_at": "2025-07-29T18:09:16.19196+08:00",
      "user": {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "username": "demo_user",
        "email": "demo@geok.com",
        "first_name": "Demo",
        "last_name": "User",
        "avatar": "/avatars/demo.png",
        "bio": "GEOK Center演示用户",
        "phone": "+1-555-0123",
        "company": "GEOK Technologies",
        "country": "United States",
        "role": "admin",
        "status": "active",
        "origin": "geok",
        "email_verified": true,
        "google_email": "demo@geok.com",
        "current_brand_id": null,
        "last_login": null,
        "login_protection": false,
        "password_change_required": false,
        "security_lock": false,
        "created_at": "2025-07-29T18:09:16.188696+08:00",
        "updated_at": "2025-07-29T18:09:16.188696+08:00"
      }
    },
    {
      "id": "8ba7b810-9dad-11d1-80b4-00c04fd430c9",
      "user_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
      "name": "享界",
      "domain": "aito.com",
      "keywords": "智能汽车,新能源,电动车,自动驾驶,华为,赛力斯,AITO,智能出行,电动汽车",
      "linked_url": "https://www.aito.com",
      "description": "华为与赛力斯合作打造的高端智能电动汽车品牌，致力于为用户提供极致的智能出行体验",
      "is_asset_verified": true,
      "status": "active",
      "origin_start_type": "search_prompts",
      "created_at": "2025-07-29T18:09:16.193599+08:00",
      "updated_at": "2025-07-29T18:09:16.193599+08:00",
      "user": {
        "id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
        "username": "test_user",
        "email": "test@geok.com",
        "first_name": "Test",
        "last_name": "User",
        "avatar": "/avatars/test.png",
        "bio": "GEOK Center测试用户",
        "phone": "+1-555-0456",
        "company": "Test Corp",
        "country": "Canada",
        "role": "user",
        "status": "active",
        "origin": "geok",
        "email_verified": true,
        "google_email": "test@geok.com",
        "current_brand_id": null,
        "last_login": null,
        "login_protection": false,
        "password_change_required": false,
        "security_lock": false,
        "created_at": "2025-07-29T18:09:16.190578+08:00",
        "updated_at": "2025-07-29T18:09:16.190578+08:00"
      }
    },
    {
      "id": "2cb957ed-3f18-49b7-9782-1902252e6415",
      "user_id": "ba567055-1aa6-4ae0-ab96-6916f6ad2a2a",
      "name": "devin",
      "domain": "devin.ai",
      "keywords": "AI",
      "linked_url": "",
      "description": "品牌 devin 的AI搜索监控",
      "suggestions": [
        "ai"
      ],
      "is_asset_verified": false,
      "status": "active",
      "origin_start_type": "geo_keywords",
      "created_at": "2025-07-29T20:13:04.667848+08:00",
      "updated_at": "2025-07-29T20:13:04.667848+08:00",
      "user": {
        "id": "ba567055-1aa6-4ae0-ab96-6916f6ad2a2a",
        "username": "zhengdevin10@gmail.com",
        "email": "zhengdevin10@gmail.com",
        "first_name": "devin",
        "last_name": "zheng",
        "avatar": "http://network.jancsitech.net:9000/geok-center/images/general/202507/1753870497630848857.jpeg",
        "bio": "123",
        "phone": "18819597673",
        "company": "123",
        "country": "中国",
        "role": "user",
        "status": "active",
        "origin": "geok",
        "email_verified": false,
        "google_email": "",
        "current_brand_id": "4fc86ecb-8e0e-476b-8826-bf4dc95fce0d",
        "last_login": "2025-08-19T15:12:10.777809+08:00",
        "login_protection": false,
        "password_change_required": false,
        "security_lock": false,
        "created_at": "2025-07-29T20:12:29.372678+08:00",
        "updated_at": "2025-08-19T15:12:10.778009+08:00"
      }
    },
    {
      "id": "0d76dbb1-e218-4ec0-aa78-9bfd9c2c2401",
      "user_id": "82763866-dabf-4bb7-a6bb-5b2119908381",
      "name": "Rendora",
      "domain": "rendora.ai",
      "keywords": "数字人",
      "linked_url": "",
      "description": "品牌 Rendora 的AI搜索监控",
      "is_asset_verified": false,
      "status": "active",
      "origin_start_type": "geo_keywords",
      "created_at": "2025-07-31T07:10:10.502479+08:00",
      "updated_at": "2025-07-31T07:10:10.502479+08:00",
      "user": {
        "id": "82763866-dabf-4bb7-a6bb-5b2119908381",
        "username": "joy@rendora.ai",
        "email": "joy@rendora.ai",
        "first_name": "Wu",
        "last_name": "Joy",
        "avatar": "",
        "bio": "",
        "phone": "",
        "company": "",
        "country": "",
        "role": "user",
        "status": "active",
        "origin": "geok",
        "email_verified": false,
        "google_email": "",
        "current_brand_id": null,
        "last_login": "2025-07-31T07:08:09.481264+08:00",
        "login_protection": false,
        "password_change_required": false,
        "security_lock": false,
        "created_at": "2025-07-31T07:08:03.757172+08:00",
        "updated_at": "2025-07-31T07:08:09.481467+08:00"
      }
    },
    {
      "id": "c503f821-b438-41c9-8375-a6bbb031d64b",
      "user_id": "8d92bb68-c032-4a28-8a19-b8aaca8724f3",
      "name": "英伟达",
      "domain": "nvdia.com",
      "keywords": "nvdia",
      "linked_url": "",
      "description": "品牌 英伟达 的AI搜索监控",
      "suggestions": [
        "中国GPU哪个好"
      ],
      "is_asset_verified": false,
      "status": "active",
      "origin_start_type": "geo_keywords",
      "created_at": "2025-07-31T10:10:43.190107+08:00",
      "updated_at": "2025-07-31T10:10:43.190107+08:00",
      "user": {
        "id": "8d92bb68-c032-4a28-8a19-b8aaca8724f3",
        "username": "2038758@qq.com",
        "email": "2038758@qq.com",
        "first_name": "Jia",
        "last_name": "Ouyang",
        "avatar": "",
        "bio": "",
        "phone": "",
        "company": "",
        "country": "",
        "role": "user",
        "status": "active",
        "origin": "geok",
        "email_verified": false,
        "google_email": "",
        "current_brand_id": "4fc86ecb-8e0e-476b-8826-bf4dc95fce0d",
        "last_login": "2025-08-06T14:00:58.411821+08:00",
        "login_protection": false,
        "password_change_required": false,
        "security_lock": false,
        "created_at": "2025-07-31T10:09:23.030341+08:00",
        "updated_at": "2025-08-06T14:00:58.412052+08:00"
      }
    },
    {
      "id": "c540564a-2954-481b-adbf-20200da7f5d2",
      "user_id": "4217fc24-3574-437a-b3f3-b5359c28f02d",
      "name": "apple",
      "domain": "apple.com",
      "keywords": "ipad",
      "linked_url": "",
      "description": "品牌 apple 的AI搜索监控",
      "suggestions": [
        "ipad"
      ],
      "is_asset_verified": false,
      "status": "active",
      "origin_start_type": "geo_keywords",
      "created_at": "2025-07-31T14:29:07.290473+08:00",
      "updated_at": "2025-07-31T14:29:07.290473+08:00",
      "user": {
        "id": "4217fc24-3574-437a-b3f3-b5359c28f02d",
        "username": "cosmofang@qq.com",
        "email": "cosmofang@qq.com",
        "first_name": "jing",
        "last_name": "fang",
        "avatar": "",
        "bio": "",
        "phone": "",
        "company": "",
        "country": "",
        "role": "user",
        "status": "active",
        "origin": "geok",
        "email_verified": false,
        "google_email": "",
        "current_brand_id": "8ba7b810-9dad-11d1-80b4-00c04fd430c9",
        "last_login": "2025-07-31T14:56:43.953102+08:00",
        "login_protection": false,
        "password_change_required": false,
        "security_lock": false,
        "created_at": "2025-07-31T14:27:47.19126+08:00",
        "updated_at": "2025-07-31T15:13:11.938441+08:00"
      }
    },
    {
      "id": "f0b20ca3-397e-48c3-aab6-7ed3dd837250",
      "user_id": "30d8b101-76be-4f33-bee7-c2a7b558e0f7",
      "name": "啊实打实打算",
      "domain": "rendora.ai",
      "keywords": "啊实打实的",
      "linked_url": "",
      "description": "品牌 啊实打实打算 的AI搜索监控",
      "suggestions": [
        "rendora好不好"
      ],
      "is_asset_verified": false,
      "status": "active",
      "origin_start_type": "geo_keywords",
      "created_at": "2025-07-31T15:11:08.967656+08:00",
      "updated_at": "2025-07-31T15:11:08.967656+08:00",
      "user": {
        "id": "30d8b101-76be-4f33-bee7-c2a7b558e0f7",
        "username": "harry.liuty@gmail.com",
        "email": "harry.liuty@gmail.com",
        "first_name": "456",
        "last_name": "123",
        "avatar": "",
        "bio": "",
        "phone": "",
        "company": "",
        "country": "",
        "role": "user",
        "status": "active",
        "origin": "geok",
        "email_verified": false,
        "google_email": "",
        "current_brand_id": "8ba7b810-9dad-11d1-80b4-00c04fd430c9",
        "last_login": "2025-07-31T14:31:05.321292+08:00",
        "login_protection": false,
        "password_change_required": false,
        "security_lock": false,
        "created_at": "2025-07-31T14:30:37.833546+08:00",
        "updated_at": "2025-07-31T15:18:40.779581+08:00"
      }
    },
    {
      "id": "f723a886-4a0d-47e6-bf4b-b5123a85e336",
      "user_id": "cfd869ea-96a1-4d26-8382-e4ad9a9e86a1",
      "name": "123",
      "domain": "123.com",
      "keywords": "1",
      "linked_url": "",
      "description": "品牌 123 的AI搜索监控",
      "is_asset_verified": false,
      "status": "active",
      "origin_start_type": "geo_keywords",
      "created_at": "2025-08-18T22:41:59.395835+08:00",
      "updated_at": "2025-08-18T22:41:59.395835+08:00",
      "user": {
        "id": "cfd869ea-96a1-4d26-8382-e4ad9a9e86a1",
        "username": "john@example.com",
        "email": "john@example.com",
        "first_name": "doe",
        "last_name": "john",
        "avatar": "",
        "bio": "",
        "phone": "",
        "company": "",
        "country": "",
        "role": "user",
        "status": "active",
        "origin": "geok",
        "email_verified": false,
        "google_email": "",
        "current_brand_id": "4fc86ecb-8e0e-476b-8826-bf4dc95fce0d",
        "last_login": "2025-08-21T09:33:01.439091+08:00",
        "login_protection": false,
        "password_change_required": false,
        "security_lock": false,
        "created_at": "2025-07-29T18:14:47.194922+08:00",
        "updated_at": "2025-08-21T09:33:01.439291+08:00"
      }
    }
  ],
  "meta": {
    "page": 1,
    "page_size": 10,
    "total": 8,
    "total_pages": 1
  },
  "timestamp": new Date().toISOString()
}

export async function GET(request: NextRequest) {
  try {
    // 获取查询参数
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const pageSize = parseInt(searchParams.get('page_size') || '10')

    // 计算分页数据
    const allBrands = mockBrandsData.data
    const total = allBrands.length
    const totalPages = Math.ceil(total / pageSize)
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const paginatedData = allBrands.slice(start, end)

    // 返回分页后的数据
    const response = {
      ...mockBrandsData,
      data: paginatedData,
      meta: {
        page,
        page_size: pageSize,
        total,
        total_pages: totalPages
      },
      timestamp: new Date().toISOString()
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching brands:', error)
    return NextResponse.json(
      { success: false, error: '获取品牌数据失败' },
      { status: 500 }
    )
  }
}
