# 全局公共参数

**全局Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局认证方式**

> 无需认证

# 状态码说明

| 状态码 | 中文描述 |
| --- | ---- |
| 暂无参数 |

# AI Searches

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**AI搜索管理接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取AI响应详情

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据ID获取AI响应详细信息**

**接口状态**

> 开发中

**接口URL**

> /ai-responses/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-responses/{id}?apipost_id=56aee5db700e4

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI响应详情(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 删除AI响应

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**删除指定的AI响应**

**接口状态**

> 开发中

**接口URL**

> /ai-responses/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-responses/{id}?apipost_id=56aee5df700e5

**请求方式**

> DELETE

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 删除成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取搜索的AI响应

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据搜索ID获取相关的AI响应**

**接口状态**

> 开发中

**接口URL**

> /ai-responses/search/{searchId}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-responses/search/{searchId}?apipost_id=56aee5e3700e6

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| searchId | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI响应列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 按模型类型获取AI响应

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据AI模型类型获取响应**

**接口状态**

> 开发中

**接口URL**

> /ai-responses/model/{modelType}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-responses/model/{modelType}?apipost_id=56aee5e3700e7

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| modelType | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI响应列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取品牌AI搜索列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取指定品牌的AI搜索记录**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}/ai-searches?page=&page_size=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}/ai-searches?apipost_id=56aee5e3700e8

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI搜索列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 创建品牌AI搜索

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**为指定品牌创建AI搜索任务**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}/ai-searches

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}/ai-searches?apipost_id=56aee5e3700e9

**请求方式**

