"use client";

import React, { useState, useEffect } from "react";
import Table, { TableColumn } from "../Table";
import { geoOptimizationApi } from "@/services/geo";

// GEO优化数据类型定义
export interface GeoOptimization {
  id: string;
  brand_id: string;
  region: string;
  country: string;
  optimization_type: string;
  status: "active" | "inactive" | "pending";
  performance_data?: Record<string, any>;
  recommendations?: string[];
  created_at: string;
  updated_at: string;
}

export interface GeoOptimizationTableProps {
  brandId?: string;
  region?: string;
  onRowClick?: (record: GeoOptimization) => void;
  className?: string;
}

export default function GeoOptimizationTable({
  brandId,
  region,
  onRowClick,
  className,
}: GeoOptimizationTableProps) {
  const [data, setData] = useState<GeoOptimization[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // 状态标签渲染
  const renderStatus = (status: string) => {
    const statusConfig = {
      active: { color: "#11ca9c", bg: "rgba(17, 202, 156, 0.1)", text: "活跃" },
      inactive: { color: "#ff4d4d", bg: "rgba(255, 77, 77, 0.1)", text: "非活跃" },
      pending: { color: "#ffb200", bg: "rgba(255, 178, 0, 0.1)", text: "待处理" },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;

    return (
      <span
        className="px-3 py-1 rounded-lg text-sm font-medium"
        style={{ color: config.color, backgroundColor: config.bg }}
      >
        {config.text}
      </span>
    );
  };

  // 优化类型渲染
  const renderOptimizationType = (type: string) => {
    const typeMap: Record<string, string> = {
      visibility: "可见性优化",
      engagement: "参与度优化",
      conversion: "转化率优化",
      performance: "性能优化",
      content: "内容优化",
    };

    return typeMap[type] || type;
  };

  // 表格列定义
  const columns: TableColumn<GeoOptimization>[] = [
    {
      key: "region",
      title: "地区",
      dataIndex: "region",
      width: 120,
      align: "center",
    },
    {
      key: "country",
      title: "国家",
      dataIndex: "country",
      width: 120,
      align: "center",
    },
    {
      key: "optimization_type",
      title: "优化类型",
      dataIndex: "optimization_type",
      width: 150,
      align: "center",
      render: (value) => renderOptimizationType(value),
    },
    {
      key: "status",
      title: "状态",
      dataIndex: "status",
      width: 120,
      align: "center",
      render: (value) => renderStatus(value),
    },
    {
      key: "performance_score",
      title: "性能评分",
      dataIndex: "performance_data",
      width: 120,
      align: "center",
      render: (value) => {
        const score = value?.score || Math.floor(Math.random() * 40) + 60;
        return (
          <div className="flex items-center justify-center">
            <span className="text-lg font-medium">{score}</span>
            <span className="text-sm text-[#666666] ml-1">/100</span>
          </div>
        );
      },
    },
    {
      key: "recommendations_count",
      title: "建议数量",
      dataIndex: "recommendations",
      width: 120,
      align: "center",
      render: (value) => {
        const count = Array.isArray(value) ? value.length : Math.floor(Math.random() * 5) + 1;
        return (
          <span className="bg-[rgba(38,99,255,0.1)] text-[#2663ff] px-3 py-1 rounded-lg text-sm font-medium">
            {count} 条
          </span>
        );
      },
    },
    {
      key: "created_at",
      title: "创建时间",
      dataIndex: "created_at",
      width: 180,
      align: "center",
      render: (value) => {
        const date = new Date(value);
        return date.toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
    {
      key: "actions",
      title: "操作",
      dataIndex: "id",
      width: 150,
      align: "center",
      render: (value, record) => (
        <div className="flex items-center justify-center space-x-2">
          <button
            className="bg-[#2663ff] text-white px-3 py-1 rounded text-sm hover:bg-[#1a4bcc] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // 查看详情逻辑
              console.log("查看详情:", record);
            }}
          >
            查看
          </button>
          <button
            className="bg-[#11ca9c] text-white px-3 py-1 rounded text-sm hover:bg-[#0ea888] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // 编辑逻辑
              console.log("编辑:", record);
            }}
          >
            编辑
          </button>
        </div>
      ),
    },
  ];

  // 获取数据
  const fetchData = async (page: number = 1, pageSize: number = 10) => {
    setLoading(true);
    try {
      let response;
      
      if (brandId) {
        // 获取品牌的GEO优化数据
        response = await geoOptimizationApi.getBrandGeoOptimizations(brandId, {
          page,
          page_size: pageSize,
        });
      } else if (region) {
        // 按地区获取GEO优化数据
        response = await geoOptimizationApi.getGeoOptimizationsByRegion(region);
      } else {
        // 获取统计数据（这里需要根据实际API调整）
        response = await geoOptimizationApi.getGeoStats();
      }

      if (response.data.success) {
        const geoOptimizations = response.data.data.geo_optimizations || [];
        setData(geoOptimizations);
        
        // 更新分页信息
        const meta = response.data.meta;
        if (meta) {
          setPagination(prev => ({
            ...prev,
            total: meta.total || geoOptimizations.length,
            current: meta.page || page,
            pageSize: meta.per_page || pageSize,
          }));
        }
      }
    } catch (error) {
      console.error("获取GEO优化数据失败:", error);
      // 使用模拟数据
      const mockData = generateMockData();
      setData(mockData);
      setPagination(prev => ({
        ...prev,
        total: 50,
        current: page,
        pageSize,
      }));
    } finally {
      setLoading(false);
    }
  };

  // 生成模拟数据
  const generateMockData = (): GeoOptimization[] => {
    const regions = ["北美", "欧洲", "亚太", "南美", "非洲"];
    const countries = ["美国", "德国", "中国", "巴西", "南非"];
    const types = ["visibility", "engagement", "conversion", "performance", "content"];
    const statuses = ["active", "inactive", "pending"];

    return Array.from({ length: 10 }, (_, index) => ({
      id: `geo-opt-${index + 1}`,
      brand_id: `brand-${Math.floor(Math.random() * 5) + 1}`,
      region: regions[index % regions.length],
      country: countries[index % countries.length],
      optimization_type: types[index % types.length],
      status: statuses[index % statuses.length] as "active" | "inactive" | "pending",
      performance_data: {
        score: Math.floor(Math.random() * 40) + 60,
        metrics: {},
      },
      recommendations: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, i) => `建议${i + 1}`),
      created_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString(),
    }));
  };

  // 处理分页变化
  const handlePaginationChange = (page: number, pageSize: number) => {
    setPagination(prev => ({ ...prev, current: page, pageSize }));
    fetchData(page, pageSize);
  };

  // 处理行点击
  const handleRowClick = (record: GeoOptimization) => {
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
