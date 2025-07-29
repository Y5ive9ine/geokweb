"use client";

import { useState, useEffect } from "react";
import {
  useReferences,
  useBrandReferences,
  useTopReferences,
  useReference,
} from "@/hooks/useReferences";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { referencesUtils } from "@/services/references";
import { authUtils } from "@/services/auth";

export function ReferencesContent() {
  const [currentBrandId, setCurrentBrandId] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const userInfo = authUtils.getUserInfo();
    if (userInfo?.current_brand_id) {
      setCurrentBrandId(userInfo.current_brand_id);
    } else {
      setCurrentBrandId("4fc86ecb-8e0e-476b-8826-bf4dc95fce0d");
    }
  }, []);

  const { references, pagination, loading, error, changePage, filter } =
    useReferences({ page_size: 10 });
  const { references: brandReferences, loading: brandLoading } =
    useBrandReferences(currentBrandId, selectedCategory);
  const { references: topReferences, loading: topLoading } =
    useTopReferences(10);
  const { deleteReference } = useReference();

  const handleDeleteReference = async (id: string) => {
    if (confirm("确定要删除这个引用吗？")) {
      try {
        await deleteReference(id);
        // 刷新列表
        filter();
      } catch (error) {
        console.error("删除失败:", error);
      }
    }
  };

  // 按域名分组引用
  const groupedByDomain = references.reduce((acc, ref) => {
    const domain = referencesUtils.extractDomain(ref.url);
    if (!acc[domain]) {
      acc[domain] = [];
    }
    acc[domain].push(ref);
    return acc;
  }, {} as Record<string, typeof references>);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">引用管理</h1>

      <div className="space-y-6">
        {/* 统计概览 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">
                {pagination?.total_items || 0}
              </div>
              <p className="text-xs text-gray-500 mt-1">总引用数</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">
                {Object.keys(groupedByDomain).length}
              </div>
              <p className="text-xs text-gray-500 mt-1">引用域名</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600">
                {brandReferences?.length || 0}
              </div>
              <p className="text-xs text-gray-500 mt-1">品牌相关</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600">
                {topReferences?.length || 0}
              </div>
              <p className="text-xs text-gray-500 mt-1">热门引用</p>
            </CardContent>
          </Card>
        </div>

        {/* 热门引用 */}
        <Card>
          <CardHeader>
            <CardTitle>热门引用</CardTitle>
          </CardHeader>
          <CardContent>
            {topLoading ? (
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-16 bg-gray-100 animate-pulse rounded"
                  ></div>
                ))}
              </div>
            ) : topReferences && topReferences.length > 0 ? (
              <div className="space-y-3">
                {topReferences.slice(0, 5).map((ref, index) => (
                  <div
                    key={ref.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">
                          #{index + 1}
                        </span>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline truncate max-w-md"
                        >
                          {ref.title || ref.url}
                        </a>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-500">
                          域名: {referencesUtils.extractDomain(ref.url)}
                        </span>
                        <span className="text-xs text-gray-500">
                          引用次数: {ref.citation_count || 0}
                        </span>
                        <span className="text-xs text-gray-500">
                          质量评分:{" "}
                          {referencesUtils.calculateReferenceQualityScore(ref)}
                          /10
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">暂无热门引用</p>
            )}
          </CardContent>
        </Card>

        {/* 品牌相关引用 */}
        <Card>
          <CardHeader>
            <CardTitle>品牌相关引用</CardTitle>
          </CardHeader>
          <CardContent>
            {brandLoading ? (
              <div className="h-40 bg-gray-100 animate-pulse rounded"></div>
            ) : brandReferences && brandReferences.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {brandReferences.slice(0, 6).map((ref) => (
                  <div
                    key={ref.id}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline line-clamp-1"
                    >
                      {ref.title || ref.url}
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      {referencesUtils.extractDomain(ref.url)}
                    </p>
                    {ref.snippet && (
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                        {ref.snippet}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">暂无品牌相关引用</p>
            )}
          </CardContent>
        </Card>

        {/* 按域名分组的引用 */}
        <Card>
          <CardHeader>
            <CardTitle>所有引用（按域名分组）</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-20 bg-gray-100 animate-pulse rounded"
                  ></div>
                ))}
              </div>
            ) : error ? (
              <div className="text-red-500 text-center py-8">
                加载失败: {error}
              </div>
            ) : Object.keys(groupedByDomain).length > 0 ? (
              <>
                <div className="space-y-4">
                  {Object.entries(groupedByDomain)
                    .slice(0, 5)
                    .map(([domain, refs]) => (
                      <div key={domain} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-gray-800">
                            {domain}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {refs.length} 个引用
                          </span>
                        </div>
                        <div className="space-y-2">
                          {refs.slice(0, 3).map((ref) => (
                            <div
                              key={ref.id}
                              className="flex items-center justify-between py-2 border-t"
                            >
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:underline truncate flex-1 mr-4"
                              >
                                {ref.title || ref.url}
                              </a>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-red-600 hover:text-red-700"
                                onClick={() => handleDeleteReference(ref.id)}
                              >
                                删除
                              </Button>
                            </div>
                          ))}
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
                      disabled={
                        pagination.current_page === pagination.total_pages
                      }
                    >
                      下一页
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-500 text-center py-8">暂无引用数据</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
