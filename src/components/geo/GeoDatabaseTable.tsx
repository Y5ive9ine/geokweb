"use client";

import React, { useState, useEffect } from "react";
import Table, { TableColumn } from "../Table";
import { geoDatabasesApi } from "@/services/geo";

// GEO搜索数据类型定义
export interface GeoSearchData {
  id: string;
  brand_id: string;
  geo_optimization_id: string;
  content_type: string;
  title: string;
  content: string;
  region: string;
  country: string;
  language: string;
  search_query: string;
  search_results?: any;
  keyword_data?: any;
  competitor_data?: any;
  relevance_score: number;
  quality_score: number;
  confidence_level: number;
  source: string;
  metadata?: any;
  tags?: any;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
  keywords?: string[]; // 添加关键词数组
  mention_rate?: number; // 添加提及率
  mention_rate_change?: number; // 添加提及率变化
  search_count?: number; // 添加搜索量
  search_count_change?: number; // 添加搜索量变化
  geo_optimization?: {
    search_volume: number;
    mention_frequency: number;
    [key: string]: any;
  };
}

export interface GeoDatabaseTableProps {
  brandId?: string;
  region?: string;
  onRowClick?: (record: GeoSearchData) => void;
  className?: string;
}

export default function GeoDatabaseTable({
  brandId,
  region,
  onRowClick,
  className,
}: GeoDatabaseTableProps) {
  const [data, setData] = useState<GeoSearchData[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // GEOK状态渲染
  const renderGeokStatus = () => {
    return (
      <div className="bg-[rgba(38,99,255,0.2)] rounded-[8px] px-3 py-1 inline-flex items-center">
        <svg
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clipPath="url(#clip0_332_2268)">
            <path
              d="M9.69145 11.4869L1.07716 7.39009C0.784128 7.27659 0.532274 7.07712 0.354673 6.81788C0.177073 6.55864 0.0820313 6.25174 0.0820312 5.9375C0.0820313 5.62325 0.177073 5.31636 0.354673 5.05711C0.532274 4.79787 0.784128 4.5984 1.07716 4.48491L9.69145 0.388056C10.1026 0.197084 10.5505 0.0981445 11.0038 0.0981445C11.4572 0.0981445 11.9051 0.197084 12.3162 0.388056L20.9305 4.48491C21.2236 4.5984 21.4754 4.79787 21.653 5.05711C21.8306 5.31636 21.9257 5.62325 21.9257 5.9375C21.9257 6.25174 21.8306 6.55864 21.653 6.81788C21.4754 7.07712 21.2236 7.27659 20.9305 7.39009L12.3162 11.4869C11.9051 11.6779 11.4572 11.7768 11.0038 11.7768C10.5505 11.7768 10.1026 11.6779 9.69145 11.4869Z"
              fill="#2663FF"
            />
            <path
              d="M11.0039 16.9662C10.3772 16.9664 9.75898 16.8225 9.19688 16.5456L0.746156 12.3475C0.594687 12.2888 0.457124 12.1992 0.34225 12.0843C0.227376 11.9695 0.137717 11.8319 0.0789981 11.6805C0.0202789 11.529 -0.00620962 11.367 0.00122396 11.2047C0.00865755 11.0424 0.0498499 10.8835 0.12217 10.738C0.194491 10.5926 0.29635 10.4638 0.421244 10.3599C0.546137 10.256 0.69132 10.1793 0.84752 10.1347C1.00372 10.0901 1.16751 10.0786 1.32842 10.1009C1.48933 10.1231 1.64383 10.1787 1.78205 10.264L10.225 14.4621C10.4677 14.58 10.734 14.6412 11.0039 14.6412C11.2737 14.6412 11.54 14.58 11.7827 14.4621L20.2335 10.264C20.3717 10.1787 20.5262 10.1231 20.6871 10.1009C20.848 10.0786 21.0118 10.0901 21.168 10.1347C21.3242 10.1793 21.4694 10.256 21.5943 10.3599C21.7192 10.4638 21.821 10.5926 21.8933 10.738C21.9657 10.8835 22.0068 11.0424 22.0143 11.2047C22.0217 11.367 21.9952 11.529 21.9365 11.6805C21.8778 11.8319 21.7881 11.9695 21.6733 12.0843C21.5584 12.1992 21.4208 12.2888 21.2693 12.3475L12.8108 16.5456C12.2489 16.8229 11.6305 16.9669 11.0039 16.9662Z"
              fill="#2663FF"
            />
            <path
              d="M11.0039 21.9042C10.3772 21.9049 9.75884 21.7609 9.19688 21.4836L0.746156 17.2855C0.594687 17.2268 0.457124 17.1372 0.34225 17.0223C0.227376 16.9075 0.137717 16.7699 0.0789981 16.6184C0.0202789 16.467 -0.00620962 16.3049 0.00122396 16.1427C0.00865755 15.9804 0.0498499 15.8215 0.12217 15.676C0.194491 15.5305 0.29635 15.4018 0.421244 15.2979C0.546137 15.194 0.69132 15.1173 0.84752 15.0727C1.00372 15.0281 1.16751 15.0166 1.32842 15.0389C1.48933 15.0611 1.64383 15.1167 1.78205 15.202L10.225 19.4001C10.4671 19.5199 10.7337 19.5823 11.0039 19.5823C11.274 19.5823 11.5406 19.5199 11.7827 19.4001L20.2335 15.202C20.3717 15.1167 20.5262 15.0611 20.6871 15.0389C20.848 15.0166 21.0118 15.0281 21.168 15.0727C21.3242 15.1173 21.4694 15.194 21.5943 15.2979C21.7192 15.4018 21.821 15.5305 21.8933 15.676C21.9657 15.8215 22.0068 15.9804 22.0143 16.1427C22.0217 16.3049 21.9952 16.467 21.9365 16.6184C21.8778 16.7699 21.7881 16.9695 21.6733 17.0223C21.5584 17.1372 21.4208 17.2268 21.2693 17.2855L12.8108 21.4836C12.2489 21.7609 11.6305 21.9049 11.0039 21.9042Z"
              fill="#2663FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_332_2268">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-[#2663ff] text-[11px] font-medium">Earned</span>
      </div>
    );
  };

  // 表格列定义
  const columns: TableColumn<GeoSearchData>[] = [
    {
      key: "index",
      title: "序号",
      dataIndex: "id",
      width: 60,
      align: "center",
      render: (_, __, index) => (
        <span className="text-[14px] font-medium">{index + 1}.</span>
      ),
    },
    {
      key: "title",
      title: "关键词",
      dataIndex: "title",
      align: "left",
      width: 300,
      render: (value, record) => {
        if (!value) {
          return <span className="text-[#333333] text-[14px]">未知标题</span>;
        }

        // 获取关键词列表
        const keywords = record.keywords || [];

        if (keywords.length === 0) {
          return <span className="text-[#333333] text-[14px]">{value}</span>;
        }

        // 创建正则表达式来匹配所有关键词
        const keywordPattern = new RegExp(`(${keywords.join("|")})`, "gi");

        // 分割文本并高亮关键词
        const parts = value.split(keywordPattern);

        return (
          <span className="text-[#333333] text-[14px]">
            {parts.map((part: string, index: number) => {
              // 检查当前部分是否是关键词
              const isKeyword = keywords.some(
                (keyword: string) =>
                  keyword.toLowerCase() === part.toLowerCase()
              );

              return isKeyword ? (
                <span key={index} className="text-[#2663ff] font-medium">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              );
            })}
          </span>
        );
      },
    },
    {
      key: "geok",
      title: "GEOK",
      dataIndex: "status",
      width: 100,
      align: "center",
      render: () => renderGeokStatus(),
    },
    {
      key: "search_volume",
      title: "搜索量",
      dataIndex: "search_count",
      width: 100,
      align: "center",
      render: (value, record) => {
        // 使用API返回的真实搜索量数据
        const searchCount = record.search_count || value || 0;
        const searchCountChange = record.search_count_change || 0;

        const formattedVolume =
          searchCount >= 1000
            ? `${(searchCount / 1000).toFixed(1)}k`
            : searchCount.toString();

        const formattedChange =
          searchCountChange >= 1000
            ? `${(searchCountChange / 1000).toFixed(1)}k`
            : searchCountChange.toString();

        return (
          <div className="text-center flex gap-2 justify-center">
            <div className="text-[#333333] font-medium text-[14px]">
              {formattedVolume}
            </div>
            <div className="text-[12px] text-[#11ca9c]">+{formattedChange}</div>
          </div>
        );
      },
    },
    {
      key: "mention_rate",
      title: "提及率",
      dataIndex: "mention_rate",
      width: 100,
      align: "center",
      render: (value, record) => {
        // 使用API返回的真实提及率数据
        const mentionRate = record.mention_rate || value || 0;
        const mentionRateChange = record.mention_rate_change || 0;

        const formattedRate = `${(mentionRate * 100).toFixed(1)}%`;
        const formattedChange = `${(mentionRateChange * 100).toFixed(1)}%`;

        // 判断趋势方向
        const trend = mentionRateChange >= 0 ? "+" : "-";
        const trendValue =
          trend === "+" ? `+${formattedChange}` : formattedChange;

        return (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-[#333333] font-medium text-[14px]">
              {formattedRate}
            </span>
            <div className="flex items-center space-x-1">
              <span
                className={`text-[12px] ${
                  trend === "+" ? "text-[#11ca9c]" : "text-[#ff4d4d]"
                }`}
              >
                {trendValue}
              </span>
              {/* 趋势箭头 */}
              {trend === "+" ? (
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 0L10 6H0L5 0Z" fill="#11ca9c" />
                </svg>
              ) : (
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 6L0 0H10L5 6Z" fill="#ff4d4d" />
                </svg>
              )}
            </div>
          </div>
        );
      },
    },
  ];

  // 获取数据
  const fetchData = async () => {
    setLoading(true);
    console.log("fetchData called with brandId:", brandId, "region:", region);

    try {
      if (!brandId) {
        console.log("No brandId provided, showing empty data");
        setData([]);
        setPagination((prev) => ({
          ...prev,
          total: 0,
        }));
        return;
      }

      console.log("Calling getBrandGeoDatabases with brandId:", brandId);
      const response = await geoDatabasesApi.getBrandGeoDatabases(brandId);

      console.log("API response:", response);

      if (response?.success) {
        const databases = response.data.data || [];
        console.log("Setting data:", databases);
        setData(databases);
        setPagination((prev) => ({
          ...prev,
          total: databases.length,
        }));
      } else {
        console.log("API response not successful or no data");
        setData([]);
        setPagination((prev) => ({
          ...prev,
          total: 0,
        }));
      }
    } catch (error) {
      console.error("获取GEO搜索数据失败:", error);
      setData([]);
      setPagination((prev) => ({
        ...prev,
        total: 0,
      }));
    } finally {
      setLoading(false);
    }
  };

  // 处理分页变化
  const handlePaginationChange = (page: number, pageSize: number) => {
    setPagination((prev) => ({ ...prev, current: page, pageSize }));
    fetchData();
  };

  // 处理行点击
  const handleRowClick = (record: GeoSearchData) => {
    if (onRowClick) {
      onRowClick(record);
    }
  };

  // 初始化数据
  useEffect(() => {
    fetchData();
  }, [brandId, region]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey="id"
      pagination={{
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: pagination.total,
        onChange: handlePaginationChange,
      }}
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
      className={className}
    />
  );
}
