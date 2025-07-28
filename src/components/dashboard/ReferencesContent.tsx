'use client'

import { useState } from 'react'
import { useReferences, useBrandReferences, useTopReferences, useReference } from '@/hooks/useReferences'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { referencesUtils } from '@/services/references'

export function ReferencesContent() {
  // 假设当前品牌ID，实际应该从用户上下文或路由参数获取
  const [currentBrandId] = useState('4fc86ecb-8e0e-476b-8826-bf4dc95fce0d')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  
  // 使用References相关的hooks
  const { references, pagination, loading, error, changePage, filter } = useReferences({ page_size: 10 })
  const { references: brandReferences, loading: brandLoading } = useBrandReferences(currentBrandId, selectedCategory)
  const { references: topReferences, loading: topLoading } = useTopReferences(10)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">引用管理</h1>

      {/* 热门引用 */}
      <Card>
        <CardHeader>
          <CardTitle>热门引用</CardTitle>
        </CardHeader>
        <CardContent>
          {topLoading ? (
            <div className="animate-pulse">加载中...</div>
          ) : topReferences.length > 0 ? (
            <div className="space-y-3">
              {topReferences.map((reference, index) => (
                <div key={reference.id || index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-600 hover:underline cursor-pointer">
                        {reference.title || '未命名引用'}
                      </h3>
                      {reference.description && (
                        <p className="text-sm text-gray-600 mt-1">{reference.description}</p>
                      )}
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          {reference.domain || referencesUtils.extractDomain(reference.url || '')}
                        </span>
                        {reference.relevance_score && (
                          <span>相关性: {(reference.relevance_score * 100).toFixed(0)}%</span>
                        )}
                        {reference.position && (
                          <span>位置: #{reference.position}</span>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        referencesUtils.isTrustedDomain(reference.domain || '') 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {referencesUtils.formatSourceType(reference.source_type || 'other')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500">暂无热门引用</div>
          )}
        </CardContent>
      </Card>

      {/* 品牌引用 */}
      <Card>
        <CardHeader>
          <CardTitle>品牌相关引用</CardTitle>
        </CardHeader>
        <CardContent>
          {brandLoading ? (
            <div className="animate-pulse">加载中...</div>
          ) : brandReferences.length > 0 ? (
            <>
              {/* 引用统计 */}
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">总引用数</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {brandReferences.length}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">平均相关性</div>
                    <div className="text-2xl font-bold text-green-600">
                      {(referencesUtils.getReferencesStats(brandReferences).averageRelevance * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">域名覆盖</div>
                    <div className="text-2xl font-bold text-purple-600">
                      {Object.keys(referencesUtils.groupReferencesByDomain(brandReferences)).length}
                    </div>
                  </div>
                </div>
              </div>

              {/* 引用列表 */}
              <div className="space-y-3">
                {brandReferences.map((reference, index) => (
                  <div key={reference.id || index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{reference.title || '未命名引用'}</h3>
                        {reference.url && (
                          <a 
                            href={reference.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            {reference.url}
                          </a>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        质量评分: {referencesUtils.calculateReferenceQualityScore(reference)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-gray-500">暂无品牌引用</div>
          )}
        </CardContent>
      </Card>

      {/* 所有引用列表 */}
      <Card>
        <CardHeader>
          <CardTitle>所有引用</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="animate-pulse">加载中...</div>
          ) : error ? (
            <div className="text-red-500">错误: {error}</div>
          ) : references.length > 0 ? (
            <>
              {/* 按域名分组的统计 */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">热门域名</h3>
                <div className="flex flex-wrap gap-2">
                  {referencesUtils.getReferencesStats(references).topDomains.map((item) => (
                    <div 
                      key={item.domain}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      <span className="font-medium">{item.domain}</span>
                      <span className="text-gray-500 ml-1">({item.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 引用列表 */}
              <div className="space-y-3">
                {references.map((reference, index) => (
                  <div key={reference.id || index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{reference.title || '未命名引用'}</h3>
                        {reference.description && (
                          <p className="text-sm text-gray-600 mt-1">{reference.description}</p>
                        )}
                        {reference.url && (
                          <div className="mt-2">
                            <a 
                              href={reference.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              查看原文
                            </a>
                          </div>
                        )}
                      </div>
                      {reference.extracted_date && (
                        <span className="text-xs text-gray-500">
                          提取于: {new Date(reference.extracted_date).toLocaleDateString('zh-CN')}
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
            <div className="text-gray-500">暂无引用数据</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 