> POST

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{
	"questions": [
		""
	]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| questions.0 | - | array | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* AI搜索创建成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取AI搜索列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取用户的AI搜索记录列表**

**接口状态**

> 开发中

**接口URL**

> /ai-searches?page=&page_size=&status=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-searches?apipost_id=56aee5e3700ea

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |
| status | - | string | 否 | 搜索状态 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI搜索列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 创建AI搜索

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**创建新的AI搜索记录**

**接口状态**

> 开发中

**接口URL**

> /ai-searches

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-searches?apipost_id=56aee5e3700eb

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"brand_id": "",
	"query": "",
	"model_type": ""
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| query | - | string | 是 | 搜索查询 |
| brand_id | - | string | 是 | 品牌ID |
| model_type | - | string | 是 | AI模型类型 |

**认证方式**

> 继承父级

**响应示例**

* AI搜索创建成功(201)

```javascript
{
	"success": true,
	"message": "AI search created successfully",
	"data": {},
	"timestamp": ""
}
```

* 请求参数错误(400)

```javascript
暂无数据
```

* 未授权(401)

```javascript
暂无数据
```

**Query**

## 获取AI搜索详情

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取指定AI搜索的详细信息**

**接口状态**

> 开发中

**接口URL**

> /ai-searches/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-searches/{id}?apipost_id=56aee5e3700ec

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI搜索详情(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 更新AI搜索状态

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**更新指定AI搜索的状态**

**接口状态**

> 开发中

**接口URL**

> /ai-searches/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-searches/{id}?apipost_id=56aee5e3700ed

**请求方式**

> PUT

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{
	"status": ""
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| status | - | string | 是 | 新的状态 |

**认证方式**

> 继承父级

**响应示例**

* 状态更新成功(200)

```javascript
{
	"success": true,
	"message": "AI search status updated successfully",
	"data": {},
	"timestamp": ""
}
```

* AI搜索不存在(404)

```javascript
暂无数据
```

* 请求参数错误(400)

```javascript
暂无数据
```

**Query**

## 删除AI搜索

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**删除指定的AI搜索记录**

**接口状态**

> 开发中

**接口URL**

> /ai-searches/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-searches/{id}?apipost_id=56aee5e7700ee

**请求方式**

> DELETE

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 删除成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 按状态获取AI搜索

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据状态获取AI搜索列表**

**接口状态**

> 开发中

**接口URL**

> /ai-searches/status/{status}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-searches/status/{status}?apipost_id=56aee5e7700ef

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| status | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI搜索列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取AI搜索统计

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取AI搜索的统计信息**

**接口状态**

> 开发中

**接口URL**

> /ai-searches/stats

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-searches/stats?apipost_id=56aee5e7700f0

**请求方式**

> GET

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI搜索统计数据(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 处理待处理的搜索

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**批量处理状态为pending的AI搜索**

**接口状态**

> 开发中

**接口URL**

> /ai-searches/process-pending

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-searches/process-pending?apipost_id=56aee5e7700f1

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 处理成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取AI响应列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取AI搜索响应列表**

**接口状态**

> 开发中

**接口URL**

> /ai-responses?page=&page_size=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-responses?apipost_id=56aee5e7700f2

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI响应列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# GEO Optimization

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**GEO优化管理接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取品牌的GEO数据库列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 11:53:32

**获取指定品牌的GEO数据库列表**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}/geo-databases

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}/geo-databases?apipost_id=56aee5e7700f4

**请求方式**

> GET

**Content-Type**

> none

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | 4fc86ecb-8e0e-476b-8826-bf4dc95fce0d | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 品牌GEO数据库列表(200)

```javascript
{
	"success": true,
	"message": "Brand GEO databases retrieved successfully",
	"data": {
		"geo_databases": [
			{}
		]
	},
	"timestamp": ""
}
```

**Query**

## 获取品牌GEO优化

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取指定品牌的GEO优化记录**

**接口状态**

> 开发中

**接口URL**

> /brands/{brandId}/geo-optimizations?page=&page_size=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{brandId}/geo-optimizations?apipost_id=56aee5e7700f9

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| brandId | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 品牌GEO优化列表(200)

```javascript
{
	"success": true,
	"message": "GEO optimizations retrieved successfully",
	"data": {}
}
```

**Query**

## 分析品牌GEO表现

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**分析指定品牌的GEO表现数据**

**接口状态**

> 开发中

**接口URL**

> /brands/{brandId}/geo-optimizations/analysis

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{brandId}/geo-optimizations/analysis?apipost_id=56aee5e7700fa

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| brandId | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* GEO表现分析结果(200)

```javascript
{
	"success": true,
	"message": "GEO performance analysis completed",
	"data": {}
}
```

**Query**

## 生成GEO优化建议

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**为指定品牌生成GEO优化建议**

**接口状态**

> 开发中

**接口URL**

> /brands/{brandId}/geo-optimizations/recommendations

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{brandId}/geo-optimizations/recommendations?apipost_id=56aee5e7700fb

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| brandId | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* GEO优化建议(200)

```javascript
{
	"success": true,
	"message": "GEO recommendations generated successfully",
	"data": [
		{}
	]
}
```

**Query**

# Health

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**健康检查接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 健康检查

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**检查服务健康状态**

**接口状态**

> 开发中

**接口URL**

> /health

| 环境  | URL |
| --- | --- |


**Mock URL**

> /health?apipost_id=56aee5e770100

**请求方式**

> GET

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 服务正常(200)

```javascript
{
	"data": {},
	"message": "hello geok",
	"success": true,
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## Ping检查

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**简单的ping检查，返回pong**

**接口状态**

> 开发中

**接口URL**

> /ping

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ping?apipost_id=56aee5e770101

**请求方式**

> GET

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* Ping成功(200)

```javascript
{
	"data": {
		"time": 1642694400
	},
	"message": "pong",
	"success": true,
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 服务状态

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取详细的服务状态信息**

**接口状态**

> 开发中

**接口URL**

> /status

| 环境  | URL |
| --- | --- |


**Mock URL**

> /status?apipost_id=56aee5e770102

**请求方式**

> GET

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 状态信息(200)

```javascript
{
	"data": {
		"api": "online",
		"database": "connected",
		"redis": "connected",
		"timestamp": 1642694400
	},
	"message": "",
	"success": true,
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# Authentication

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**用户认证相关接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 用户登录

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 14:37:43

**用户登录认证，支持邮箱密码登录和Google OAuth登录**

**接口状态**

> 开发中

**接口URL**

> /auth/login

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/login?apipost_id=56aee5e770104

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"email": "john@example.com",
	"password": "password123",
	"id_token": ""
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| email | demo@geok.com | string | 否 | - |
| id_token | - | string | 否 | Google ID token for OAuth login |
| password | password123 | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 登录成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
		"user": {
			"id": "550e8400-e29b-41d4-a716-446655440000",
			"username": "john_doe",
			"email": "john@example.com",
			"first_name": "John",
			"last_name": "Doe",
			"role": "user",
			"status": "active",
			"created_at": "",
			"updated_at": ""
		}
	},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 登录失败(400)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 用户注册

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**创建新用户账户**

**接口状态**

> 开发中

**接口URL**

> /auth/register

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/register?apipost_id=56aee5e770105

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"username": "john_doe",
	"email": "john@example.com",
	"password": "password123",
	"first_name": "John",
	"last_name": "Doe"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| email | john@example.com | string | 否 | - |
| password | password123 | string | 否 | - |
| username | john_doe | string | 否 | - |
| last_name | Doe | string | 否 | - |
| first_name | John | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 注册成功(201)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 注册失败(400)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 用户登出

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**用户登出，清除认证状态**

**接口状态**

> 开发中

**接口URL**

> /auth/logout

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/logout?apipost_id=56aee5e770106

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 登出成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取当前用户信息

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-28 14:33:18

**获取当前登录用户的详细信息**

**接口状态**

> 开发中

**接口URL**

> /auth/me

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/me?apipost_id=56aee5e770107

**请求方式**

> GET

**Content-Type**

> none

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTM2NzQ1MzgsImlhdCI6MTc1MzY3MzYzOCwibmJmIjoxNzUzNjczNjM4LCJzdWIiOnsiZW1haWwiOiJqb2huQGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9pZCI6IjUwM2UyYmM5LTQyZTEtNGEzOS05N2IxLTMwNzMzOTg3OGY4YiJ9fQ.jlo2MmuVgQJY1W8kPm5r45ZpoGcyTN3QG3xTHjtNWhOrN0PtXiFsG8op6Een53MGMu_BmQSiZ-41RuR5KuWEEg | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 用户信息(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {
		"id": "550e8400-e29b-41d4-a716-446655440000",
		"username": "john_doe",
		"email": "john@example.com",
		"first_name": "John",
		"last_name": "Doe",
		"role": "user",
		"status": "active",
		"created_at": "",
		"updated_at": ""
	},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 未认证(401)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTM2NzQ1MzgsImlhdCI6MTc1MzY3MzYzOCwibmJmIjoxNzUzNjczNjM4LCJzdWIiOnsiZW1haWwiOiJqb2huQGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9pZCI6IjUwM2UyYmM5LTQyZTEtNGEzOS05N2IxLTMwNzMzOTg3OGY4YiJ9fQ.jlo2MmuVgQJY1W8kPm5r45ZpoGcyTN3QG3xTHjtNWhOrN0PtXiFsG8op6Een53MGMu_BmQSiZ-41RuR5KuWEEg | string | 是 | - |

**Query**

## 刷新令牌

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**刷新JWT令牌**

**接口状态**

> 开发中

**接口URL**

> /auth/refresh

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/refresh?apipost_id=56aee5eb70108

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 令牌刷新成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 更新个人资料

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**更新当前用户的个人资料信息**

**接口状态**

> 开发中

**接口URL**

> /auth/profile

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/profile?apipost_id=56aee5eb70109

**请求方式**

> PUT

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"first_name": "John",
	"last_name": "Doe",
	"bio": "Software developer",
	"phone": "+1-555-0123",
	"company": "Tech Corp",
	"country": "United States"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| bio | Software developer | string | 否 | - |
| phone | +1-555-0123 | string | 否 | - |
| company | Tech Corp | string | 否 | - |
| country | United States | string | 否 | - |
| last_name | Doe | string | 否 | - |
| first_name | John | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 更新成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 上传头像

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 15:27:35

**上传或更新用户头像**

**接口状态**

> 开发中

**接口URL**

> /auth/avatar

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/avatar?apipost_id=56aee5eb7010a

**请求方式**

> PUT

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"avatar_url": ""
}
```

**认证方式**

> 继承父级

**响应示例**

* 上传成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 修改密码

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**修改当前用户的密码**

**接口状态**

> 开发中

**接口URL**

> /auth/password

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/password?apipost_id=56aee5eb7010b

**请求方式**

> PUT

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"current_password": "password123",
	"new_password": "newpassword123",
	"confirm_password": "newpassword123"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| new_password | newpassword123 | string | 是 | - |
| current_password | oldpassword123 | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 密码修改成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 修改邮箱

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**修改当前用户的邮箱地址**

**接口状态**

> 开发中

**接口URL**

> /auth/email

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/email?apipost_id=56aee5eb7010c

**请求方式**

> PUT

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"new_email": "newemail@example.com"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| new_email | newemail@example.com | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 邮箱修改成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 更新当前品牌

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-29 12:51:14

> 更新时间: 2025-07-29 12:56:11

**修改当前用户的邮箱地址**

**接口状态**

> 开发中

**接口URL**

> /auth/current-brand

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/current-brand?apipost_id=94851a3f7002d

**请求方式**

> PUT

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"brand_id": ""
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| new_email | newemail@example.com | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 邮箱修改成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取当前品牌

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-29 12:52:22

> 更新时间: 2025-07-29 12:56:47

**修改当前用户的邮箱地址**

**接口状态**

> 开发中

**接口URL**

> /auth/current-brand

| 环境  | URL |
| --- | --- |


**Mock URL**

> /auth/current-brand?apipost_id=948e1d877002e

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> 继承父级

**响应示例**

* 邮箱修改成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# Brands

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**品牌管理接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取品牌列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 13:33:17

**获取用户的品牌列表，支持分页和搜索**

**接口状态**

> 开发中

**接口URL**

> /brands?page=&page_size=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands?apipost_id=56aee5eb7010e

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 品牌列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {
		"brands": [
			{
				"id": "4fc86ecb-8e0e-476b-8826-bf4dc95fce0d",
				"name": "TechCorp",
				"domain": "techcorp.com",
				"keywords": "technology,innovation,software",
				"description": "Leading technology company",
				"status": "active",
				"created_at": "",
				"updated_at": ""
			}
		],
		"total": 100,
		"page": 1,
		"page_size": 10
	},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 创建品牌

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**创建新的品牌**

**接口状态**

> 开发中

**接口URL**

> /brands

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands?apipost_id=56aee5eb7010f

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"name": "TechCorp",
	"domain": "techcorp.com",
	"keywords": "technology,innovation,software",
	"description": "Leading technology company"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| name | TechCorp | string | 是 | - |
| domain | techcorp.com | string | 是 | - |
| keywords | technology,innovation,software | string | 否 | - |
| description | Leading technology company | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 品牌创建成功(201)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {
		"id": "4fc86ecb-8e0e-476b-8826-bf4dc95fce0d",
		"name": "TechCorp",
		"domain": "techcorp.com",
		"keywords": "technology,innovation,software",
		"description": "Leading technology company",
		"status": "active",
		"created_at": "",
		"updated_at": ""
	},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取品牌详情

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据ID获取品牌详细信息**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}?apipost_id=56aee5eb70110

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 品牌详情(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {
		"id": "4fc86ecb-8e0e-476b-8826-bf4dc95fce0d",
		"name": "TechCorp",
		"domain": "techcorp.com",
		"keywords": "technology,innovation,software",
		"description": "Leading technology company",
		"status": "active",
		"created_at": "",
		"updated_at": ""
	},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 品牌不存在(404)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 更新品牌

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**更新品牌信息**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}?apipost_id=56aee5eb70111

**请求方式**

> PUT

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{
	"name": "TechCorp",
	"domain": "techcorp.com",
	"keywords": "technology,innovation,software",
	"description": "Leading technology company"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| name | TechCorp | string | 否 | - |
| domain | techcorp.com | string | 否 | - |
| keywords | technology,innovation,software | string | 否 | - |
| description | Leading technology company | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 品牌更新成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 删除品牌

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**删除指定品牌**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}?apipost_id=56aee5eb70112

**请求方式**

> DELETE

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 品牌删除成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# AI Visibility

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**AI可见性指标接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取品牌可见性趋势

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 11:23:11

**获取指定品牌的AI可见性趋势分析**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}/ai-visibility/trend?days=7

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}/ai-visibility/trend?apipost_id=56aee5eb70114

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| days | 7 | integer | 否 | 分析天数 |

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 趋势分析数据(200)

