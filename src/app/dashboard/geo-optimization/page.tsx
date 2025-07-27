'use client'

import { useState } from 'react'
import Link from 'next/link'

// 图标资源常量
const img2 = "../images/img2.png";
const imgLine2 = "../images/Line2.svg";
const imgFrame = "../images/Frame.svg";
const imgFrame1 = "../images/Frame1.svg";
const imgFrame2 = "../images/Frame2.svg";
const imgFrame3 = "../images/Frame3.svg";
const imgFrame4 = "../images/Frame4.svg";
const imgLine6 = "../images/Line6.svg";
const imgFrame5 = "../images/Frame5.svg";
const imgFrame6 = "../images/Frame6.svg";
const imgFrame7 = "../images/Frame7.svg";
const imgGroup134 = "../images/Group134.svg";
const imgHomeIcon = "../images/home-icon.svg";
const imgLinkIcon = "../images/link-icon.svg";
const imgVerticalDivider = "../images/vertical-divider.svg";
const imgHorizontalDivider = "../images/horizontal-divider.svg";

// 图表相关资源
const imgVector12 = "../images/Vector12.svg";
const imgVector1 = "../images/Vector1.svg";
const imgGroup49 = "../images/Group49.svg";
const imgVector7 = "../images/Vector7.svg";
const imgVector8 = "../images/Vector8.svg";
const imgVector9 = "../images/Vector9.svg";
const imgVector10 = "../images/Vector10.svg";
const imgEllipse14 = "../images/Ellipse14.png";
const imgEllipse15 = "../images/Ellipse15.png";
const imgEllipse16 = "../images/Ellipse16.png";
const imgEllipse17 = "../images/Ellipse17.png";
const imgEllipse18 = "../images/Ellipse18.png";
const imgGroup119 = "../images/Group119.png";

