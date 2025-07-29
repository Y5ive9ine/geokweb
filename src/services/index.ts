/**
 * 服务模块统一导出
 */

// 认证服务
export { authApi, authUtils } from "./auth";

// 品牌服务
export { brandApi, brandUtils } from "./brand";

// 博客服务
export { blogApi, blogUtils } from "./blog";

// GEO相关服务
export {
  geoOptimizationApi,
  geoDatabasesApi,
  geoOverviewApi,
  type GeoDatabaseType,
  type GeoDatabaseStatus,
  type CreateGeoDatabaseRequest,
  type UpdateGeoDatabaseRequest,
  type GeoOverview,
  type GeoPerformance,
  type DatabaseOverview,
  type DatabaseInfo,
} from "./geo";

// 文件上传服务
export {
  uploadApi,
  uploadUtils,
  type UploadResponse,
  type UploadConfig,
  type UploadProgressCallback,
} from "./upload";

// 默认导出所有API
export default {
  auth: () => import("./auth").then((m) => m.authApi),
  brand: () => import("./brand").then((m) => m.brandApi),
  blog: () => import("./blog").then((m) => m.blogApi),
  geo: () => import("./geo"),
  upload: () => import("./upload").then((m) => m.uploadApi),
};
