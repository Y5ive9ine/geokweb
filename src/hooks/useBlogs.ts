/**
 * Blog数据管理的React Hooks
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { blogApi, BlogListParams } from "@/services/blog";
import { Blog } from "@/lib/types";

// 博客列表Hook
export const useBlogs = (initialParams?: BlogListParams) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    page_size: 10,
    total_items: 0,
    total_pages: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 使用useMemo来稳定initialParams引用
  const stableParams = useMemo(
    () => initialParams,
    [
      initialParams?.page,
      initialParams?.page_size,
      initialParams?.status,
      initialParams?.category,
      initialParams?.search,
      initialParams?.brand_id,
    ]
  );

  const fetchBlogs = useCallback(async (params?: BlogListParams) => {
    setLoading(true);
    setError(null);

    try {
      console.log("Fetching blogs with params:", params);
      const response = await blogApi.getBlogs(params);
      console.log("Blog API response:", response);

      if (response.success && response.data) {
        console.log("Response data:", response.data);
        console.log("Response data blogs:", response.data.blogs);
        console.log("Is blogs array?", Array.isArray(response.data.blogs));

        // 确保blogs是数组
        const blogs = Array.isArray(response.data.blogs)
          ? response.data.blogs
          : [];

        console.log("Processed blogs:", blogs);
        console.log("Blogs length:", blogs.length);

        setBlogs(blogs);

        // 设置分页信息，提供默认值
        const paginationData = {
          current_page: response.data.pagination?.current_page || 1,
          page_size: response.data.pagination?.page_size || 10,
          total_items: response.data.pagination?.total_items || 0,
          total_pages: response.data.pagination?.total_pages || 0,
        };

        console.log("Pagination data:", paginationData);
        setPagination(paginationData);
      } else {
        console.error("Blog API error:", response.error || response.message);
        setError(response.error || response.message || "Failed to fetch blogs");
      }
    } catch (err) {
      console.error("Blog fetch error:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  // 初始化加载
  useEffect(() => {
    if (stableParams) {
      fetchBlogs(stableParams);
    }
  }, [fetchBlogs, stableParams]);

  // 刷新数据
  const refresh = useCallback(() => {
    if (stableParams) {
      fetchBlogs(stableParams);
    }
  }, [fetchBlogs, stableParams]);

  // 搜索
  const search = useCallback(
    (query: string) => {
      fetchBlogs({ ...stableParams, search: query, page: 1 });
    },
    [fetchBlogs, stableParams]
  );

  // 筛选
  const filter = useCallback(
    (filterParams: Partial<BlogListParams>) => {
      fetchBlogs({ ...stableParams, ...filterParams, page: 1 });
    },
    [fetchBlogs, stableParams]
  );

  // 分页
  const changePage = useCallback(
    (page: number) => {
      fetchBlogs({ ...stableParams, page });
    },
    [fetchBlogs, stableParams]
  );

  return {
    blogs,
    pagination,
    loading,
    error,
    refresh,
    search,
    filter,
    changePage,
    fetchBlogs,
  };
};

// 单个博客Hook
export const useBlog = (id?: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBlog = useCallback(async (blogId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await blogApi.getBlog(blogId);

      if (response.success && response.data) {
        setBlog(response.data.blog);
      } else {
        setError(response.error || "Failed to fetch blog");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchBlog(id);
    }
  }, [id, fetchBlog]);

  const refresh = useCallback(() => {
    if (id) {
      fetchBlog(id);
    }
  }, [id, fetchBlog]);

  return {
    blog,
    loading,
    error,
    refresh,
    fetchBlog,
  };
};

// 博客操作Hook
export const useBlogActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBlog = useCallback(async (blogData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await blogApi.createBlog(blogData);

      if (response.success) {
        return response.data?.blog;
      } else {
        setError(response.error || "Failed to create blog");
        return null;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateBlog = useCallback(async (id: string, blogData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await blogApi.updateBlog(id, blogData);

      if (response.success) {
        return response.data?.blog;
      } else {
        setError(response.error || "Failed to update blog");
        return null;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteBlog = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await blogApi.deleteBlog(id);

      if (response.success) {
        return true;
      } else {
        setError(response.error || "Failed to delete blog");
        return false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    createBlog,
    updateBlog,
    deleteBlog,
  };
};