```javascript
{
	"success": true,
	"message": "Visibility trend retrieved successfully",
	"data": {
		"brand_id": "",
		"days": 0,
		"trend": [
			{
				"id": "",
				"ai_search_id": "",
				"ai_response_id": "",
				"brand_id": "",
				"visibility_data": {},
				"keyword_data": {},
				"overall_score": "",
				"frequency_score": "",
				"recommendation_score": "",
				"search_rate_score": "",
				"first_choice_score": "",
				"calculated_at": "",
				"ai_search": {
					"id": "",
					"question": "",
					"question_type": "",
					"keywords": "",
					"status": "",
					"region": "",
					"language": ""
				},
				"ai_response": {
					"id": "",
					"response": "",
					"brand_position": 0,
					"brand_sentiment": "",
					"confidence": "",
					"relevance": ""
				},
				"brand": {
					"id": "",
					"name": "",
					"domain": "",
					"keywords": "",
					"description": ""
				}
			}
		],
		"count": 0,
		"summary": {
			"total_metrics": 0,
			"date_range_start": "",
			"date_range_end": ""
		}
	}
}
```

**Query**

## 计算品牌可见性聚合

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**计算指定品牌的可见性聚合数据**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}/ai-visibility/aggregation

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}/ai-visibility/aggregation?apipost_id=56aee5eb70115

**请求方式**

> POST

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 聚合计算成功(200)

```javascript
{
	"success": true,
	"message": "Brand aggregation calculated successfully",
	"data": {}
}
```

**Query**

## 获取品牌可见性聚合历史

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取指定品牌的可见性聚合历史数据**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}/ai-visibility/aggregation

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}/ai-visibility/aggregation?apipost_id=56aee5eb70116

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 聚合历史数据(200)

```javascript
{
	"success": true,
	"message": "Aggregation history retrieved successfully",
	"data": [
		{}
	]
}
```

**Query**

## 生成品牌可见性报告

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**生成指定品牌的综合可见性报告**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}/ai-visibility/report

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}/ai-visibility/report?apipost_id=56aee5eb70117

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 可见性报告(200)

```javascript
{
	"success": true,
	"message": "Visibility report generated successfully",
	"data": {
		"brand_id": "",
		"report_date": "",
		"summary": {},
		"metrics": {},
		"recommendations": [
			""
		]
	}
}
```

**Query**

## 品牌可见性对比

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**对比两个品牌的可见性指标**

**接口状态**

> 开发中

**接口URL**

> /ai-visibility/compare/brands/{id1}/{id2}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-visibility/compare/brands/{id1}/{id2}?apipost_id=56aee5eb70118

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id1 | - | string | 是 | - |
| id2 | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 品牌对比结果(200)

