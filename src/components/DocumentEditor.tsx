"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useToast } from "@/hooks/useToast";

interface DocumentEditorProps {
  initialContent: string;
  initialTitle: string;
  onSave: (title: string, content: string) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function DocumentEditor({
  initialContent,
  initialTitle,
  onSave,
  onCancel,
  isLoading = false,
}: DocumentEditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { success, error } = useToast();

  // 移除自动调整高度，使用固定高度和滚动

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      error("保存失败", "标题和内容不能为空");
      return;
    }

    setIsSaving(true);
    try {
      await onSave(title.trim(), content.trim());
      success("保存成功", "文档已成功保存");
    } catch (err) {
      console.error("保存失败:", err);
      error(
        "保存失败",
        err instanceof Error ? err.message : "保存时发生错误，请重试"
      );
    } finally {
      setIsSaving(false);
    }
  };

  const insertMarkdown = (before: string, after: string = "") => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    const newText = before + selectedText + after;
    const newContent =
      content.substring(0, start) + newText + content.substring(end);

    setContent(newContent);

    // 重新设置光标位置
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const toolbarButtons = [
    {
      icon: "B",
      title: "粗体",
      action: () => insertMarkdown("**", "**"),
      className: "font-bold",
    },
    {
      icon: "I",
      title: "斜体",
      action: () => insertMarkdown("*", "*"),
      className: "italic",
    },
    {
      icon: "H1",
      title: "标题1",
      action: () => insertMarkdown("# "),
    },
    {
      icon: "H2",
      title: "标题2",
      action: () => insertMarkdown("## "),
    },
    {
      icon: "H3",
      title: "标题3",
      action: () => insertMarkdown("### "),
    },
    {
      icon: "•",
      title: "无序列表",
      action: () => insertMarkdown("- "),
    },
    {
      icon: "1.",
      title: "有序列表",
      action: () => insertMarkdown("1. "),
    },
    {
      icon: "[]",
      title: "链接",
      action: () => insertMarkdown("[", "](url)"),
    },
    {
      icon: '"',
      title: "引用",
      action: () => insertMarkdown("> "),
    },
    {
      icon: "</>",
      title: "代码",
      action: () => insertMarkdown("`", "`"),
    },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* 头部工具栏 */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">编辑文档</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                isPreviewMode
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {isPreviewMode ? "编辑" : "预览"}
            </button>
          </div>
        </div>

        {/* 标题输入 */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="请输入文档标题"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-medium"
        />

        {/* Markdown工具栏 */}
        {!isPreviewMode && (
          <div className="flex flex-wrap gap-1 mt-3 p-2 bg-gray-50 rounded-md">
            {toolbarButtons.map((button, index) => (
              <button
                key={index}
                onClick={button.action}
                title={button.title}
                className={`px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 transition-colors ${
                  button.className || ""
                }`}
              >
                {button.icon}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 内容区域 */}
      <div className="flex-1 flex overflow-hidden">
        {isPreviewMode ? (
          /* 预览模式 */
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-bold mb-4 text-gray-900">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold mb-3 text-gray-900">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-medium mb-2 text-gray-900">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-3 text-gray-800 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-3 text-gray-800">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-3 text-gray-800">
                      {children}
                    </ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-3">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto mb-3">
                      {children}
                    </pre>
                  ),
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      className="text-blue-600 hover:text-blue-800 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  table: ({ children }) => (
                    <table className="border-collapse border border-gray-300 mb-3 w-full">
                      {children}
                    </table>
                  ),
                  th: ({ children }) => (
                    <th className="border border-gray-300 px-3 py-2 bg-gray-50 text-left font-medium">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-gray-300 px-3 py-2">
                      {children}
                    </td>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          /* 编辑模式 */
          <div className="flex-1 p-6 overflow-hidden">
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="请输入文档内容，支持Markdown格式..."
              className="w-full h-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm leading-relaxed overflow-y-auto"
              style={{
                fontFamily: "Monaco, Consolas, 'Courier New', monospace",
              }}
            />
          </div>
        )}
      </div>

      {/* 底部操作栏 */}
      <div className="border-t border-gray-200 p-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          字数: {content.length} | 行数: {content.split("\n").length}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={onCancel}
            disabled={isSaving || isLoading}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving || isLoading || !title.trim() || !content.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors"
          >
            {isSaving && (
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
            )}
            <span>{isSaving ? "保存中..." : "保存"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
