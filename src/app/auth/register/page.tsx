'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GoogleIcon } from '@/components/auth/GoogleIcon'

// 背景图片常量
const GRADIENT_BG = '/images/auth-gradient.svg'
const CONTENT_BG = '/images/content-placeholder.svg'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('请输入邮箱地址')
      return
    }

    setLoading(true)
    setError('')

    try {
      // 跳转到详细注册表单
      router.push('/auth/register/form')
    } catch (error) {
      console.error('Register error:', error)
      setError('网络错误，请重试')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleRegister = () => {
    setError('')
    setLoading(true)
    
    try {
      // 模拟Google注册成功，跳转到引导页面
      router.push('/auth/register/onboarding')
    } catch (error) {
      console.error('Google register error:', error)
      setError('Google注册初始化失败')
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* 左侧注册表单 */}
      <div className="relative w-[900px]">
        <div className="absolute inset-0 flex flex-col justify-center px-[120px]">
          <div className="mb-[60px] text-center">
            <h1 className="text-[36px] text-black font-normal leading-[44px] font-['PingFang_SC']">创建账户</h1>
          </div>

          <form onSubmit={handleEmailRegister} className="space-y-[24px]">
            <div>
              <label htmlFor="email" className="block text-[14px] font-medium text-[#333333] mb-[8px]">
                电子邮件
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-[4px] border border-[#CCCCCC] px-[16px] py-[12px] text-[14px] placeholder:text-[#999999] focus:border-[#2663FF] focus:outline-none"
                placeholder="输入您的电子邮件"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-[4px] bg-[#2663FF] py-[12px] text-[14px] font-medium text-white hover:bg-[#1947B8] focus:outline-none disabled:opacity-50"
            >
              {loading ? '注册中...' : '使用电子邮件注册'}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#CCCCCC]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-[16px] text-[14px] text-[#999999]">或</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleRegister}
              className="flex w-full items-center justify-center rounded-[4px] border border-[#CCCCCC] py-[12px] text-[14px] font-medium text-[#333333] hover:bg-[#F5F5F5] focus:outline-none"
            >
              <GoogleIcon />
              <span className="ml-[8px]">使用 Google 账号注册</span>
            </button>

            <div className="flex justify-center items-center mt-[24px]">
              <span className="text-[14px] text-[#666666] font-['PingFang_SC'] leading-[44px] mr-2">
                已有账户？
              </span>
              <Link 
                href="/auth/login" 
                className="text-[14px] text-[#333333] font-['PingFang_SC'] leading-[44px] underline decoration-[#333333] underline-offset-[25%] hover:text-[#2663FF]"
              >
                登入
              </Link>
            </div>
          </form>

          {error && (
            <div className="mt-[24px] rounded-[4px] bg-red-50 p-[16px] text-[14px] text-red-500">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-[24px] rounded-[4px] bg-green-50 p-[16px] text-[14px] text-green-500">
              {success}
            </div>
          )}
        </div>
      </div>

      {/* 右侧背景图片 */}
      <div className="relative flex-1">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${GRADIENT_BG})` }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="relative w-full max-w-[886px] aspect-[886/799] bg-contain bg-center bg-no-repeat opacity-85"
              style={{ 
                backgroundImage: `url(${CONTENT_BG})`
              }}
            ></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-[36px] text-[#2663FF] font-normal mb-4">深入了解AI搜索</h2>
            <p className="text-[20px] text-[#333333] font-['PingFang_SC'] font-normal leading-[44px]">
              通过GEOK.AI探索搜索可见性的最新见解
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 