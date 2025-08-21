'use client'

import React, { useEffect, useState } from 'react'
import { Prompt } from '@/services/prompts'
import { X } from 'lucide-react'
import { CSSWordCloud } from './CSSWordCloud'

interface KeywordCloudModalProps {
  isOpen: boolean
  onClose: () => void
  prompt: Prompt | null
}

export function KeywordCloudModal({ isOpen, onClose, prompt }: KeywordCloudModalProps) {
  const [wordCloudData, setWordCloudData] = useState<Array<{ word: string; count: number }>>([])
  const [sortedKeywords, setSortedKeywords] = useState<Array<{ word: string; count: number; rank: number }>>([])

  useEffect(() => {
    if (!isOpen || !prompt) {
      return
    }

    // 准备关键词数据
    const cloudData = prompt.keyword_frequency || prompt.main_keywords || {}
    const listData = prompt.main_keywords || prompt.keyword_frequency || {}
    
    const cloudArray = Object.entries(cloudData)
      .map(([word, count]) => ({ word, count: count as number }))
      .filter(item => item.count > 0)
    
    const keywordArray = Object.entries(listData)
      .map(([word, count]) => ({ word, count: count as number }))
      .sort((a, b) => b.count - a.count)
      .map((item, index) => ({ ...item, rank: index + 1 }))

    // 如果没有数据，使用测试数据
    if (cloudArray.length === 0) {
      cloudArray.push(
        { word: '测试', count: 50 },
        { word: '词云', count: 40 },
        { word: '数据', count: 30 }
      )
    }

    setWordCloudData(cloudArray)
    setSortedKeywords(keywordArray.slice(0, 10))
  }, [isOpen, prompt])

  if (!isOpen || !prompt) return null

  // 格式化数字显示
  const formatCount = (count: number) => {
    if (count >= 10000) {
      return `${(count / 10000).toFixed(1)}万+`
    }
    return count.toString()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 双层遮罩效果 */}
      {/* 第一层：模糊背景 */}
      <div 
        className="absolute inset-0 bg-white/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 第二层：渐变遮罩增强对比度 */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-900/20 to-gray-900/10"
        onClick={onClose}
      />
      
      {/* 弹窗内容 - 增强阴影效果 */}
      <div 
        className="relative bg-white rounded-lg shadow-2xl w-[900px] h-[600px] p-8 ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* 主体内容 */}
        <div className="flex h-full pt-12">
          {/* 左侧词云 - 55% */}
          <div className="w-[55%] pr-4 flex flex-col">
            <div className="flex items-center justify-between mb-4 h-6">
              <h3 className="text-lg font-bold text-gray-900">关键词频率</h3>
              {/* 图例 */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div 
                    className="flex-shrink-0"
                    style={{
                      width: '17.463px',
                      height: '17.208px',
                      borderRadius: '2px',
                      background: '#2663FF'
                    }}
                  />
                  <span className="text-sm text-gray-600">70+</span>
                </div>
                <div className="flex items-center gap-1">
                  <div 
                    className="flex-shrink-0"
                    style={{
                      width: '17.463px',
                      height: '17.208px',
                      borderRadius: '2px',
                      background: '#FF4D4D'
                    }}
                  />
                  <span className="text-sm text-gray-600">50+</span>
                </div>
                <div className="flex items-center gap-1">
                  <div 
                    className="flex-shrink-0"
                    style={{
                      width: '17.463px',
                      height: '17.208px',
                      borderRadius: '2px',
                      background: '#FA8919'
                    }}
                  />
                  <span className="text-sm text-gray-600">35+</span>
                </div>
                <div className="flex items-center gap-1">
                  <div 
                    className="flex-shrink-0"
                    style={{
                      width: '17.463px',
                      height: '17.208px',
                      borderRadius: '2px',
                      background: '#11CA9C'
                    }}
                  />
                  <span className="text-sm text-gray-600">15+</span>
                </div>
              </div>
            </div>
            <div className="relative flex-1 border border-gray-200 rounded-lg bg-white overflow-hidden">
              <CSSWordCloud data={wordCloudData} />
            </div>
          </div>

          {/* 右侧列表 - 45% */}
          <div className="w-[45%] pl-4 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-4 h-6">主要关键词</h3>
            <div className="bg-white rounded-lg border border-gray-200 p-4 flex-1 overflow-y-auto">
              {sortedKeywords.map((item, index) => (
                <div key={item.word} className="flex items-center h-10 mb-2 last:mb-0">
                  {/* 序号 */}
                  <span className="text-base text-gray-500 w-6 flex-shrink-0">{index + 1}</span>
                  {/* 关键词 */}
                  <span className="ml-3 text-base text-gray-900 flex-1">{item.word}</span>
                  {/* 频率 */}
                  <span className="text-base text-blue-600">{formatCount(item.count)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
