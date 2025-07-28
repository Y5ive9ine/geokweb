/**
 * GEO相关API统一导出
 */

export { geoOptimizationApi } from "./geo-optimization";
export { geoDatabasesApi } from "./geo-databases";
export { geoOverviewApi } from "./geo-overview";

// 类型导出
export type {
  GeoDatabaseType,
  GeoDatabaseStatus,
  CreateGeoDatabaseRequest,
  UpdateGeoDatabaseRequest,
} from "./geo-databases";

export type {
  GeoOverview,
  GeoPerformance,
  DatabaseOverview,
  DatabaseInfo,
} from "./geo-overview";

// 默认导出
export default {
  optimization: () =>
    import("./geo-optimization").then((m) => m.geoOptimizationApi),
  databases: () => import("./geo-databases").then((m) => m.geoDatabasesApi),
  overview: () => import("./geo-overview").then((m) => m.geoOverviewApi),
};