```javascript
{
	"success": true,
	"message": "Brand comparison completed successfully",
	"data": {
		"brand1": {},
		"brand2": {},
		"comparison": {},
		"insights": [
			""
		]
	}
}
```

**Query**

## 计算AI响应可见性指标

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**为指定的AI响应计算可见性指标**

**接口状态**

> 开发中

**接口URL**

> /ai-visibility/responses/{responseId}/calculate

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-visibility/responses/{responseId}/calculate?apipost_id=56aee5eb70119

**请求方式**

> POST

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| responseId | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 成功计算可见性指标(200)

```javascript
{
	"success": true,
	"message": "Visibility metrics calculated successfully",
	"data": {},
	"timestamp": ""
}
```

* 无效的响应ID(400)

```javascript
{
	"success": "",
	"message": "Invalid response ID",
	"error": ""
}
```

**Query**

## 获取AI响应可见性指标

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取指定AI响应的可见性指标数据**

**接口状态**

> 开发中

**接口URL**

> /ai-visibility/responses/{responseId}/metrics

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-visibility/responses/{responseId}/metrics?apipost_id=56aee5eb7011a

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| responseId | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 成功获取可见性指标(200)

```javascript
{
	"success": true,
	"message": "Visibility metrics retrieved successfully",
	"data": {
		"id": "",
		"ai_response_id": "",
		"brand_id": "",
		"visibility_data": {},
		"keyword_data": {},
		"overall_score": "",
		"frequency_score": "",
		"recommendation_score": "",
		"search_rate_score": "",
		"first_choice_score": "",
		"calculated_at": ""
	}
}
```

**Query**

## 批量计算可见性指标

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**批量计算多个AI响应的可见性指标**

**接口状态**

> 开发中

**接口URL**

> /ai-visibility/batch-calculate

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-visibility/batch-calculate?apipost_id=56aee5eb7011b

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"response_ids": [
		""
	]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| response_ids.0 | - | array | 是 | AI响应ID列表 |

**认证方式**

> 继承父级

**响应示例**

* 批量计算结果(200)

```javascript
{
	"success": true,
	"message": "Batch calculation completed",
	"data": {
		"total": 0,
		"success_count": 0,
		"error_count": 0,
		"results": {}
	}
}
```

**Query**

## 获取可见性指标统计

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 14:37:51

**获取可见性指标的统计信息**

**接口状态**

> 开发中

**接口URL**

> /ai-visibility/stats?brand_id=4fc86ecb-8e0e-476b-8826-bf4dc95fce0d&days=7

| 环境  | URL |
| --- | --- |


**Mock URL**

> /ai-visibility/stats?apipost_id=56aee5eb7011c

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| brand_id | 4fc86ecb-8e0e-476b-8826-bf4dc95fce0d | string | 否 | 品牌ID（可选） |
| days | 7 | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 统计信息(200)

```javascript
{
	"success": true,
	"message": "Statistics retrieved successfully",
	"data": {
		"total_metrics": 0,
		"average_score": "",
		"brand_id": "",
		"timestamp": ""
	}
}
```

**Query**

# Prompts

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**提示词管理接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取品牌提示词

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 11:06:11

**获取指定品牌的提示词列表**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}/prompts?category=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}/prompts?apipost_id=56aee5eb7011e

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| category | - | string | 否 | 提示词分类 |

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | 4fc86ecb-8e0e-476b-8826-bf4dc95fce0d | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 提示词列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取提示词列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取用户的提示词列表**

**接口状态**

> 开发中

**接口URL**

> /prompts?page=&page_size=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /prompts?apipost_id=56aee5eb7011f

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 提示词列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 创建提示词

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**创建新的提示词**

**接口状态**

> 开发中

**接口URL**

> /prompts

| 环境  | URL |
| --- | --- |


**Mock URL**

> /prompts?apipost_id=56aee5eb70120

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"brand_id": "4fc86ecb-8e0e-476b-8826-bf4dc95fce0d",
	"title": "品牌优势分析",
	"content": "该品牌在技术创新方面表现突出",
	"description": "基于AI分析生成的品牌优势总结",
	"category": "analysis"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| title | 品牌优势分析 | string | 是 | - |
| content | 该品牌在技术创新方面表现突出 | string | 是 | - |
| brand_id | 4fc86ecb-8e0e-476b-8826-bf4dc95fce0d | string | 是 | - |
| category | analysis | string | 否 | - |
| description | 基于AI分析生成的品牌优势总结 | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 创建成功(201)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取提示词详情

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据ID获取提示词详细信息**

**接口状态**

> 开发中

**接口URL**

