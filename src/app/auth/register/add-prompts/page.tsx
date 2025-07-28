"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GeokLogo } from "@/components/GeokLogo";
import { brandApi } from "@/services/brand";
import { useRegistrationStore } from "@/stores/registrationStore";

export default function AddPromptsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  // Zustand store
  const {
    brandData,
    prompts,
    addPrompt,
    removePrompt,
    updatePrompt,
    setCurrentStep,
    reset,
  } = useRegistrationStore();

  // 检查是否有品牌数据
  useEffect(() => {
    if (!brandData && !isNavigating) {
      router.push("/auth/register/brand-info");
    } else if (brandData) {
      setCurrentStep("add-prompts");
    }
  }, [brandData, router, setCurrentStep, isNavigating]);

  const handleBack = () => {
    router.push("/auth/register/brand-info");
  };

  const handleAddPrompt = () => {
    addPrompt("");
  };

  const handleRemovePrompt = (index: number) => {
    removePrompt(index);
  };

  const handleUpdatePrompt = (index: number, value: string) => {
    updatePrompt(index, value);
  };

  const handleNext = async () => {
    if (!brandData) {
      setError("品牌数据丢失，请重新填写");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 过滤掉空的提示
      const validPrompts = prompts.filter((prompt) => prompt.trim().length > 0);

      // 创建品牌，包含提示
      const response = await brandApi.create({
        name: brandData.name,
        domain: brandData.domain,
        keywords: brandData.keywords,
        description: brandData.description,
        suggestions: validPrompts.length > 0 ? validPrompts : undefined,
      });

      console.log("Brand creation response:", response);

      if (response.success) {
        console.log("Brand created successfully, navigating to dashboard");

        // 设置导航标志，防止useEffect干扰
        setIsNavigating(true);

        // 跳转到仪表板
        console.log("About to navigate to dashboard");
        router.push("/dashboard");
        console.log("Navigation command sent");

        // 延迟清除注册状态，确保路由跳转完成
        setTimeout(() => {
          reset();
        }, 100);
      } else {
        console.log("Brand creation failed:", response.error);
        setError(response.error || "品牌创建失败，请重试");
      }
    } catch (error) {
      console.error("Brand creation error:", error);
      setError("网络错误，请重试");
    } finally {
      setLoading(false);
    }
  };

  if (!brandData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* 渐变背景 */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(38, 99, 255, 0.1) 0%, rgba(255, 178, 0, 0.1) 50%, rgba(147, 51, 234, 0.1) 100%)",
        }}
      />

      {/* 主内容 */}
      <div className="relative z-10 w-full px-8 py-16">
        {/* Logo */}
        <div className="flex items-center mb-12 ml-4 lg:ml-20">
          <GeokLogo width={42} height={37} className="mr-3" />
          <div className="font-medium text-[34px] leading-[46px] tracking-[-0.31px]">
            <span className="text-[#2663FF]">GEO</span>
            <span className="text-[#FFB200]">K</span>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="ml-4 lg:ml-20">
          {/* 步骤指示器 */}
          <div className="hidden lg:flex items-center mb-16 max-w-6xl">
            {/* 第1步 - 已完成 */}
            <div className="flex items-center">
              <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                <span className="text-[#666666] text-[18px] font-normal">
                  1
                </span>
              </div>
              <span className="ml-4 text-[#CCCCCC] text-[18px] font-normal whitespace-nowrap">
                开始
              </span>
            </div>

            {/* 连接线1 */}
            <div className="flex-1 h-[1px] bg-[#2663FF] mx-8 min-w-[200px] max-w-[537px]" />

            {/* 第2步 - 已完成 */}
            <div className="flex items-center">
              <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                <span className="text-[#666666] text-[18px] font-normal">
                  2
                </span>
              </div>
              <span className="ml-4 text-[#CCCCCC] text-[18px] font-normal whitespace-nowrap">
                填写您的品牌详细信息
              </span>
            </div>

            {/* 连接线2 */}
            <div className="flex-1 h-[1px] bg-[#2663FF] mx-8 min-w-[150px] max-w-[398px]" />

            {/* 第3步 - 当前步骤 */}
            <div className="flex items-center">
              <div className="w-[34px] h-[34px] bg-[#2663FF] rounded-full flex items-center justify-center">
                <span className="text-white text-[18px] font-normal">3</span>
              </div>
              <span className="ml-4 text-[#333333] text-[18px] font-semibold whitespace-nowrap">
                添加提示
              </span>
            </div>
          </div>

          {/* 移动端步骤指示器 */}
          <div className="lg:hidden flex justify-center items-center mb-16 -ml-4">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                  <span className="text-[#666666] text-[16px] font-normal">
                    1
                  </span>
                </div>
                <span className="mt-2 text-[#CCCCCC] text-sm">开始</span>
              </div>
              <div className="w-12 h-[1px] bg-[#2663FF]" />
              <div className="flex flex-col items-center">
                <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                  <span className="text-[#666666] text-[16px] font-normal">
                    2
                  </span>
                </div>
                <span className="mt-2 text-[#CCCCCC] text-sm text-center">
                  品牌
                  <br />
                  信息
                </span>
              </div>
              <div className="w-12 h-[1px] bg-[#2663FF]" />
              <div className="flex flex-col items-center">
                <div className="w-[34px] h-[34px] bg-[#2663FF] rounded-full flex items-center justify-center">
                  <span className="text-white text-[16px] font-normal">3</span>
                </div>
                <span className="mt-2 text-[#333333] text-sm font-semibold text-center">
                  添加
                  <br />
                  提示
                </span>
              </div>
            </div>
          </div>

          {/* 主标题 */}
          <h1 className="text-[#333333] text-[18px] font-semibold mb-6">
            让我们为您的品牌找到最佳的搜索提示
          </h1>

          {/* 副标题 */}
          <h2 className="text-[#333333] text-[18px] font-semibold mb-8">
            添加您想要监控的搜索提示（可选）
          </h2>

          {/* 品牌信息预览 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-[540px]">
            <h3 className="text-[#333333] text-[16px] font-medium mb-2">
              品牌信息
            </h3>
            <p className="text-[#666666] text-[14px]">
              <strong>品牌名称：</strong>
              {brandData.name}
            </p>
            <p className="text-[#666666] text-[14px]">
              <strong>域名：</strong>
              {brandData.domain}
            </p>
          </div>

          {/* 提示输入区域 */}
          <div className="space-y-4 mb-16 max-w-[540px]">
            {prompts.map((prompt, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => handleUpdatePrompt(index, e.target.value)}
                    placeholder={`搜索提示 ${index + 1}`}
                    disabled={loading}
                    className={`w-full h-[40px] px-3 rounded border text-[14px] placeholder:text-[#CCCCCC] leading-[40px] focus:outline-none bg-white ${
                      loading
                        ? "border-gray-300 bg-gray-50 text-gray-600 cursor-not-allowed"
                        : "border-[#CCCCCC] text-[#333333] focus:border-[#2663FF]"
                    }`}
                  />
                </div>
                {prompts.length > 1 && (
                  <button
                    onClick={() => handleRemovePrompt(index)}
                    disabled={loading}
                    className="w-[40px] h-[40px] flex items-center justify-center rounded border border-red-300 text-red-500 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}

            {/* 添加提示按钮 */}
            <button
              onClick={handleAddPrompt}
              disabled={loading || prompts.length >= 10}
              className="flex items-center text-[#2663FF] text-[14px] hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="mr-2">+</span>
              添加更多提示
            </button>
          </div>

          {/* 错误提示 */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm max-w-[540px]">
              {error}
            </div>
          )}

          {/* 操作按钮区域 */}
          <div className="flex items-center gap-4">
            {/* 后退按钮 */}
            <button
              onClick={handleBack}
              disabled={loading}
              className={`px-5 py-[6px] rounded text-[14px] font-normal transition-colors leading-[44px] ${
                loading
                  ? "bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-[#CCCCCC] text-[#333333] hover:bg-gray-50"
              }`}
            >
              后退
            </button>

            {/* 间距 */}
            <div className="flex-1" />

            {/* 下一步按钮 */}
            <button
              onClick={handleNext}
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-[6px] rounded text-[16px] font-normal hover:from-blue-700 hover:to-purple-700 transition-all duration-200 leading-[44px] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "创建中..." : "创建"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
