'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]} ${className}`} />
  )
}

export function LoadingCard({ title, height = 'h-[300px]' }: { title?: string; height?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-300 p-6 ${height} flex flex-col items-center justify-center`}>
      <LoadingSpinner size="lg" className="mb-4" />
      {title && <p className="text-sm text-gray-600">{title}</p>}
    </div>
  )
}

export function LoadingPage() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
      {/* 搜索区域骨架 */}
      <div className="bg-white rounded-lg border border-gray-300 p-4 md:p-6 mb-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* 图表区域骨架 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-1">
          <LoadingCard title="加载图表中..." height="h-[523px]" />
        </div>
        <div className="xl:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LoadingCard height="h-[326px]" />
            <LoadingCard height="h-[326px]" />
          </div>
          <LoadingCard height="h-[280px]" />
        </div>
      </div>
    </div>
  )
} 