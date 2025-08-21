"use client";

import { useState, useEffect } from "react";
import {
  useBrandPrompts,
  useTopPrompts,
  usePrompt,
} from "@/hooks/usePrompts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { promptsUtils } from "@/services/prompts";
import { authUtils } from "@/services/auth";
import { brandApi } from "@/services/brand";
import { Brand } from "@/lib/types";
import { BrandSelector } from "./BrandSelector";

export function TipsContent() {
  const [currentBrandId, setCurrentBrandId] = useState<string>("");
  const [currentBrand, setCurrentBrand] = useState<Brand | null>(null);
  const [availableBrands, setAvailableBrands] = useState<Brand[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // 获取品牌ID
  useEffect(() => {
    const userInfo = authUtils.getUserInfo();
    if (userInfo?.current_brand_id) {
      setCurrentBrandId(userInfo.current_brand_id);
    } else {
      setCurrentBrandId("");
    }
  }, []);

  // 获取可用品牌列表
  const fetchAvailableBrands = async () => {
    try {
      const response = await brandApi.list({
        page: 1,
        page_size: 10,
      });
      if (response.success && response.data) {
        let brands: Brand[] = [];
        
        if (Array.isArray(response.data)) {
          brands = response.data;
        } else if (response.data.data && Array.isArray(response.data.data)) {
          brands = response.data.data;
        }
        
        setAvailableBrands(brands);
      }
    } catch (error) {
      console.error("获取品牌列表异常:", error);
    }
  };

  // 从品牌列表中更新当前品牌信息
  const updateBrandData = (currentBrandId: string, availableBrands: Brand[]) => {
    if (currentBrandId && availableBrands.length > 0) {
      const currentBrandInfo = availableBrands.find(
        (brand) => brand.id === currentBrandId
      );
      if (currentBrandInfo) {
        setCurrentBrand(currentBrandInfo);
      }
    }
  };

  // 获取品牌列表
  useEffect(() => {
    if (currentBrandId) {
      fetchAvailableBrands();
    }
  }, [currentBrandId]);

  // 当品牌ID或品牌列表变化时更新当前品牌
  useEffect(() => {
    updateBrandData(currentBrandId, availableBrands);
  }, [currentBrandId, availableBrands]);

  const { prompts: brandPrompts, loading: brandLoading } = useBrandPrompts(
    currentBrandId,
    selectedCategory
  );
  const { prompts: topPrompts, loading: topLoading } = useTopPrompts(10);
  const { createPrompt } = usePrompt();
  
  // 所有提示词部分复用品牌相关提示词的数据
  const { prompts: allPrompts, loading: allLoading } = useBrandPrompts(
    currentBrandId,
    ""
  );

  const handleCreatePrompt = async () => {
    if (!currentBrandId) {
      console.error("请先选择品牌");
      return;
    }
    
    try {
      const newPrompt = await createPrompt({
        brand_id: currentBrandId,
        prompt: "新的提示词内容",
        category: "general",
        is_public: true,
        metadata: {},
      });
      console.log("创建成功:", newPrompt);
      // TODO: 刷新列表
    } catch (error) {
      console.error("创建失败:", error);
    }
  };

  const categories = ["general", "technical", "marketing", "sales", "support"];

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">提示词管理</h1>
        <div className="flex items-center gap-4">
          <BrandSelector value={currentBrandId} onChange={setCurrentBrandId} />
          <Button
            onClick={handleCreatePrompt}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            创建新提示词
          </Button>
        </div>
      </div>

      {!currentBrandId ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">请先选择一个品牌来查看提示词</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* 热门提示词 */}
          <Card>
          <CardHeader>
            <CardTitle>热门提示词</CardTitle>
          </CardHeader>
          <CardContent>
            {topLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-20 bg-gray-100 animate-pulse rounded"
                  ></div>
                ))}
              </div>
            ) : topPrompts && topPrompts.length > 0 ? (
              <div className="space-y-4">
                {topPrompts.map((prompt, index) => (
                  <div key={prompt.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800">
                        #{prompt.ranking || index + 1}
                      </h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        {prompt.ranking_tier || prompt.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {prompt.content || prompt.prompt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>点击量: {prompt.click_count || 0}</span>
                      <span className="mx-2">•</span>
                      <span>
                        评分: {prompt.score || 0}%
                      </span>
                      <span className="mx-2">•</span>
                      <span>
                        份额: {prompt.share_rate || 0}%
                      </span>
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
                variant={selectedCategory === "" ? "default" : "outline"}
                onClick={() => setSelectedCategory("")}
              >
                全部
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={selectedCategory === cat ? "default" : "outline"}
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
                {brandPrompts.slice(0, 6).map((prompt) => (
                  <div
                    key={prompt.id}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <p className="text-sm text-gray-800 mb-2 line-clamp-2">
                      {prompt.content || prompt.prompt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {prompt.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        评分: {prompt.score || 0}%
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
            {allLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-16 bg-gray-100 animate-pulse rounded"
                  ></div>
                ))}
              </div>
            ) : allPrompts && allPrompts.length > 0 ? (
              <>
                <div className="space-y-3">
                  {allPrompts.map((prompt) => (
                    <div
                      key={prompt.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 line-clamp-1">
                          {prompt.content || prompt.prompt}
                        </p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs text-gray-500">
                            {prompt.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            评分: {prompt.score || 0}%
                          </span>
                          <span className="text-xs text-gray-500">
                            点击: {prompt.click_count || 0}
                          </span>
                          <span className="text-xs text-gray-500">
                            创建于:{" "}
                            {new Date(prompt.created_at).toLocaleDateString(
                              "zh-CN"
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          编辑
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600"
                        >
                          删除
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-center py-8">暂无提示词数据</p>
            )}
          </CardContent>
        </Card>
      </div>
      )}
    </div>
  );
}