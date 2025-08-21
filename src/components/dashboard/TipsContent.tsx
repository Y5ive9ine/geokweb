"use client";

import React, { useState, useEffect } from "react";
import { useBrandPrompts } from "@/hooks/usePrompts";
import { authUtils } from "@/services/auth";
import { brandApi } from "@/services/brand";
import { Brand } from "@/lib/types";
import { Prompt } from "@/services/prompts";
import {
  DownloadIcon,
  ChevronDownIcon,
} from "lucide-react";
import { PromptsSearchTable } from "./PromptsSearchTable";
import { KeywordCloudModal } from "./KeywordCloudModal";

export function TipsContent() {
  const [currentBrandId, setCurrentBrandId] = useState<string>("");
  const [currentBrand, setCurrentBrand] = useState<Brand | null>(null);
  const [availableBrands, setAvailableBrands] = useState<Brand[]>([]);
  const [days, setDays] = useState(7);
  const [selectedBrandId, setSelectedBrandId] = useState<string>("");
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showKeywordCloud, setShowKeywordCloud] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  // 获取品牌ID
  useEffect(() => {
    const userInfo = authUtils.getUserInfo();
    if (userInfo?.current_brand_id) {
      setCurrentBrandId(userInfo.current_brand_id);
      setSelectedBrandId(userInfo.current_brand_id);
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
  const updateBrandData = (brandId: string, availableBrands: Brand[]) => {
    if (brandId && availableBrands.length > 0) {
      const brandInfo = availableBrands.find(
        (brand) => brand.id === brandId
      );
      if (brandInfo) {
        setCurrentBrand(brandInfo);
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
    updateBrandData(selectedBrandId, availableBrands);
  }, [selectedBrandId, availableBrands]);

  // 使用 useBrandPrompts hook 获取数据，category 参数留空以获取所有提示词
  const { prompts, loading, error } = useBrandPrompts(selectedBrandId, "");

  // 处理品牌切换
  const handleBrandChange = async (brandId: string) => {
    setSelectedBrandId(brandId);
    setShowBrandDropdown(false);
    updateBrandData(brandId, availableBrands);
  };

  // 处理提示词点击
  const handlePromptClick = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
    setShowKeywordCloud(true);
  };

  // 处理关闭词云弹窗
  const handleCloseKeywordCloud = () => {
    setShowKeywordCloud(false);
    setSelectedPrompt(null);
  };

  return (
    <div className="flex-1 overflow-auto bg-white">
      {/* 搜索栏 - 复用 references 页面的样式 */}
      <div className="p-6 border-b border-gray-200">
        <div className="bg-white rounded-lg border border-gray-300 p-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">品牌</h2>
              <p className="text-gray-600 mt-1">
                搜索内容"{currentBrand?.name || "加载中..."}"在人工智能中出现频率
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium">
                查询
              </button>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <DownloadIcon className="w-5 h-5" />
                <span>下载/导出</span>
              </button>
            </div>
          </div>

          {/* 筛选选项 */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
              <span className="text-gray-700">最近{days}日</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </div>
            <span className="text-gray-500">VS</span>
            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
              <span className="text-gray-700">前一个7日</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
              <span className="text-gray-600">排序方式：主题</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
              <span className="text-gray-600">区域选择</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
              <span className="text-gray-600">话题筛选</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2">
              <span className="text-gray-600">AI平台选择</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </div>

            {/* 品牌选择器 - 移到同一行 */}
            {availableBrands.length > 1 && (
              <div className="relative">
                <button
                  onClick={() => setShowBrandDropdown(!showBrandDropdown)}
                  className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-50"
                >
                  <span className="text-gray-600">
                    当前品牌：{currentBrand?.name || "选择品牌"}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                </button>
                
                {showBrandDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {availableBrands.map((brand) => (
                      <button
                        key={brand.id}
                        onClick={() => handleBrandChange(brand.id)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                          brand.id === selectedBrandId ? 'bg-blue-50 text-blue-600' : ''
                        }`}
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 数据表格 */}
      <div className="px-6 py-4">
        <PromptsSearchTable 
          prompts={prompts} 
          loading={loading} 
          error={error} 
          onPromptClick={handlePromptClick}
        />
      </div>

      {/* 词云弹窗 */}
      <KeywordCloudModal 
        isOpen={showKeywordCloud}
        onClose={handleCloseKeywordCloud}
        prompt={selectedPrompt}
      />
    </div>
  );
}