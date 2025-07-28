import { useState, useEffect } from 'react'

const SIDEBAR_STORAGE_KEY = 'dashboard-sidebar-collapsed'

// 同步读取localStorage的函数
function getInitialSidebarState(): boolean {
  if (typeof window === 'undefined') {
    return false // SSR时的默认值
  }
  
  try {
    const saved = localStorage.getItem(SIDEBAR_STORAGE_KEY)
    return saved !== null ? JSON.parse(saved) : false
  } catch (error) {
    console.error('Error reading sidebar state from localStorage:', error)
    return false
  }
}

export function useSidebarState() {
  // 直接使用同步读取的值作为初始状态
  const [sidebarCollapsed, setSidebarCollapsed] = useState(getInitialSidebarState)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  // 保存状态到 localStorage
  const toggleSidebar = () => {
    const newState = !sidebarCollapsed
    setSidebarCollapsed(newState)
    
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(newState))
      } catch (error) {
        console.error('Error saving sidebar state to localStorage:', error)
      }
    }
  }

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen)
  }

  return {
    sidebarCollapsed,
    mobileSidebarOpen,
    toggleSidebar,
    toggleMobileSidebar,
    setMobileSidebarOpen
  }
} 