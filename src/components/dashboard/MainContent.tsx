'use client'

import Image from 'next/image'
import { SearchSection } from './SearchSection'
import { AIFrequencyChart } from './AIFrequencyChart'
import { BrandSearchRateCard } from './BrandSearchRateCard'
import { BrandRecommendationCard } from './BrandRecommendationCard'
import { BrandMarketShareCard } from './BrandMarketShareCard'
import { VisibilityContent } from './VisibilityContent'
import { TipsContent } from './TipsContent'
import { ReferencesContent } from './ReferencesContent'

interface MainContentProps {
  activeTab: string
}

export function MainContent({ activeTab }: MainContentProps) {
  // 根据activeTab渲染不同的内容
  const renderContent = () => {
    switch (activeTab) {
      case 'visibility':
        return <VisibilityContent />
      case 'tips':
        return <TipsContent />
      case 'references':
        return <ReferencesContent />
      default:
        // 默认显示可见性页面
        return <VisibilityContent />
    }
  }

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      {renderContent()}
    </div>
  )
} 