'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GeokLogo } from '@/components/GeokLogo'

export default function OnboardingPage() {
  const [selectedOption, setSelectedOption] = useState(0) // 默认选择第一个选项
  const router = useRouter()

  const handleNext = () => {
    // 无论选择什么选项，都先跳转到品牌信息填写页面
    router.push('/auth/register/brand-info')
  }

  const handleSkip = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* 渐变背景 */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100"
        style={{
          background: 'linear-gradient(135deg, rgba(38, 99, 255, 0.1) 0%, rgba(255, 178, 0, 0.1) 50%, rgba(147, 51, 234, 0.1) 100%)'
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
            {/* 第1步 - 当前步骤 */}
            <div className="flex items-center">
              <div className="w-[34px] h-[34px] bg-[#2663FF] rounded-full flex items-center justify-center">
                <span className="text-white text-[18px] font-normal">1</span>
              </div>
              <span className="ml-4 text-[#333333] text-[18px] font-semibold whitespace-nowrap">开始</span>
            </div>

            {/* 连接线1 */}
            <div className="flex-1 h-[1px] bg-[#2663FF] mx-8 min-w-[200px] max-w-[537px]" />

            {/* 第2步 */}
            <div className="flex items-center">
              <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                <span className="text-[#666666] text-[18px] font-normal">2</span>
              </div>
              <span className="ml-4 text-[#CCCCCC] text-[18px] font-normal whitespace-nowrap">填写您的品牌详细信息</span>
            </div>

            {/* 连接线2 */}
            <div className="flex-1 h-[1px] bg-[#CCCCCC] mx-8 min-w-[150px] max-w-[398px]" />

            {/* 第3步 */}
            <div className="flex items-center">
              <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                <span className="text-[#666666] text-[18px] font-normal">3</span>
              </div>
              <span className="ml-4 text-[#CCCCCC] text-[18px] font-normal whitespace-nowrap">添加提示</span>
            </div>
          </div>

          {/* 移动端步骤指示器 */}
          <div className="lg:hidden flex justify-center items-center mb-16 -ml-4">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-[34px] h-[34px] bg-[#2663FF] rounded-full flex items-center justify-center">
                  <span className="text-white text-[16px] font-normal">1</span>
                </div>
                <span className="mt-2 text-[#333333] text-sm font-semibold">开始</span>
              </div>
              <div className="w-12 h-[1px] bg-[#2663FF]" />
              <div className="flex flex-col items-center">
                <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                  <span className="text-[#666666] text-[16px] font-normal">2</span>
                </div>
                <span className="mt-2 text-[#CCCCCC] text-xs text-center">品牌<br/>信息</span>
              </div>
              <div className="w-12 h-[1px] bg-[#CCCCCC]" />
              <div className="flex flex-col items-center">
                <div className="w-[30px] h-[30px] bg-[#CCCCCC] rounded-full flex items-center justify-center">
                  <span className="text-[#666666] text-[16px] font-normal">3</span>
                </div>
                <span className="mt-2 text-[#CCCCCC] text-xs text-center">添加<br/>提示</span>
              </div>
            </div>
          </div>

          {/* 主标题 */}
          <h1 className="text-[#333333] text-[18px] font-semibold mb-6">
            让我们为您的品牌找到最佳的搜索提示
          </h1>

          {/* 副标题 */}
          <h2 className="text-[#333333] text-[18px] font-semibold mb-8">
            你想如何开始？
          </h2>

          {/* 选项列表 */}
          <div className="space-y-6 mb-12">
            {/* 选项1 */}
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="startOption"
                  value={0}
                  checked={selectedOption === 0}
                  onChange={() => setSelectedOption(0)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === 0 
                    ? 'border-[#2663FF] bg-[#2663FF]' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {selectedOption === 0 && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </div>
              <span className="ml-4 text-[#333333] text-[18px] font-normal leading-[44px]">
                我有GEO关键词，希望有人能帮我把它们变成搜索提示
              </span>
            </label>

            {/* 选项2 */}
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="startOption"
                  value={1}
                  checked={selectedOption === 1}
                  onChange={() => setSelectedOption(1)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === 1 
                    ? 'border-[#2663FF] bg-[#2663FF]' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {selectedOption === 1 && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </div>
              <span className="ml-4 text-[#333333] text-[18px] font-normal leading-[44px]">
                我已经有想要监控的搜索提示
              </span>
            </label>

            {/* 选项3 */}
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="startOption"
                  value={2}
                  checked={selectedOption === 2}
                  onChange={() => setSelectedOption(2)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === 2 
                    ? 'border-[#2663FF] bg-[#2663FF]' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {selectedOption === 2 && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </div>
              <span className="ml-4 text-[#333333] text-[18px] font-normal leading-[44px]">
                我有一个特定的URL，并想发现哪些提示可以带来流量
              </span>
            </label>
          </div>

          {/* 操作按钮 */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleNext}
              className="bg-[#2663FF] text-white px-5 py-[6px] rounded text-[14px] font-normal hover:bg-blue-700 transition-colors leading-[44px]"
            >
              下一步
            </button>
            <button
              onClick={handleSkip}
              className="text-[#333333] text-[14px] font-normal hover:text-gray-600 transition-colors leading-[44px]"
            >
              跳过
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 