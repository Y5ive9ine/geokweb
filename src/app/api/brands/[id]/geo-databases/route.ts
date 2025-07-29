import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://47.99.189.222:8012/api/v1";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const brandId = params.id;

    // 获取认证token
    const authHeader = request.headers.get("authorization");
    
    // 构建真实API的URL
    const apiUrl = new URL(`${API_BASE_URL}/brands/${brandId}/geo-databases`);

    // 构建请求头
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    console.log(`Calling backend API: ${apiUrl.toString()}`);

    // 调用真实的后端API
    const response = await fetch(apiUrl.toString(), {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.log(`Backend API response:`, { status: response.status, data });

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data.error || data.message || "Failed to fetch brand GEO databases",
          message: data.message || `HTTP ${response.status}`,
        },
        { status: response.status }
      );
    }

    // 返回后端API的响应
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error calling backend API:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Network error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}