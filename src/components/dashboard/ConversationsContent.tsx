'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { authUtils } from '@/services/auth'
import { brandApi } from '@/services/brand'
import { Brand } from '@/lib/types'

export function ConversationsContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState('平台筛选')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentBrand, setCurrentBrand] = useState<Brand | null>(null)
  const [isIntelBrand, setIsIntelBrand] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const platforms = ['DeepSeek', '豆包', '文心一言', 'ChatGPT', 'Claude']
  
  // 硬编码的搜索建议数据
  const searchSuggestions = [
    '预算5000-8000装机，哪个CPU性价比高',
    '预算6000-8000，想要一台整机有什么配置推荐',
    '玩游戏CPU高性价比推荐',
    '双十一5000元学生装机最高性价比CPU',
    '双十一5000-6000元AI创作整机配置推荐',
    '5000元以下学生装机性价比CPU',
    '学生装机最高性价比CPU',
    '双十一学生装机最高性价比CPU',
    'AI主机配置推荐',
    '双十一AI主机推荐配置'
  ]
  
  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform)
    setIsDropdownOpen(false)
  }

  // 获取当前品牌信息
  useEffect(() => {
    const fetchBrandInfo = async () => {
      const userInfo = authUtils.getUserInfo()
      if (userInfo?.current_brand_id) {
        try {
          const response = await brandApi.list({
            page: 1,
            page_size: 10,
          })
          
          if (response.success && response.data) {
            let brands: Brand[] = []
            
            if (Array.isArray(response.data)) {
              brands = response.data
            } else if (response.data.data && Array.isArray(response.data.data)) {
              brands = response.data.data
            }
            
            const currentBrandInfo = brands.find(
              (brand) => brand.id === userInfo.current_brand_id
            )
            
            if (currentBrandInfo) {
              setCurrentBrand(currentBrandInfo)
              // 检查品牌名称是否为 Intel (不区分大小写)
              const brandName = currentBrandInfo.name?.toLowerCase()
              setIsIntelBrand(brandName === 'intel')
            }
          }
        } catch (error) {
          console.error('获取品牌信息失败:', error)
        }
      }
    }
    
    fetchBrandInfo()
  }, [])

  // 处理搜索输入变化
  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value)
  }

  // 处理选择建议
  const handleSuggestionSelect = (suggestion: string) => {
    setSearchQuery(suggestion)
  }



  // 点击外部关闭平台下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      {/* 背景图片容器 */}
      <div 
        className="min-h-full bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/search.png')" }}
      >
        {/* 主内容容器 */}
        <div className="flex flex-col items-center justify-center min-h-full py-12 px-4 sm:px-6 lg:px-8">
          {/* 主标题 */}
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-relaxed">
              AI用户都在问什么
            </h1>
          </div>

          {/* 搜索区域 */}
          <div className="w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {/* 主搜索框 */}
              <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchInputChange(e.target.value)}
                  placeholder="intelCPU发售"
                  className="w-full h-12 px-4 pr-12 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                    <path d="M13.5316 24.5846C10.8592 24.5846 8.26598 23.6581 6.22988 21.9758C3.04163 19.3427 1.50653 15.0277 2.31923 10.9829C2.99483 7.62126 5.24138 4.60686 8.18198 3.11631C9.85433 2.26851 11.7071 1.82031 13.54 1.82031C15.1652 1.82031 16.7384 2.15931 18.2153 2.82771C21.4501 4.29201 23.903 7.29741 24.6166 10.6712C25.4306 14.5196 24.2852 18.4828 21.5528 21.2728C21.3626 21.4669 21.146 21.5653 20.909 21.5653C20.5259 21.5653 20.1304 21.2852 19.9681 20.8994C19.8196 20.5459 19.8953 20.1785 20.1761 19.8919C22.1831 17.8435 23.1812 15.0793 22.9148 12.3083C22.6645 9.70086 21.2705 7.17246 19.2772 5.70966C17.5391 4.43421 15.5197 3.76011 13.4372 3.76011C12.2177 3.75853 11.0097 3.99702 9.88223 4.46196C6.80633 5.72361 4.60088 8.58216 4.12613 11.9224C3.65453 15.242 5.09978 18.7655 7.72238 20.6902C9.44543 21.955 11.4484 22.6234 13.5148 22.6234C14.7307 22.6234 15.9416 22.3934 17.1139 21.9397C17.1939 21.9087 17.279 21.8929 17.3648 21.8929C17.7691 21.8929 18.1883 22.2212 18.2993 22.625C18.4384 23.1305 18.1588 23.6147 17.6041 23.8297C16.3345 24.3206 14.9924 24.5747 13.6151 24.5845H13.5316V24.5846Z" fill="currentColor"/>
                    <path d="M27.1807 27.7113C26.9434 27.7113 26.7257 27.617 26.5337 27.431L20.2532 21.3504C19.9688 21.0749 19.8859 20.7186 20.0257 20.3729C20.1848 19.9797 20.5897 19.6944 20.9884 19.6944C21.2257 19.6944 21.4433 19.7888 21.6355 19.9749L27.9157 26.0555C28.2002 26.3309 28.2832 26.6873 28.1434 27.0332C27.9844 27.4262 27.5794 27.7113 27.1807 27.7113ZM10.6496 11.3405C9.86391 11.3405 9.22461 10.7012 9.22461 9.91548C9.22461 9.12978 9.86391 8.49048 10.6496 8.49048C11.4353 8.49048 12.0746 9.12978 12.0746 9.91548C12.0746 10.7012 11.4353 11.3405 10.6496 11.3405Z" fill="currentColor"/>
                  </svg>
                </button>

              </div>

              {/* 平台筛选下拉框 */}
              <div className="w-full sm:w-auto sm:min-w-[120px] relative" ref={dropdownRef}>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-200">
                  {/* 主选择区域 */}
                  <div 
                    className="h-12 px-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="text-sm text-gray-700 flex-1 truncate">{selectedPlatform}</span>
                    <div className={`w-3 h-3 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      <Image 
                        src="/images/Vector.svg" 
                        alt="下拉箭头" 
                        width={12}
                        height={12}
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* 下拉选项列表 */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      {platforms.map((platform, index) => (
                        <div
                          key={platform}
                          className={`px-4 py-3 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${
                            index < platforms.length - 1 ? 'border-b border-gray-100' : ''
                          } ${
                            selectedPlatform === platform ? 'text-gray-800 font-medium' : 'text-gray-600'
                          } ${
                            index === 0 ? 'rounded-t-lg' : ''
                          } ${
                            index === platforms.length - 1 ? 'rounded-b-lg' : ''
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePlatformSelect(platform)
                          }}
                        >
                          {platform}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 搜索建议卡片列表 - 仅当品牌为 Intel 时显示 */}
          {isIntelBrand && (
            <div className="suggestion-cards-container mt-8 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">热门搜索建议</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {searchSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md"
                      onClick={() => handleSuggestionSelect(suggestion)}
                    >
                      <p className="text-sm text-gray-700 leading-relaxed">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 