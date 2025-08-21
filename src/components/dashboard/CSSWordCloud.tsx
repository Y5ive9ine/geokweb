'use client'

import React, { useMemo } from 'react'

interface CSSWordCloudProps {
  data: Array<{ word: string; count: number }>
}

export function CSSWordCloud({ data }: CSSWordCloudProps) {
  const processedData = useMemo(() => {
    if (!data || data.length === 0) return []
    
    // 排序并计算大小
    const sortedData = [...data].sort((a, b) => b.count - a.count)
    const maxCount = Math.max(...data.map(item => item.count))
    const minCount = Math.min(...data.map(item => item.count))
    
    return sortedData.map((item, index) => {
      // 计算基础字体大小
      const sizePercent = (item.count - minCount) / (maxCount - minCount || 1)
      let fontSize = Math.floor(12 + sizePercent * 20) // 12px 到 32px
      
      // 根据排名调整字体大小，让前几个词更突出
      if (index === 0) fontSize = 32 // 最大的词固定32px
      else if (index < 3) fontSize = Math.max(fontSize, 24)
      else if (index < 6) fontSize = Math.max(fontSize, 18)
      else if (index < 10) fontSize = Math.max(fontSize, 14)
      else fontSize = Math.min(fontSize, 12)
      
      // 根据排名设置颜色 - 使用不同颜色区分
      let color = '#999999'
      if (index === 0) color = '#2663FF' // 最重要的词用蓝色
      else if (index < 3) color = '#FF4D4D' // 第二重要用红色
      else if (index < 6) color = '#FA8919' // 第三层级用橙色
      else if (index < 10) color = '#11CA9C' // 第四层级用绿色
      else color = '#666666' // 其他词用灰色
      
      // 圆形分布算法 - 频率高的在中心，频率低的在边缘
      const centerX = 50
      const centerY = 50
      
      // 根据索引计算径向距离和角度
      let radius, angle
      
      if (index === 0) {
        // 最高频率的词放在中心
        radius = 0
        angle = 0
      } else {
        // 使用螺旋布局，但更紧密
        // 每圈的词数量逐渐增加
        let ring = 1
        let wordsInRing = 5
        let positionInRing = index - 1
        let totalInPreviousRings = 0
        
        // 计算当前词所在的环
        while (positionInRing >= wordsInRing) {
          totalInPreviousRings += wordsInRing
          positionInRing -= wordsInRing
          ring++
          wordsInRing = Math.floor(5 + ring * 3) // 每环词数增加，但增加得更平缓
        }
        
        // 计算角度和半径
        angle = (positionInRing / wordsInRing) * 2 * Math.PI - Math.PI / 2
        // 减少角度随机性，避免重叠
        angle += (Math.random() - 0.5) * 0.1
        
        radius = ring * 15 // 增加每环之间的距离，避免重叠
        // 减少半径随机性
        radius += (Math.random() - 0.5) * 2
        
        // 限制最大半径
        radius = Math.min(radius, 40)
      }
      
      const left = centerX + radius * Math.cos(angle) + '%'
      const top = centerY + radius * Math.sin(angle) + '%'
      
      // 根据位置计算透明度 - 中心最高，边缘最低
      const distanceFromCenter = radius / 40 // 归一化到 0-1
      const opacity = 1 - distanceFromCenter * 0.4 // 从 1 降到 0.6
      
      // 为最大的词添加特殊的 letter-spacing
      const letterSpacing = index === 0 ? '-0.308px' : 'normal'
      
      return {
        ...item,
        fontSize,
        color,
        left,
        top,
        opacity,
        letterSpacing
      }
    })
  }, [data])
  
  return (
    <div className="relative w-full h-full overflow-hidden">
      {processedData.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-400">
          暂无数据
        </div>
      ) : (
        processedData.map((item, index) => (
          <div
            key={item.word}
            className="absolute transition-all duration-300 hover:scale-105 hover:opacity-100 cursor-pointer"
            style={{
              left: item.left,
              top: item.top,
              transform: 'translate(-50%, -50%)', // 不旋转，保持水平
              fontSize: `${item.fontSize}px`,
              color: item.color,
              fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif',
              fontWeight: index === 0 ? '500' : '400',
              letterSpacing: item.letterSpacing,
              textAlign: 'center',
              zIndex: Math.floor(item.fontSize),
              opacity: item.opacity
            }}
            title={`${item.word}: ${item.count}`}
          >
            {item.word}
          </div>
        ))
      )}
      

    </div>
  )
}
