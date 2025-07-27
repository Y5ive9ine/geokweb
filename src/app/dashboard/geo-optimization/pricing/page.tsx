'use client'

import { useState } from 'react'
import Link from 'next/link'

// 图标资源常量 - 复用geo-optimization页面的图标
const img2 = "../../images/img2.png";
const imgLine2 = "../../images/Line2.svg";
const imgFrame = "../../images/Frame.svg";
const imgFrame1 = "../../images/Frame1.svg";
const imgFrame2 = "../../images/Frame2.svg";
const imgFrame3 = "../../images/Frame3.svg";
const imgFrame4 = "../../images/Frame4.svg";
const imgLine6 = "../../images/Line6.svg";
const imgFrame5 = "../../images/Frame5.svg";
const imgFrame6 = "../../images/Frame6.svg";
const imgFrame7 = "../../images/Frame7.svg";
const imgGroup134 = "../../images/Group134.svg";
const imgHomeIcon = "../../images/home-icon.svg";

// 图表相关资源
const imgVector12 = "../../images/Vector12.svg";
const imgVector1 = "../../images/Vector1.svg";
const imgGroup49 = "../../images/Group49.svg";
const imgVector7 = "../../images/Vector7.svg";
const imgVector8 = "../../images/Vector8.svg";
const imgVector9 = "../../images/Vector9.svg";
const imgVector10 = "../../images/Vector10.svg";
const imgGroup119 = "../../images/Group119.png";

