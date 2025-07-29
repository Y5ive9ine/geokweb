'use client'

import { useState, useEffect } from 'react'
import { usePrompts, useBrandPrompts, useTopPrompts, usePrompt } from '@/hooks/usePrompts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { promptsUtils } from '@/services/prompts'
import { authUtils } from '@/services/auth'

export function TipsContent() {
  const [currentBrandId, setCurrentBrandId] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  
  useEffect(() => {
    const userInfo = authUtils.getUserInfo()
    if (userInfo?.brand_id) {
      setCurrentBrandId(userInfo.brand_id)
    } else {
      setCurrentBrandId('4fc86ecb-8e0e-476b-8826-bf4dc95fce0d')
    }
  }, [])

  const { prompts, pagination, loading, error, changePage, filter } = usePrompts({ page_size: 10 })
  const { prompts: brandPrompts, loading: brandLoading } = useBrandPrompts(currentBrandId, selectedCategory)
  const { prompts: topPrompts, loading: topLoading } = useTopPrompts(5)
  const { createPrompt } = usePrompt()

  const handleCreatePrompt = async () => {
    try {
      const newPrompt = await createPrompt({
        prompt: '新的提示词内容',
        category: 'general',
        is_public: true,
        metadata: {}
      })
      console.log('创建成功:', newPrompt)
      // 刷新列表
      filter()
    } catch (error) {
      console.error('创建失败:', error)
    }
  }

  const categories = ['general', 'technical', 'marketing', 'sales', 'support']

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">提示词管理</h1>
        <Button onClick={handleCreatePrompt} className="bg-blue-600 text-white hover:bg-blue-700">
          创建新提示词
        </Button>
      </div>

      <div className="space-y-6">
        {/* 热门提示词 */}
        <Card>
          <CardHeader>
            <CardTitle>热门提示词</CardTitle>
          </CardHeader>
          <CardContent>
            {topLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-20 bg-gray-100 animate-pulse rounded"></div>
                ))}
              </div>
            ) : topPrompts && topPrompts.length > 0 ? (
              <div className="space-y-4">
                {topPrompts.map((prompt, index) => (
                  <div key={prompt.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800">#{index + 1}</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        {promptsUtils.formatCategory(prompt.category)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{prompt.prompt}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>使用次数: {prompt.usage_count || 0}</span>
                      <span className="mx-2">•</span>
                      <span>评分: {promptsUtils.calculatePromptQualityScore(prompt)}/10</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">暂无热门提示词</p>
            )}
          </CardContent>
        </Card>

        {/* 品牌相关提示词 */}
        <Card>
          <CardHeader>
            <CardTitle>品牌相关提示词</CardTitle>
          </CardHeader>
          <CardContent>
            {/* 分类筛选 */}
            <div className="mb-4 flex gap-2 flex-wrap">
              <Button
                size="sm"
                variant={selectedCategory === '' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('')}
              >
                全部
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat}
                  size="sm"
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {promptsUtils.formatCategory(cat)}
                </Button>
              ))}
            </div>

            {brandLoading ? (
              <div className="h-40 bg-gray-100 animate-pulse rounded"></div>
            ) : brandPrompts && brandPrompts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {brandPrompts.slice(0, 6).map(prompt => (
                  <div key={prompt.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-800 mb-2 line-clamp-2">{prompt.prompt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {promptsUtils.formatCategory(prompt.category)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {prompt.is_public ? '公开' : '私有'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                暂无品牌相关提示词
              </p>
            )}
          </CardContent>
        </Card>

        {/* 所有提示词列表 */}
        <Card>
          <CardHeader>
            <CardTitle>所有提示词</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-gray-100 animate-pulse rounded"></div>
                ))}
              </div>
            ) : error ? (
              <div className="text-red-500 text-center py-8">
                加载失败: {error}
              </div>
            ) : prompts && prompts.length > 0 ? (
              <>
                <div className="space-y-3">
                  {prompts.map(prompt => (
                    <div key={prompt.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 line-clamp-1">{prompt.prompt}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs text-gray-500">
                            {promptsUtils.formatCategory(prompt.category)}
                          </span>
                          <span className="text-xs text-gray-500">
                            创建于: {new Date(prompt.created_at).toLocaleDateString('zh-CN')}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">编辑</Button>
                        <Button size="sm" variant="outline" className="text-red-600">删除</Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 分页 */}
                {pagination && pagination.total_pages > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => changePage(pagination.current_page - 1)}
                      disabled={pagination.current_page === 1}
                    >
                      上一页
                    </Button>
                    <span className="flex items-center px-4 text-sm">
                      第 {pagination.current_page} / {pagination.total_pages} 页
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => changePage(pagination.current_page + 1)}
                      disabled={pagination.current_page === pagination.total_pages}
                    >
                      下一页
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-500 text-center py-8">
                暂无提示词数据
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 