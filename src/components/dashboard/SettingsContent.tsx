'use client'

import { useState, useEffect } from 'react'
import { authApi, authUtils } from '@/services/auth'

interface SettingsContentProps {
  activeTab?: string
  setActiveTab?: (tab: string) => void
}

export function SettingsContent({ activeTab, setActiveTab }: SettingsContentProps) {
  const [activeSubTab, setActiveSubTab] = useState('账户信息')
  const [showEditUser, setShowEditUser] = useState(false)
  const [userAdded, setUserAdded] = useState(false)
  const [addedUser, setAddedUser] = useState<{
    username: string
    email: string
  } | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // 用户数据状态
  const [userInfo, setUserInfo] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')

  // 表单数据状态
  const [profileData, setProfileData] = useState({
    first_name: '',
    last_name: '',
    bio: '',
    phone: '',
    company: '',
    country: '',
  })

  // 邮箱修改表单
  const [emailData, setEmailData] = useState({
    new_email: '',
  })

  // 密码修改表单
  const [passwordData, setPasswordData] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  })

  const [editUserData, setEditUserData] = useState({
    username: 'cosme',
    role: '订阅者',
    firstName: 'fangjing',
    lastName: 'fang',
    nickname: 'cosme',
    publicDisplay: 'fang, fanging',
    language: '站点默认',
    email: '1164331337@qq.com',
    website: 'http://www.yokia.com',
    personalDescription: '',
    newPassword: '1427677523777773',
    confirmPassword: '1427677523777773',
  })

  const mainTabs = [
    '账户设置',
    '订阅信息',
    '用户管理',
    '通知',
    '日志',
    '授权插件',
  ]
  const accountSubTabs = ['账户信息', '电子邮件', '密码']

  // 当activeTab变化时，重置子标签
  useEffect(() => {
    if (activeTab === '账户设置') {
      setActiveSubTab('账户信息')
    }
  }, [activeTab])

  // 获取认证token (使用authUtils)
  const getAuthToken = authUtils.getToken

  // 显示消息
  const showMessage = (msg: string, type: 'success' | 'error') => {
    setMessage(msg)
    setMessageType(type)
    setTimeout(() => setMessage(''), 3000)
  }

  // 获取用户信息
  const fetchUserInfo = async () => {
    const token = getAuthToken()
    if (!token) {
      console.log('No auth token found')
      showMessage('请先登录', 'error')
      return
    }

    try {
      const response = await authApi.getMe()
      console.log('User info response:', response.data)
      console.log(response.data, 'response.data.first_name')
      if (response.success && response.data) {
        const user = response.data.data?.user
        if (user) {
          setUserInfo(user)
          setProfileData({
            first_name: user?.first_name || '',
            last_name: user?.last_name || '',
            bio: user?.bio || '',
            phone: user?.phone || '',
            company: user?.company || '',
            country: user?.country || '',
          })
          setEmailData({ new_email: '' })
        }
      } else {
        console.error('Failed to fetch user info:', response.message)
        showMessage(response.message || '获取用户信息失败', 'error')
      }
    } catch (error) {
      console.error('Failed to fetch user info:', error)
      showMessage('网络错误，请重试', 'error')
    }
  }

  // 更新个人资料
  const updateProfile = async () => {
    const token = getAuthToken()
    if (!token) return

    setLoading(true)
    try {
      const response = await authApi.updateProfile(profileData)

      if (response.success && response.data) {
        setUserInfo(response.data)
        showMessage('个人资料更新成功', 'success')
      } else {
        showMessage(response.message || '更新失败', 'error')
      }
    } catch (error) {
      showMessage('网络错误，请重试', 'error')
    } finally {
      setLoading(false)
    }
  }

  // 更新邮箱
  const updateEmail = async () => {
    const token = getAuthToken()
    if (!token) return

    if (!emailData.new_email) {
      showMessage('请输入新邮箱地址', 'error')
      return
    }

    setLoading(true)
    try {
      const response = await authApi.updateEmail(emailData)

      if (response.success && response.data) {
        setUserInfo(response.data)
        setEmailData({ new_email: '' })
        showMessage('邮箱更新成功', 'success')
      } else {
        showMessage(response.message || '更新失败', 'error')
      }
    } catch (error) {
      showMessage('网络错误，请重试', 'error')
    } finally {
      setLoading(false)
    }
  }

  // 更新密码
  const updatePassword = async () => {
    const token = getAuthToken()
    if (!token) return

    if (
      !passwordData.current_password ||
      !passwordData.new_password ||
      !passwordData.confirm_password
    ) {
      showMessage('请填写当前密码、新密码和确认密码', 'error')
      return
    }

    if (passwordData.new_password !== passwordData.confirm_password) {
      showMessage('新密码和确认密码不匹配', 'error')
      return
    }

    if (passwordData.new_password.length < 6) {
      showMessage('新密码长度至少为6位', 'error')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/auth/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(passwordData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setPasswordData({
          current_password: '',
          new_password: '',
          confirm_password: '',
        })
        showMessage('密码更新成功', 'success')
      } else {
        showMessage(data.message || '更新失败', 'error')
      }
    } catch (error) {
      showMessage('网络错误，请重试', 'error')
    } finally {
      setLoading(false)
    }
  }

  // 初始化用户数据
  const initializeUserData = () => {
    // 尝试从localStorage获取用户信息作为fallback
    if (typeof window !== 'undefined') {
      const storedUserInfo = localStorage.getItem('user_info')
      if (storedUserInfo) {
        try {
          const userData = JSON.parse(storedUserInfo)
          console.log('Found stored user info:', userData)
          setUserInfo(userData)
          setProfileData({
            first_name: userData.first_name || '',
            last_name: userData.last_name || '',
            bio: userData.bio || '',
            phone: userData.phone || '',
            company: userData.company || '',
            country: userData.country || '',
          })
        } catch (error) {
          console.error('Error parsing stored user info:', error)
        }
      }
    }
  }

  // 组件挂载时获取用户信息
  useEffect(() => {
    console.log('Settings page mounted, initializing...')
    initializeUserData() // 先加载localStorage中的数据
    fetchUserInfo() // 然后从API获取最新数据
  }, [])

  // 当前显示的选项卡，默认为账户设置
  const currentTab = activeTab || '账户设置'

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      {/* 消息提示 */}
      {message && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white ${
            messageType === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {message}
        </div>
      )}

      <div className="p-4 md:p-6 max-w-7xl mx-auto">
        {/* 主内容区域 */}
        {currentTab === '账户设置' && (
          <div className="space-y-6">
            {/* 子标签导航 */}
            <div className="flex gap-4 md:gap-8 border-b border-gray-200">
              {accountSubTabs.map((subTab) => (
                <button
                  key={subTab}
                  onClick={() => setActiveSubTab(subTab)}
                  className={`font-${
                    activeSubTab === subTab ? 'bold' : 'normal'
                  } text-base text-${
                    activeSubTab === subTab ? 'gray-800' : 'gray-500'
                  } hover:text-gray-800 transition-colors cursor-pointer pb-2 ${
                    activeSubTab === subTab ? 'border-b-2 border-gray-800' : ''
                  }`}
                >
                  {subTab}
                </button>
              ))}
            </div>

            {/* 账户信息表单 */}
            {activeSubTab === '账户信息' && (
              <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-800 text-base font-medium mb-2">
                      全名
                    </label>
                    <input
                      type="text"
                      placeholder="请输入您的全名"
                      value={`${profileData.first_name} ${profileData.last_name}`.trim()}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      readOnly
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 text-base font-medium mb-2">
                        名
                      </label>
                      <input
                        type="text"
                        placeholder="名"
                        value={profileData.first_name}
                        onChange={(e) => setProfileData({ ...profileData, first_name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 text-base font-medium mb-2">
                        姓
                      </label>
                      <input
                        type="text"
                        placeholder="姓"
                        value={profileData.last_name}
                        onChange={(e) => setProfileData({ ...profileData, last_name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-800 text-base font-medium mb-2">
                      个人简介
                    </label>
                    <textarea
                      placeholder="请输入个人简介"
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 text-base font-medium mb-2">
                        电话
                      </label>
                      <input
                        type="tel"
                        placeholder="请输入电话号码"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 text-base font-medium mb-2">
                        公司
                      </label>
                      <input
                        type="text"
                        placeholder="请输入公司名称"
                        value={profileData.company}
                        onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-800 text-base font-medium mb-2">
                      国家/地区
                    </label>
                    <select
                      value={profileData.country}
                      onChange={(e) => setProfileData({ ...profileData, country: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">请选择国家/地区</option>
                      <option value="中国">中国</option>
                      <option value="美国">美国</option>
                      <option value="日本">日本</option>
                      <option value="英国">英国</option>
                      <option value="德国">德国</option>
                      <option value="法国">法国</option>
                      <option value="加拿大">加拿大</option>
                      <option value="澳大利亚">澳大利亚</option>
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={updateProfile}
                      disabled={loading}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {loading ? '保存中...' : '保存更改'}
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                      onClick={() => {
                        // 重置表单
                        if (userInfo) {
                          setProfileData({
                            first_name: userInfo.first_name || '',
                            last_name: userInfo.last_name || '',
                            bio: userInfo.bio || '',
                            phone: userInfo.phone || '',
                            company: userInfo.company || '',
                            country: userInfo.country || '',
                          })
                        }
                      }}
                    >
                      取消
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 电子邮件标签页 */}
            {activeSubTab === '电子邮件' && (
              <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-800 text-base font-medium mb-2">
                      当前电子邮箱
                    </label>
                    <input
                      type="email"
                      value={userInfo?.email || ''}
                      disabled
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg text-base bg-gray-100 text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 text-base font-medium mb-2">
                      新电子邮箱
                    </label>
                    <input
                      type="email"
                      placeholder="输入新的电子邮箱地址"
                      value={emailData.new_email}
                      onChange={(e) =>
                        setEmailData((prev) => ({
                          ...prev,
                          new_email: e.target.value,
                        }))
                      }
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg text-base focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={updateEmail}
                      disabled={loading}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      {loading ? '保存中...' : '保存更改'}
                    </button>
                    <button
                      onClick={() => setEmailData({ new_email: '' })}
                      className="bg-gray-100 text-gray-600 px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-200 transition-colors"
                    >
                      取消
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 密码标签页 */}
            {activeSubTab === '密码' && (
              <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-800 text-base font-medium mb-2">
                      当前密码
                    </label>
                    <input
                      type="password"
                      placeholder="输入当前密码"
                      value={passwordData.current_password}
                      onChange={(e) =>
                        setPasswordData((prev) => ({
                          ...prev,
                          current_password: e.target.value,
                        }))
                      }
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg text-base focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 text-base font-medium mb-2">
                      新密码
                    </label>
                    <input
                      type="password"
                      placeholder="输入新密码（至少6位）"
                      value={passwordData.new_password}
                      onChange={(e) =>
                        setPasswordData((prev) => ({
                          ...prev,
                          new_password: e.target.value,
                        }))
                      }
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg text-base focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 text-base font-medium mb-2">
                      确认新密码
                    </label>
                    <input
                      type="password"
                      placeholder="再次输入新密码"
                      value={passwordData.confirm_password}
                      onChange={(e) =>
                        setPasswordData((prev) => ({
                          ...prev,
                          confirm_password: e.target.value,
                        }))
                      }
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg text-base focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={updatePassword}
                      disabled={loading}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      {loading ? '保存中...' : '保存更改'}
                    </button>
                    <button
                      onClick={() =>
                        setPasswordData({
                          current_password: '',
                          new_password: '',
                          confirm_password: '',
                        })
                      }
                      className="bg-gray-100 text-gray-600 px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-200 transition-colors"
                    >
                      取消
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 订阅信息页面 */}
        {currentTab === '订阅信息' && (
          <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 max-w-2xl">
            <h3 className="text-gray-800 text-xl md:text-2xl font-bold mb-6">
              订阅信息
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border border-gray-200 rounded-lg gap-4">
                <div>
                  <h4 className="text-gray-800 text-lg font-medium">当前套餐</h4>
                  <p className="text-gray-600 text-sm">专业版 - 月付</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-blue-600 text-xl font-bold">¥299/月</p>
                  <button className="text-blue-600 text-sm hover:underline">
                    升级套餐
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="text-gray-800 text-base font-medium mb-2">
                    下次付费日期
                  </h5>
                  <p className="text-gray-600 text-sm">2024年2月15日</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="text-gray-800 text-base font-medium mb-2">
                    付费方式
                  </h5>
                  <p className="text-gray-600 text-sm">信用卡 ****1234</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 用户管理页面 */}
        {currentTab === '用户管理' && (
          <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200">
            {!showEditUser && !userAdded ? (
              <>
                {/* 标题区域 */}
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-gray-800 text-2xl md:text-3xl font-bold mb-4">
                    用户管理
                  </h3>
                  <p className="text-gray-600 text-base mb-6">
                    让您团队中的各个成员都可以使用 Semrush 无缝协作。
                  </p>
                  <button
                    onClick={() => setShowEditUser(true)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors"
                  >
                    添加用户
                  </button>
                </div>

                {/* 分割线 */}
                <div className="flex justify-center mb-8 md:mb-12">
                  <div className="bg-gray-200 w-full max-w-4xl h-px shadow-lg" />
                </div>

                {/* 主要内容区域 */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  {/* 左侧插图 */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">团队管理插图</span>
                    </div>
                  </div>

                  {/* 右侧内容 */}
                  <div className="flex-1">
                    <h4 className="text-gray-800 text-xl md:text-2xl font-bold mb-6">
                      团队工作取得更多成就
                    </h4>
                    <div className="space-y-4">
                      {[
                        '使用每个团队成员的唯一登录名来最大限度地提高效率，同时确保您的隐私安全',
                        '分享项目并与其他成员合作',
                        '通过使用相关的个性化信息中心来最大限度地减少干扰，并专注于您的工作',
                        '通过查看成员的项目、使用情况和查询历史记录来监控每个成员的工作',
                        '分配管理员来帮助您执行用户管理任务',
                      ].map((text, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : userAdded && addedUser ? (
              <>
                {/* 用户添加完成界面 */}
                <div className="space-y-8">
                  <h3 className="text-gray-800 text-2xl md:text-3xl font-bold">
                    用户管理
                  </h3>

                  {/* 用户卡片 */}
                  <div className="bg-white border border-gray-400 rounded-lg p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      {/* 左侧用户信息 */}
                      <div className="flex items-center">
                        {/* 用户头像 */}
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-4 md:mr-6">
                          <span className="text-white text-base font-medium">
                            {addedUser.username.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        {/* 用户名 */}
                        <span className="text-gray-800 text-lg font-medium mr-4 md:mr-8">
                          {addedUser.username}
                        </span>

                        {/* 竖线 */}
                        <div className="hidden md:block w-px h-15 bg-gray-400 mr-4 md:mr-8"></div>

                        {/* 邮箱 */}
                        <span className="text-gray-500 text-base">
                          {addedUser.email}
                        </span>
                      </div>

                      {/* 右侧操作按钮 */}
                      <div className="flex items-center gap-4">
                        <button className="bg-gray-400 text-white px-4 py-3 rounded-lg text-sm md:text-base font-medium">
                          删除
                        </button>
                        <button className="bg-blue-100 text-blue-600 px-4 py-3 rounded-lg text-sm md:text-base font-medium">
                          查看
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm md:text-base font-medium">
                          修改
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* 编辑用户界面 */}
                <div className="space-y-8 max-w-2xl">
                  {/* 标题区域 */}
                  <div className="mb-8">
                    <h3 className="text-gray-800 text-2xl md:text-3xl font-bold mb-2">
                      编辑用户
                    </h3>
                    <p className="text-gray-500 text-sm">
                      新建用户，并将用户加入此站点。
                    </p>
                  </div>

                  {/* 显示名称区域 */}
                  <div className="space-y-6">
                    <h4 className="text-gray-800 text-xl font-bold">显示名称</h4>

                    {/* 用户名 */}
                    <div>
                      <label className="block text-gray-800 text-sm font-medium mb-2">
                        用户名
                      </label>
                      <input
                        type="text"
                        value={editUserData.username}
                        onChange={(e) =>
                          setEditUserData({
                            ...editUserData,
                            username: e.target.value,
                          })
                        }
                        className="w-full h-10 px-3 border border-gray-300 rounded text-sm"
                      />
                      <p className="text-gray-800 text-sm mt-1">
                        用户名不可更改
                      </p>
                    </div>

                    {/* 其他字段... */}
                    {[
                      { key: 'role', label: '角色', type: 'select', options: ['订阅者', '编辑者', '管理员'] },
                      { key: 'firstName', label: '名字', type: 'input' },
                      { key: 'lastName', label: '姓氏', type: 'input' },
                      { key: 'nickname', label: '昵称（必填）', type: 'input' },
                    ].map(({ key, label, type, options }) => (
                      <div key={key}>
                        <label className="block text-gray-800 text-sm font-medium mb-2">
                          {label}
                        </label>
                        {type === 'select' ? (
                          <div className="relative">
                            <select
                              value={editUserData[key as keyof typeof editUserData]}
                              onChange={(e) =>
                                setEditUserData({
                                  ...editUserData,
                                  [key]: e.target.value,
                                })
                              }
                              className="w-full h-10 px-3 border border-gray-300 rounded text-sm appearance-none bg-white"
                            >
                              {options?.map((option) => (
                                <option key={option}>{option}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <input
                            type="text"
                            value={editUserData[key as keyof typeof editUserData]}
                            onChange={(e) =>
                              setEditUserData({
                                ...editUserData,
                                [key]: e.target.value,
                              })
                            }
                            className="w-full h-10 px-3 border border-gray-300 rounded text-sm"
                          />
                        )}
                      </div>
                    ))}

                    {/* 操作按钮 */}
                    <div className="flex gap-4 pt-6">
                      <button
                        onClick={() => {
                          console.log('更新用户:', editUserData)
                          setAddedUser({
                            username: editUserData.username,
                            email: editUserData.email,
                          })
                          setUserAdded(true)
                          setShowEditUser(false)
                        }}
                        className="bg-blue-600 text-white px-8 py-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        更新用户
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* 其他标签页的简化版本 */}
        {(currentTab === '通知' || currentTab === '日志' || currentTab === '授权插件') && (
          <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 max-w-2xl">
            <h3 className="text-gray-800 text-xl md:text-2xl font-bold mb-6">
              {currentTab}
            </h3>
            <div className="text-center text-gray-600 text-lg py-20">
              {currentTab}功能即将推出
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 