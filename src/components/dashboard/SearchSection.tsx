'use client'

import Image from 'next/image'

export function SearchSection() {
  const filterOptions = [
    { label: '最近7日', value: 'recent7' },
    { label: '前一个7日', value: 'previous7' },
    { label: '排序方式：主题', value: 'sort_topic' },
    { label: '区域选择', value: 'region' },
    { label: '话题筛选', value: 'topic_filter' },
    { label: 'AI平台选择', value: 'ai_platform' },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-300 p-4 md:p-6">
      {/* 主搜索区域 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-800 mb-1">品牌</h2>
          <p className="text-xs text-gray-600">搜索内容XXXX在人工智能中出现频率</p>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          {/* 查询按钮 */}
          <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 md:px-6 py-3 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
            查询
          </button>
          
          {/* 下载导出按钮 */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto">
            <Image
              src="/images/Frame7.svg"
              alt="Download"
              width={21}
              height={21}
              className="w-5 h-5"
            />
            <span className="hidden sm:inline">下载/导出</span>
            <span className="sm:hidden">导出</span>
          </button>
        </div>
      </div>

      {/* 筛选选项 - 响应式网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* 时间对比 - 在大屏幕上占据两列 */}
        <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <select className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>最近7日</option>
            <option>最近30日</option>
            <option>最近90日</option>
          </select>
          
          <span className="hidden sm:inline text-sm text-gray-600 px-2">VS</span>
          
          <select className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>前一个7日</option>
            <option>前一个30日</option>
            <option>前一个90日</option>
          </select>
        </div>

        {/* 其他筛选选项 */}
        <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option>排序方式：主题</option>
          <option>排序方式：时间</option>
          <option>排序方式：热度</option>
        </select>

        <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option>区域选择</option>
          <option>中国大陆</option>
          <option>港澳台</option>
          <option>海外</option>
        </select>

        <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option>话题筛选</option>
          <option>科技</option>
          <option>商业</option>
          <option>生活</option>
        </select>

        <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option>AI平台选择</option>
          <option>ChatGPT</option>
          <option>Claude</option>
          <option>文心一言</option>
        </select>
      </div>
    </div>
  )
} 