> /prompts/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /prompts/{id}?apipost_id=56aee5eb70121

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 提示词详情(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 更新提示词

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**更新指定的提示词**

**接口状态**

> 开发中

**接口URL**

> /prompts/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /prompts/{id}?apipost_id=56aee5ef70122

**请求方式**

> PUT

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{
	"title": "品牌优势分析",
	"content": "该品牌在技术创新方面表现突出",
	"description": "基于AI分析生成的品牌优势总结",
	"category": "analysis"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| title | 品牌优势分析 | string | 否 | - |
| content | 该品牌在技术创新方面表现突出 | string | 否 | - |
| category | analysis | string | 否 | - |
| description | 基于AI分析生成的品牌优势总结 | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 更新成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 删除提示词

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**删除指定的提示词**

**接口状态**

> 开发中

**接口URL**

> /prompts/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /prompts/{id}?apipost_id=56aee5ef70123

**请求方式**

> DELETE

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 删除成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取热门提示词

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 11:06:15

**获取排名靠前的热门提示词**

**接口状态**

> 开发中

**接口URL**

> /prompts/top?limit=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /prompts/top?apipost_id=56aee5ef70124

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| limit | - | integer | 否 | 返回数量限制 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 热门提示词列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# References

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**引用管理接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取品牌引用

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 11:20:06

**获取指定品牌的引用列表**

**接口状态**

> 开发中

**接口URL**

> /brands/{id}/references?days=7

| 环境  | URL |
| --- | --- |


**Mock URL**

> /brands/{id}/references?apipost_id=56aee5ef70126

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| days | 7 | string | 是 | - |

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | 4fc86ecb-8e0e-476b-8826-bf4dc95fce0d | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 引用列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取引用列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取用户的引用列表**

**接口状态**

> 开发中

**接口URL**

> /references?page=&page_size=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /references?apipost_id=56aee5ef70127

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 引用列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取引用详情

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据ID获取引用详细信息**

**接口状态**

> 开发中

**接口URL**

> /references/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /references/{id}?apipost_id=56aee5ef70128

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 引用详情(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 删除引用

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**删除指定的引用**

**接口状态**

> 开发中

**接口URL**

> /references/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /references/{id}?apipost_id=56aee5ef70129

**请求方式**

> DELETE

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 删除成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取热门引用

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取排名靠前的热门引用**

**接口状态**

> 开发中

**接口URL**

> /references/top?limit=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /references/top?apipost_id=56aee5ef7012a

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| limit | - | integer | 否 | 返回数量限制 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 热门引用列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 按域名获取引用

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据域名获取引用列表**

**接口状态**

> 开发中

**接口URL**

> /references/domain/{domain}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /references/domain/{domain}?apipost_id=56aee5ef7012b

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| domain | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 引用列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 从AI响应提取引用

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**从指定的AI响应中提取引用信息**

**接口状态**

> 开发中

**接口URL**

> /references/extract/{responseId}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /references/extract/{responseId}?apipost_id=56aee5ef7012c

**请求方式**

> POST

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| responseId | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 提取成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# Analytics

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**分析统计接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取仪表板数据

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取用户仪表板的统计数据**

**接口状态**

> 开发中

**接口URL**

> /analytics/dashboard

| 环境  | URL |
| --- | --- |


**Mock URL**

> /analytics/dashboard?apipost_id=56aee5ef7012e

**请求方式**

> GET

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 仪表板数据(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {
		"total_brands": 5,
		"total_searches": 150,
		"total_responses": 450,
		"avg_visibility_score": 75.5
	},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取趋势分析

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取品牌可见性趋势分析数据**

**接口状态**

> 开发中

**接口URL**

> /analytics/trends?period=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /analytics/trends?apipost_id=56aee5ef7012f

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| period | - | string | 否 | 分析周期 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 趋势分析数据(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取指标摘要

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取各项指标的摘要统计**

**接口状态**

> 开发中

**接口URL**

> /analytics/summary

| 环境  | URL |
| --- | --- |


**Mock URL**

> /analytics/summary?apipost_id=56aee5ef70130

**请求方式**

> GET

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 指标摘要数据(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取品牌分布

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取品牌分布统计数据**

**接口状态**

> 开发中

**接口URL**

> /analytics/brand-distribution

| 环境  | URL |
| --- | --- |


**Mock URL**

> /analytics/brand-distribution?apipost_id=56aee5ef70131

**请求方式**

> GET

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 品牌分布数据(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取搜索趋势

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取AI搜索趋势分析**

**接口状态**

> 开发中

**接口URL**

> /analytics/search-trends?period=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /analytics/search-trends?apipost_id=56aee5ef70132

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| period | - | string | 否 | 分析周期 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 搜索趋势数据(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取AI出现指标

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取品牌在AI响应中的出现指标**

**接口状态**

> 开发中

**接口URL**

> /analytics/ai-appearance

| 环境  | URL |
| --- | --- |


**Mock URL**

> /analytics/ai-appearance?apipost_id=56aee5ef70133

**请求方式**

> GET

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* AI出现指标数据(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取竞争对手分析

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取竞争对手分析数据**

**接口状态**

> 开发中

**接口URL**

> /analytics/competitor-analysis?brand_id=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /analytics/competitor-analysis?apipost_id=56aee5ef70134

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| brand_id | - | string | 否 | 品牌ID |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 竞争对手分析数据(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取最近活动

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取最近的系统活动记录**

**接口状态**

> 开发中

**接口URL**

> /analytics/activity?limit=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /analytics/activity?apipost_id=56aee5ef70135

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| limit | - | integer | 否 | 返回数量限制 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 最近活动数据(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# Users

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**用户管理接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取用户列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取系统用户列表（仅管理员）**

**接口状态**

> 开发中

**接口URL**

> /users?page=&page_size=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /users?apipost_id=56aee5ef70137

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 用户列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 创建用户

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**创建新用户（仅管理员）**

**接口状态**

> 开发中

**接口URL**

> /users

| 环境  | URL |
| --- | --- |


**Mock URL**

> /users?apipost_id=56aee5ef70138

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"username": "john_doe",
	"email": "john@example.com",
	"password": "password123",
	"first_name": "John",
	"last_name": "Doe"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| email | john@example.com | string | 否 | - |
| password | password123 | string | 否 | - |
| username | john_doe | string | 否 | - |
| last_name | Doe | string | 否 | - |
| first_name | John | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 用户创建成功(201)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取用户详情

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据ID获取用户详细信息（仅管理员）**

**接口状态**

> 开发中

**接口URL**

> /users/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /users/{id}?apipost_id=56aee5ef70139

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 用户详情(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 更新用户

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**更新用户信息（仅管理员）**

**接口状态**

> 开发中

**接口URL**

> /users/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /users/{id}?apipost_id=56aee5ef7013a

**请求方式**

> PUT

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{
	"username": "john_doe",
	"email": "john@example.com",
	"first_name": "John",
	"last_name": "Doe",
	"role": "user",
	"status": "active"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| role | user | string | 否 | - |
| email | john@example.com | string | 否 | - |
| status | active | string | 否 | - |
| username | john_doe | string | 否 | - |
| last_name | Doe | string | 否 | - |
| first_name | John | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 更新成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 删除用户

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**删除指定用户（仅管理员）**

**接口状态**

> 开发中

**接口URL**

> /users/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /users/{id}?apipost_id=56aee5ef7013b

**请求方式**

> DELETE

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 删除成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# Notifications

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**通知管理接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取通知列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取用户的通知列表**

**接口状态**

> 开发中

**接口URL**

> /notifications?page=&page_size=&unread_only=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /notifications?apipost_id=56aee5ef7013d

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |
| unread_only | - | boolean | 否 | 仅显示未读通知 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 通知列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 删除所有通知

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**删除用户的所有通知**

**接口状态**

> 开发中

**接口URL**

> /notifications

| 环境  | URL |
| --- | --- |


**Mock URL**

> /notifications?apipost_id=56aee5ef7013e

**请求方式**

> DELETE

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 删除成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取通知详情

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据ID获取通知详细信息**

**接口状态**

> 开发中

**接口URL**

> /notifications/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /notifications/{id}?apipost_id=56aee5ef7013f

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 通知详情(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 删除通知

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**删除指定的通知**

**接口状态**

> 开发中

**接口URL**

> /notifications/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /notifications/{id}?apipost_id=56aee5ef70140

**请求方式**

> DELETE

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 删除成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 标记通知为已读

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**将指定通知标记为已读状态**

**接口状态**

> 开发中

**接口URL**

> /notifications/{id}/read

| 环境  | URL |
| --- | --- |


**Mock URL**

> /notifications/{id}/read?apipost_id=56aee5ef70141

**请求方式**

> PUT

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 标记成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 标记所有通知为已读

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**将用户的所有通知标记为已读状态**

**接口状态**

> 开发中

**接口URL**

> /notifications/read-all

| 环境  | URL |
| --- | --- |


**Mock URL**

> /notifications/read-all?apipost_id=56aee5ef70142

**请求方式**

> PUT

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 标记成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取通知设置

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取用户的通知设置**

**接口状态**

> 开发中

**接口URL**

> /notifications/settings

| 环境  | URL |
| --- | --- |


**Mock URL**

> /notifications/settings?apipost_id=56aee5ef70143

**请求方式**

> GET

**Content-Type**

> json

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 通知设置(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 更新通知设置

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**更新用户的通知设置**

**接口状态**

> 开发中

**接口URL**

> /notifications/settings

| 环境  | URL |
| --- | --- |


**Mock URL**

> /notifications/settings?apipost_id=56aee5ef70144

**请求方式**

> PUT

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"email_notifications": true,
	"push_notifications": "",
	"ai_search_notifications": true,
	"brand_alerts": true
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| brand_alerts | true | boolean | 否 | - |
| push_notifications | - | boolean | 否 | - |
| email_notifications | true | boolean | 否 | - |
| ai_search_notifications | true | boolean | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 更新成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# Exports

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**数据导出接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 导出仪表板数据

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**导出仪表板数据为文件**

**接口状态**

> 开发中

**接口URL**

> /exports/dashboard

| 环境  | URL |
| --- | --- |


**Mock URL**

> /exports/dashboard?apipost_id=56aee5ef70146

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"format": "excel",
	"date_range": {
		"start_date": "2025-01-01",
		"end_date": "2025-07-20"
	}
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| format | excel | string | 否 | - |
| date_range.end_date | 2025-07-20 | string | 否 | - |
| date_range.start_date | 2025-01-01 | string | 否 | - |
| date_range | - | object | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 导出任务创建成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 导出分析数据

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**导出分析数据为文件**

**接口状态**

> 开发中

**接口URL**

> /exports/analytics

| 环境  | URL |
| --- | --- |


**Mock URL**

> /exports/analytics?apipost_id=56aee5f370147

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"format": "csv",
	"data_type": "brands",
	"brand_ids": [
		""
	]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| format | csv | string | 否 | - |
| brand_ids.0 | - | array | 否 | 指定品牌ID列表（可选） |
| data_type | brands | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 导出任务创建成功(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 下载导出文件

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**下载已生成的导出文件**

**接口状态**

> 开发中

**接口URL**

> /exports/download/{filename}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /exports/download/{filename}?apipost_id=56aee5f370148

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| filename | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**Query**

## 获取导出历史

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取用户的导出历史记录**

**接口状态**

> 开发中

**接口URL**

> /exports/history?page=&page_size=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /exports/history?apipost_id=56aee5f370149

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码 |
| page_size | - | integer | 否 | 每页数量 |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 导出历史列表(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取导出状态

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**获取导出任务的状态**

**接口状态**

> 开发中

**接口URL**

> /exports/status/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /exports/status/{id}?apipost_id=56aee5f37014a

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 导出状态(200)

```javascript
{
	"success": true,
	"message": "Operation successful",
	"data": {},
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

# Upload

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 上传文件

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 14:48:35

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> /upload/file

| 环境  | URL |
| --- | --- |


**Mock URL**

> /upload/file?apipost_id=56aee5f37014c

**请求方式**

> POST

**Content-Type**

> form-data

**请求Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| file | D:\下载\Polygon6.svg | file | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
暂无数据
```

* 失败(404)

```javascript
暂无数据
```

**Query**

# Blogs

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**博客管理接口**

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取博客列表

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-29 20:15:29

**获取博客列表，支持分页、搜索和筛选**

**接口状态**

> 开发中

**接口URL**

> /blogs?page=&page_size=&status=&category=&search=&brand_id=

| 环境  | URL |
| --- | --- |


**Mock URL**

> /blogs?apipost_id=56aee5f37014e

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| page | - | integer | 否 | 页码（默认：1） |
| page_size | - | integer | 否 | 每页数量（默认：10，最大：100） |
| status | - | string | 否 | 按状态筛选 |
| category | - | string | 否 | 按分类筛选 |
| search | - | string | 否 | 搜索关键词（在标题、摘要、内容中搜索） |
| brand_id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 博客列表获取成功(200)

```javascript
{
	"success": true,
	"message": "Blogs retrieved successfully",
	"data": {
		"blogs": [
			{
				"id": "550e8400-e29b-41d4-a716-446655440000",
				"title": "全能战士登场：英特尔酷睿i5-14600K测评",
				"slug": "intel-i5-14600k-review-1753090027",
				"excerpt": "英特尔酷睿i5-14600K以其出色的性能表现和合理的价格定位，成为中高端装机的热门选择。",
				"content": "# 全能战士登场：英特尔酷睿i5-14600K测评\n\n在这个追求极致性能与性价比并重的时代...",
				"content_html": "<h1>全能战士登场：英特尔酷睿i5-14600K测评</h1><p>在这个追求极致性能与性价比并重的时代...</p>",
				"author": {},
				"category": "硬件评测",
				"tags": [
					""
				],
				"status": "published",
				"featured_image": "/images/i5-14600k-review.jpg",
				"word_count": 1250,
				"reading_time": 6,
				"view_count": 1500,
				"like_count": 85,
				"share_count": 25,
				"comment_count": 12,
				"brand_mentions": {},
				"mention_rate": 65.5,
				"meta_title": "英特尔酷睿i5-14600K深度评测 - 中高端装机首选",
				"meta_description": "深度评测英特尔酷睿i5-14600K处理器的游戏性能和生产力表现，为您的装机选择提供专业建议。",
				"meta_keywords": [
					""
				],
				"published_at": "2025-07-21T09:30:00Z",
				"scheduled_at": "2025-07-22T10:00:00Z",
				"created_at": "2025-07-21T09:00:00Z",
				"updated_at": "2025-07-21T09:30:00Z"
			}
		],
		"pagination": {
			"current_page": 1,
			"page_size": 10,
			"total_items": 25,
			"total_pages": 3
		}
	},
	"timestamp": "2025-07-21T09:30:00Z"
}
```

* 服务器错误(500)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 创建博客

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**创建新的博客文章**

**接口状态**

> 开发中

**接口URL**

> /blogs

| 环境  | URL |
| --- | --- |


**Mock URL**

> /blogs?apipost_id=56aee5f37014f

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"title": "全能战士登场：英特尔酷睿i5-14600K测评",
	"slug": "intel-i5-14600k-review",
	"excerpt": "英特尔酷睿i5-14600K以其出色的性能表现和合理的价格定位，成为中高端装机的热门选择。",
	"content": "# 全能战士登场：英特尔酷睿i5-14600K测评\n\n在这个追求极致性能与性价比并重的时代，英特尔酷睿i5-14600K以其出色的表现赢得了广泛关注。\n\n## 性能表现\n\n### 游戏性能\n\n在游戏性能方面，i5-14600K表现出色：\n- **《赛博朋克2077》**: 1080p高画质下平均帧率达到85fps\n- **《战地2042》**: 1440p中高画质稳定在120fps以上\n\n## 总结\n\n英特尔酷睿i5-14600K凭借其出色的单核性能、优秀的多核表现以及合理的价格定位，无疑是当前中高端装机的最佳选择之一。",
	"author": {},
	"category": "硬件评测",
	"tags": [
		""
	],
	"status": "published",
	"featured_image": "/images/i5-14600k-review.jpg",
	"meta_title": "英特尔酷睿i5-14600K深度评测 - 中高端装机首选",
	"meta_description": "深度评测英特尔酷睿i5-14600K处理器的游戏性能和生产力表现，为您的装机选择提供专业建议。",
	"meta_keywords": [
		""
	]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| author | {"avatar":"/avatars/harry.jpg","email":"harry@geok.com","name":"Harry"} | object | 否 | 作者信息（JSON格式） |
| category | 硬件评测 | string | 否 | 博客分类 |
| content | # 全能战士登场：英特尔酷睿i5-14600K测评在这个追求极致性能与性价比并重的时代，英特尔酷睿i5-14600K以其出色的表现赢得了广泛关注。## 性能表现### 游戏性能在游戏性能方面，i5-14600K表现出色：- **《赛博朋克2077》**: 1080p高画质下平均帧率达到85fps- **《战地2042》**: 1440p中高画质稳定在120fps以上## 总结英特尔酷睿i5-14600K凭借其出色的单核性能、优秀的多核表现以及合理的价格定位，无疑是当前中高端装机的最佳选择之一。 | string | 否 | 博客正文内容（Markdown格式） |
| excerpt | 英特尔酷睿i5-14600K以其出色的性能表现和合理的价格定位，成为中高端装机的热门选择。 | string | 否 | 博客摘要 |
| featured_image | /images/i5-14600k-review.jpg | string | 否 | 特色图片URL |
| meta_description | 深度评测英特尔酷睿i5-14600K处理器的游戏性能和生产力表现，为您的装机选择提供专业建议。 | string | 否 | SEO描述 |
| meta_keywords.0 | - | array | 否 | SEO关键词 |
| meta_title | 英特尔酷睿i5-14600K深度评测 - 中高端装机首选 | string | 否 | SEO标题 |
| slug | intel-i5-14600k-review | string | 否 | 博客URL别名（可选，不提供时自动生成） |
| status | published | string | 否 | 博客状态 |
| tags.0 | - | array | 否 | 博客标签 |
| title | 全能战士登场：英特尔酷睿i5-14600K测评 | string | 否 | 博客标题 |

**认证方式**

> 继承父级

**响应示例**

* 博客创建成功(201)

```javascript
{
	"success": true,
	"message": "Blog created successfully",
	"data": {
		"blog": {
			"id": "550e8400-e29b-41d4-a716-446655440000",
			"title": "全能战士登场：英特尔酷睿i5-14600K测评",
			"slug": "intel-i5-14600k-review-1753090027",
			"excerpt": "英特尔酷睿i5-14600K以其出色的性能表现和合理的价格定位，成为中高端装机的热门选择。",
			"content": "# 全能战士登场：英特尔酷睿i5-14600K测评\n\n在这个追求极致性能与性价比并重的时代...",
			"content_html": "<h1>全能战士登场：英特尔酷睿i5-14600K测评</h1><p>在这个追求极致性能与性价比并重的时代...</p>",
			"author": {},
			"category": "硬件评测",
			"tags": [
				""
			],
			"status": "published",
			"featured_image": "/images/i5-14600k-review.jpg",
			"word_count": 1250,
			"reading_time": 6,
			"view_count": 1500,
			"like_count": 85,
			"share_count": 25,
			"comment_count": 12,
			"brand_mentions": {},
			"mention_rate": 65.5,
			"meta_title": "英特尔酷睿i5-14600K深度评测 - 中高端装机首选",
			"meta_description": "深度评测英特尔酷睿i5-14600K处理器的游戏性能和生产力表现，为您的装机选择提供专业建议。",
			"meta_keywords": [
				""
			],
			"published_at": "2025-07-21T09:30:00Z",
			"scheduled_at": "2025-07-22T10:00:00Z",
			"created_at": "2025-07-21T09:00:00Z",
			"updated_at": "2025-07-21T09:30:00Z"
		}
	},
	"timestamp": "2025-07-21T09:30:00Z"
}
```

* 请求参数错误(400)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 未授权(401)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 服务器错误(500)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 获取博客详情

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**根据ID或slug获取博客详情**

**接口状态**

> 开发中

**接口URL**

> /blogs/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /blogs/{id}?apipost_id=56aee5f370150

**请求方式**

> GET

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 博客详情获取成功(200)

```javascript
{
	"success": true,
	"message": "Blog retrieved successfully",
	"data": {
		"blog": {
			"id": "550e8400-e29b-41d4-a716-446655440000",
			"title": "全能战士登场：英特尔酷睿i5-14600K测评",
			"slug": "intel-i5-14600k-review-1753090027",
			"excerpt": "英特尔酷睿i5-14600K以其出色的性能表现和合理的价格定位，成为中高端装机的热门选择。",
			"content": "# 全能战士登场：英特尔酷睿i5-14600K测评\n\n在这个追求极致性能与性价比并重的时代...",
			"content_html": "<h1>全能战士登场：英特尔酷睿i5-14600K测评</h1><p>在这个追求极致性能与性价比并重的时代...</p>",
			"author": {},
			"category": "硬件评测",
			"tags": [
				""
			],
			"status": "published",
			"featured_image": "/images/i5-14600k-review.jpg",
			"word_count": 1250,
			"reading_time": 6,
			"view_count": 1500,
			"like_count": 85,
			"share_count": 25,
			"comment_count": 12,
			"brand_mentions": {},
			"mention_rate": 65.5,
			"meta_title": "英特尔酷睿i5-14600K深度评测 - 中高端装机首选",
			"meta_description": "深度评测英特尔酷睿i5-14600K处理器的游戏性能和生产力表现，为您的装机选择提供专业建议。",
			"meta_keywords": [
				""
			],
			"published_at": "2025-07-21T09:30:00Z",
			"scheduled_at": "2025-07-22T10:00:00Z",
			"created_at": "2025-07-21T09:00:00Z",
			"updated_at": "2025-07-21T09:30:00Z"
		}
	},
	"timestamp": "2025-07-21T09:30:00Z"
}
```

* 博客不存在(404)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 服务器错误(500)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 更新博客

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**更新指定ID的博客**

**接口状态**

> 开发中

**接口URL**

> /blogs/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /blogs/{id}?apipost_id=56aee5f370151

**请求方式**

> PUT

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{
	"title": "全能战士登场：英特尔酷睿i5-14600K深度评测（更新版）",
	"slug": "intel-i5-14600k-review-updated",
	"excerpt": "英特尔酷睿i5-14600K深度评测更新版，包含最新的性能测试数据和装机建议。",
	"content": "# 全能战士登场：英特尔酷睿i5-14600K深度评测（更新版）\n\n更新了最新的测试数据...",
	"author": {},
	"category": "硬件评测",
	"tags": [
		""
	],
	"status": "published",
	"featured_image": "/images/i5-14600k-review-updated.jpg",
	"meta_title": "英特尔酷睿i5-14600K深度评测（更新版） - 最新性能数据",
	"meta_description": "最新更新的英特尔酷睿i5-14600K评测，包含详细的性能测试数据和专业装机建议。",
	"meta_keywords": [
		""
	]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| author | {"avatar":"/avatars/harry.jpg","email":"harry@geok.com","name":"Harry"} | object | 否 | 作者信息（JSON格式） |
| category | 硬件评测 | string | 否 | 博客分类 |
| content | # 全能战士登场：英特尔酷睿i5-14600K深度评测（更新版）更新了最新的测试数据... | string | 否 | 博客正文内容（Markdown格式） |
| excerpt | 英特尔酷睿i5-14600K深度评测更新版，包含最新的性能测试数据和装机建议。 | string | 否 | 博客摘要 |
| featured_image | /images/i5-14600k-review-updated.jpg | string | 否 | 特色图片URL |
| meta_description | 最新更新的英特尔酷睿i5-14600K评测，包含详细的性能测试数据和专业装机建议。 | string | 否 | SEO描述 |
| meta_keywords.0 | - | array | 否 | SEO关键词 |
| meta_title | 英特尔酷睿i5-14600K深度评测（更新版） - 最新性能数据 | string | 否 | SEO标题 |
| slug | intel-i5-14600k-review-updated | string | 否 | 博客URL别名 |
| status | published | string | 否 | 博客状态 |
| tags.0 | - | array | 否 | 博客标签 |
| title | 全能战士登场：英特尔酷睿i5-14600K深度评测（更新版） | string | 否 | 博客标题 |

**认证方式**

> 继承父级

**响应示例**

* 博客更新成功(200)

```javascript
{
	"success": true,
	"message": "Blog updated successfully",
	"data": {
		"blog": {
			"id": "550e8400-e29b-41d4-a716-446655440000",
			"title": "全能战士登场：英特尔酷睿i5-14600K测评",
			"slug": "intel-i5-14600k-review-1753090027",
			"excerpt": "英特尔酷睿i5-14600K以其出色的性能表现和合理的价格定位，成为中高端装机的热门选择。",
			"content": "# 全能战士登场：英特尔酷睿i5-14600K测评\n\n在这个追求极致性能与性价比并重的时代...",
			"content_html": "<h1>全能战士登场：英特尔酷睿i5-14600K测评</h1><p>在这个追求极致性能与性价比并重的时代...</p>",
			"author": {},
			"category": "硬件评测",
			"tags": [
				""
			],
			"status": "published",
			"featured_image": "/images/i5-14600k-review.jpg",
			"word_count": 1250,
			"reading_time": 6,
			"view_count": 1500,
			"like_count": 85,
			"share_count": 25,
			"comment_count": 12,
			"brand_mentions": {},
			"mention_rate": 65.5,
			"meta_title": "英特尔酷睿i5-14600K深度评测 - 中高端装机首选",
			"meta_description": "深度评测英特尔酷睿i5-14600K处理器的游戏性能和生产力表现，为您的装机选择提供专业建议。",
			"meta_keywords": [
				""
			],
			"published_at": "2025-07-21T09:30:00Z",
			"scheduled_at": "2025-07-22T10:00:00Z",
			"created_at": "2025-07-21T09:00:00Z",
			"updated_at": "2025-07-21T09:30:00Z"
		}
	},
	"timestamp": "2025-07-21T09:30:00Z"
}
```

* 博客不存在(404)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 请求参数错误(400)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 未授权(401)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 服务器错误(500)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**

## 删除博客

> 创建人: devin

> 更新人: devin

> 创建时间: 2025-07-26 12:45:43

> 更新时间: 2025-07-26 12:45:43

**删除指定ID的博客**

**接口状态**

> 开发中

**接口URL**

> /blogs/{id}

| 环境  | URL |
| --- | --- |


**Mock URL**

> /blogs/{id}?apipost_id=56aee5f370152

**请求方式**

> DELETE

**Content-Type**

> json

**路径变量**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | - | string | 是 | - |

**请求Body参数**

```javascript
{}
```

**认证方式**

> 继承父级

**响应示例**

* 博客删除成功(200)

```javascript
{
	"success": true,
	"message": "Blog deleted successfully",
	"timestamp": "2025-07-21T09:30:00Z"
}
```

* 博客不存在(404)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 未授权(401)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

* 服务器错误(500)

```javascript
{
	"success": "",
	"message": "Error message",
	"error": "Detailed error information",
	"timestamp": "2025-07-20T21:56:01Z"
}
```

**Query**