export default function GeoOptimizationPage() {
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
      <div className="absolute font-bold leading-[0] left-[469px] not-italic text-[#333333] text-[20px] text-left text-nowrap top-7">
        <p className="block leading-[normal] whitespace-pre">GEO</p>
      </div>
      <Link href="/dashboard/geo-optimization/database">
        <div className="absolute font-normal leading-[0] left-[571px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">数据库</p>
        </div>
      </Link>
      <Link href="/dashboard/geo-optimization/pricing">
        <div className="absolute font-normal leading-[0] left-[689px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">价格</p>
        </div>
      </Link>

      {/* GEO标签的下划线（激活状态） */}
      <div className="absolute bg-[#333333] h-1 left-[446px] top-[76px] w-[90px]" />

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
        
        {/* 改进标题 */}
        <div className="font-bold text-[#333333] text-[32px] mb-8">
          <p>改进</p>
        </div>

        {/* 改进建议卡片 */}
        <div className="bg-[rgba(234,234,234,0.34)] rounded-[20px] p-8 mb-12">
          {/* 主要内容区域：左侧内容 | 竖线 | 右侧步骤 */}
          <div className="flex items-start">
            {/* 左侧：优先级指示器、高影响力低努力度、建议标题和描述 */}
            <div className="flex-1 pr-6">
              {/* 优先级指示器 */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <div className="bg-[#11ca9c] h-2 w-5 rounded-[20px]" />
                  <div className="bg-[#11ca9c] h-2 w-5 rounded-[20px]" />
                  <div className="bg-[#11ca9c] h-2 w-5 rounded-[20px]" />
                  <div className="bg-[#11ca9c] h-2 w-5 rounded-[20px]" />
                  <div className="bg-[#666666] h-2 w-5 rounded-[20px]" />
                </div>
              </div>
              
              {/* 高影响力，低努力度 */}
              <div className="text-[#333333] text-[28px] font-medium mb-6">
                高影响力，低努力度
              </div>
              
              {/* 建议标题和描述 */}
              <div>
                <h3 className="text-[#333333] text-[24px] font-normal mb-4">
                  以双十一为目标的线上销售策略
                </h3>
                <p className="text-[#333333] text-[18px] font-light leading-[1.5] max-w-[480px]">
                  建议Q3启动以双十一为核心的Deepseek 战略规划，通过系统化的搜索意图设计，确保1-2款主卖单品实现AI搜索平台的全面覆盖&精准触达
                </p>
              </div>
            </div>

            {/* 竖线分割 */}
            <div className="mx-6 flex justify-center self-stretch">
              <div className="w-[2px] bg-[#999999]"></div>
            </div>

            {/* 右侧：步骤区域 */}
            <div className="flex-1 pl-6">
              <div className="text-[#333333] text-[28px] font-medium mb-6">
                步骤
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-[#eaeaea] rounded w-5 h-5 mr-3 border-[#666666] border-[0.5px]" />
                  <span className="text-[#666666] text-[18px] font-light">步骤1: 智能搜索意图建模与分析</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#eaeaea] rounded w-5 h-5 mr-3 border-[#666666] border-[0.5px]" />
                  <span className="text-[#666666] text-[18px] font-light">步骤2: DeepLumen LLM系统AI内容生成与优化</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#eaeaea] rounded w-5 h-5 mr-3 border-[#666666] border-[0.5px]" />
                  <span className="text-[#666666] text-[18px] font-light">步骤3: 实时效果追踪与LLM模型迭代</span>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <button className="bg-[#eaeaea] h-[42px] rounded-[10px] px-6 text-[#333333] text-[18px]">
                    放弃
                  </button>
                  <button className="bg-[#2663ff] h-[42px] rounded-[10px] px-8 text-[#ffffff] text-[18px]">
                    标记为完成
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 横向虚线 */}
          <div className="my-6 overflow-hidden">
            <div 
              className="w-[576px] h-[2px] bg-repeat-x" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='a' patternUnits='userSpaceOnUse' width='4' height='4'%3e%3cpath d='m0,2 l4,0' stroke='%23999999' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23a)'/%3e%3c/svg%3e")`,
                backgroundSize: '4px 2px'
              }}
            ></div>
          </div>

          {/* 底部链接区域 */}
          <div className="flex space-x-6">
            <div className="flex items-center">
              <img alt="" className="w-5 h-5 mr-2" src={imgLinkIcon} />
              <span className="text-[#333333] text-[18px]">www.intel.com</span>
            </div>
            <div className="flex items-center">
              <img alt="" className="w-5 h-5 mr-2" src={imgLinkIcon} />
              <span className="text-[#333333] text-[18px]">www.zhihu.com</span>
            </div>
          </div>
        </div>

        {/* 品牌概述模块 */}
        <div className="mb-8">
          <h2 className="font-bold text-[#333333] text-[30px] mb-4">品牌概述</h2>
          <p className="text-[#444444] text-[18px] font-light leading-[1.5] max-w-[1013px]">
            Intel是全球领先的半导体芯片制造商，为计算、数据中心、AI及边缘设备提供核心硬件技术与解决方案。
          </p>
        </div>

        {/* 优势模块 */}
        <div className="mb-8">
          <h2 className="font-bold text-[#333333] text-[30px] mb-4">优势</h2>
          <ul className="text-[#444444] text-[18px] font-light leading-[2] space-y-1 list-disc pl-7">
            <li>技术垄断性：x86架构主导PC/服务器市场，生态壁垒极高。</li>
            <li>制程与研发投入：每年百亿级研发预算，先进制程（如Intel 4/3）逐步追平台积电。</li>
            <li>垂直整合能力：从设计到制造全链条可控，IDM模式保障供应链安全。</li>
            <li>B端市场统治力：数据中心（至强处理器）市占率超70%，企业客户黏性强。</li>
          </ul>
        </div>

        {/* 弱点模块 */}
        <div className="mb-8">
          <h2 className="font-bold text-[#333333] text-[30px] mb-4">弱点</h2>
          <ul className="text-[#444444] text-[18px] font-light leading-[2] space-y-1 list-disc pl-7">
            <li>制程落后风险：10nm/7nm时代曾延迟，导致台积电反超。</li>
            <li>移动端失利：错失智能手机芯片市场（如Atom处理器失败）。</li>
            <li>高功耗争议：部分产品能效比不及ARM架构竞品（如苹果M系列）。</li>
          </ul>
        </div>

        {/* 主要专业领域模块 */}
        <div className="mb-8">
          <h2 className="font-bold text-[#333333] text-[30px] mb-4">主要专业领域</h2>
          <ul className="text-[#444444] text-[18px] font-light leading-[2] space-y-1 list-disc pl-7">
            <li>高性能计算（HPC）：至强处理器、FPGA（如Altera）。</li>
            <li>人工智能加速：Habana Labs AI芯片、OpenVINO工具包。</li>
            <li>自动驾驶：Mobileye视觉处理器与ADAS解决方案。</li>
            <li>代工服务（IFS）：为第三方提供晶圆制造，对标台积电。</li>
          </ul>
        </div>

        {/* 常见关联模块 */}
        <div className="mb-8">
          <h2 className="font-bold text-[#333333] text-[30px] mb-4">常见关联</h2>
          <ul className="text-[#444444] text-[18px] font-light leading-[2] space-y-1 list-disc pl-7">
            <li>合作伙伴：微软（Wintel联盟）、戴尔/惠普（OEM厂商）、AWS（云服务合作）。</li>
            <li>技术标准：USB/Thunderbolt接口、PCIe协议主导者之一。</li>
            <li>地缘风险：中美半导体博弈中受出口管制影响。</li>
            <li>行业趋势：全球芯片短缺推动IDM模式价值重估。</li>
          </ul>
        </div>

        {/* LLM内容建议模块 */}
        <div className="mb-12">
          <h2 className="font-semibold text-[#333333] text-[30px] mb-8">LLM内容建议</h2>
          
          <div className="grid grid-cols-2 gap-8">
            {/* 左侧卡片 */}
            <div 
              className="h-80 rounded-[20px] relative overflow-hidden"
              style={{ 
                backgroundImage: "url('../images/Rectangle445.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* <div className="absolute inset-0 bg-black bg-opacity-20" /> */}
              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(38,99,255,0.7)] h-[73px] rounded-bl-[20px] rounded-br-[20px] flex items-center justify-center">
                <span className="text-white text-[30px] font-semibold">一键生成</span>
              </div>
            </div>

            {/* 右侧卡片 */}
            <div 
              className="h-80 rounded-[20px] relative overflow-hidden"
              style={{ 
                backgroundImage: "url('../images/Rectangle470.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* <div className="absolute inset-0 bg-black bg-opacity-20" /> */}
              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(38,99,255,0.7)] h-[73px] rounded-bl-[20px] rounded-br-[20px] flex items-center justify-center">
                <span className="text-white text-[30px] font-semibold">一键生成</span>
              </div>
            </div>
          </div>
        </div>

        {/* 竞争对手分析模块 */}
        <div className="mb-12">
          <h2 className="font-bold text-[#333333] text-[30px] mb-8">竞争对手分析模块</h2>
          
          <div className="bg-white rounded-[20px] border border-[#cccccc] overflow-hidden">
            {/* 表格头部 */}
            <div className="bg-[#2663ff] h-20 flex items-center px-8">
              <div className="grid grid-cols-4 w-full text-white font-heavy text-[28px]">
                <div>品牌</div>
                <div>优势</div>
                <div>弱点</div>
                <div>主要专业领域</div>
              </div>
            </div>

            {/* 表格内容 */}
            <div className="divide-y divide-gray-200">
              {/* AMD */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div className="text-[#666666]">AMD</div>
                <div>7nm/5nm制程领先，性价比高</div>
                <div>依赖台积电代工，产能受限</div>
                <div>PC/服务器CPU、GPU（Radeon）</div>
              </div>

              {/* NVIDIA */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div>NVIDIA</div>
                <div>GPU/AI芯片霸主（如H100），CUDA生态</div>
                <div>ARM收购失败，数据中心CPU布局弱</div>
                <div>图形处理、AI加速、自动驾驶</div>
              </div>

              {/* 台积电 */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div>台积电</div>
                <div>全球最大晶圆代工，制程领先（3nm）</div>
                <div>地缘风险（台湾）、客户集中度高</div>
                <div>半导体制造</div>
              </div>

              {/* 三星 */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div>三星</div>
                <div>IDM模式，存储芯片全球第一</div>
                <div>制程良率波动，代工业务追赶中</div>
                <div>存储（DRAM/NAND）、晶圆代工</div>
              </div>

              {/* 苹果 */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div>苹果</div>
                <div>ARM架构自研芯片（M系列）能效比高</div>
                <div>封闭生态，仅限自家设备使用</div>
                <div>消费电子芯片设计</div>
              </div>

              {/* 高通 */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div>高通</div>
                <div>移动端（骁龙）垄断地位，5G专利多</div>
                <div>PC/服务器市场渗透不足</div>
                <div>移动处理器、基带芯片</div>
              </div>

              {/* ARM */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div>ARM</div>
                <div>低功耗架构主导IoT/移动市场</div>
                <div>依赖授权模式，利润率低</div>
                <div>IP授权（架构设计）</div>
              </div>

              {/* IBM */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div>IBM</div>
                <div>高端服务器（Power架构）、量子计算</div>
                <div>市场份额萎缩，聚焦小众领域</div>
                <div>企业级HPC、量子硬件</div>
              </div>

              {/* TSMC */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div>TSMC</div>
                <div>技术中立性，服务全球客户</div>
                <div>资本开支压力大，地缘政治敏感</div>
                <div>先进制程代工</div>
              </div>

              {/* ASML */}
              <div className="grid grid-cols-4 px-8 py-6 text-[#666666] text-[22px] font-normal">
                <div>ASML</div>
                <div>光刻机垄断（EUV技术唯一供应商）</div>
                <div>设备交付周期长，依赖单一技术路线</div>
                <div>半导体设备制造</div>
              </div>
            </div>
          </div>
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
            
            {/* 品牌推荐率卡片 - 调换到第一位 */}
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
                  <p className="block leading-[normal] whitespace-pre">品牌推荐率</p>
                </div>
                <div className="absolute font-light leading-[0] left-[118px] not-italic text-[#333333] text-[10px] text-left text-nowrap top-[58px]">
                  <p className="block leading-[normal] whitespace-pre">当月流失量</p>
                </div>
                <div className="absolute font-extralight leading-[0] left-64 not-italic text-[#2663ff] text-[10px] text-left text-nowrap top-[19px]">
                  <p className="block leading-[normal] whitespace-pre">查看详情</p>
                </div>
              </div>
            </div>

            {/* 品牌被提及率卡片 - 调换到第二位，标题改为品牌被提及率 */}
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

                {/* 圆环图 - 静态图片 */}
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