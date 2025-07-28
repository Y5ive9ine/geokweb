'use client'

import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useBlogs } from '@/hooks/useBlogs'
import { Blog } from '@/lib/types'
import AIContentGenerator from '@/components/AIContentGenerator'
import DocumentEditor from '@/components/DocumentEditor'
import Pagination from '@/components/Pagination'
import { AIContentGenerationResponse, blogApi } from '@/services/blog'
import { useToast } from '@/hooks/useToast'

// 品牌文章弹窗组件
const ArticleModal = ({
  isOpen,
  onClose,
  blog,
  onBlogUpdated,
}: {
  isOpen: boolean
  onClose: () => void
  blog?: Blog | null
  onBlogUpdated?: () => void
}) => {
  const [mounted, setMounted] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(blog || null)
  const [isLoadingBlog, setIsLoadingBlog] = useState(false)
  const { success, error } = useToast()

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // 同步blog数据
  useEffect(() => {
    setCurrentBlog(blog || null)
  }, [blog])

  // 重置编辑状态当弹窗关闭时
  useEffect(() => {
    if (!isOpen) {
      setIsEditing(false)
    }
  }, [isOpen])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const reloadBlogData = async () => {
    if (!currentBlog?.id) return

    console.log('重新加载博客数据，ID:', currentBlog.id)
    setIsLoadingBlog(true)
    try {
      const response = await blogApi.getBlog(currentBlog.id)
      console.log('重新加载博客响应:', response)
      if (response.success && response.data) {
        // API返回的数据结构是 { data: { blog: {...} } }
        const blogData = response.data.blog || response.data
        console.log('设置新的博客数据:', blogData)
        setCurrentBlog(blogData)
      } else {
        console.error('重新加载博客失败:', response)
        error('加载失败', response.error || '无法重新加载博客数据')
      }
    } catch (err) {
      console.error('重新加载博客数据失败:', err)
      error('加载失败', '无法重新加载博客数据')
    } finally {
      setIsLoadingBlog(false)
    }
  }

  const handleSave = async (title: string, content: string) => {
    if (!currentBlog?.id) {
      throw new Error('博客ID不存在')
    }

    try {
      const response = await blogApi.updateBlog(currentBlog.id, {
        title,
        content,
      })

      if (response.success) {
        setIsEditing(false)
        onBlogUpdated?.()
        success('保存成功', '文档已成功保存')
        // 重新加载博客数据以显示最新内容
        await reloadBlogData()
      } else {
        throw new Error(response.error || '保存失败')
      }
    } catch (error) {
      console.error('保存博客失败:', error)
      throw error
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  if (!isOpen || !mounted) return null

  const modalContent = (
    <>
      {/* 轻微的背景遮罩，让弹窗突出但保持背景可见 */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <div
          className="bg-white rounded-xl md:rounded-[20px] w-full max-w-4xl h-full max-h-[90vh] md:h-[730px] relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-gray-200 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 弹窗内容 */}
          <div className="p-4 md:p-8 h-full flex flex-col">
            {/* 标题区域 */}
            <div className="flex items-center justify-between mb-4 md:mb-8">
              <h2 className="text-xl md:text-3xl font-medium text-gray-800">
                品牌文章
              </h2>

              {/* 编辑按钮 */}
              <button
                onClick={handleEdit}
                className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg text-sm md:text-lg font-normal flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.375 16.625H4.75L13.375 8L11 5.625L2.375 14.25V16.625ZM15.625 2.375C15.8571 2.14286 15.9881 1.83929 15.9881 1.52083C15.9881 1.20238 15.8571 0.898809 15.625 0.666667C15.3929 0.434524 15.0893 0.303571 14.7708 0.303571C14.4524 0.303571 14.1488 0.434524 13.9167 0.666667L12.1667 2.41667L14.5417 4.79167L15.625 2.375Z"
                    fill="white"
                  />
                </svg>
                <span>编 辑</span>
              </button>
            </div>

            {/* 内容区域 */}
            <div className="bg-white border border-gray-800 rounded-lg flex-1 overflow-hidden">
              {isEditing ? (
                /* 编辑模式 */
                <DocumentEditor
                  initialTitle={currentBlog?.title || ''}
                  initialContent={currentBlog?.content || ''}
                  onSave={handleSave}
                  onCancel={handleCancelEdit}
                  isLoading={isLoadingBlog}
                />
              ) : (
                /* 查看模式 */
                <div className="p-4 md:p-6 flex flex-col md:flex-row h-full relative">
                  {/* 加载指示器 */}
                  {isLoadingBlog && (
                    <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="animate-spin h-5 w-5 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span className="text-sm text-gray-600">
                          正在加载最新内容...
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 文字内容 */}
                  <div className="flex-1 md:pr-6">
                    {/* 文章标题 */}
                    <h3 className="text-lg md:text-2xl font-black text-gray-800 leading-relaxed mb-4 md:mb-6">
                      {currentBlog?.title ||
                        '千元级性能王者: 英特尔酷睿i5-14600KF全面解析'}
                    </h3>

                    {/* 作者信息 */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
                      <div className="flex items-center space-x-2">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="9"
                            cy="5"
                            r="3"
                            stroke="#999999"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M3 16.5C3 13.186 5.686 10.5 9 10.5s6 2.686 6 6"
                            stroke="#999999"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span className="text-xs text-gray-500">
                          {blog?.author?.name || 'Marco'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="14"
                            height="12"
                            rx="2"
                            stroke="#999999"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M3 8h14"
                            stroke="#999999"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M7 2v4M13 2v4"
                            stroke="#999999"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span className="text-xs text-gray-500">
                          {currentBlog?.published_at
                            ? new Date(
                                currentBlog.published_at
                              ).toLocaleDateString('zh-CN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })
                            : '2025年6月10日'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg
                          width="23"
                          height="19"
                          viewBox="0 0 23 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2h19l-2 13H4L2 2zm0 0L1 1"
                            stroke="#999999"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M7 8h8M7 11h6"
                            stroke="#999999"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span className="text-xs text-gray-500">
                          {currentBlog?.category || '科技测评'}
                        </span>
                      </div>
                    </div>

                    {/* 文章正文 */}
                    <div className="text-sm text-gray-900 leading-relaxed overflow-y-auto flex-1">
                      {currentBlog?.excerpt && (
                        <p className="mb-4 font-medium text-gray-600">
                          {currentBlog.excerpt}
                        </p>
                      )}

                      {currentBlog?.content && (
                        <div className="prose prose-sm max-w-none">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              h1: ({ children }) => (
                                <h1 className="text-xl font-bold mb-4 text-gray-900">
                                  {children}
                                </h1>
                              ),
                              h2: ({ children }) => (
                                <h2 className="text-lg font-semibold mb-3 text-gray-900">
                                  {children}
                                </h2>
                              ),
                              h3: ({ children }) => (
                                <h3 className="text-base font-medium mb-2 text-gray-900">
                                  {children}
                                </h3>
                              ),
                              p: ({ children }) => (
                                <p className="mb-3 text-gray-900 leading-relaxed">
                                  {children}
                                </p>
                              ),
                              ul: ({ children }) => (
                                <ul className="list-disc list-inside mb-3 text-gray-900">
                                  {children}
                                </ul>
                              ),
                              ol: ({ children }) => (
                                <ol className="list-decimal list-inside mb-3 text-gray-900">
                                  {children}
                                </ol>
                              ),
                              li: ({ children }) => (
                                <li className="mb-1 text-gray-900">
                                  {children}
                                </li>
                              ),
                              strong: ({ children }) => (
                                <strong className="font-semibold text-gray-900">
                                  {children}
                                </strong>
                              ),
                              em: ({ children }) => (
                                <em className="italic text-gray-900">
                                  {children}
                                </em>
                              ),
                              code: ({ children }) => (
                                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-pink-600">
                                  {children}
                                </code>
                              ),
                              pre: ({ children }) => (
                                <pre className="bg-gray-100 p-3 rounded mb-3 overflow-x-auto">
                                  {children}
                                </pre>
                              ),
                              blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-blue-600 pl-4 mb-3 text-gray-600 italic">
                                  {children}
                                </blockquote>
                              ),
                              table: ({ children }) => (
                                <table className="w-full border-collapse border border-gray-200 mb-3">
                                  {children}
                                </table>
                              ),
                              th: ({ children }) => (
                                <th className="border border-gray-200 px-3 py-2 bg-gray-100 text-left font-medium">
                                  {children}
                                </th>
                              ),
                              td: ({ children }) => (
                                <td className="border border-gray-200 px-3 py-2">
                                  {children}
                                </td>
                              ),
                            }}
                          >
                            {currentBlog.content}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )

  // 使用Portal将弹窗渲染到document.body下，绕过页面容器限制
  return createPortal(modalContent, document.body)
}

export function AIContentGenerationContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [isAIGeneratorOpen, setIsAIGeneratorOpen] = useState(false)

  // 分页状态
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  // 使用useMemo稳定参数，避免无限重新渲染
  const blogParams = useMemo(
    () => ({
      page: currentPage,
      page_size: pageSize,
      status: 'published' as const,
    }),
    [currentPage]
  )

  // 使用blogs hook获取数据
  const { blogs, loading, error, refresh, pagination } = useBlogs(blogParams)

  // 添加调试信息
  useEffect(() => {
    console.log('Blogs data updated:', {
      blogsLength: blogs?.length,
      blogsArray: blogs,
      loading,
      error,
      blogsType: typeof blogs,
      isArray: Array.isArray(blogs),
    })
  }, [blogs, loading, error])

  const handleArticleClick = (blog?: Blog) => {
    setSelectedBlog(blog || null)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedBlog(null)
  }

  const handleBlogUpdated = () => {
    refresh() // 刷新博客列表
  }

  const handleOpenAIGenerator = () => {
    setIsAIGeneratorOpen(true)
  }

  const handleCloseAIGenerator = () => {
    setIsAIGeneratorOpen(false)
  }

  const handleContentGenerated = (content: AIContentGenerationResponse) => {
    console.log('Generated content:', content)
    // 可以在这里处理生成的内容，比如显示预览或直接创建博客
  }

  const handleBlogCreated = () => {
    // 刷新博客列表
    refresh()
  }

  // 分页处理函数
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* 搜索和筛选区域 */}
        <div className="bg-white rounded-lg border border-gray-300 p-4 md:p-6">
          {/* Blogs数据库标题 */}
          <div className="mb-4">
            <h1 className="text-lg md:text-xl font-bold text-gray-800">Blogs 数据库</h1>
            <p className="text-xs md:text-sm font-medium text-gray-800">构建客户搜索内容数据库</p>
          </div>

          {/* 按钮区域 */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-normal transition-colors">
              查询
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-normal transition-colors">
              下载/导出
            </button>
            {/* <button 
              onClick={handleOpenAIGenerator}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-normal transition-colors"
            >
              AI生成内容
            </button> */}
          </div>

          {/* 筛选选项 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>最近7日</option>
              <option>最近30日</option>
              <option>最近90日</option>
            </select>
            <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>排序方式：主题</option>
              <option>排序方式：日期</option>
            </select>
            <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>区域选择</option>
              <option>全球</option>
              <option>中国</option>
            </select>
            <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>话题筛选</option>
              <option>科技</option>
              <option>商业</option>
            </select>
            <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>AI平台选择</option>
              <option>ChatGPT</option>
              <option>Claude</option>
            </select>
          </div>
        </div>

        {/* 文章列表区域 */}
        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
          {/* 表头 */}
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium text-gray-700">
              <div className="md:col-span-1">文章标题</div>
              <div className="hidden md:block text-center">GEOK</div>
              <div className="hidden md:block text-center">提及率</div>
            </div>
          </div>

          {/* 文章数据行容器 */}
          <div className="min-h-[500px]">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>加载中...</span>
                </div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-96">
                <div className="text-center text-red-500">
                  <div className="mb-2">加载失败: {error}</div>
                  <button
                    onClick={refresh}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                  >
                    重试
                  </button>
                </div>
              </div>
            ) : blogs?.length === 0 ? (
              <div className="flex items-center justify-center h-96">
                <div className="text-center text-gray-600">
                  <div className="mb-2">暂无文章数据</div>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {/* 表格内容 */}
                {blogs?.map((blog, index) => (
                  <div
                    key={blog.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start md:items-center">
                      {/* 文章信息 */}
                      <div className="md:col-span-1">
                        <h3
                          className="text-gray-900 text-base md:text-lg font-semibold leading-normal mb-2 cursor-pointer hover:text-blue-600 transition-colors"
                          onClick={() => handleArticleClick(blog)}
                        >
                          {blog.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-2 space-y-1 sm:space-y-0 sm:space-x-4">
                          <span className="text-gray-700 text-xs underline">
                            {blog.author?.name || '未知作者'}
                          </span>
                          <span className="text-gray-700 text-xs underline">
                            {blog.published_at
                              ? new Date(blog.published_at).toLocaleDateString(
                                  'zh-CN'
                                )
                              : blog.created_at
                              ? new Date(blog.created_at).toLocaleDateString(
                                  'zh-CN'
                                )
                              : '未知日期'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-normal">
                          {blog.excerpt ||
                            blog.content?.substring(0, 100) + '...' ||
                            '暂无描述'}
                        </p>
                      </div>

                      {/* GEOK */}
                      <div className="flex justify-start md:justify-center">
                        <div className="bg-blue-100 rounded-lg px-3 py-2 inline-flex items-center">
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <g clipPath={`url(#clip0_332_2268_${blog.id})`}>
                              <path
                                d="M9.69145 11.4869L1.07716 7.39009C0.784128 7.27659 0.532274 7.07712 0.354673 6.81788C0.177073 6.55864 0.0820313 6.25174 0.0820312 5.9375C0.0820313 5.62325 0.177073 5.31636 0.354673 5.05711C0.532274 4.79787 0.784128 4.5984 1.07716 4.48491L9.69145 0.388056C10.1026 0.197084 10.5505 0.0981445 11.0038 0.0981445C11.4572 0.0981445 11.9051 0.197084 12.3162 0.388056L20.9305 4.48491C21.2236 4.5984 21.4754 4.79787 21.653 5.05711C21.8306 5.31636 21.9257 5.62325 21.9257 5.9375C21.9257 6.25174 21.8306 6.55864 21.653 6.81788C21.4754 7.07712 21.2236 7.27659 20.9305 7.39009L12.3162 11.4869C11.9051 11.6779 11.4572 11.7768 11.0038 11.7768C10.5505 11.7768 10.1026 11.6779 9.69145 11.4869Z"
                                fill="#2663FF"
                              />
                              <path
                                d="M11.0039 16.9662C10.3772 16.9664 9.75898 16.8225 9.19688 16.5456L0.746156 12.3475C0.594687 12.2888 0.457124 12.1992 0.34225 12.0843C0.227376 11.9695 0.137717 11.8319 0.0789981 11.6805C0.0202789 11.529 -0.00620962 11.367 0.00122396 11.2047C0.00865755 11.0424 0.0498499 10.8835 0.12217 10.738C0.194491 10.5926 0.29635 10.4638 0.421244 10.3599C0.546137 10.256 0.69132 10.1793 0.84752 10.1347C1.00372 10.0901 1.16751 10.0786 1.32842 10.1009C1.48933 10.1231 1.64383 10.1787 1.78205 10.264L10.225 14.4621C10.4677 14.58 10.734 14.6412 11.0039 14.6412C11.2737 14.6412 11.54 14.58 11.7827 14.4621L20.2335 10.264C20.3717 10.1787 20.5262 10.1231 20.6871 10.1009C20.848 10.0786 21.0118 10.0901 21.168 10.1347C21.3242 10.1793 21.4694 10.256 21.5943 10.3599C21.7192 10.4638 21.821 10.5926 21.8933 10.738C21.9657 10.8835 22.0068 11.0424 22.0143 11.2047C22.0217 11.367 21.9952 11.529 21.9365 11.6805C21.8778 11.8319 21.7881 11.9695 21.6733 12.0843C21.5584 12.1992 21.4208 12.2888 21.2693 12.3475L12.8108 16.5456C12.2489 16.8229 11.6305 16.9669 11.0039 16.9662Z"
                                fill="#2663FF"
                              />
                              <path
                                d="M11.0039 21.9042C10.3772 21.9049 9.75884 21.7609 9.19688 21.4836L0.746156 17.2855C0.594687 17.2268 0.457124 17.1372 0.34225 17.0223C0.227376 16.9075 0.137717 16.7699 0.0789981 16.6184C0.0202789 16.467 -0.00620962 16.3049 0.00122396 16.1427C0.00865755 15.9804 0.0498499 15.8215 0.12217 15.676C0.194491 15.5305 0.29635 15.4018 0.421244 15.2979C0.546137 15.194 0.69132 15.1173 0.84752 15.0727C1.00372 15.0281 1.16751 15.0166 1.32842 15.0389C1.48933 15.0611 1.64383 15.1167 1.78205 15.202L10.225 19.4001C10.4671 19.5199 10.7337 19.5823 11.0039 19.5823C11.274 19.5823 11.5406 19.5199 11.7827 19.4001L20.2335 15.202C20.3717 15.1167 20.5262 15.0611 20.6871 15.0389C20.848 15.0166 21.0118 15.0281 21.168 15.0727C21.3242 15.1173 21.4694 15.194 21.5943 15.2979C21.7192 15.4018 21.821 15.5305 21.8933 15.676C21.9657 15.8215 22.0068 15.9804 22.0143 16.1427C22.0217 16.3049 21.9952 16.467 21.9365 16.6184C21.8778 16.7699 21.7881 16.9075 21.6733 17.0223C21.5584 17.1372 21.4208 17.2268 21.2693 17.2855L12.8108 21.4836C12.2489 21.7609 11.6305 21.9049 11.0039 21.9042Z"
                                fill="#2663FF"
                              />
                            </g>
                            <defs>
                              <clipPath id={`clip0_332_2268_${blog.id}`}>
                                <rect width="22" height="22" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-blue-600 text-xs font-medium">
                            EXAMINE
                          </span>
                        </div>
                      </div>

                      {/* 提及率 */}
                      <div className="flex justify-start md:justify-center">
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-800 text-base md:text-lg font-normal">
                            {blog.mention_rate
                              ? `${blog.mention_rate.toFixed(1)}%`
                              : `${(Math.random() * 100).toFixed(1)}%`}
                          </span>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-medium text-green-500">
                              +{(Math.random() * 5).toFixed(1)}%
                            </span>
                            {/* 趋势箭头 */}
                            <svg
                              width="14"
                              height="8"
                              viewBox="0 0 14 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7 0L14 8H0L7 0Z" fill="#10b981" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 分页组件 */}
          {!loading &&
            !error &&
            blogs &&
            blogs.length > 0 &&
            pagination &&
            pagination.total_pages > 1 && (
              <div className="bg-white rounded-b-lg border-t border-gray-200">
                <Pagination
                  currentPage={pagination.current_page}
                  totalPages={pagination.total_pages}
                  totalItems={pagination.total_items}
                  pageSize={pagination.page_size}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
        </div>

        {/* 弹窗 */}
        <ArticleModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          blog={selectedBlog}
          onBlogUpdated={handleBlogUpdated}
        />

        {/* AI内容生成器 */}
        <AIContentGenerator
          isOpen={isAIGeneratorOpen}
          onClose={handleCloseAIGenerator}
          onContentGenerated={handleContentGenerated}
          onBlogCreated={handleBlogCreated}
        />

      </div>
    </div>
  )
} 