export default function PricingPage() {
  return (
    <div
      className="bg-[#ffffff] relative min-h-screen w-full min-w-[1920px] overflow-x-auto"
      style={{ fontFamily: "'PingFang SC', sans-serif" }}
    >
      {/* 背景色块 */}
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-[#ffffff] h-[3573px] left-0 top-20 w-[350px]" />
        <div className="absolute bg-[rgba(38,99,255,0.1)] h-20 left-0 top-0 w-[350px]" />
        <div className="absolute bg-[rgba(38,99,255,0.1)] h-20 left-[350px] top-0 w-full" />
      </div>

      {/* 顶部导航标签 */}
      <Link href="/dashboard/geo-optimization">
        <div className="absolute font-normal leading-[0] left-[469px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">GEO</p>
        </div>
      </Link>
      <Link href="/dashboard/geo-optimization/database">
        <div className="absolute font-normal leading-[0] left-[571px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">数据库</p>
        </div>
      </Link>
      <div className="absolute font-bold leading-[0] left-[689px] not-italic text-[#333333] text-[20px] text-left text-nowrap top-7">
        <p className="block leading-[normal] whitespace-pre">价格</p>
      </div>

      {/* 价格标签的下划线（激活状态） */}
      <div className="absolute bg-[#333333] h-1 left-[664px] top-[76px] w-[90px]" />

      {/* 顶部搜索图标 */}
      <div className="absolute left-[400px] size-9 top-[22px]">
        <img alt="" className="block max-w-none size-full" src={imgFrame} />
      </div>

      {/* Logo区域 */}
      <div className="absolute contents left-[104px] top-[17px]">
        <div className="absolute font-medium h-[46px] leading-[0] left-[148px] not-italic text-[#2663ff] text-[34px] text-left top-[17px] w-[98px]">
          <p className="leading-[normal]">
            <span>GEO</span>
            <span className="text-[#ffb200]">K</span>
          </p>
        </div>
        <div className="absolute left-[104px] top-[17px] w-[40px] h-[40px]">
          <img alt="" className="block max-w-none size-full" src={imgGroup134} />
        </div>
      </div>

      {/* 左侧导航分割线 */}
      <div className="absolute h-0 left-[65px] top-[392px] w-[220px]">
        <div className="absolute bottom-[-1px] left-[-0.455%] right-[-0.455%] top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine2} />
        </div>
      </div>

      {/* 左侧导航菜单项 */}
      <Link href="/dashboard">
        <div className="absolute contents left-[86px] top-[118px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[119px] hover:text-[#2663ff] transition-colors">
            <p className="block leading-[normal] whitespace-pre">首页  Home Page</p>
          </div>
          <div className="absolute left-[86px] size-6 top-[118px]">
            <img alt="" className="block max-w-none size-full" src={imgHomeIcon} />
          </div>
        </div>
      </Link>

      <div className="absolute contents left-[88px] top-[188px]">
        <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[188px]">
          <p className="leading-[normal] whitespace-pre">
            <span>对话  </span>
            <span>Conversations</span>
          </p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-[188px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame3} />
        </div>
      </div>

      {/* GEO优化菜单项 - 激活状态 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[30px] rounded-[10px] top-[237px] w-[290px]" />
      <div className="absolute contents left-[88px] top-64">
        <div className="absolute font-medium leading-[0] left-[120px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-64">
          <p className="block leading-[normal] whitespace-pre">GEO优化</p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-64">
          <img alt="" className="block max-w-none size-full" src={imgFrame5} />
        </div>
      </div>

      <Link href="/dashboard/ai-content-generation">
        <div className="absolute contents left-[88px] top-[324px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[324px] hover:text-[#2663ff] transition-colors">
            <p className="block leading-[normal] whitespace-pre">AI内容生成</p>
          </div>
          <div className="absolute left-[88px] size-[22px] top-[324px]">
            <img alt="" className="block max-w-none size-full" src={imgFrame6} />
          </div>
        </div>
      </Link>

      <div className="absolute contents left-[88px] top-[438px]">
        <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[438px]">
          <p className="block leading-[normal] whitespace-pre">收件箱  Inbox</p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-[438px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame1} />
        </div>
      </div>

      <Link href="/dashboard/settings">
        <div className="absolute contents left-[88px] top-[506px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[506px] hover:text-[#2663ff] transition-colors">
            <p className="leading-[normal] whitespace-pre">
              <span>设置  </span>
              <span>Settings</span>
            </p>
          </div>
          <div className="absolute left-[88px] size-[22px] top-[506px]">
            <img alt="" className="block max-w-none size-full" src={imgFrame4} />
          </div>
        </div>
      </Link>

      {/* 用户头像和名称 */}
      <div className="absolute contents left-[1645px] top-5">
        <div
          className="absolute bg-center bg-cover bg-no-repeat left-[1645px] rounded-[55px] size-10 top-5"
          style={{ backgroundImage: `url('${img2}')` }}
        />
        <div className="absolute font-normal leading-[0] left-[1698px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[26px]">
          <p className="block leading-[30px] whitespace-pre">Ethelbert Williams</p>
        </div>
      </div>

      {/* 分割线 */}
      <div className="absolute h-0 left-[350px] top-20 right-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine6} />
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="absolute left-[400px] top-[119px] right-[50px]">
        
        {/* GEO套餐标题 */}
        <div className="font-bold text-[#333333] text-[30px] mb-8">
          <p>GEO套餐</p>
        </div>

        {/* 价格卡片区域 */}
        <div className="flex gap-8 mb-16">
          
          {/* 功能增长卡片 */}
          <div className="bg-white rounded-[20px] shadow-lg p-6 w-[406px] h-[710px] relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#333333] text-[20px] font-normal">功能增长</h3>
              <div className="bg-[rgba(38,99,255,0.1)] border border-[#2663ff] rounded px-3 py-2">
                <span className="text-[#2663ff] text-[14px] font-medium">最受欢迎</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-[#333333] text-[36px] font-medium">¥499</span>
                <span className="text-[#333333] text-[16px] ml-2">/月 (年费用户)</span>
              </div>
              <p className="text-[#2663ff] text-[16px] font-medium mt-2">试用一个月</p>
            </div>

            {/* 平台图标 */}
            <div className="relative mb-8" style={{ height: '22.576px' }}>
              <div className="absolute left-0 w-[22.576px] h-[22.576px]">
                <img src="/images/platform-google.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[27.671px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-behance.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[55.342px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-openai.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[83.013px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-ai.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[110.684px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-google.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[138.355px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-behance.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[166.026px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-openai.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[193.697px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-ai.svg" alt="" className="w-full h-full" />
              </div>
            </div>

            {/* 功能列表 */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">
                  <span className="text-[#2663ff]">1,000</span> 信用额度
                </span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">每1000个信用额度充值100元</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">竞争对手分析</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">在所有平台上的AI可见性</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">情报数据汇总</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">内容投放的自动化外联</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">AI人工智能盲点检测</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">网页分析</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">多语言支持</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">自助服务</span>
              </div>
            </div>

            {/* 激活按钮 */}
            <div className="absolute bottom-6 left-6 right-6">
              <button className="w-full bg-transparent border border-[#2663ff] text-[#2663ff] rounded-[10px] h-12 text-[18px] font-normal hover:bg-[#2663ff] hover:text-white transition-colors">
                激活
              </button>
            </div>
          </div>

          {/* 功能增长高级版卡片 */}
          <div className="bg-white rounded-[20px] shadow-lg p-6 w-[406px] h-[710px] relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#333333] text-[20px] font-normal">功能增长</h3>
              <div className="bg-[rgba(38,99,255,0.1)] border border-[#2663ff] rounded px-3 py-2">
                <span className="text-[#2663ff] text-[14px] font-medium">最受欢迎</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-[#333333] text-[36px] font-medium">¥4999</span>
                <span className="text-[#333333] text-[16px] ml-2">/月 (年费用户)</span>
              </div>
              <p className="text-[#2663ff] text-[16px] font-medium mt-2">试用一个月</p>
            </div>

            {/* 平台图标 */}
            <div className="relative mb-8" style={{ height: '22.576px' }}>
              <div className="absolute left-0 w-[22.576px] h-[22.576px]">
                <img src="/images/platform-google.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[27.671px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-behance.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[55.342px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-openai.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[83.013px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-ai.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[110.684px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-google.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[138.355px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-behance.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[166.026px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-openai.svg" alt="" className="w-full h-full" />
              </div>
              <div className="absolute left-[193.697px] w-[22.576px] h-[22.576px]">
                <img src="/images/platform-ai.svg" alt="" className="w-full h-full" />
              </div>
            </div>

            {/* 功能列表 */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">
                  <span className="text-[#2663ff]">10,000</span> 信用额度
                </span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">每1000个信用额度充值100元</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">竞争对手分析</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">在所有平台上的AI可见性</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">情报数据汇总</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">内容投放的自动化外联</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">AI人工智能盲点检测</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">网页分析</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">多语言支持</span>
              </div>
              <div className="flex items-start">
                <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                <span className="text-[#666666] text-[16px]">自助服务</span>
              </div>
            </div>

            {/* 立即升级按钮 */}
            <div className="absolute bottom-6 left-6 right-6">
              <button className="w-full bg-[#2663ff] text-white rounded-[10px] h-12 text-[18px] font-normal hover:bg-blue-700 transition-colors">
                立即升级
              </button>
            </div>
          </div>

        </div>

        {/* 比较套餐标题 */}
        <div className="font-bold text-[#333333] text-[30px] mb-8">
          <p>比较套餐</p>
        </div>

        {/* 比较套餐表格 */}
        <div className="bg-white rounded-[20px] border border-[#cccccc] overflow-hidden mb-16">
          {/* 表格头部 */}
          <div className="bg-[#2663ff] h-20 flex items-center px-8">
            <div className="grid grid-cols-4 w-full text-white font-semibold text-[24px]">
              <div>项目</div>
              <div className="text-center">专业</div>
              <div className="text-center">专家</div>
              <div className="text-center">企业</div>
            </div>
          </div>

          {/* 表格内容 */}
          <div className="divide-y divide-gray-200">
            {/* 每一行功能对比 */}
            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal">
              <div>SEO Ideas 单位(每月)</div>
              <div className="text-center">500</div>
              <div className="text-center">800</div>
              <div className="text-center">2000</div>
            </div>
            
            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal">
              <div>每页自然流量洞察活动</div>
              <div className="text-center">500</div>
              <div className="text-center">800</div>
              <div className="text-center">2000</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal bg-[#eaeaea]">
              <div>分享并包含查看或编辑权限</div>
              <div className="text-center">✗</div>
              <div className="text-center">✓</div>
              <div className="text-center">✓</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal">
              <div>域名和关键词分析</div>
              <div className="text-center">500</div>
              <div className="text-center">800</div>
              <div className="text-center">2000</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal bg-[#eaeaea]">
              <div>每份报告的结果</div>
              <div className="text-center">✗</div>
              <div className="text-center">✓</div>
              <div className="text-center">✓</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal">
              <div>历史数据</div>
              <div className="text-center">500</div>
              <div className="text-center">800</div>
              <div className="text-center">2000</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal">
              <div>每日报告</div>
              <div className="text-center">500</div>
              <div className="text-center">800</div>
              <div className="text-center">2000</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal bg-[#eaeaea]">
              <div>关键词指标每月更新</div>
              <div className="text-center">✗</div>
              <div className="text-center">✓</div>
              <div className="text-center">✓</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal">
              <div>主题</div>
              <div className="text-center">500</div>
              <div className="text-center">800</div>
              <div className="text-center">2000</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal bg-[#eaeaea]">
              <div>报告</div>
              <div className="text-center">✗</div>
              <div className="text-center">✓</div>
              <div className="text-center">✓</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal">
              <div>基础报告</div>
              <div className="text-center">500</div>
              <div className="text-center">800</div>
              <div className="text-center">2000</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal bg-[#eaeaea]">
              <div>报告分享</div>
              <div className="text-center">✗</div>
              <div className="text-center">✓</div>
              <div className="text-center">✓</div>
            </div>

            <div className="grid grid-cols-4 px-8 py-4 text-[#666666] text-[24px] font-normal bg-[#eaeaea]">
              <div>Looker Studio 集成</div>
              <div className="text-center">✗</div>
              <div className="text-center">✓</div>
              <div className="text-center">✓</div>
            </div>
          </div>
        </div>

        {/* 竞争对手分析模块标题 */}
        <div className="font-bold text-[#333333] text-[30px] mb-8">
          <p>竞争对手分析模块</p>
        </div>

        {/* 引用模块 */}
        <div className="mb-8">
          <h2 className="font-bold text-[#333333] text-[30px] mb-4">引用</h2>
          <p className="text-[#666666] text-[18px] font-light leading-[1.5] max-w-[700px] mb-8">
            网站上的引用、引文和统计数据越多，被人工智能搜索选中并做出响应的可能性就越大。
          </p>

          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-[#666666] text-[18px] font-light w-28 mr-4">引用率：</span>
              <span className="text-[#666666] text-[18px] font-bold mr-6">1%</span>
              <div className="bg-[rgba(250,137,25,0.2)] rounded-lg px-3 py-1">
                <span className="text-[#fa8919] text-[12px]">（中等-可以）</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-[#666666] text-[18px] font-light w-28 mr-4">报价比率：</span>
              <span className="text-[#666666] text-[18px] font-bold mr-6">2%</span>
              <div className="bg-[rgba(250,137,25,0.2)] rounded-lg px-3 py-1">
                <span className="text-[#fa8919] text-[12px]">（中等-可以）</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-[#666666] text-[18px] font-light w-28 mr-4">统计比率：</span>
              <span className="text-[#666666] text-[18px] font-bold mr-6">3%</span>
              <div className="bg-[rgba(250,137,25,0.2)] rounded-lg px-3 py-1">
                <span className="text-[#fa8919] text-[12px]">（中等-可以）</span>
              </div>
            </div>
          </div>
        </div>

        {/* 统计模块 */}
        <div className="mb-12">
          <h2 className="font-bold text-[#333333] text-[30px] mb-8">统计</h2>
          
          <div className="grid grid-cols-3 gap-8">
            
            {/* 品牌搜索卡片 */}
            <div className="bg-[#ffffff] rounded-[20px] h-[326px] border border-[#cccccc] relative overflow-hidden">
              <div className="overflow-clip relative size-full">
                <div className="absolute left-[61px] size-[204px] top-[87px]">
                  <img alt="" className="block max-w-none size-full" src={imgGroup49} />
                </div>

                {/* 标签 */}
                <div className="absolute h-[17px] left-[21px] top-[210px] w-[68px]">
                  <div className="absolute bottom-[-2.223%] left-0 right-[-0.483%] top-[-2.941%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector7} />
                  </div>
                </div>
                <div className="absolute h-[16.5px] left-[154px] top-[107px] w-[65px]">
                  <div className="absolute bottom-[-1.795%] left-[-0.622%] right-0 top-[-3.03%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector8} />
                  </div>
                </div>
                <div className="absolute h-[9px] left-[238px] top-[179px] w-[64px]">
                  <div className="absolute bottom-[-4.307%] left-[-0.492%] right-0 top-[-5.556%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector9} />
                  </div>
                </div>
                <div className="absolute h-[24.5px] left-[194px] top-[253px] w-[72px]">
                  <div className="absolute bottom-[-2.041%] left-[-0.577%] right-0 top-[-1.134%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector10} />
                  </div>
                </div>

                {/* 文本标签 */}
                <div className="absolute font-light h-3.5 leading-[0] left-[170px] not-italic text-[#ffb200] text-[10px] text-left top-[92px] w-[45px]">
                  <p className="block leading-[normal]">其它品牌1</p>
                </div>
                <div className="absolute font-light h-3.5 leading-[0] left-[252px] not-italic text-[#11ca9c] text-[10px] text-left top-[165px] w-[52px]">
                  <p className="block leading-[normal]">其它品牌2</p>
                </div>
                <div className="absolute font-light h-3.5 leading-[0] left-[215px] not-italic text-[#ff4d4d] text-[10px] text-left top-[263px] w-[47px]">
                  <p className="block leading-[normal]">其它品牌3</p>
                </div>
                <div className="absolute font-light h-3.5 leading-[0] left-[26px] not-italic text-[#333333] text-[10px] text-left top-[196px] w-[46px]">
                  <p className="block leading-[normal]">品牌占比</p>
                </div>

                {/* 按钮 */}
                <div className="absolute bg-[#2663ff] h-6 left-5 rounded top-[53px] w-[79px]" />
                <div className="absolute bg-[rgba(38,99,255,0.2)] h-6 left-[103px] rounded top-[53px] w-[79px]" />
                <div className="absolute h-5 left-[246px] rounded-sm top-[15px] w-[60px] border-[#2663ff] border-[0.5px]" />

                {/* 按钮文本 */}
                <div className="absolute font-light leading-[0] left-[35px] not-italic text-[#ffffff] text-[10px] text-left text-nowrap top-[58px]">
                  <p className="block leading-[normal] whitespace-pre">当月搜索量</p>
                </div>
                <div className="absolute font-bold leading-[0] left-5 not-italic text-[#333333] text-[18px] text-left text-nowrap top-[15px]">
                  <p className="block leading-[normal] whitespace-pre">品牌搜索</p>
                </div>
                <div className="absolute font-light leading-[0] left-[118px] not-italic text-[#333333] text-[10px] text-left text-nowrap top-[58px]">
                  <p className="block leading-[normal] whitespace-pre">当月流失量</p>
                </div>
                <div className="absolute font-extralight leading-[0] left-64 not-italic text-[#2663ff] text-[10px] text-left text-nowrap top-[19px]">
                  <p className="block leading-[normal] whitespace-pre">查看详情</p>
                </div>
              </div>
            </div>

            {/* 品牌被提及率卡片 */}
            <div className="bg-[#ffffff] h-[326px] rounded-[20px] border border-[#cccccc] relative overflow-hidden">
              <div className="h-[326px] overflow-clip relative w-full">
                <div className="absolute font-bold leading-[0] left-[30px] not-italic text-[#333333] text-[24px] text-left text-nowrap top-[30px]">
                  <p className="block leading-[normal] whitespace-pre">品牌被提及率</p>
                </div>
                <div className="absolute font-bold leading-[0] right-[30px] not-italic text-[#999999] text-[12px] text-left text-nowrap top-[37px]">
                  <p className="block leading-[normal] whitespace-pre">总数据</p>
                </div>
                <div className="absolute font-bold leading-[0] left-[30px] not-italic text-[#333333] text-[28px] text-left text-nowrap top-[79px]">
                  <p className="block leading-[normal] whitespace-pre">71.5%</p>
                </div>
                <div className="absolute font-bold leading-[0] left-[30px] not-italic text-[16px] text-[rgba(51,51,51,0.2)] text-left text-nowrap top-[145px]">
                  <p className="block leading-[normal] whitespace-pre">70%</p>
                </div>
                <div className="absolute font-bold leading-[0] left-[30px] not-italic text-[16px] text-[rgba(51,51,51,0.2)] text-left text-nowrap top-52">
                  <p className="block leading-[normal] whitespace-pre">50%</p>
                </div>

                {/* 图表 */}
                <div className="absolute h-[183px] left-0 top-[143px] w-full">
                  <img alt="" className="block max-w-none w-full h-full object-cover" src={imgVector12} />
                </div>
                <div className="absolute h-[156px] left-0 top-[140px] w-full">
                  <div className="absolute bottom-[-0.321%] left-[-0.087%] right-[-0.087%] top-[-0.321%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1} />
                  </div>
                </div>
              </div>
            </div>

            {/* 引用链接百分比卡片 */}
            <div className="bg-[#ffffff] h-[326px] rounded-[20px] border border-[#cccccc] relative overflow-hidden">
              <div className="h-[326px] overflow-clip relative w-full">
                <div className="absolute font-bold leading-[0] left-[30px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[30px]">
                  <p className="block leading-[normal] whitespace-pre">引用链接百分比</p>
                </div>
                <div className="absolute font-light leading-[0] left-[30px] not-italic text-[#666666] text-[14px] text-left text-nowrap top-[60px]">
                  <p className="block leading-[normal] whitespace-pre">全网链接占引用链接的百分比</p>
                </div>

                {/* 圆环图 */}
                <div className="absolute left-[50%] translate-x-[-50%] top-[90px] w-[180px] h-[180px] flex items-center justify-center">
                  <img alt="引用链接百分比圆环图" className="block w-full h-full object-contain" src={imgGroup119} />
                </div>

                {/* 图例 */}
                <div className="absolute left-[30px] right-[30px] bottom-[20px]">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-[10px] h-[10px] bg-[#2663ff] rounded-full"></div>
                        <span className="text-[#333333] text-[12px] font-light">直接引用</span>
                      </div>
                      <span className="text-[#333333] text-[12px] font-bold">30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-[10px] h-[10px] bg-[#ffb200] rounded-full"></div>
                        <span className="text-[#333333] text-[12px] font-light">间接引用</span>
                      </div>
                      <span className="text-[#333333] text-[12px] font-bold">40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-[10px] h-[10px] bg-[#11ca9c] rounded-full"></div>
                        <span className="text-[#333333] text-[12px] font-light">相关引用</span>
                      </div>
                      <span className="text-[#333333] text-[12px] font-bold">30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
} 