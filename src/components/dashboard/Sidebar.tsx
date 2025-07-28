'use client'

import Link from 'next/link'
import Image from 'next/image'

interface SidebarProps {
  isCollapsed?: boolean
  onToggle?: () => void
  currentPage?: string
}

export function Sidebar({ isCollapsed = false, onToggle, currentPage = 'home' }: SidebarProps) {
  const menuItems = [
    {
      id: 'home',
      label: '首页 Home Page',
      icon: '/images/home-icon.svg', // 非激活状态使用黑色图标
      iconActive: '/images/home-icon-white.svg', // 激活状态使用白色图标
      href: '/dashboard',
    },
    {
      id: 'conversations',
      label: '对话 Conversations',
      icon: '/images/Frame3.svg',
      iconActive: '/images/Frame3.svg',
      href: '/dashboard/conversations',
    },
    {
      id: 'geo-optimization',
      label: 'GEO优化',
      icon: '/images/Frame5.svg',
      iconActive: '/images/Frame5.svg',
      href: '/dashboard/geo-optimization',
    },
    {
      id: 'ai-content',
      label: 'AI内容生成',
      icon: '/images/Frame6.svg',
      iconActive: '/images/Frame6.svg',
      href: '/dashboard/ai-content-generation',
    },
    {
      id: 'inbox',
      label: '收件箱 Inbox',
      icon: '/images/Frame1.svg',
      iconActive: '/images/Frame1.svg',
      href: '#',
    },
    {
      id: 'settings',
      label: '设置 Settings',
      icon: '/images/Frame4.svg',
      iconActive: '/images/Frame4.svg',
      href: '/dashboard/settings',
    },
  ]

  return (
    <div className={`
      ${isCollapsed ? 'w-16' : 'w-[250px]'} 
      bg-white border-r border-gray-200 flex flex-col h-full 
      transition-all duration-300 ease-in-out
      md:static fixed md:translate-x-0 ${isCollapsed ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
      z-30 md:z-auto
    `}>
      {/* Logo区域 */}
      <Link href="/">
        <div className={`h-16 bg-blue-500/10 flex items-center cursor-pointer ${isCollapsed ? 'justify-center px-2' : 'px-6'}`}>
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7">
              <Image
                src="/images/Group134.svg"
                alt="GEOK Logo"
                width={28}
                height={28}
                className="w-full h-full"
              />
            </div>
            {!isCollapsed && (
              <div className="text-2xl font-medium">
                <span className="text-blue-600">GEO</span>
                <span className="text-yellow-500">K</span>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* 导航菜单 */}
      <nav className={`flex-1 py-4 ${isCollapsed ? 'px-2' : 'px-5'}`}>
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id
            return (
              <Link key={item.id} href={item.href}>
                <div
                  className={`
                    flex items-center rounded-lg text-sm font-medium transition-colors
                    ${isCollapsed ? 'justify-center p-3' : 'space-x-3 px-4 py-3'}
                    ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }
                  `}
                  title={isCollapsed ? item.label : ''}
                >
                  <div className="w-4 h-4 flex-shrink-0">
                    <Image
                      src={isActive ? item.iconActive : item.icon}
                      alt={item.label}
                      width={16}
                      height={16}
                      className="w-full h-full"
                    />
                  </div>
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </div>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* 底部分割线 */}
      <div className="px-5 pb-4">
        <div className="border-t border-gray-200 pt-4">
          <div className="h-0 relative">
            <Image
              src="/images/Line2.svg"
              alt="Divider"
              width={160}
              height={1}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 