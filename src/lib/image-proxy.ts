/*
 * @Description:
 * @Author: Devin
 * @Date: 2025-07-29 16:16:54
 */
/**
 * 图片代理工具
 * 根据当前协议决定是否替换HTTP图片URL
 */

/**
 * 将HTTP图片URL替换为HTTPS代理URL
 * 只有当前页面是HTTPS时才进行替换
 */
export function getProxyImageUrl(originalUrl: string): string {
  if (!originalUrl) return originalUrl;

  // 检查当前页面协议
  const isCurrentHttps =
    typeof window !== "undefined"
      ? window.location.protocol === "https:"
      : true; // SSR时默认认为是HTTPS

  console.log(isCurrentHttps, "isCurrentHttps");

  // 只有当前是HTTPS且图片URL是指定的HTTP地址时才替换
  if (
    isCurrentHttps &&
    originalUrl.startsWith("http://network.jancsitech.net:9000")
  ) {
    return originalUrl.replace(
      "http://network.jancsitech.net:9000",
      "https://magic.vibelabs.space/network"
    );
  }

  // 其他情况直接返回原URL
  return originalUrl;
}

/**
 * React Hook: 处理图片URL
 */
export function useImageProxy(url: string | undefined | null): string {
  if (!url) return "";
  return getProxyImageUrl(url);
}

/**
 * 批量处理图片URL数组
 */
export function getProxyImageUrls(urls: string[]): string[] {
  return urls.map((url) => getProxyImageUrl(url));
}

export default {
  getProxyImageUrl,
  useImageProxy,
  getProxyImageUrls,
};
