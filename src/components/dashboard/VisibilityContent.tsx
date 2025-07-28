'use client'

import { useState, useEffect } from 'react'
import { useBrandVisibilityTrend, useVisibilityStats, useBrandVisibilityReport } from '@/hooks/useAIVisibility'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { aiVisibilityUtils } from '@/services/ai-visibility'

export function VisibilityContent() {
  // 假设当前品牌ID，实际应该从用户上下文或路由参数获取
  const [currentBrandId] = useState('4fc86ecb-8e0e-476b-8826-bf4dc95fce0d')
  
  // 使用AI Visibility相关的hooks
  const { trend, loading: trendLoading, error: trendError } = useBrandVisibilityTrend(currentBrandId, { days: 30 })
  const { stats, loading: statsLoading, error: statsError } = useVisibilityStats(currentBrandId)
  const { report, loading: reportLoading, error: reportError } = useBrandVisibilityReport(currentBrandId)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">品牌AI可见性分析</h1>
      
      {/* 可见性统计卡片 */}
      <Card>
        <CardHeader>
          <CardTitle>可见性统计</CardTitle>
        </CardHeader>
        <CardContent>
          {statsLoading ? (
            <div className="animate-pulse">加载中...</div>
          ) : statsError ? (
            <div className="text-red-500">错误: {statsError}</div>
          ) : stats ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {stats.total_metrics}
                </div>
                <div className="text-sm text-gray-600">总指标数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {aiVisibilityUtils.formatVisibilityScore(stats.average_score)}
                </div>
                <div className="text-sm text-gray-600">平均得分</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {new Date(stats.timestamp).toLocaleDateString('zh-CN')}
                </div>
                <div className="text-sm text-gray-600">更新时间</div>
              </div>
            </div>
          ) : (
            <div>暂无数据</div>
          )}
        </CardContent>
      </Card>

      {/* 可见性趋势图表 */}
      <Card>
        <CardHeader>
          <CardTitle>30天可见性趋势</CardTitle>
        </CardHeader>
        <CardContent>
          {trendLoading ? (
            <div className="animate-pulse">加载中...</div>
          ) : trendError ? (
            <div className="text-red-500">错误: {trendError}</div>
          ) : trend && trend.trend.length > 0 ? (
            <div>
              <div className="mb-4">
                <div className="text-sm text-gray-600">
                  {aiVisibilityUtils.formatDateRange(trend.summary.date_range_start, trend.summary.date_range_end)}
                </div>
                <div className="text-lg font-semibold mt-2">
                  {aiVisibilityUtils.generateTrendAnalysis(trend.trend)}
                </div>
              </div>
              <div className="space-y-2">
                {trend.trend.slice(-5).map((metric, index) => (
                  <div key={metric.id || index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div className="text-sm">
                      {new Date(metric.calculated_at || '').toLocaleDateString('zh-CN')}
                    </div>
                    <div className={`text-lg font-semibold ${
                      aiVisibilityUtils.getScoreLevel(metric.overall_score || '') === 'excellent' ? 'text-green-600' :
                      aiVisibilityUtils.getScoreLevel(metric.overall_score || '') === 'good' ? 'text-blue-600' :
                      aiVisibilityUtils.getScoreLevel(metric.overall_score || '') === 'average' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {aiVisibilityUtils.formatVisibilityScore(metric.overall_score || '')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>暂无趋势数据</div>
          )}
        </CardContent>
      </Card>

      {/* 可见性报告 */}
      <Card>
        <CardHeader>
          <CardTitle>综合可见性报告</CardTitle>
        </CardHeader>
        <CardContent>
          {reportLoading ? (
            <div className="animate-pulse">加载中...</div>
          ) : reportError ? (
            <div className="text-red-500">错误: {reportError}</div>
          ) : report ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">报告日期</h3>
                <p className="text-gray-600">{new Date(report.report_date).toLocaleDateString('zh-CN')}</p>
              </div>
              {report.recommendations && report.recommendations.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">优化建议</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {report.recommendations.map((rec, index) => (
                      <li key={index} className="text-gray-600">{rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div>暂无报告数据</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 