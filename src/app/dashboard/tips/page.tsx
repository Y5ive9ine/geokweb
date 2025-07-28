'use client'

import React, { useState } from 'react'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { TopNavigation } from '@/components/dashboard/TopNavigation'
import { useSidebarState } from '@/hooks/useSidebarState'
import { 
  DownloadIcon, 
  ChevronDownIcon, 
  FilterIcon 
} from 'lucide-react'

export default function TipsPage() {
  const [activeTab, setActiveTab] = useState('tips')
  const { 
    sidebarCollapsed, 
    mobileSidebarOpen, 
    toggleSidebar, 
    toggleMobileSidebar, 
    setMobileSidebarOpen 
  } = useSidebarState()

  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const handleTitleClick = (title: string) => {
    setSelectedItem(title)
    setShowModal(true)
  }

  const tipsData = [
    {
      id: 1,
      content: '6000-8000元配置电脑时，哪些 CPU 可供选择？',
      hints: 5,
      tag: '#Topic',
      score: 79.6,
      scoreChange: -2.8,
      rank: 1,
      share: 16,
      shareChange: -1.7,
      clicks: '1k'
    },
    {
      id: 2,
      content: 'Intel 酷睿 i5-12400 和 Ryzen 5 5600G 性能对比',
      score: 97.5,
      scoreChange: -2.5,
      rank: 1,
      share: 16.7,
      shareChange: 3.7,
      clicks: 133
    },
    {
      id: 3,
      content: '6000 元预算，选择 i3 还是 i5？',
      score: 96.6,
      scoreChange: 1.4,
      rank: 1,
      share: 20.2,
      shareChange: -2.9,
      clicks: 133
    },
    {
      id: 4,
      content: '性价比高的办公/游戏 CPU 推荐（2025年版）',
      score: 93.5,
      scoreChange: -3.7,
      rank: 1,
      share: 21.1,
      shareChange: -2.5,
      clicks: 129
    },
    {
      id: 5,
      content: 'Intel 第12代 vs 第13代，选择建议',
      score: 89.8,
      scoreChange: 7.7,
      rank: 1,
      share: 16.2,
      shareChange: -2.5,
      clicks: 134
    },
    {
      id: 6,
      content: '哪些主板适配 Intel i5 系列？',
      score: 89.5,
      scoreChange: -4.2,
      rank: 1,
      share: 14.4,
      shareChange: 0.9,
      clicks: 134
    },
    {
      id: 7,
      content: '6000元能配台能打游戏的电脑吗？',
      hints: 5,
      tag: '#Topic',
      score: 79.6,
      scoreChange: 2.8,
      rank: 1,
      share: 16,
      shareChange: -1.7,
      clicks: '1k'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-['PingFang_SC'] relative">
      {/* 移动端遮罩 */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <div className="flex h-screen">
        {/* 左侧边栏 */}
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
          currentPage="home"
        />

        {/* 主内容区 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* 顶部导航 - 使用 TopNavigation 组件 */}
          <TopNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onMenuToggle={toggleMobileSidebar}
            onSidebarToggle={toggleSidebar}
            currentPage="home"
          />

          {/* 主体内容 */}
          <div className="flex-1 overflow-auto bg-white">
            {/* 搜索栏 */}
            <div className="p-6 border-b border-gray-200">
              <div className="bg-white rounded-lg border border-gray-300 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">品牌</h2>
                    <p className="text-gray-600 mt-1">
                      搜索内容"6000-8000元配置电脑时，哪些 CPU 可供选择？"在AI中出现频率
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium">
                      查询
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <DownloadIcon className="w-5 h-5" />
                      <span>下载/导出</span>
                    </button>
                  </div>
                </div>

                {/* 筛选选项 */}
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
                    <span className="text-gray-700">最近7日</span>
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <span className="text-gray-500">VS</span>
                  <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
                    <span className="text-gray-700">前一个7日</span>
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
                    <span className="text-gray-600">排序方式：主题</span>
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
                    <span className="text-gray-600">区域选择</span>
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
                    <span className="text-gray-600">话题筛选</span>
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
                    <span className="text-gray-600">AI平台选择</span>
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* 数据表格 */}
            <div className="p-6">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        内容
                        <ChevronDownIcon className="inline-block w-4 h-4 ml-1 text-gray-400" />
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        评分
                        <ChevronDownIcon className="inline-block w-4 h-4 ml-1 text-gray-400" />
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        排名层级
                        <ChevronDownIcon className="inline-block w-4 h-4 ml-1 text-gray-400" />
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        份额占比
                        <ChevronDownIcon className="inline-block w-4 h-4 ml-1 text-gray-400" />
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        点击数量
                        <ChevronDownIcon className="inline-block w-4 h-4 ml-1 text-gray-400" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tipsData.map((item, index) => (
                      <tr key={item.id} className={`border-b border-gray-100 hover:bg-gray-50 ${index === 0 ? 'bg-blue-50' : ''}`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                            <div>
                              <p 
                                className="text-gray-900 font-medium cursor-pointer hover:text-blue-600"
                                onClick={() => handleTitleClick(item.content)}
                              >
                                {item.content}
                              </p>
                              {item.hints && (
                                <p className="text-gray-500 text-sm mt-1">{item.hints}个提示内容</p>
                              )}
                            </div>
                            {item.tag && (
                              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{item.tag}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-4">
                            <span className="text-gray-900">{item.score}%</span>
                            <span className={`text-sm ${item.scoreChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {item.scoreChange > 0 ? '+' : ''}{item.scoreChange}%
                            </span>
                            <div className="w-24 bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-blue-600 h-1.5 rounded-full" 
                                style={{ width: `${item.score}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-900"># {item.rank}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-900">{item.share}%</span>
                            <span className={`text-sm ${item.shareChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {item.shareChange > 0 ? '+' : ''}{item.shareChange}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-900">{item.clicks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 提示弹窗 */}
      {showModal && (
        <>
          {/* 第一层遮罩 - 保持背景可见 */}
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setShowModal(false)}
          />
          
          {/* 第二层遮罩 - 弹窗周围的模糊效果 */}
          <div 
            className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={() => setShowModal(false)}
          >
            <div 
              className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[80vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <TipsModal 
                title={selectedItem || ''} 
                onClose={() => setShowModal(false)} 
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// 提示弹窗组件
function TipsModal({ title, onClose }: { title: string, onClose: () => void }) {
  const keywordData = [
    { text: 'CPU性能排行榜最新', size: 32, color: 'text-blue-600', searches: '48万+' },
    { text: '玩游戏CPU性价比推荐', size: 23, color: 'text-yellow-600', searches: '39万+' },
    { text: '高端CPU和普通CPU打游戏区别', size: 20, color: 'text-orange-600', searches: '35万+' },
    { text: 'CPU温度正常范围是多少', size: 20, color: 'text-red-600', searches: '32万+' },
    { text: 'CPU需要配什么显卡', size: 24, color: 'text-red-600', searches: '28万+' },
    { text: 'CPU核心数量对游戏影响', size: 24, color: 'text-yellow-600', searches: '25万+' },
    { text: 'CPU超频教程安全吗', size: 18, color: 'text-green-600', searches: '22万+' },
    { text: 'CPU后缀字母含义解释', size: 24, color: 'text-blue-600', searches: '20万+' },
    { text: 'CPU占用率100%怎么解决', size: 20, color: 'text-gray-600', searches: '18万+' },
    { text: 'CPU天梯图高清下载', size: 24, color: 'text-blue-600', searches: '15万+' },
    { text: '超线程', size: 30, color: 'text-blue-600', searches: '' },
    { text: '多核', size: 30, color: 'text-orange-600', searches: '' },
    { text: '国产龙芯CPU', size: 24, color: 'text-orange-600', searches: '' },
    { text: '英特尔', size: 30, color: 'text-orange-600', searches: '' },
    { text: 'SMT', size: 30, color: 'text-orange-600', searches: '' },
    { text: 'CPU占用率', size: 20, color: 'text-gray-600', searches: '' },
    { text: '缓存', size: 16, color: 'text-red-600', searches: '' },
    { text: '硅基大脑', size: 16, color: 'text-red-600', searches: '' },
    { text: '虚拟化支持', size: 16, color: 'text-yellow-600', searches: '' },
    { text: 'ECC内存', size: 18, color: 'text-gray-600', searches: '' },
    { text: '动态超频技术', size: 18, color: 'text-gray-600', searches: '' },
    { text: 'AI加速核', size: 18, color: 'text-gray-600', searches: '' },
    { text: '酷睿Ultra系列', size: 16, color: 'text-red-600', searches: '' }
  ]

  const topKeywords = [
    { rank: 1, text: 'CPU性能排行榜最新', searches: '48万+' },
    { rank: 2, text: '玩游戏CPU性价比推荐', searches: '39万+' },
    { rank: 3, text: '高端CPU和普通CPU打游戏区别', searches: '35万+' },
    { rank: 4, text: 'CPU温度正常范围是多少', searches: '32万+' },
    { rank: 5, text: 'CPU需要配什么显卡', searches: '28万+' },
    { rank: 6, text: 'CPU核心数量对游戏影响', searches: '25万+' },
    { rank: 7, text: 'CPU超频教程安全吗', searches: '22万+' },
    { rank: 8, text: 'CPU后缀字母含义解释', searches: '20万+' },
    { rank: 9, text: 'CPU占用率100%怎么解决', searches: '18万+' },
    { rank: 10, text: 'CPU天梯图高清下载', searches: '15万+' }
  ]

  return (
    <div className="flex h-full relative">
      {/* 关闭按钮 - 移到弹窗内部右上角 */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* 左侧关键词云 */}
      <div className="flex-1 p-8 border-r border-gray-200 relative">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">关键词频率</h3>
        
        {/* 频率图例 */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span className="text-sm text-gray-600">70+</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-yellow-600 rounded"></div>
            <span className="text-sm text-gray-600">50+</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            <span className="text-sm text-gray-600">30+</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-orange-600 rounded"></div>
            <span className="text-sm text-gray-600">15+</span>
          </div>
        </div>

        {/* 关键词云 - 使用 absolute 定位模拟词云效果 */}
        <div className="relative h-[400px]">
          {keywordData.map((keyword, index) => {
            // 生成随机位置
            const positions = [
              { top: '10%', left: '20%' },
              { top: '15%', left: '50%' },
              { top: '25%', left: '30%' },
              { top: '35%', left: '60%' },
              { top: '45%', left: '25%' },
              { top: '55%', left: '45%' },
              { top: '65%', left: '35%' },
              { top: '75%', left: '55%' },
              { top: '20%', left: '75%' },
              { top: '40%', left: '10%' },
              { top: '60%', left: '70%' },
              { top: '30%', left: '85%' },
              { top: '50%', left: '5%' },
              { top: '70%', left: '15%' },
              { top: '80%', left: '40%' },
              { top: '5%', left: '35%' },
              { top: '85%', left: '65%' },
              { top: '40%', left: '40%' },
              { top: '55%', left: '20%' },
              { top: '25%', left: '5%' },
              { top: '65%', left: '85%' },
              { top: '15%', left: '15%' },
              { top: '75%', left: '75%' }
            ]

            const position = positions[index % positions.length]

            return (
              <div
                key={index}
                className={`absolute ${keyword.color} cursor-pointer hover:opacity-80 transition-opacity text-center`}
                style={{
                  fontSize: `${keyword.size}px`,
                  top: position.top,
                  left: position.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="font-medium">{keyword.text}</div>
                {keyword.searches && (
                  <div className="text-xs text-gray-500 mt-1">（日均搜索量：{keyword.searches}）</div>
                )}
              </div>
            )
          })}
        </div>

        {/* 渐变背景装饰 */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.8) 80%, white 100%)'
          }}
        />
      </div>

      {/* 右侧主要关键词列表 */}
      <div className="w-96 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">主要关键词</h3>
        <div className="space-y-3">
          {topKeywords.map((item) => (
            <div key={item.rank} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <span className="text-gray-500 text-sm">{item.rank}.</span>
                <span className="text-gray-900">{item.text}</span>
              </div>
              <span className="text-gray-600 text-sm">{item.searches}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 