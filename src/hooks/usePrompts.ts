/**
 * Prompts数据管理的React Hooks
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { promptsApi, PromptsListParams, Prompt, CreatePromptRequest, UpdatePromptRequest, PromptsResponse } from "@/services/prompts";

// 提示词列表Hook
export const usePrompts = (initialParams?: PromptsListParams) => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
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
      initialParams?.category,
    ]
  );

  const fetchPrompts = useCallback(async (params?: PromptsListParams) => {
    setLoading(true);
    setError(null);

    try {
      const response = await promptsApi.getPrompts(params);
      
      if (response.success && response.data) {
        const prompts = Array.isArray(response.data.prompts) ? response.data.prompts : [];
        setPrompts(prompts);
        
        if (response.data.pagination) {
          setPagination(response.data.pagination);
        }
      } else {
        setError(response.error || response.message || "Failed to fetch prompts");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrompts(stableParams);
  }, [fetchPrompts, stableParams]);

  const refresh = useCallback(() => {
    fetchPrompts(stableParams);
  }, [fetchPrompts, stableParams]);

  const filter = useCallback(
    (filterParams: Partial<PromptsListParams>) => {
      fetchPrompts({ ...stableParams, ...filterParams, page: 1 });
    },
    [fetchPrompts, stableParams]
  );

  const changePage = useCallback(
    (page: number) => {
      fetchPrompts({ ...stableParams, page });
    },
    [fetchPrompts, stableParams]
  );

  return {
    prompts,
    pagination,
    loading,
    error,
    refresh,
    filter,
    changePage,
  };
};

// 品牌提示词Hook
export const useBrandPrompts = (brandId: string, category?: string) => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBrandPrompts = useCallback(async () => {
    if (!brandId) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await promptsApi.getBrandPrompts(brandId, category);
      
      if (response.success && response.data) {
        const prompts = Array.isArray(response.data.prompts) ? response.data.prompts : [];
        setPrompts(prompts);
      } else {
        setError(response.error || response.message || "Failed to fetch brand prompts");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [brandId, category]);

  useEffect(() => {
    if (brandId) {
      fetchBrandPrompts();
    }
  }, [brandId, fetchBrandPrompts]);

  const refresh = useCallback(() => {
    fetchBrandPrompts();
  }, [fetchBrandPrompts]);

  return { prompts, loading, error, refresh };
};

// 单个提示词Hook
export const usePrompt = (promptId?: string) => {
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPrompt = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await promptsApi.getPrompt(id);
      
      if (response.success && response.data) {
        setPrompt(response.data);
      } else {
        setError(response.error || response.message || "Failed to fetch prompt");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  const createPrompt = useCallback(async (promptData: CreatePromptRequest) => {
    setLoading(true);
    setError(null);

    try {
      const response = await promptsApi.createPrompt(promptData);
      
      if (response.success && response.data) {
        setPrompt(response.data);
        return response.data;
      } else {
        setError(response.error || response.message || "Failed to create prompt");
        throw new Error(response.error || response.message || "Failed to create prompt");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePrompt = useCallback(async (id: string, promptData: UpdatePromptRequest) => {
    setLoading(true);
    setError(null);

    try {
      const response = await promptsApi.updatePrompt(id, promptData);
      
      if (response.success && response.data) {
        setPrompt(response.data);
        return response.data;
      } else {
        setError(response.error || response.message || "Failed to update prompt");
        throw new Error(response.error || response.message || "Failed to update prompt");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deletePrompt = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await promptsApi.deletePrompt(id);
      
      if (response.success) {
        setPrompt(null);
        return true;
      } else {
        setError(response.error || response.message || "Failed to delete prompt");
        throw new Error(response.error || response.message || "Failed to delete prompt");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (promptId) {
      fetchPrompt(promptId);
    }
  }, [promptId, fetchPrompt]);

  return {
    prompt,
    loading,
    error,
    fetchPrompt,
    createPrompt,
    updatePrompt,
    deletePrompt,
  };
};

// 热门提示词Hook
export const useTopPrompts = (limit?: number) => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTopPrompts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await promptsApi.getTopPrompts({ limit });
      
      if (response.success && response.data) {
        const prompts = Array.isArray(response.data.prompts) ? response.data.prompts : [];
        setPrompts(prompts);
      } else {
        setError(response.error || response.message || "Failed to fetch top prompts");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchTopPrompts();
  }, [fetchTopPrompts]);

  const refresh = useCallback(() => {
    fetchTopPrompts();
  }, [fetchTopPrompts]);

  return { prompts, loading, error, refresh };
}; 