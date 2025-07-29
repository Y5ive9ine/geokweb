"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopNavigation } from "@/components/dashboard/TopNavigation";
import { useSidebarState } from "@/hooks/useSidebarState";
import { useBrandReferences } from "@/hooks/useReferences";
import { authUtils } from "@/services/auth";
import { referencesUtils } from "@/services/references";
import {
  DownloadIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  LoaderIcon,
} from "lucide-react";
import Image from "next/image";

export default function ReferencesPage() {
  const [activeTab, setActiveTab] = useState("references");
  const [currentBrandId, setCurrentBrandId] = useState<string>("");
  const [days, setDays] = useState(7);

  const {
    sidebarCollapsed,
    mobileSidebarOpen,
    toggleSidebar,
    toggleMobileSidebar,
    setMobileSidebarOpen,
  } = useSidebarState();

  // 获取品牌ID
  useEffect(() => {
    const userInfo = authUtils.getUserInfo();
    if (userInfo?.brand_id) {
      setCurrentBrandId(userInfo.brand_id);
    } else {
      // 使用默认品牌ID
      setCurrentBrandId("4fc86ecb-8e0e-476b-8826-bf4dc95fce0d");
    }
  }, []);

  // 使用真实的API获取品牌引用数据
  const { references, loading, error, refresh } = useBrandReferences(
    currentBrandId,
    days
  );

  // 处理平台图标显示
  const getPlatformIcon = (domain: string) => {
    const lowerDomain = domain.toLowerCase();
    if (lowerDomain.includes("weibo")) return "weibo";
    if (lowerDomain.includes("toutiao")) return "toutiao";
    if (lowerDomain.includes("smzdm")) return "smzdm";
    if (lowerDomain.includes("sohu")) return "sohu";
    return "other";
  };

  // 格式化引用数据以匹配UI需求
  const formatReferencesData = () => {
    if (!references || !Array.isArray(references) || references.length === 0)
      return [];

    return references
      .map((ref, index) => {
        // 确保ref是一个对象而不是错误响应
        if (!ref || typeof ref !== "object") {
          console.warn("Invalid reference data:", ref);
          return null;
        }

        return {
          id: String(ref.id || `ref-${index}`),
          rank: index + 1,
          domain: String(ref.url || ref.domain || ""),
          platform: getPlatformIcon(String(ref.domain || ref.url || "")),
          category: referencesUtils.formatSourceType(
            String(ref.source_type || "other")
          ),
          count: Math.floor(Math.random() * 5000) + 1000, // 临时数据，等待后端提供
          countChange: Math.floor(Math.random() * 1000) - 500,
          share: Math.floor(Math.random() * 10) + 1,
          shareChange: Math.floor(Math.random() * 4) - 2,
          title: String(ref.title || ""),
          description: String(ref.description || ""),
          relevanceScore: Number(ref.relevance_score || 0),
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null); // 类型安全的过滤
  };

  const referencesData = formatReferencesData();

  return (
    <div className="min-h-screen bg-gray-50 font-['PingFang_SC'] relative">
      {/* 移动端遮罩 */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <div className="flex h-screen">
        {/* 左侧边栏 */}
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
          currentPage="home"
        />

        {/* 主内容区 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* 顶部导航 - 使用 TopNavigation 组件 */}
          <TopNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onMenuToggle={toggleMobileSidebar}
            onSidebarToggle={toggleSidebar}
            currentPage="home"
          />

          {/* 主体内容 */}
          <div className="flex-1 overflow-auto bg-white">
            {/* 搜索栏 */}
            <div className="p-6 border-b border-gray-200">
              <div className="bg-white rounded-lg border border-gray-300 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">品牌</h2>
                    <p className="text-gray-600 mt-1">
                      搜索内容XXXX在人工智能中出现频率
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
                </div>
              </div>
            </div>

            {/* 数据表格 */}
            <div className="p-6">
              <div className="bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        排名
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        域名
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        类别
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        数量
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                        分享
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <LoaderIcon className="w-5 h-5 animate-spin text-blue-600" />
                            <span className="text-gray-600">加载中...</span>
                          </div>
                        </td>
                      </tr>
                    ) : error || referencesData.length === 0 ? (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-6 py-12 text-center text-gray-500"
                        >
                          暂无引用数据
                        </td>
                      </tr>
                    ) : (
                      referencesData.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 text-gray-900">
                            {item.rank}.
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              {/* 平台图标 */}
                              {item.platform === "weibo" && (
                                <div className="w-7 h-7 bg-red-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    微
                                  </span>
                                </div>
                              )}
                              {item.platform === "toutiao" && (
                                <div className="w-7 h-7 rounded overflow-hidden">
                                  <div className="w-full h-full bg-red-600 flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                      头
                                    </span>
                                  </div>
                                </div>
                              )}
                              {item.platform === "smzdm" && (
                                <div className="w-7 h-7 bg-red-600 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    值
                                  </span>
                                </div>
                              )}
                              {item.platform === "sohu" && (
                                <div className="w-7 h-7 bg-orange-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    搜
                                  </span>
                                </div>
                              )}
                              {item.platform === "other" && (
                                <div className="w-7 h-7 bg-gray-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    其
                                  </span>
                                </div>
                              )}
                              <a
                                href={item.domain}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 flex items-center space-x-1"
                              >
                                <span className="text-sm">{item.domain}</span>
                                <ExternalLinkIcon className="w-3 h-3" />
                              </a>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg
                                  className="w-3 h-3 text-blue-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium">
                                {item.category}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-900">
                                {item.count >= 1000
                                  ? `${(item.count / 1000).toFixed(1)}k`
                                  : item.count}
                              </span>
                              <span
                                className={`text-sm ${
                                  item.countChange > 0
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {item.countChange > 0 ? "+" : ""}
                                {item.countChange}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-900">
                                {item.share}%
                              </span>
                              <span
                                className={`text-sm ${
                                  item.shareChange > 0
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {item.shareChange > 0 ? "+" : ""}
                                {item.shareChange}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
