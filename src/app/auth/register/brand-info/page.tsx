"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GeokLogo } from "@/components/GeokLogo";
import { brandUtils } from "@/services/brand";
import { useRegistrationStore } from "@/stores/registrationStore";

// 验证状态枚举
enum VerificationStatus {
  IDLE = "idle",
  VERIFYING = "verifying",
  SUCCESS = "success",
  ERROR = "error",
}

type VerificationMethod = "domain" | "file" | "dns" | "meta";

export default function BrandInfoPage() {
  const [brandName, setBrandName] = useState("");
  const [brandDomain, setBrandDomain] = useState("");
  const [keywords, setKeywords] = useState("");
  const [verificationStatus, setVerificationStatus] =
    useState<VerificationStatus>(VerificationStatus.IDLE);
  const [error, setError] = useState("");
  const [verificationMethod, setVerificationMethod] = useState<VerificationMethod>("domain");
  const router = useRouter();

  // Zustand store
  const { brandData, setBrandData, setCurrentStep, setVerified, isVerified } =
    useRegistrationStore();

  // 初始化时从store恢复数据
  useEffect(() => {
    if (brandData) {
      setBrandName(brandData.name);
      setBrandDomain(brandData.domain);
      setKeywords(brandData.keywords);
    }
    if (isVerified) {
      setVerificationStatus(VerificationStatus.SUCCESS);
    }
  }, [brandData, isVerified]);

  const handleBack = () => {
    router.push("/auth/register/onboarding");
  };

  const handleSkip = () => {
    router.push("/dashboard");
  };

  const handleNext = () => {
    router.push("/auth/register/add-prompts");
  };

  const handleReverify = () => {
    setVerified(false);
    setVerificationStatus(VerificationStatus.IDLE);
  };

  const validateForm = () => {
    setError("");

    // 验证品牌名称
    const nameValidation = brandUtils.validateBrandName(brandName);
    if (!nameValidation.valid) {
      setError(nameValidation.message || "品牌名称无效");
      return false;
    }

    // 验证域名
    const domainValidation = brandUtils.validateDomain(brandDomain);
    if (!domainValidation.valid) {
      setError(domainValidation.message || "域名格式无效");
      return false;
    }

    // 验证关键词
    const keywordsValidation = brandUtils.validateKeywords(keywords);
    if (!keywordsValidation.valid) {
      setError(keywordsValidation.message || "关键词无效");
      return false;
    }

    return true;
  };

  const handleVerification = async () => {
    if (!validateForm()) {
      return;
    }

    setVerificationStatus(VerificationStatus.VERIFYING);
    setError("");

    // 保存品牌信息到Zustand store
    const newBrandData = {
      name: brandName.trim(),
      domain: brandUtils.cleanDomain(brandDomain),
      keywords: keywords.trim(),
      description: `品牌 ${brandName} 的AI搜索监控`,
    };
    setBrandData(newBrandData);
    setCurrentStep("verification");

    // TODO: 根据 verificationMethod 调用不同接口（占位模拟）
    setTimeout(() => {
      setVerificationStatus(VerificationStatus.SUCCESS);
      setVerified(true);
    }, 2000);
  };

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

            {/* 第2步 - 当前步骤 */}
            <div className="flex items-center">
              <div className="w-[34px] h-[34px] bg-[#2663FF] rounded-full flex items-center justify-center">
                <span className="text-white text-[18px] font-normal">2</span>
              </div>
              <span className="ml-4 text-[#333333] text-[18px] font-semibold whitespace-nowrap">
                填写您的品牌详细信息
              </span>
            </div>

            {/* 连接线2 */}
            <div className="flex-1 h-[1px] bg-[#CCCCCC] mx-8 min-w-[150px] max-w-[398px]" />

            {/* 第3步 */}
            <div className="flex items-center">
              <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                <span className="text-[#666666] text-[18px] font-normal">
                  3
                </span>
              </div>
              <span className="ml-4 text-[#CCCCCC] text-[18px] font-normal whitespace-nowrap">
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
                <div className="w-[34px] h-[34px] bg-[#2663FF] rounded-full flex items-center justify-center">
                  <span className="text-white text-[16px] font-normal">2</span>
                </div>
                <span className="mt-2 text-[#333333] text-sm font-semibold text-center">
                  品牌
                  <br />
                  信息
                </span>
              </div>
              <div className="w-12 h-[1px] bg-[#CCCCCC]" />
              <div className="flex flex-col items-center">
                <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                  <span className="text-[#666666] text-[16px] font-normal">
                    3
                  </span>
                </div>
                <span className="mt-2 text-[#CCCCCC] text-xs text-center">
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
            告诉我们您的品牌。这有助于我们个性化您的AI搜索监控设置
          </h2>

          {/* 验证方式切换 */}
          <div className="mb-8">
            <div className="inline-flex rounded border border-[#CCCCCC] overflow-hidden">
              {[
                { key: "domain", label: "网站验证" },
                { key: "file", label: "上传文件" },
                { key: "dns", label: "DNS 记录" },
                { key: "meta", label: "Meta 标签" },
              ].map((m) => (
                <button
                  key={m.key}
                  onClick={() => setVerificationMethod(m.key as VerificationMethod)}
                  disabled={verificationStatus !== VerificationStatus.IDLE}
                  className={`${
                    verificationMethod === (m.key as VerificationMethod)
                      ? "bg-[#2663FF] text-white"
                      : "bg-white text-[#333333]"
                  } px-4 py-2 text-sm ${
                    verificationStatus !== VerificationStatus.IDLE
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {verificationMethod === "domain" && "我们会访问您的域名进行自动验证。"}
              {verificationMethod === "file" && "下载验证文件并上传至您站点的根目录后点击验证。"}
              {verificationMethod === "dns" && "在域名服务商处添加指定的 TXT 记录后点击验证。"}
              {verificationMethod === "meta" && "在首页 <head> 中加入我们提供的 meta 标签后点击验证。"}
            </div>
          </div>

          {/* 表单输入区域 */}
          <div className="space-y-[91px] mb-16 max-w-[540px]">
            {/* 品牌名称 */}
            <div>
              <div className="flex items-center mb-[18px]">
                <label className="text-[#333333] text-[18px] font-normal leading-[44px]">
                  品牌名称
                </label>
                <span
                  className="ml-2 text-[14px] text-[#CCCCCC] cursor-help"
                  title="请输入您的品牌名称"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 11.2c-.44 0-.8-.36-.8-.8s.36-.8.8-.8.8.36.8.8-.36.8-.8.8zm1-3.6c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v1.6z" />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="苹果"
                disabled={verificationStatus !== VerificationStatus.IDLE}
                className={`w-full h-[30px] px-3 rounded border text-[14px] placeholder:text-[#CCCCCC] leading-[30px] focus:outline-none bg-white ${
                  verificationStatus !== VerificationStatus.IDLE
                    ? "border-gray-300 bg-gray-50 text-gray-600 cursor-not-allowed"
                    : "border-[#CCCCCC] text-[#333333] focus:border-[#2663FF]"
                }`}
              />
            </div>

            {/* 品牌域名 */}
            <div>
              <div className="flex items-center mb-[18px]">
                <label className="text-[#333333] text-[18px] font-normal leading-[44px]">
                  品牌域名
                </label>
                <span
                  className="ml-2 text-[14px] text-[#CCCCCC] cursor-help"
                  title="请输入您的品牌官方域名"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 11.2c-.44 0-.8-.36-.8-.8s.36-.8.8-.8.8.36.8.8-.36.8-.8.8zm1-3.6c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v1.6z" />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                value={brandDomain}
                onChange={(e) => setBrandDomain(e.target.value)}
                placeholder="apple.com"
                disabled={verificationStatus !== VerificationStatus.IDLE}
                className={`w-full h-[30px] px-3 rounded border text-[14px] placeholder:text-[#CCCCCC] leading-[30px] focus:outline-none bg-white ${
                  verificationStatus !== VerificationStatus.IDLE
                    ? "border-gray-300 bg-gray-50 text-gray-600 cursor-not-allowed"
                    : "border-[#CCCCCC] text-[#333333] focus:border-[#2663FF]"
                }`}
              />
            </div>

            {/* 关键词 */}
            <div>
              <div className="flex items-center mb-[18px]">
                <label className="text-[#333333] text-[18px] font-normal leading-[44px]">
                  关键词
                </label>
                <span
                  className="ml-2 text-[14px] text-[#CCCCCC] cursor-help"
                  title="请输入您要监控的关键词"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 11.2c-.44 0-.8-.36-.8-.8s.36-.8.8-.8.8.36.8.8-.36.8-.8.8zm1-3.6c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v1.6z" />
                  </svg>
                </span>
              </div>
              <textarea
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="粘贴您要定位的热门GEO关键词"
                disabled={verificationStatus !== VerificationStatus.IDLE}
                className={`w-full h-[140px] px-3 py-3 rounded border text-[14px] placeholder:text-[#CCCCCC] leading-[20px] resize-none focus:outline-none bg-white ${
                  verificationStatus !== VerificationStatus.IDLE
                    ? "border-gray-300 bg-gray-50 text-gray-600 cursor-not-allowed"
                    : "border-[#CCCCCC] text-[#333333] focus:border-[#2663FF]"
                }`}
              />
            </div>
          </div>

          {/* 操作按钮区域 */}
          <div className="flex items-center gap-4">
            {/* 后退按钮 */}
            <button
              onClick={handleBack}
              disabled={verificationStatus !== VerificationStatus.IDLE}
              className={`px-5 py-[6px] rounded text-[14px] font-normal transition-colors leading-[44px] ${
                verificationStatus !== VerificationStatus.IDLE
                  ? "bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-[#CCCCCC] text-[#333333] hover:bg-gray-50"
              }`}
            >
              后退
            </button>

            {/* 下一步按钮 */}
            {verificationStatus === VerificationStatus.SUCCESS ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-[6px] rounded text-[16px] font-normal hover:from-blue-700 hover:to-purple-700 transition-all duration-200 leading-[44px] shadow-lg"
                >
                  下一步
                </button>
                <button
                  onClick={handleReverify}
                  className="bg-white border border-[#CCCCCC] text-[#333333] px-8 py-[6px] rounded text-[16px] font-normal hover:bg-gray-50 leading-[44px]"
                >
                  重新验证/编辑信息
                </button>
              </div>
            ) : (
              /* 跳过按钮 */
              <button
                onClick={handleSkip}
                disabled={verificationStatus === VerificationStatus.VERIFYING}
                className={`text-[14px] font-normal transition-colors leading-[44px] ${
                  verificationStatus === VerificationStatus.VERIFYING
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-[#333333] hover:text-gray-600"
                }`}
              >
                跳过
              </button>
            )}

            {/* 间距 */}
            <div className="flex-1" />

            {/* 验证按钮区域 */}
            <div className="relative">
              {verificationStatus === VerificationStatus.IDLE && (
                <button
                  onClick={handleVerification}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-[6px] rounded text-[16px] font-normal hover:from-blue-700 hover:to-purple-700 transition-all duration-200 leading-[44px] shadow-lg"
                >
                  资产验证
                </button>
              )}

              {verificationStatus === VerificationStatus.VERIFYING && (
                <div className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-[6px] rounded shadow-lg">
                  {/* Loading 动画 */}
                  <div className="w-6 h-6 mr-3 relative">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <span className="text-[16px] font-normal leading-[44px]">
                    验证中
                  </span>
                </div>
              )}

              {verificationStatus === VerificationStatus.SUCCESS && (
                <div className="flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-[6px] rounded shadow-lg animate-pulse">
                  {/* 成功图标 */}
                  <div className="w-6 h-6 mr-3 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[16px] font-normal leading-[44px]">
                    验证成功
                  </span>
                </div>
              )}

              {verificationStatus === VerificationStatus.ERROR && (
                <button
                  onClick={handleVerification}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-[6px] rounded text-[16px] font-normal hover:from-red-600 hover:to-red-700 transition-all duration-200 leading-[44px] shadow-lg"
                >
                  重试验证
                </button>
              )}
            </div>
          </div>

          {/* 错误提示 */}
          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
