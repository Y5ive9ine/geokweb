"use client";

import { useState } from "react";
import {
  blogApi,
  AIContentGenerationRequest,
  AIContentGenerationResponse,
} from "@/services/blog";

interface AIContentGeneratorProps {
  onContentGenerated?: (content: AIContentGenerationResponse) => void;
  onClose?: () => void;
  isOpen?: boolean;
  onBlogCreated?: () => void;
}

export default function AIContentGenerator({
  onContentGenerated,
  onClose,
  isOpen = false,
  onBlogCreated,
}: AIContentGeneratorProps) {
  const [formData, setFormData] = useState<AIContentGenerationRequest>({
    prompt: "",
    brand_id: "",
    category: "",
    keywords: [],
    tone: "professional",
    length: "medium",
    language: "zh-CN",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] =
    useState<AIContentGenerationResponse | null>(null);
  const [keywordInput, setKeywordInput] = useState("");

  const handleInputChange = (
    field: keyof AIContentGenerationRequest,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddKeyword = () => {
    if (
      keywordInput.trim() &&
      !formData.keywords?.includes(keywordInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        keywords: [...(prev.keywords || []), keywordInput.trim()],
      }));
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords?.filter((k) => k !== keyword) || [],
    }));
  };

  const handleGenerate = async () => {
    if (!formData.prompt.trim()) {
      setError("请输入内容提示");
      return;
    }

    if (formData.prompt.length < 10) {
      setError("内容提示至少需要10个字符");
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedContent(null);

    try {
      console.log("Sending AI generation request:", formData);
      const response = await blogApi.generateAIContent(formData);
      console.log("AI generation response:", response);

      if (response.success && response.data) {
        setGeneratedContent(response.data);
        onContentGenerated?.(response.data);
      } else {
        setError(response.error || response.message || "生成内容失败");
      }
    } catch (err) {
      console.error("AI generation error:", err);
      setError(err instanceof Error ? err.message : "生成内容时发生错误");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBlog = async () => {
    if (!generatedContent) return;

    setLoading(true);
    try {
      const response = await blogApi.createBlogFromAI({
        ...formData,
        auto_publish: false,
      });

      if (response.success) {
        alert("博客创建成功！");
        onBlogCreated?.();
        onClose?.();
      } else {
        setError(response.error || "创建博客失败");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "创建博客时发生错误");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[900px] max-h-[90vh] overflow-y-auto p-6">
        {/* 标题栏 */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">AI内容生成</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* 表单区域 */}
        <div className="space-y-4 mb-6">
          {/* 内容提示 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              内容提示 *
            </label>
            <textarea
              value={formData.prompt}
              onChange={(e) => handleInputChange("prompt", e.target.value)}
              placeholder="请描述您想要生成的内容，例如：写一篇关于最新GPU性能对比的技术文章"
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 分类 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              分类
            </label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
              placeholder="例如：硬件评测、技术教程"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 关键词 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              关键词
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                placeholder="输入关键词"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={(e) => e.key === "Enter" && handleAddKeyword()}
              />
              <button
                onClick={handleAddKeyword}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                添加
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.keywords?.map((keyword, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {keyword}
                  <button
                    onClick={() => handleRemoveKeyword(keyword)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* 语调和长度 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                语调风格
              </label>
              <select
                value={formData.tone}
                onChange={(e) => handleInputChange("tone", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="professional">专业</option>
                <option value="casual">轻松</option>
                <option value="technical">技术</option>
                <option value="marketing">营销</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                文章长度
              </label>
              <select
                value={formData.length}
                onChange={(e) => handleInputChange("length", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="short">短文 (500-800字)</option>
                <option value="medium">中等 (800-1500字)</option>
                <option value="long">长文 (1500-3000字)</option>
              </select>
            </div>
          </div>

          {/* 高级选项 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                目标受众
              </label>
              <input
                type="text"
                value={formData.target_audience || ""}
                onChange={(e) =>
                  handleInputChange("target_audience", e.target.value)
                }
                placeholder="例如：技术爱好者、游戏玩家"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                内容类型
              </label>
              <select
                value={formData.content_type || "article"}
                onChange={(e) =>
                  handleInputChange("content_type", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="article">文章</option>
                <option value="review">评测</option>
                <option value="tutorial">教程</option>
                <option value="news">新闻</option>
                <option value="opinion">观点</option>
              </select>
            </div>
          </div>

          {/* SEO选项 */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.include_seo || false}
                onChange={(e) =>
                  handleInputChange("include_seo", e.target.checked)
                }
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">
                包含SEO优化建议（标题、描述、关键词）
              </span>
            </label>
          </div>
        </div>

        {/* 错误信息 */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* 生成按钮 */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleGenerate}
            disabled={loading || !formData.prompt.trim()}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {loading && (
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            <span>{loading ? "生成中..." : "生成内容"}</span>
          </button>

          {generatedContent && (
            <button
              onClick={handleCreateBlog}
              disabled={loading}
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400 flex items-center space-x-2"
            >
              {loading && (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              <span>创建博客</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            取消
          </button>
        </div>

        {/* 生成的内容预览 */}
        {generatedContent && (
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">生成的内容预览</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">标题：</h4>
                <p className="text-gray-900">{generatedContent.title}</p>
              </div>

              {generatedContent.excerpt && (
                <div>
                  <h4 className="font-medium text-gray-700">摘要：</h4>
                  <p className="text-gray-900">{generatedContent.excerpt}</p>
                </div>
              )}

              <div>
                <h4 className="font-medium text-gray-700">内容：</h4>
                <div className="max-h-60 overflow-y-auto bg-gray-50 p-4 rounded border">
                  <div className="whitespace-pre-wrap text-gray-900">
                    {generatedContent.content}
                  </div>
                </div>
              </div>

              {generatedContent.suggested_tags &&
                generatedContent.suggested_tags.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-700">建议标签：</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {generatedContent.suggested_tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {/* SEO信息 */}
              {(generatedContent.meta_title ||
                generatedContent.meta_description ||
                generatedContent.meta_keywords) && (
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-700 mb-3">SEO信息：</h4>
                  <div className="space-y-3">
                    {generatedContent.meta_title && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">
                          SEO标题：
                        </span>
                        <p className="text-gray-900 text-sm">
                          {generatedContent.meta_title}
                        </p>
                      </div>
                    )}
                    {generatedContent.meta_description && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">
                          SEO描述：
                        </span>
                        <p className="text-gray-900 text-sm">
                          {generatedContent.meta_description}
                        </p>
                      </div>
                    )}
                    {generatedContent.meta_keywords &&
                      generatedContent.meta_keywords.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-gray-600">
                            SEO关键词：
                          </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {generatedContent.meta_keywords.map(
                              (keyword, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                                >
                                  {keyword}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              )}

              {/* 统计信息 */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-700 mb-3">内容统计：</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">字数：</span>
                    <span className="font-medium">
                      {generatedContent.word_count ||
                        generatedContent.content.length}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">预计阅读时间：</span>
                    <span className="font-medium">
                      {generatedContent.reading_time ||
                        Math.ceil(generatedContent.content.length / 200)}
                      分钟
                    </span>
                  </div>
                  {generatedContent.seo_score && (
                    <div>
                      <span className="text-gray-600">SEO得分：</span>
                      <span
                        className={`font-medium ${
                          generatedContent.seo_score >= 80
                            ? "text-green-600"
                            : generatedContent.seo_score >= 60
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {generatedContent.seo_score}/100
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
