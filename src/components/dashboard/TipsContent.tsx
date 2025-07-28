'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { SearchSection } from './SearchSection'

// 排序图标组件
const SortIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11.2469 8.5H4.75318C3.97974 8.5 3.49849 9.34219 3.89224 10.0078L7.13912 15.5078C7.33287 15.8359 7.66724 16 8.00005 16C8.33287 16 8.66724 15.8359 8.86099 15.5078L12.1079 10.0094C12.5016 9.34219 12.0219 8.5 11.2469 8.5ZM12.1079 5.99219L8.86099 0.492188C8.66724 0.164062 8.33287 0 8.00005 0C7.66724 0 7.33287 0.164062 7.13912 0.492188L3.89224 5.99219C3.49849 6.65938 3.97974 7.5 4.75318 7.5H11.2469C12.0219 7.5 12.5016 6.65781 12.1079 5.99219Z" fill="#333333"/>
  </svg>
)

// 关键词频率弹窗组件
const KeywordFrequencyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!isOpen || !mounted) return null

  const modalContent = (
    <>
      {/* 背景遮罩 */}
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-20" 
        onClick={onClose}
      >
        <div className="bg-white rounded-[20px] w-[min(1000px,90vw)] h-[min(700px,90vh)] relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-gray-200 overflow-hidden" onClick={(e) => e.stopPropagation()}>
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
          >
            ×
          </button>
          
          <div className="flex flex-col md:flex-row h-full p-4 md:p-6">
            {/* 左侧 - 关键词频率 */}
            <div className="flex-1 md:mr-6 mb-4 md:mb-0">
              {/* 标题和图例 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                <h2 className="text-[24px] md:text-[30px] font-black text-[#333333] mb-4 md:mb-0">关键词频率</h2>
                
                {/* 色彩图例 */}
                <div className="flex flex-wrap items-center gap-3 md:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#2663ff] rounded-sm"></div>
                    <span className="text-[14px] md:text-[16px] font-medium text-[#2663ff]">70+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#ffb200] rounded-sm"></div>
                    <span className="text-[14px] md:text-[16px] font-medium text-[#ffb200]">50+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#11ca9c] rounded-sm"></div>
                    <span className="text-[14px] md:text-[16px] font-medium text-[#11ca9c]">30+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#fa8919] rounded-sm"></div>
                    <span className="text-[14px] md:text-[16px] font-medium text-[#fa8919]">15+</span>
                  </div>
                </div>
              </div>

              {/* 词云区域 */}
              <div className="relative bg-white border border-black rounded-[10px] h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
                {/* 径向渐变背景 */}
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80.288%)'
                  }}
                />

                {/* 中心主关键词 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                  <div className="text-[18px] md:text-[24px] lg:text-[32px] font-medium text-[#2663ff] mb-2">
                    CPU性能排行榜最新
                  </div>
                  <div className="text-[12px] md:text-[14px] lg:text-[16px] text-[#2663ff]">
                    （日均搜索量：48万+）
                  </div>
                </div>

                {/* 第一圈关键词 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[16px] md:text-[24px] lg:text-[30px] text-[#2663ff] z-10"
                  style={{ 
                    top: 'calc(50% - 60px)', 
                    left: '50%',
                    opacity: 1
                  }}
                >
                  超线程
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[16px] md:text-[24px] lg:text-[30px] text-[#fa8919] z-10"
                  style={{ 
                    top: '50%', 
                    left: 'calc(50% + 60px)',
                    opacity: 1
                  }}
                >
                  SMT
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[16px] md:text-[24px] lg:text-[30px] text-[#fa8919] z-10"
                  style={{ 
                    top: 'calc(50% + 60px)', 
                    left: '50%',
                    opacity: 1
                  }}
                >
                  多核
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[16px] md:text-[24px] lg:text-[30px] text-[#fa8919] z-10"
                  style={{ 
                    top: '50%', 
                    left: 'calc(50% - 60px)',
                    opacity: 1
                  }}
                >
                  英特尔
                </div>

                {/* 第二圈关键词 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[14px] md:text-[18px] lg:text-[22px] text-[#ffb200] z-10"
                  style={{ 
                    top: 'calc(50% - 40px)', 
                    left: 'calc(50% - 80px)',
                    opacity: 0.8
                  }}
                >
                  虚拟化支持
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[14px] md:text-[16px] lg:text-[20px] text-[#ff4d4d] z-10"
                  style={{ 
                    top: 'calc(50% - 80px)', 
                    left: 'calc(50% + 40px)',
                    opacity: 0.8
                  }}
                >
                  缓存
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[14px] md:text-[16px] lg:text-[20px] text-[#ff4d4d] z-10"
                  style={{ 
                    top: 'calc(50% + 40px)', 
                    left: 'calc(50% + 80px)',
                    opacity: 0.8
                  }}
                >
                  硅基大脑
                </div>

                {/* 第三圈关键词 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[12px] md:text-[16px] lg:text-[18px] text-[#999999] z-10"
                  style={{ 
                    top: 'calc(50% - 100px)', 
                    left: '50%',
                    opacity: 0.6
                  }}
                >
                  ECC内存
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[12px] md:text-[16px] lg:text-[18px] text-[#999999] z-10"
                  style={{ 
                    top: 'calc(50% - 10px)', 
                    left: 'calc(50% + 100px)',
                    opacity: 0.6
                  }}
                >
                  AI加速核
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[14px] md:text-[18px] lg:text-[24px] text-[#fa8919] z-10"
                  style={{ 
                    top: 'calc(50% + 100px)', 
                    left: '50%',
                    opacity: 0.6
                  }}
                >
                  国产龙芯CPU
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[12px] md:text-[16px] lg:text-[18px] text-[#999999] z-10"
                  style={{ 
                    top: 'calc(50% + 10px)', 
                    left: 'calc(50% - 100px)',
                    opacity: 0.6
                  }}
                >
                  动态超频技术
                </div>

                {/* 带搜索量的关键词 - 内圈 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10 hidden md:block"
                  style={{ 
                    top: 'calc(50% - 30px)', 
                    left: 'calc(50% + 30px)',
                    opacity: 0.9
                  }}
                >
                  <div className="text-[12px] md:text-[16px] lg:text-[20px] text-[#ff4d4d] mb-1">CPU温度正常范围是多少</div>
                  <div className="text-[8px] md:text-[10px] lg:text-[12px] text-[#ff4d4d]">（日均搜索量：32万+）</div>
                </div>

                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10 hidden md:block"
                  style={{ 
                    top: 'calc(50% + 30px)', 
                    left: 'calc(50% - 30px)',
                    opacity: 0.9
                  }}
                >
                  <div className="text-[12px] md:text-[16px] lg:text-[20px] text-[#fa8919] mb-1">高端CPU打游戏区别</div>
                  <div className="text-[8px] md:text-[10px] lg:text-[12px] text-[#fa8919]">（日均搜索量：35万+）</div>
                </div>
              </div>
            </div>

            {/* 右侧 - 主要关键词 */}
            <div className="w-full md:w-[280px] lg:w-[320px]">
              <h2 className="text-[24px] md:text-[30px] font-black text-[#333333] mb-4 md:mb-6">主要关键词</h2>
              
              {/* 主要关键词框 */}
              <div className="bg-white border border-black rounded-[10px] p-4 md:p-6 h-[300px] md:h-[450px] lg:h-[550px] overflow-y-auto">
                <div className="space-y-4 md:space-y-6">
                  {[
                    { rank: 1, keyword: "CPU性能排行榜最新", volume: "48万+" },
                    { rank: 2, keyword: "玩游戏CPU性价比推荐", volume: "39万+" },
                    { rank: 3, keyword: "高端CPU和普通CPU打游戏区别", volume: "35万+" },
                    { rank: 4, keyword: "CPU温度正常范围是多少", volume: "32万+" },
                    { rank: 5, keyword: "CPU需要配什么显卡", volume: "28万+" },
                    { rank: 6, keyword: "CPU核心数量对游戏影响", volume: "25万+" },
                    { rank: 7, keyword: "CPU超频教程安全吗", volume: "22万+" },
                    { rank: 8, keyword: "CPU后缀字母含义解释", volume: "20万+" },
                    { rank: 9, keyword: "CPU占用率100%怎么解决", volume: "18万+" },
                    { rank: 10, keyword: "CPU天梯图高清下载", volume: "15万+" }
                  ].map((item) => (
                    <div key={item.rank} className="flex justify-between items-start">
                      <div className="flex-1 pr-2">
                        <div className="text-[12px] md:text-[14px] lg:text-[16px] text-[#333333] font-normal">
                          {item.rank}.{item.keyword}
                        </div>
                      </div>
                      <div className="text-[12px] md:text-[16px] lg:text-[18px] text-[#333333] font-normal">
                        {item.volume}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  // 使用Portal将弹窗渲染到document.body下
  return createPortal(modalContent, document.body)
}

// 数据表格行组件
const DataRow = ({ 
  title, 
  score, 
  change, 
  rank, 
  sharePercent, 
  shareChange, 
  clicks, 
  isExpandable = false,
  isExpanded = false,
  onTitleClick,
  onToggleExpand,
  subtitle = ''
}: {
  title: string
  score: string
  change: string
  rank: string
  sharePercent: string
  shareChange: string
  clicks: string
  isExpandable?: boolean
  isExpanded?: boolean
  onTitleClick?: () => void
  onToggleExpand?: () => void
  subtitle?: string
}) => {
  const isPositiveChange = change.startsWith('+')
  const isPositiveShareChange = shareChange.startsWith('+')

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        {/* 内容列 */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center">
            {isExpandable && (
              <button onClick={onToggleExpand} className="mr-2">
                <svg className={`w-3 h-3 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
            <div>
              <div 
                className="text-sm md:text-base font-medium text-black cursor-pointer hover:text-blue-600 transition-colors"
                onClick={onTitleClick}
              >
                {title}
              </div>
              {subtitle && (
                <div className="text-xs text-gray-500 mt-1">
                  {subtitle}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 评分列 */}
        <div className="flex flex-col items-start md:items-center">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm md:text-base font-medium text-black">{score}</span>
            <span className={`text-sm md:text-base font-medium ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
          </div>
          {/* 进度条 */}
          <div className="w-16 md:w-20 h-1.5 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full"
              style={{ width: score }}
            />
          </div>
        </div>

        {/* 排名层级列 */}
        <div className="flex items-center">
          <span className="text-sm md:text-base font-medium text-black">{rank}</span>
        </div>

        {/* 份额占比列 */}
        <div className="flex items-center space-x-2">
          <span className="text-sm md:text-base font-medium text-black">{sharePercent}</span>
          <span className={`text-sm md:text-base font-medium ${isPositiveShareChange ? 'text-green-500' : 'text-red-500'}`}>
            {shareChange}
          </span>
        </div>

        {/* 点击数量列 */}
        <div className="flex items-center">
          <span className="text-sm md:text-base font-medium text-black">{clicks}</span>
        </div>
      </div>
    </div>
  )
}

export function TipsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const handleTitleClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleToggleExpand = (index: number) => {
    setExpandedRows(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const tableData = [
    {
      title: "6000-8000元配置电脑时，哪些 CPU 可供选择？",
      score: "79.6%",
      change: "-2.8%",
      rank: "# 1",
      sharePercent: "16%",
      shareChange: "-1.7%",
      clicks: "1k",
      isExpandable: true,
      subtitle: "5个提示内容"
    },
    {
      title: "Intel 酷睿 i5-12400 和 Ryzen 5 5600G 性能对比",
      score: "97.5%",
      change: "-2.5%",
      rank: "# 1",
      sharePercent: "16.7%",
      shareChange: "+3.7%",
      clicks: "133",
      isExpandable: false
    },
    {
      title: "6000 元预算，选择 i3 还是 i5？",
      score: "96.6%",
      change: "+1.4%",
      rank: "# 1",
      sharePercent: "20.2%",
      shareChange: "-2.9%",
      clicks: "133",
      isExpandable: false
    },
    {
      title: "性价比高的办公/游戏 CPU 推荐（2025年版）",
      score: "93.5%",
      change: "-3.7%",
      rank: "# 1",
      sharePercent: "21.1%",
      shareChange: "-2.5%",
      clicks: "129",
      isExpandable: false
    },
    {
      title: "Intel 第12代 vs 第13代，选择建议",
      score: "89.8%",
      change: "+7.7%",
      rank: "# 1",
      sharePercent: "16.2%",
      shareChange: "-2.5%",
      clicks: "134",
      isExpandable: false
    },
    {
      title: "哪些主板适配 Intel i5 系列？",
      score: "89.5%",
      change: "-4.2%",
      rank: "# 1",
      sharePercent: "14.4%",
      shareChange: "+0.9%",
      clicks: "134",
      isExpandable: false
    }
  ]

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
      {/* 搜索区域 */}
      <SearchSection />

      {/* 数据表格区域 */}
      <div className="mt-6 bg-white rounded-lg border border-gray-300 overflow-hidden">
        {/* 表头 */}
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 text-sm font-medium text-gray-700">
            <div className="col-span-2 md:col-span-1 flex items-center">
              内容
              <SortIcon />
            </div>
            <div className="flex items-center justify-start md:justify-center">
              评分
              <SortIcon />
            </div>
            <div className="flex items-center justify-start md:justify-center">
              排名层级
              <SortIcon />
            </div>
            <div className="flex items-center justify-start md:justify-center">
              份额占比
              <SortIcon />
            </div>
            <div className="flex items-center justify-start md:justify-center">
              点击数量
              <SortIcon />
            </div>
          </div>
        </div>

        {/* 表格内容 */}
        <div className="p-4">
          {tableData.map((row, index) => (
            <DataRow
              key={index}
              {...row}
              isExpanded={expandedRows.includes(index)}
              onTitleClick={index === 0 ? handleTitleClick : undefined}
              onToggleExpand={row.isExpandable ? () => handleToggleExpand(index) : undefined}
            />
          ))}
        </div>
      </div>

      {/* 底部提示文本 */}
      <div className="mt-8 text-center">
        <p className="text-base md:text-lg text-gray-600 font-light">
          看看您的品牌关键词在 AI答案中出现的频率
        </p>
      </div>

      {/* 关键词频率弹窗 */}
      <KeywordFrequencyModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
} 