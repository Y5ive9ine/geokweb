'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GoogleIcon } from '@/components/auth/GoogleIcon'
import { ArrowLeftIcon } from '@/components/auth/ArrowLeftIcon'

export default function RegisterFormPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 模拟注册成功，跳转到引导页面
    router.push('/auth/register/onboarding')
  }

  const handleGoogleLogin = () => {
    // 模拟Google注册成功，跳转到引导页面
    router.push('/auth/register/onboarding')
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/auth-gradient.svg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-purple-700/60"></div>
      </div>
      
      {/* 主要表单容器 */}
      <div className="relative z-10 w-full max-w-lg mx-4">
        <div className="bg-white rounded-3xl shadow-xl p-12">
          {/* GEOK Logo */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center text-2xl font-bold text-gray-600">
              <ArrowLeftIcon />
              <span className="ml-2">GEOK</span>
            </div>
          </div>

          {/* Google 登录按钮 */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 text-gray-500 py-4 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 mb-6"
          >
            <GoogleIcon />
            使用Google登录
          </button>

          {/* 分隔符 */}
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500">或者</span>
          </div>

          {/* 表单 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 姓 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                姓
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* 名 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                名
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* 电子邮件 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                电子邮件
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* 创建账户按钮 */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              创建您的账户
            </button>
          </form>

          {/* 登录链接 */}
          <div className="text-center pt-6">
            <span className="text-sm text-gray-600">已有账户？</span>
            <Link 
              href="/auth/login" 
              className="text-sm text-gray-600 ml-2 hover:text-gray-800 transition-colors"
            >
              登入
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 