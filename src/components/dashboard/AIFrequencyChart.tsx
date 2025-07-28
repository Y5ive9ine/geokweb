'use client'

import Image from 'next/image'

export function AIFrequencyChart() {
  const dataPoints = [
    { label: '价格', x: 640, y: 437 },
    { label: '质量', x: 847, y: 544 },
    { label: '性能', x: 851, y: 811 },
    { label: '性价比', x: 425, y: 811 },
    { label: '品牌', x: 639, y: 919 },
    { label: '产品', x: 425, y: 544 },
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-6 h-[523px]">
      {/* 标题 */}
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">在AI中出现频率</h3>
        <p className="text-xs text-gray-600">搜索关键词内容在人工智能中出现频率</p>
      </div>

      {/* 图表容器 */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* 六边形图层 - 从外到内 */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* 最外层六边形 */}
          <div className="relative w-[294px] h-[294px]">
            <Image
              src="/images/Polygon2.svg"
              alt="Outer polygon"
              fill
              className="object-contain opacity-20"
              loading="lazy"
              sizes="(max-width: 768px) 250px, 294px"
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {/* 第二层六边形 */}
          <div className="relative w-[235px] h-[235px]">
            <Image
              src="/images/Polygon3.svg"
              alt="Second polygon"
              fill
              className="object-contain opacity-40"
              loading="lazy"
              sizes="(max-width: 768px) 200px, 235px"
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {/* 第三层六边形 */}
          <div className="relative w-[164px] h-[164px]">
            <Image
              src="/images/Polygon4.svg"
              alt="Third polygon"
              fill
              className="object-contain opacity-60"
              loading="lazy"
              sizes="(max-width: 768px) 140px, 164px"
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {/* 最内层六边形 */}
          <div className="relative w-[150px] h-[150px]">
            <Image
              src="/images/Polygon5.svg"
              alt="Inner polygon"
              fill
              className="object-contain opacity-80"
              loading="lazy"
              sizes="(max-width: 768px) 130px, 150px"
            />
          </div>
        </div>

        {/* 连接线 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[326px] h-[301px]">
            <Image
              src="/images/Polygon6.svg"
              alt="Connection lines"
              fill
              className="object-contain"
              loading="lazy"
              sizes="(max-width: 768px) 280px, 326px"
            />
          </div>
        </div>

        {/* 数据点 */}
        {[
          { x: '38%', y: '45%' },
          { x: '62%', y: '25%' },
          { x: '78%', y: '45%' },
          { x: '78%', y: '75%' },
          { x: '62%', y: '85%' },
          { x: '38%', y: '75%' },
        ].map((point, index) => (
          <div
            key={index}
            className="absolute w-[5px] h-[5px]"
            style={{ left: point.x, top: point.y, transform: 'translate(-50%, -50%)' }}
          >
            <Image
              src="/images/Ellipse25.svg"
              alt="Data point"
              width={5}
              height={5}
              className="w-full h-full"
            />
          </div>
        ))}

        {/* 标签（暂时隐藏，需要根据实际位置调整） */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 可以根据需要添加具体的标签位置 */}
        </div>
      </div>
    </div>
  )
} 