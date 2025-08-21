'use client'

import Image from 'next/image'

// 改进建议卡片组件
const ImprovementCard = () => (
  <div className="bg-gray-100 bg-opacity-40 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
    <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
      {/* 左侧内容 */}
      <div className="flex-1">
        {/* 优先级指示器 */}
        <div className="flex items-center mb-3">
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-emerald-500 h-1.5 w-3.5 rounded-full" />
            ))}
            <div className="bg-gray-500 h-1.5 w-3.5 rounded-full" />
          </div>
        </div>
        
        {/* 标签 */}
        <div className="text-gray-800 text-base md:text-lg font-medium mb-4">
          高影响力，低努力度
        </div>
        
        {/* 建议内容 */}
        <div>
          <h3 className="text-gray-800 text-sm md:text-base font-normal mb-3">
            以双十一为目标的线上销售策略
          </h3>
          <p className="text-gray-800 text-xs md:text-sm font-light leading-relaxed max-w-none lg:max-w-xs">
            建议Q3启动以双十一为核心的Deepseek 战略规划，通过系统化的搜索意图设计，确保1-2款主卖单品实现AI搜索平台的全面覆盖&精准触达
          </p>
        </div>
      </div>

      {/* 分割线 - 仅在大屏幕显示 */}
      <div className="hidden lg:flex justify-center self-stretch">
        <div className="w-px bg-gray-500"></div>
      </div>

      {/* 右侧步骤 */}
      <div className="flex-1 w-full lg:w-auto">
        <div className="text-gray-800 text-base md:text-lg font-medium mb-4">
          步骤
        </div>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded w-3.5 h-3.5 mr-2 border-gray-500 border-[0.5px]" />
            <span className="text-gray-600 text-xs md:text-sm font-light">步骤1: 智能搜索意图建模与分析</span>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded w-3.5 h-3.5 mr-2 border-gray-500 border-[0.5px]" />
            <span className="text-gray-600 text-xs md:text-sm font-light">步骤2: DeepLumen LLM系统AI内容生成与优化</span>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded w-3.5 h-3.5 mr-2 border-gray-500 border-[0.5px]" />
            <span className="text-gray-600 text-xs md:text-sm font-light">步骤3: 实时效果追踪与LLM模型迭代</span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
            <button className="bg-gray-200 h-8 rounded-lg px-4 text-gray-800 text-xs md:text-sm">
              放弃
            </button>
            <button className="bg-blue-600 h-10 rounded-lg px-6 md:px-8 text-white text-sm md:text-base">
              标记为完成
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* 虚线分割 */}
    <div className="my-6 overflow-hidden">
      <div 
        className="w-full max-w-2xl h-0.5 bg-repeat-x" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='a' patternUnits='userSpaceOnUse' width='4' height='4'%3e%3cpath d='m0,2 l4,0' stroke='%23999999' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23a)'/%3e%3c/svg%3e")`,
          backgroundSize: '4px 2px'
        }}
      ></div>
    </div>

    {/* 底部链接 */}
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
      <div className="flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <span className="text-gray-800 text-sm md:text-base">www.intel.com</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <span className="text-gray-800 text-sm md:text-base">www.zhihu.com</span>
      </div>
    </div>
  </div>
)

