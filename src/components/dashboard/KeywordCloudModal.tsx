"use client";

import React, { useEffect, useState } from "react";
import { Prompt } from "@/services/prompts";
import { X } from "lucide-react";
import { CSSWordCloud } from "./CSSWordCloud";

interface KeywordCloudModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: Prompt | null;
}

export function KeywordCloudModal({
  isOpen,
  onClose,
  prompt,
}: KeywordCloudModalProps) {
  const [wordCloudData, setWordCloudData] = useState<
    Array<{ word: string; count: number }>
  >([]);
  const [sortedKeywords, setSortedKeywords] = useState<
    Array<{ word: string; count: number; rank: number }>
  >([]);

  useEffect(() => {
    if (!isOpen || !prompt) {
      return;
    }

    // 获取原始数据 - 确保数据源正确
    const rawData = prompt.keyword_frequency || prompt.main_keywords || {};

    console.log("原始数据:", rawData);

    // 检查数据格式并正确解析
    let processedData: any[] = [];

    if (Array.isArray(rawData)) {
      // 如果是数组格式
      processedData = rawData;
    } else if (typeof rawData === "object" && rawData !== null) {
      // 如果是对象格式，转换为数组
      processedData = Object.entries(rawData).map(([word, count]) => ({
        word,
        count: typeof count === "number" ? count : parseInt(count) || 0,
      }));
    }

    console.log("处理后数据:", processedData);

    // 为词云准备数据（过滤无效数据）
    const cloudArray = processedData
      .filter((item) => item.count > 0 && item.word)
      .map((item) => ({
        word: item.word,
        count: item.count,
      }));

    // 为排行榜准备数据（排序并添加排名）
    const keywordArray = processedData
      .filter((item) => item.count > 0 && item.word)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
      .map((item, index) => ({
        word: item.word,
        count: item.count,
        rank: index + 1,
      }));

    console.log("词云数据:", cloudArray);
    console.log("排行榜数据:", keywordArray);

    setWordCloudData(cloudArray);
    setSortedKeywords(keywordArray);
  }, [isOpen, prompt]);

  if (!isOpen || !prompt) return null;

  // 格式化数字显示
  const formatCount = (count: number) => {
    // 所有数字统一加上"万+"
    return `${count}万+`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 双层遮罩效果 */}
      {/* 第一层：模糊背景 */}
      <div
        className="absolute inset-0 bg-white/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 第二层：渐变遮罩增强对比度 */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-900/20 to-gray-900/10"
        onClick={onClose}
      />

      {/* 弹窗内容 - 增强阴影效果 */}
      <div
        className="relative bg-white rounded-lg shadow-2xl w-[900px] h-[600px] p-8 ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* 主体内容 */}
        <div className="flex h-full pt-12">
          {/* 左侧词云 - 55% */}
          <div className="w-[55%] pr-4 flex flex-col">
            <div className="flex items-center justify-between mb-4 h-6">
              <h3 className="text-lg font-bold text-gray-900">关键词频率</h3>
              {/* 图例 */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: "17.463px",
                      height: "17.208px",
                      borderRadius: "2px",
                      background: "#2663FF",
                    }}
                  />
                  <span className="text-sm text-gray-600">70+</span>
                </div>
                <div className="flex items-center gap-1">
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: "17.463px",
                      height: "17.208px",
                      borderRadius: "2px",
                      background: "#FF4D4D",
                    }}
                  />
                  <span className="text-sm text-gray-600">50+</span>
                </div>
                <div className="flex items-center gap-1">
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: "17.463px",
                      height: "17.208px",
                      borderRadius: "2px",
                      background: "#FA8919",
                    }}
                  />
                  <span className="text-sm text-gray-600">35+</span>
                </div>
                <div className="flex items-center gap-1">
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: "17.463px",
                      height: "17.208px",
                      borderRadius: "2px",
                      background: "#11CA9C",
                    }}
                  />
                  <span className="text-sm text-gray-600">15+</span>
                </div>
              </div>
            </div>
            <div className="relative flex-1 border border-gray-200 rounded-lg bg-white overflow-hidden">
              <CSSWordCloud data={wordCloudData} />
            </div>
          </div>

          {/* 右侧列表 - 45% */}
          <div className="w-[45%] pl-4 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-4 h-6">
              主要关键词
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 p-4 flex-1 overflow-y-auto">
              {sortedKeywords.map((item, index) => (
                <div
                  key={item.word}
                  className="flex items-center justify-between h-10 mb-2 last:mb-0"
                >
                  {/* 序号和关键词 */}
                  <div className="flex items-center flex-1">
                    <span className="text-base text-gray-700">
                      {index + 1}.
                    </span>
                    <span className="ml-2 text-base text-gray-900">
                      {item.word}
                    </span>
                  </div>
                  {/* 数量 */}
                  <span className="text-base text-gray-600 ml-4">
                    {formatCount(item.count)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
