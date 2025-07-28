import React from "react";
import Pagination from "./Pagination";

export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex: string;
  width?: string | number;
  align?: "left" | "center" | "right";
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sorter?: boolean;
  fixed?: "left" | "right";
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  dataSource: T[];
  loading?: boolean;
  rowKey?: string | ((record: T) => string);
  pagination?:
    | {
        current: number;
        pageSize: number;
        total: number;
        showSizeChanger?: boolean;
        showQuickJumper?: boolean;
        onChange?: (page: number, pageSize: number) => void;
      }
    | false;
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
  size?: "small" | "middle" | "large";
  bordered?: boolean;
  className?: string;
  onRow?: (
    record: T,
    index: number
  ) => {
    onClick?: () => void;
    onDoubleClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };
}

export default function Table<T = any>({
  columns,
  dataSource,
  loading = false,
  rowKey = "id",
  pagination,
  scroll,
  size = "middle",
  bordered = true,
  className = "",
  onRow,
}: TableProps<T>) {
  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === "function") {
      return rowKey(record);
    }
    return (record as any)[rowKey] || index.toString();
  };

  const handlePaginationChange = (page: number) => {
    if (pagination && pagination.onChange) {
      pagination.onChange(page, pagination.pageSize);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 bg-white rounded-lg border border-[#cccccc]">
        <div className="text-[#666666] text-lg">加载中...</div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-lg border border-[#cccccc] overflow-hidden ${className}`}
    >
      {/* 表格容器 */}
      <div
        className="overflow-x-auto"
        style={scroll?.x ? { maxWidth: scroll.x } : {}}
      >
        <table className="w-full">
          {/* 表头 */}
          <thead className="bg-white border-b border-[#cccccc]">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`
                    px-6 py-4 text-[#333333] font-medium text-[16px]
                    ${column.align === "center" ? "text-center" : ""}
                    ${column.align === "right" ? "text-right" : ""}
                    ${
                      !column.align || column.align === "left"
                        ? "text-left"
                        : ""
                    }
                  `}
                  style={column.width ? { width: column.width } : {}}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          {/* 表体 */}
          <tbody className="divide-y divide-[#eeeeee]">
            {dataSource.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center text-[#666666] text-lg"
                >
                  暂无数据
                </td>
              </tr>
            ) : (
              dataSource.map((record, index) => {
                const rowProps = onRow ? onRow(record, index) : {};
                return (
                  <tr
                    key={getRowKey(record, index)}
                    className="hover:bg-[#f8f9fa] transition-colors cursor-pointer"
                    {...rowProps}
                  >
                    {columns.map((column) => {
                      const value = (record as any)[column.dataIndex];
                      const content = column.render
                        ? column.render(value, record, index)
                        : value;

                      return (
                        <td
                          key={column.key}
                          className={`
                            px-6 py-4 text-[#333333] text-base
                            ${column.align === "center" ? "text-center" : ""}
                            ${column.align === "right" ? "text-right" : ""}
                            ${
                              !column.align || column.align === "left"
                                ? "text-left"
                                : ""
                            }
                          `}
                        >
                          {content}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* 分页 */}
      {pagination && pagination.total > 0 && (
        <Pagination
          currentPage={pagination.current}
          totalPages={Math.ceil(pagination.total / pagination.pageSize)}
          totalItems={pagination.total}
          pageSize={pagination.pageSize}
          onPageChange={handlePaginationChange}
        />
      )}
    </div>
  );
}