// 竞争对手分析表格组件
const CompetitorAnalysisTable = () => {
  const competitors = [
    {
      brand: "AMD",
      advantages: "高性能 Ryzen、EPYC系列，AI 加速卡 MI300X，节能设计优势，制程先进（台积电 5nm/3nm）",
      weaknesses: "企业级市场份额偏低，软件生态不如Intel完善，资金实力相对有限",
      domains: "高性能计算、游戏市场、数据中心（追赶中）"
    },
    {
      brand: "NVIDIA",
      advantages: "GPU 绝对领导者，AI/深度学习霸主地位，CUDA 生态护城河极深，数据中心 GPU 市占率 90%+",
      weaknesses: "CPU 产品线薄弱，依赖台积电代工，地缘政治风险（对华出口限制）",
      domains: "AI计算、图形渲染、自动驾驶、元宇宙"
    },
    {
      brand: "苹果 (Apple Silicon)",
      advantages: "M系列芯片能效比领先，软硬一体化优势，5nm/3nm先进制程，垂直整合生态",
      weaknesses: "仅限自家设备，无对外销售，软件兼容性有限（x86→ARM迁移）",
      domains: "消费电子（Mac、iPad）、移动计算"
    },
    {
      brand: "高通 (Qualcomm)",
      advantages: "移动芯片绝对王者，5G基带技术领先，IoT/车载电子布局深入，专利组合强大",
      weaknesses: "PC/服务器市场渗透有限，与苹果、三星专利纠纷不断，过度依赖手机市场",
      domains: "移动通信、物联网、汽车电子、AR/VR"
    }
  ]

  return (
    <div className="bg-white rounded-xl md:rounded-[20px] border border-gray-300 overflow-hidden">
      {/* 表头 */}
      <div className="bg-gray-100 px-4 md:px-8 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-800 text-xs md:text-sm lg:text-base font-bold">
          <div>品牌</div>
          <div className="hidden md:block">优势</div>
          <div className="hidden md:block">弱点</div>
          <div className="hidden md:block">主要专业领域</div>
        </div>
      </div>

      {/* 表格内容 */}
      <div className="divide-y divide-gray-200">
        {competitors.map((competitor, index) => (
          <div key={index} className="px-4 md:px-8 py-4 md:py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-600 text-xs md:text-sm lg:text-base font-normal">
              <div className="font-medium text-gray-800">{competitor.brand}</div>
              
              {/* 移动端布局 */}
              <div className="md:hidden space-y-2">
                <div>
                  <span className="font-medium text-gray-800">优势：</span>
                  {competitor.advantages}
                </div>
                <div>
                  <span className="font-medium text-gray-800">弱点：</span>
                  {competitor.weaknesses}
                </div>
                <div>
                  <span className="font-medium text-gray-800">领域：</span>
                  {competitor.domains}
                </div>
              </div>

              {/* 桌面端布局 */}
              <div className="hidden md:block">{competitor.advantages}</div>
              <div className="hidden md:block">{competitor.weaknesses}</div>
              <div className="hidden md:block">{competitor.domains}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 统计卡片组件
const StatsCard = ({ title, value, subtitle, children }: {
  title: string
  value?: string
  subtitle?: string
  children?: React.ReactNode
}) => (
  <div className="bg-white rounded-xl md:rounded-[20px] h-80 border border-gray-300 relative overflow-hidden p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm md:text-base font-bold text-gray-800">{title}</h3>
      {subtitle && <span className="text-xs font-bold text-gray-500">{subtitle}</span>}
    </div>
    {value && (
      <div className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{value}</div>
    )}
    {children}
  </div>
)

export function GeoOptimizationContent() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        
        {/* 改进标题 */}
        <div className="font-bold text-gray-800 text-lg md:text-xl">
          改进
        </div>

        {/* 改进建议卡片 */}
        <ImprovementCard />

        {/* 品牌概述 */}
        <div className="space-y-4">
          <h2 className="font-bold text-gray-800 text-xl md:text-2xl">品牌概述</h2>
          <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
            Intel是全球领先的半导体芯片制造商，为计算、数据中心、AI及边缘设备提供核心硬件技术与解决方案。
          </p>
        </div>

        {/* 优势 */}
        <div className="space-y-4">
          <h2 className="font-bold text-gray-800 text-xl md:text-2xl">优势</h2>
          <ul className="text-gray-600 text-sm md:text-base font-light leading-8 space-y-1 list-disc pl-6 md:pl-8">
            <li>技术垄断性：x86架构主导PC/服务器市场，生态壁垒极高。</li>
            <li>制程与研发投入：每年百亿级研发预算，先进制程（如Intel 4/3）逐步追平台积电。</li>
            <li>垂直整合能力：从设计到制造全链条可控，IDM模式保障供应链安全。</li>
            <li>B端市场统治力：数据中心（至强处理器）市占率超70%，企业客户黏性强。</li>
          </ul>
        </div>

        {/* 弱点 */}
        <div className="space-y-4">
          <h2 className="font-bold text-gray-800 text-xl md:text-2xl">弱点</h2>
          <ul className="text-gray-600 text-sm md:text-base font-light leading-8 space-y-1 list-disc pl-6 md:pl-8">
            <li>制程落后风险：10nm/7nm时代曾延迟，导致台积电反超。</li>
            <li>移动端失利：错失智能手机芯片市场（如Atom处理器失败）。</li>
            <li>高功耗争议：部分产品能效比不及ARM架构竞品（如苹果M系列）。</li>
          </ul>
        </div>

        {/* 主要专业领域 */}
        <div className="space-y-4">
          <h2 className="font-bold text-gray-800 text-xl md:text-2xl">主要专业领域</h2>
          <ul className="text-gray-600 text-sm md:text-base font-light leading-8 space-y-1 list-disc pl-6 md:pl-8">
            <li>高性能计算（HPC）：至强处理器、FPGA（如Altera）。</li>
            <li>人工智能加速：Habana Labs AI芯片、OpenVINO工具包。</li>
            <li>自动驾驶：Mobileye视觉处理器与ADAS解决方案。</li>
            <li>代工服务（IFS）：为第三方提供晶圆制造，对标台积电。</li>
          </ul>
        </div>

        {/* 常见关联 */}
        <div className="space-y-4">
          <h2 className="font-bold text-gray-800 text-xl md:text-2xl">常见关联</h2>
          <ul className="text-gray-600 text-sm md:text-base font-light leading-8 space-y-1 list-disc pl-6 md:pl-8">
            <li>合作伙伴：微软（Wintel联盟）、戴尔/惠普（OEM厂商）、AWS（云服务合作）。</li>
            <li>技术标准：USB/Thunderbolt接口、PCIe协议主导者之一。</li>
            <li>地缘风险：中美半导体博弈中受出口管制影响。</li>
            <li>行业趋势：全球芯片短缺推动IDM模式价值重估。</li>
          </ul>
        </div>

        {/* LLM内容建议 */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="font-semibold text-gray-800 text-xl md:text-2xl">LLM内容建议</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* 左侧卡片 */}
            <div className="h-60 md:h-80 rounded-xl md:rounded-[20px] relative overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600">
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-70 h-16 md:h-[73px] rounded-bl-xl md:rounded-bl-[20px] rounded-br-xl md:rounded-br-[20px] flex items-center justify-center">
                <span className="text-white text-lg md:text-2xl font-semibold">一键生成</span>
              </div>
            </div>

            {/* 右侧卡片 */}
            <div className="h-60 md:h-80 rounded-xl md:rounded-[20px] relative overflow-hidden bg-gradient-to-br from-green-400 to-blue-600">
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-70 h-16 md:h-[73px] rounded-bl-xl md:rounded-bl-[20px] rounded-br-xl md:rounded-br-[20px] flex items-center justify-center">
                <span className="text-white text-lg md:text-2xl font-semibold">一键生成</span>
              </div>
            </div>
          </div>
        </div>

        {/* 竞争对手分析 */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="font-bold text-gray-800 text-xl md:text-2xl">竞争对手分析模块</h2>
          <CompetitorAnalysisTable />
        </div>

        {/* 引用模块 */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="font-bold text-gray-800 text-xl md:text-2xl">引用</h2>
          <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed max-w-3xl">
            网站上的引用、引文和统计数据越多，被人工智能搜索选中并做出响应的可能性就越大。
          </p>

          <div className="space-y-4 md:space-y-6">
            {[
              { label: "引用率：", value: "1%", status: "（中等-可以）" },
              { label: "报价比率：", value: "2%", status: "（中等-可以）" },
              { label: "统计比率：", value: "3%", status: "（中等-可以）" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
                <span className="text-gray-600 text-sm md:text-base font-light w-full sm:w-28 mr-0 sm:mr-4">{item.label}</span>
                <span className="text-gray-600 text-sm md:text-base font-bold mr-0 sm:mr-6">{item.value}</span>
                <div className="bg-orange-100 rounded-lg px-3 py-1 w-fit">
                  <span className="text-orange-600 text-xs">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 统计模块 */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="font-bold text-gray-800 text-xl md:text-2xl">统计</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* 品牌推荐率卡片 */}
            <StatsCard title="品牌推荐率" subtitle="总数据">
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <button className="bg-blue-600 h-6 px-3 rounded text-white text-xs">
                    当月搜索量
                  </button>
                </div>
                <button className="text-xs text-blue-600 border border-blue-600 rounded px-3 py-1 hover:bg-blue-50 transition-colors">
                  查看详情
                </button>
                
                {/* 简化的图表 */}
                <div className="relative w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">85.2%</div>
                    <div className="text-sm text-gray-600">推荐率</div>
                  </div>
                </div>
              </div>
            </StatsCard>

            {/* 品牌被提及率卡片 */}
            <StatsCard title="品牌被提及率" value="71.5%" subtitle="总数据">
              <div className="space-y-2">
                <div className="text-base font-bold text-gray-300">70%</div>
                <div className="text-base font-bold text-gray-300">50%</div>
              </div>
              
              {/* 简化的图表 */}
              <div className="mt-4 h-32 bg-gradient-to-t from-blue-600 via-blue-400 to-blue-200 rounded-lg relative">
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-blue-600 rounded-lg"></div>
              </div>
            </StatsCard>

            {/* 引用链接百分比卡片 */}
            <StatsCard title="引用链接百分比">
              <p className="text-xs md:text-sm font-light text-gray-600 mb-4">全网链接占引用链接的百分比</p>
              
              {/* 简化的圆环图 */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-24 h-24">
                  <div className="w-24 h-24 rounded-full border-8 border-gray-200"></div>
                  <div className="absolute inset-0 w-24 h-24 rounded-full border-8 border-transparent border-t-blue-600 border-r-orange-400 border-b-emerald-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">100%</span>
                  </div>
                </div>
              </div>

              {/* 图例 */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>直接引用</span>
                  </div>
                  <span className="font-bold">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>间接引用</span>
                  </div>
                  <span className="font-bold">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>相关引用</span>
                  </div>
                  <span className="font-bold">30%</span>
                </div>
              </div>
            </StatsCard>

          </div>
        </div>

      </div>
    </div>
  )
} 