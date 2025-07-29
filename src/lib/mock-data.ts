import {
  User,
  Brand,
  AISearch,
  AIResponse,
  VisibilityMetrics,
  Prompt,
  Reference,
  Notification,
  DashboardStats,
  BrandDistribution,
} from "./types";

// 模拟用户数据
export const mockUsers: User[] = [
  {
    id: "user-1",
    username: "john_doe",
    email: "john@example.com",
    first_name: "John",
    last_name: "Doe",
    role: "user",
    status: "active",
    bio: "Software developer",
    phone: "+1-555-0123",
    company: "Tech Corp",
    country: "United States",
    avatar_url: "/avatars/john.jpg",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-07-20T00:00:00Z",
  },
  {
    id: "user-2",
    username: "ethelbert_williams",
    email: "ethelbert@geok.com",
    first_name: "Ethelbert",
    last_name: "Williams",
    role: "user",
    status: "active",
    bio: "Brand manager",
    company: "GEOK",
    country: "United States",
    created_at: "2024-01-15T00:00:00Z",
    updated_at: "2024-07-20T00:00:00Z",
  },
];

// 模拟品牌数据
export const mockBrands: Brand[] = [
  {
    id: "brand-1",
    name: "Intel",
    domain: "intel.com",
    keywords: "processors,CPU,technology,innovation",
    description: "Leading semiconductor company",
    status: "active",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-07-20T00:00:00Z",
  },
  {
    id: "brand-2",
    name: "AMD",
    domain: "amd.com",
    keywords: "processors,GPU,gaming,performance",
    description: "Advanced Micro Devices",
    status: "active",
    created_at: "2024-01-02T00:00:00Z",
    updated_at: "2024-07-20T00:00:00Z",
  },
  {
    id: "brand-3",
    name: "Apple",
    domain: "apple.com",
    keywords: "iPhone,iPad,Mac,innovation,design",
    description: "Consumer electronics company",
    status: "active",
    created_at: "2024-01-03T00:00:00Z",
    updated_at: "2024-07-20T00:00:00Z",
  },
  {
    id: "brand-4",
    name: "Qualcomm",
    domain: "qualcomm.com",
    keywords: "mobile,5G,wireless,chips",
    description: "Wireless technology company",
    status: "active",
    created_at: "2024-01-04T00:00:00Z",
    updated_at: "2024-07-20T00:00:00Z",
  },
  {
    id: "brand-5",
    name: "ARM Holdings",
    domain: "arm.com",
    keywords: "architecture,mobile,embedded,IoT",
    description: "Semiconductor IP company",
    status: "active",
    created_at: "2024-01-05T00:00:00Z",
    updated_at: "2024-07-20T00:00:00Z",
  },
];

// 模拟AI搜索数据
export const mockAISearches: AISearch[] = [
  {
    id: "search-1",
    brand_id: "brand-1",
    questions: [
      "What are the best processors for gaming?",
      "Which CPU brand is most reliable?",
    ],
    status: "completed",
    created_at: "2024-07-15T00:00:00Z",
    updated_at: "2024-07-15T01:00:00Z",
  },
  {
    id: "search-2",
    brand_id: "brand-2",
    questions: ["Best graphics cards for AI workloads?"],
    status: "processing",
    created_at: "2024-07-20T00:00:00Z",
    updated_at: "2024-07-20T00:30:00Z",
  },
];

// 模拟AI响应数据
export const mockAIResponses: AIResponse[] = [
  {
    id: "response-1",
    search_id: "search-1",
    question: "What are the best processors for gaming?",
    response:
      "For gaming, Intel and AMD both offer excellent processors. Intel's latest 13th gen processors provide great performance, while AMD's Ryzen series offers excellent value for money.",
    model_type: "gpt-4",
    created_at: "2024-07-15T00:30:00Z",
  },
];

// 模拟可见性指标数据
export const mockVisibilityMetrics: VisibilityMetrics[] = [
  {
    id: "metrics-1",
    ai_response_id: "response-1",
    brand_id: "brand-1",
    visibility_data: { mentions: 5, position: 1, sentiment: "positive" },
    keyword_data: { gaming: 0.8, performance: 0.9, reliability: 0.7 },
    overall_score: 85.5,
    frequency_score: 72.5,
    recommendation_score: 89.2,
    search_rate_score: 159.8,
    first_choice_score: 92.1,
    calculated_at: "2024-07-15T01:00:00Z",
  },
];

// 模拟提示词数据
export const mockPrompts: Prompt[] = [
  {
    id: "prompt-1",
    brand_id: "brand-1",
    title: "Intel处理器优势分析",
    content: "Intel处理器在游戏性能和稳定性方面表现出色",
    description: "基于AI分析生成的品牌优势总结",
    category: "analysis",
    created_at: "2024-07-15T00:00:00Z",
    updated_at: "2024-07-15T00:00:00Z",
  },
];

// 模拟引用数据
export const mockReferences: Reference[] = [
  {
    id: "ref-1",
    brand_id: "brand-1",
    ai_response_id: "response-1",
    url: "https://techreview.com/intel-processors",
    title: "Intel Processor Review 2024",
    domain: "techreview.com",
    excerpt: "Intel continues to lead in processor innovation...",
    created_at: "2024-07-15T00:00:00Z",
  },
];

// 模拟通知数据
export const mockNotifications: Notification[] = [
  {
    id: "notif-1",
    user_id: "user-1",
    title: "AI搜索完成",
    message: "您的品牌AI搜索已完成，可以查看结果",
    type: "success",
    read: false,
    created_at: "2024-07-20T10:00:00Z",
  },
];

// 模拟仪表板统计数据
export const mockDashboardStats: DashboardStats = {
  total_brands: 5,
  total_searches: 150,
  total_responses: 450,
  avg_visibility_score: 75.5,
};

// 模拟品牌分布数据
export const mockBrandDistribution: BrandDistribution[] = [
  { brand_name: "Intel", percentage: 72.5, color: "#2663FF" },
  { brand_name: "AMD", percentage: 15.7, color: "#FFB200" },
  { brand_name: "Apple", percentage: 9.3, color: "#11CA9C" },
  { brand_name: "Qualcomm", percentage: 1.3, color: "#FA8919" },
  { brand_name: "ARM Holdings", percentage: 1.2, color: "#FF4D4D" },
];

// 模拟关键词频率数据 - 动态生成，支持不同的关键词类型
export const mockKeywordFrequency = [
  { keyword: "用户体验", frequency: 85, score: 0.8 },
  { keyword: "技术创新", frequency: 92, score: 0.9 },
  { keyword: "市场竞争", frequency: 88, score: 0.85 },
  { keyword: "成本效益", frequency: 76, score: 0.75 },
  { keyword: "服务质量", frequency: 94, score: 0.95 },
  { keyword: "解决方案", frequency: 82, score: 0.8 },
  { keyword: "行业领先", frequency: 78, score: 0.82 },
  { keyword: "客户满意", frequency: 89, score: 0.88 },
];

// 生成动态关键词数据的工具函数
export const generateDynamicKeywords = (categories: string[] = []) => {
  const defaultCategories = [
    "技术能力", "用户体验", "市场定位", "成本优势", 
    "创新能力", "服务水平", "品牌认知", "竞争优势"
  ];
  
  const keywordsToUse = categories.length > 0 ? categories : defaultCategories;
  
  return keywordsToUse.map(keyword => ({
    keyword,
    frequency: Math.floor(Math.random() * 40) + 60, // 60-100之间的随机值
    score: (Math.random() * 0.4) + 0.6, // 0.6-1.0之间的随机分数
  }));
};
