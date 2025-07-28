'use client'

import { useState } from 'react'
import { usePrompts, useBrandPrompts, useTopPrompts, usePrompt } from '@/hooks/usePrompts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { promptsUtils } from '@/services/prompts'

export function TipsContent() {
  // 假设当前品牌ID，实际应该从用户上下文或路由参数获取
  const [currentBrandId] = useState('4fc86ecb-8e0e-476b-8826-bf4dc95fce0d')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  
  // 使用Prompts相关的hooks
  const { prompts, pagination, loading, error, changePage, filter } = usePrompts({ page_size: 10 })
  const { prompts: brandPrompts, loading: brandLoading } = useBrandPrompts(currentBrandId, selectedCategory)
  const { prompts: topPrompts, loading: topLoading } = useTopPrompts(5)
  const { createPrompt } = usePrompt()

  // 处理创建新提示词
  const handleCreatePrompt = async () => {
    try {
      await createPrompt({
        brand_id: currentBrandId,
        title: '新的提示词标题',
        content: '这是一个示例提示词内容',
        category: 'general',
        description: '这是提示词的描述'
      })
      // 刷新列表
      filter({})
    } catch (error) {
      console.error('创建提示词失败:', error)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">提示词管理</h1>
        <Button onClick={handleCreatePrompt} className="bg-blue-600 text-white">
          创建新提示词
        </Button>
      </div>

      {/* 热门提示词 */}
      <Card>
        <CardHeader>
          <CardTitle>热门提示词</CardTitle>
        </CardHeader>
        <CardContent>
          {topLoading ? (
            <div className="animate-pulse">加载中...</div>
          ) : topPrompts.length > 0 ? (
            <div className="space-y-3">
              {topPrompts.map((prompt, index) => (
                <div key={prompt.id || index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold">{prompt.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {promptsUtils.generatePromptPreview(prompt.content || '', 100)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                          {promptsUtils.formatCategory(prompt.category || 'general')}
                        </span>
                        {prompt.usage_count && (
                          <span className="text-xs text-gray-500">
                            使用次数: {prompt.usage_count}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-700">
                        质量评分
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {promptsUtils.calculatePromptQualityScore(prompt)}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500">暂无热门提示词</div>
          )}
        </CardContent>
      </Card>

      {/* 品牌提示词 */}
      <Card>
        <CardHeader>
          <CardTitle>品牌专属提示词</CardTitle>
        </CardHeader>
        <CardContent>
          {/* 分类筛选 */}
          <div className="mb-4 flex gap-2">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('')}
            >
              全部
            </Button>
            {Object.entries(promptsUtils.PROMPT_CATEGORIES).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(key)}
              >
                {label}
              </Button>
            ))}
          </div>

          {brandLoading ? (
            <div className="animate-pulse">加载中...</div>
          ) : brandPrompts.length > 0 ? (
            <div className="space-y-3">
              {brandPrompts.map((prompt, index) => (
                <div key={prompt.id || index} className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold">{prompt.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{prompt.description}</p>
                  <div className="mt-2">
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      {promptsUtils.formatCategory(prompt.category || 'general')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500">暂无品牌提示词</div>
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
            <div className="animate-pulse">加载中...</div>
          ) : error ? (
            <div className="text-red-500">错误: {error}</div>
          ) : prompts.length > 0 ? (
            <>
              <div className="space-y-3">
                {prompts.map((prompt, index) => (
                  <div key={prompt.id || index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{prompt.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {promptsUtils.generatePromptPreview(prompt.content || '', 150)}
                        </p>
                      </div>
                      {prompt.created_at && (
                        <span className="text-xs text-gray-500">
                          {new Date(prompt.created_at).toLocaleDateString('zh-CN')}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* 分页 */}
              {pagination.total_pages > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => changePage(pagination.current_page - 1)}
                    disabled={pagination.current_page === 1}
                  >
                    上一页
                  </Button>
                  <span className="px-4 py-2 text-sm">
                    第 {pagination.current_page} / {pagination.total_pages} 页
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => changePage(pagination.current_page + 1)}
                    disabled={pagination.current_page === pagination.total_pages}
                  >
                    下一页
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-gray-500">暂无提示词</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 