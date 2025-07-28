'use client'

import React, { useState } from 'react'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { TopNavigation } from '@/components/dashboard/TopNavigation'
import { useSidebarState } from '@/hooks/useSidebarState'
import { 
  DownloadIcon, 
  ChevronDownIcon,
  ExternalLinkIcon
} from 'lucide-react'
import Image from 'next/image'

export default function ReferencesPage() {
  const [activeTab, setActiveTab] = useState('references')
  const {
    sidebarCollapsed,
    mobileSidebarOpen,
    toggleSidebar,
    toggleMobileSidebar,
    setMobileSidebarOpen
  } = useSidebarState()

  const referencesData = [
    {
      id: 1,
      rank: 1,
      domain: 'http://deeplumen.cn/?p=79337',
      platform: 'sohu',
      category: 'Earned',
      count: 5300,
      countChange: -507,
      share: 6,
      shareChange: 0.2
    },
    {
      id: 2,
      rank: 2,
      domain: 'http://deeplumen.cn/?p=65',
      platform: 'sohu',
      category: 'Earned',
      count: 4800,
      countChange: 304,
      share: 5.4,
      shareChange: -1
    },
    {
      id: 3,
      rank: 3,
      domain: 'https://weibo.com/',
      platform: 'weibo',
      category: 'Earned',
      count: 5300,
      countChange: -507,
      share: 6,
      shareChange: 0.2
    },
    {
      id: 4,
      rank: 4,
      domain: 'https://www.toutiao.com/',
      platform: 'toutiao',
      category: 'Earned',
      count: 4800,
      countChange: 304,
      share: 5.4,
      shareChange: 1
    },
    {
      id: 5,
      rank: 5,
      domain: 'https://www.smzdm.com/',
      platform: 'smzdm',
      category: 'Earned',
      count: 4800,
      countChange: 304,
      share: 5.4,
      shareChange: 1
    }
  ]

  const platformIcons: Record<string, string> = {
    sohu: '/images/sohu-icon.svg',
    weibo: '/images/weibo-icon.svg',
    toutiao: '/images/toutiao-icon.svg',
    smzdm: '/images/smzdm-icon.svg'
  }

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
                      搜索内容XXXX在人工智能中出现频率
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
              <div className="bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        排名
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        域名
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        类别
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        数量
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        分享
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {referencesData.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-900">{item.rank}.</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            {/* 平台图标 */}
                            {item.platform === 'weibo' && (
                              <div className="w-7 h-7 bg-red-500 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">微</span>
                              </div>
                            )}
                            {item.platform === 'toutiao' && (
                              <div className="w-7 h-7 rounded overflow-hidden">
                                <div className="w-full h-full bg-red-600 flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">头</span>
                                </div>
                              </div>
                            )}
                            {item.platform === 'smzdm' && (
                              <div className="w-7 h-7 bg-red-600 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">值</span>
                              </div>
                            )}
                            {item.platform === 'sohu' && (
                              <div className="w-7 h-7 bg-orange-500 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">搜</span>
                              </div>
                            )}
                            <a 
                              href={item.domain} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-700 hover:text-blue-600 flex items-center space-x-1"
                            >
                              <span className="text-sm">{item.domain}</span>
                              <ExternalLinkIcon className="w-3 h-3" />
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium">
                              {item.category}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-900">
                              {item.count >= 1000 ? `${(item.count / 1000).toFixed(1)}k` : item.count}
                            </span>
                            <span className={`text-sm ${item.countChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {item.countChange > 0 ? '+' : ''}{item.countChange}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-900">{item.share}%</span>
                            <span className={`text-sm ${item.shareChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {item.shareChange > 0 ? '+' : ''}{item.shareChange}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 