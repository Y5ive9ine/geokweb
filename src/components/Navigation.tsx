'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GeokLogo, GeokTextLogo } from './GeokLogo';

const Navigation: React.FC = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);

  const platformItems = [
    { name: 'AI数据洞察', href: '/platform/ai-search' },
    { name: 'AI爬虫分析', href: '/platform/brand-analysis' },
    { name: '数据对比分析', href: '/platform/competitor-analysis' },
    { name: 'AI购物可见性分析', href: '/platform/api' },
  ];

  const resourceItems = [
    { name: '客户案例', href: '/resources/help' },
    { name: '博客文章', href: '/resources/blog' },
    { name: '使用指南', href: '/resources/case-studies' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo区域 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <GeokLogo width={27} height={24} className="flex-shrink-0" />
              <span className="font-bold text-xl">
                <span className="text-[#2663FF]">GEO</span>
                <span className="text-[#FFB200]">K</span>
              </span>
            </Link>
          </div>

          {/* 导航菜单 */}
          <div className="hidden md:flex items-center space-x-8">
            {/* 平台下拉菜单 */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-[#333333] hover:text-[#2663FF] font-medium text-lg px-3 py-2 rounded-md transition-colors"
                onMouseEnter={() => setIsPlatformOpen(true)}
                onMouseLeave={() => setIsPlatformOpen(false)}
              >
                <span>平台</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 平台下拉内容 */}
              {isPlatformOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setIsPlatformOpen(true)}
                  onMouseLeave={() => setIsPlatformOpen(false)}
                >
                  {platformItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-[#333333] hover:text-[#2663FF] hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 资源中心下拉菜单 */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-[#333333] hover:text-[#2663FF] font-medium text-lg px-3 py-2 rounded-md transition-colors"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <span>资源中心</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 资源中心下拉内容 */}
              {isResourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  {resourceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-[#333333] hover:text-[#2663FF] hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 企业方案 */}
            <Link 
              href="/enterprise" 
              className="text-[#333333] hover:text-[#2663FF] font-medium text-lg px-3 py-2 rounded-md transition-colors"
            >
              企业方案
            </Link>

            {/* 价格方案 */}
            <Link 
              href="/pricing" 
              className="text-[#333333] hover:text-[#2663FF] font-medium text-lg px-3 py-2 rounded-md transition-colors"
            >
              价格方案
            </Link>
          </div>

          {/* 右侧按钮组 */}
          <div className="flex items-center space-x-4">
            {/* 试用按钮 */}
            <Link
              href="/auth/login"
              className="text-[#333333] hover:text-[#2663FF] font-medium text-lg px-4 py-2 rounded-md transition-colors"
            >
              试用
            </Link>

            {/* 马上进入按钮 */}
            <Link
              href="/auth/login"
              className="bg-[#2663FF] text-white font-medium text-lg px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              马上进入
            </Link>
          </div>

          {/* 移动端菜单按钮（可选） */}
          <div className="md:hidden">
            <button className="text-[#333333] hover:text-[#2663FF] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 