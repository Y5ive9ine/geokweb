'use client'

import React from 'react'
import { Prompt } from '@/services/prompts'

interface PromptsSearchTableProps {
  prompts: Prompt[]
  loading: boolean
  error: string | null
  onPromptClick?: (prompt: Prompt) => void
}

export function PromptsSearchTable({ prompts, loading, error, onPromptClick }: PromptsSearchTableProps) {
  // 计算评分的进度条宽度
  const getScoreWidth = (score: number) => {
    return `${Math.min(score, 100)}%`
  }

  // 格式化数字显示
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}k`
    }
    return num.toString()
  }

  // 计算份额变化
  const getShareChange = (prompt: Prompt) => {
    // 如果有engagement_rate，用它来模拟变化趋势
    if (prompt.engagement_rate) {
      return prompt.engagement_rate > 15 ? 2.5 : -1.5
    }
    // 基于score来估算变化趋势
    if (prompt.score) {
      return prompt.score > 75 ? 1.5 : -0.5
    }
    return 0
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-20 bg-gray-100 rounded w-full mb-3"></div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-6">
        <div className="text-center text-red-500 py-8">
          <p>加载数据时出错：{error}</p>
        </div>
      </div>
    )
  }

  if (!prompts || prompts.length === 0) {
    return (
      <div className="bg-white rounded-lg p-6">
        <div className="text-center text-gray-500 py-8">
          <p>暂无数据</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-left px-6 py-4 text-sm font-medium text-gray-900 min-w-[300px]">
              内容
            </th>
            <th className="text-left px-6 py-4 text-sm font-medium text-gray-900 w-40">
              <div className="flex items-center">
                <span>评分</span>
                <span className="ml-1 text-gray-500">↓</span>
              </div>
            </th>
            <th className="text-center px-4 py-4 text-sm font-medium text-gray-900 w-32">
              <div className="flex items-center justify-center">
                <span>排名层级</span>
                <span className="ml-1 text-gray-500">↓</span>
              </div>
            </th>
            <th className="text-center px-4 py-4 text-sm font-medium text-gray-900 w-36">
              <div className="flex items-center justify-center">
                <span>份额占比</span>
                <span className="ml-1 text-gray-500">↓</span>
              </div>
            </th>
            <th className="text-center px-4 py-4 text-sm font-medium text-gray-900 w-32">
              <div className="flex items-center justify-center">
                <span>点击数量</span>
                <span className="ml-1 text-gray-500">↓</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {prompts.map((prompt, index) => {
            const shareChange = getShareChange(prompt)
            
            return (
              <React.Fragment key={prompt.id}>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onPromptClick?.(prompt)}>
                      {/* 箭头图标 */}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="9" 
                        height="5" 
                        viewBox="0 0 9 5" 
                        fill="none"
                        className="mt-1.5 flex-shrink-0"
                      >
                        <path d="M4.50581 5C4.70277 5 4.89972 4.94122 5.04041 4.79429L8.69818 1.56166C9.06395 1.23839 9.09209 0.680032 8.81072 0.327382C8.50122 -0.0546565 7.96662 -0.0840449 7.62898 0.209831L4.50581 2.97226L1.38264 0.209831C1.01686 -0.113432 0.482267 -0.0546565 0.2009 0.327382C-0.108604 0.70942 -0.0523303 1.26778 0.313446 1.56166L3.97121 4.79429C4.1119 4.94122 4.30885 5 4.50581 5Z" fill="#333333"/>
                      </svg>
                      <span className="text-sm text-gray-900">
                        {prompt.content || prompt.prompt || ''}
                      </span>
                      {/* #Topic 标识 */}
                      <span 
                        className="inline-block text-xs px-2 py-1 ml-2 flex-shrink-0"
                        style={{
                          width: '80px',
                          height: '24px',
                          borderRadius: '4px',
                          backgroundColor: '#CCC',
                          color: '#333',
                          fontFamily: '"PingFang SC"',
                          fontSize: '12px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        #Topic
                      </span>
                    </div>

                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-900 w-12 text-right">
                        {prompt.score?.toFixed(1) || '0.0'}%
                      </span>
                      <span className={`text-xs ${shareChange > 0 ? 'text-red-500' : 'text-green-500'} w-12`}>
                        {shareChange > 0 ? '-' : '+'}{Math.abs(shareChange).toFixed(1)}%
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-1.5 max-w-[120px]">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                          style={{ width: getScoreWidth(prompt.score || 0) }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-sm font-medium text-gray-900">
                      # {prompt.ranking || index + 1}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm text-gray-900">
                        {(prompt.share_rate || 0).toFixed(1)}%
                      </span>
                      <span className={`text-xs ${shareChange < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {shareChange < 0 ? '-' : '+'}{Math.abs(shareChange).toFixed(1)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-sm font-medium text-gray-900">
                      {formatNumber(prompt.click_count || 0)}
                    </span>
                  </td>
                </tr>
                

              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


