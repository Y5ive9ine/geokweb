/**
 * References数据管理的React Hooks
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { referencesApi, ReferencesListParams, Reference, ReferencesResponse, TopReferencesParams } from "@/services/references";

// 引用列表Hook
export const useReferences = (initialParams?: ReferencesListParams) => {
  const [references, setReferences] = useState<Reference[]>([]);
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

  const fetchReferences = useCallback(async (params?: ReferencesListParams) => {
    setLoading(true);
    setError(null);

    try {
      const response = await referencesApi.getReferences(params);
      
      if (response.success && response.data) {
        const references = Array.isArray(response.data.references) ? response.data.references : [];
        setReferences(references);
        
        if (response.data.pagination) {
          setPagination(response.data.pagination);
        }
      } else {
        setError(response.error || response.message || "Failed to fetch references");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReferences(stableParams);
  }, [fetchReferences, stableParams]);

  const refresh = useCallback(() => {
    fetchReferences(stableParams);
  }, [fetchReferences, stableParams]);

  const filter = useCallback(
    (filterParams: Partial<ReferencesListParams>) => {
      fetchReferences({ ...stableParams, ...filterParams, page: 1 });
    },
    [fetchReferences, stableParams]
  );

  const changePage = useCallback(
    (page: number) => {
      fetchReferences({ ...stableParams, page });
    },
    [fetchReferences, stableParams]
  );

  return {
    references,
    pagination,
    loading,
    error,
    refresh,
    filter,
    changePage,
  };
};

// 品牌引用Hook
export const useBrandReferences = (brandId: string, category?: string) => {
  const [references, setReferences] = useState<Reference[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBrandReferences = useCallback(async () => {
    if (!brandId) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await referencesApi.getBrandReferences(brandId, category);
      
      if (response.success && response.data) {
        const references = Array.isArray(response.data.references) ? response.data.references : [];
        setReferences(references);
      } else {
        setError(response.error || response.message || "Failed to fetch brand references");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [brandId, category]);

  useEffect(() => {
    if (brandId) {
      fetchBrandReferences();
    }
  }, [brandId, fetchBrandReferences]);

  const refresh = useCallback(() => {
    fetchBrandReferences();
  }, [fetchBrandReferences]);

  return { references, loading, error, refresh };
};

// 单个引用Hook
export const useReference = (referenceId?: string) => {
  const [reference, setReference] = useState<Reference | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReference = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await referencesApi.getReference(id);
      
      if (response.success && response.data) {
        setReference(response.data);
      } else {
        setError(response.error || response.message || "Failed to fetch reference");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteReference = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await referencesApi.deleteReference(id);
      
      if (response.success) {
        setReference(null);
        return true;
      } else {
        setError(response.error || response.message || "Failed to delete reference");
        throw new Error(response.error || response.message || "Failed to delete reference");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (referenceId) {
      fetchReference(referenceId);
    }
  }, [referenceId, fetchReference]);

  return {
    reference,
    loading,
    error,
    fetchReference,
    deleteReference,
  };
};

// 热门引用Hook
export const useTopReferences = (limit?: number) => {
  const [references, setReferences] = useState<Reference[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTopReferences = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await referencesApi.getTopReferences({ limit });
      
      if (response.success && response.data) {
        const references = Array.isArray(response.data.references) ? response.data.references : [];
        setReferences(references);
      } else {
        setError(response.error || response.message || "Failed to fetch top references");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchTopReferences();
  }, [fetchTopReferences]);

  const refresh = useCallback(() => {
    fetchTopReferences();
  }, [fetchTopReferences]);

  return { references, loading, error, refresh };
};

// 域名引用Hook
export const useReferencesByDomain = (domain: string) => {
  const [references, setReferences] = useState<Reference[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReferencesByDomain = useCallback(async () => {
    if (!domain) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await referencesApi.getReferencesByDomain(domain);
      
      if (response.success && response.data) {
        const references = Array.isArray(response.data.references) ? response.data.references : [];
        setReferences(references);
      } else {
        setError(response.error || response.message || "Failed to fetch references by domain");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [domain]);

  useEffect(() => {
    if (domain) {
      fetchReferencesByDomain();
    }
  }, [domain, fetchReferencesByDomain]);

  const refresh = useCallback(() => {
    fetchReferencesByDomain();
  }, [fetchReferencesByDomain]);

  return { references, loading, error, refresh };
};

// 引用提取Hook
export const useExtractReferences = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const extractReferences = useCallback(async (responseId: string) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await referencesApi.extractReferences(responseId);
      
      if (response.success && response.data) {
        setResult(response.data);
        return response.data;
      } else {
        const errorMsg = response.error || response.message || "Failed to extract references";
        setError(errorMsg);
        throw new Error(errorMsg);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(errorMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { extractReferences, loading, error, result };
};

// 批量删除引用Hook
export const useBatchDeleteReferences = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const batchDelete = useCallback(async (ids: string[]) => {
    setLoading(true);
    setError(null);

    try {
      const results = await referencesApi.batchDeleteReferences(ids);
      return results;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(errorMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { batchDelete, loading, error };
}; 