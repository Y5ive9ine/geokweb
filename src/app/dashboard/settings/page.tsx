'use client'

import { useState } from 'react'
import Link from 'next/link'

// 图标资源常量
const imgFrame = "../images/Frame.svg";
const imgLine2 = "../images/Line2.svg";
const imgFrame1 = "../images/Frame1.svg";
const imgFrame3 = "../images/Frame3.svg";
const imgFrame4 = "../images/Frame4.svg";
const imgFrame5 = "../images/Frame5.svg";
const imgFrame6 = "../images/Frame6.svg";
const imgLine6 = "../images/Line6.svg";
const img2 = "../images/img2.png";
const imgGroup134 = "../images/Group134.svg";
const imgHomeIcon = "../images/home-icon.svg";

export default function SettingsPage() {
  const [activeMainTab, setActiveMainTab] = useState('通知')
  const [activeSubTab, setActiveSubTab] = useState('账户信息')
  const [showEditUser, setShowEditUser] = useState(false)
  const [userAdded, setUserAdded] = useState(false)
  const [addedUser, setAddedUser] = useState<{username: string, email: string} | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [formData, setFormData] = useState({
    name: 'Ethelbert Williams',
    phone: '',
    company: '',
    country: ''
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
    confirmPassword: '1427677523777773'
  })

  const mainTabs = ['账户设置', '订阅信息', '用户管理', '通知', '日志', '授权插件']
  const accountSubTabs = ['账户信息', '电子邮件', '密码']

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    console.log('保存更改:', formData)
    // 这里可以添加实际的保存逻辑
  }

  const handleCancel = () => {
    // 重置表单或返回原始值
    setFormData({
      name: 'Ethelbert Williams',
      phone: '',
      company: '',
      country: ''
    })
  }

  return (
    <div
      className="bg-[#ffffff] relative min-h-screen w-full min-w-[1920px] overflow-x-auto"
      style={{ fontFamily: "'PingFang SC', sans-serif" }}
    >
      {/* 背景色块 */}
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-[#ffffff] h-[1200px] left-0 top-20 w-[350px]" />
        <div className="absolute bg-[rgba(38,99,255,0.1)] h-20 left-0 top-0 w-[350px]" />
        <div className="absolute bg-[rgba(38,99,255,0.1)] h-20 left-[350px] top-0 w-full" />
      </div>

      {/* 顶部主标签导航 */}
      <div className="absolute flex left-[469px] top-7">
        {mainTabs.map((tab, index) => (
          <div key={tab} className="relative">
            <button
              onClick={() => setActiveMainTab(tab)}
              className={`font-${activeMainTab === tab ? 'bold' : 'normal'} text-[20px] text-${activeMainTab === tab ? '[#333333]' : '[#999999]'} hover:text-[#333333] cursor-pointer px-8`}
            >
              {tab}
            </button>
            {activeMainTab === tab && (
              <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-[#333333] h-1 w-[80px]" />
            )}
          </div>
        ))}
      </div>

      {/* 顶部搜索图标 */}
      <div className="absolute left-[400px] size-9 top-[22px]">
        <img alt="" className="block max-w-none size-full" src={imgFrame} />
      </div>

      {/* 左侧导航 */}
      <div className="absolute h-0 left-[65px] top-[392px] w-[220px]">
        <div className="absolute bottom-[-1px] left-[-0.455%] right-[-0.455%] top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine2} />
        </div>
      </div>

      {/* Logo区域 */}
      <div className="absolute contents left-[104px] top-[17px]">
        <div className="absolute font-medium h-[46px] leading-[0] left-[148px] not-italic text-[#2663ff] text-[34px] text-left top-[17px] w-[98px]">
          <p className="leading-[normal]">
            <span>GEO</span>
            <span className="text-[#ffb200]">K</span>
          </p>
        </div>
        <div className="absolute left-[104px] top-[17px] w-[40px] h-[40px]">
          <img alt="" className="block max-w-none size-full" src={imgGroup134} />
        </div>
      </div>

      {/* 首页菜单项 */}
      <Link href="/dashboard">
        <div className="absolute contents left-[86px] top-[118px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[118px] hover:text-[#2663ff] transition-colors">
            <p className="block leading-[normal] whitespace-pre">首页  Home Page</p>
          </div>
          <div className="absolute left-[86px] size-6 top-[118px]">
            <img alt="" className="block max-w-none size-full" src={imgHomeIcon} />
          </div>
        </div>
      </Link>

      {/* 其他菜单项 */}
      <Link href="/dashboard/conversations">
        <div className="absolute contents left-[88px] top-[188px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[188px] hover:text-[#2663ff] transition-colors">
            <p className="leading-[normal] whitespace-pre">
              <span>对话  </span>
              <span>Conversations</span>
            </p>
          </div>
          <div className="absolute left-[88px] size-[22px] top-[188px]">
            <img alt="" className="block max-w-none size-full" src={imgFrame3} />
          </div>
        </div>
      </Link>

      <Link href="/dashboard/geo-optimization">
        <div className="absolute contents left-[88px] top-64 cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-64 hover:text-[#2663ff] transition-colors">
            <p className="block leading-[normal] whitespace-pre">GEO优化 </p>
          </div>
          <div className="absolute left-[88px] size-[22px] top-64">
            <img alt="" className="block max-w-none size-full" src={imgFrame5} />
          </div>
        </div>
      </Link>

      <Link href="/dashboard/ai-content-generation">
        <div className="absolute contents left-[88px] top-[324px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[324px] hover:text-[#2663ff] transition-colors">
            <p className="block leading-[normal] whitespace-pre">AI内容生成</p>
          </div>
          <div className="absolute left-[88px] size-[22px] top-[324px]">
            <img alt="" className="block max-w-none size-full" src={imgFrame6} />
          </div>
        </div>
      </Link>

      <div className="absolute contents left-[88px] top-[438px]">
        <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[438px]">
          <p className="block leading-[normal] whitespace-pre">收件箱  Inbox</p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-[438px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame1} />
        </div>
      </div>

      {/* 设置菜单项 - 激活状态 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[30px] rounded-[10px] top-[486px] w-[290px]" />
      <div className="absolute contents left-[88px] top-[506px]">
        <div className="absolute font-medium leading-[0] left-[120px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[506px]">
          <p className="leading-[normal] whitespace-pre">
            <span>设置  </span>
            <span>Settings</span>
          </p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-[506px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame4} />
        </div>
      </div>

      {/* 用户头像和名称 */}
      <div className="absolute contents left-[1645px] top-5">
        <div
          className="absolute bg-center bg-cover bg-no-repeat left-[1645px] rounded-[55px] size-10 top-5"
          style={{ backgroundImage: `url('${img2}')` }}
        />
        <div className="absolute font-normal leading-[0] left-[1698px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[26px]">
          <p className="block leading-[30px] whitespace-pre">Ethelbert Williams</p>
        </div>
      </div>

      {/* 分割线 */}
      <div className="absolute h-0 left-[350px] top-20 right-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine6} />
        </div>
      </div>

      {/* 主内容区域 */}
      {activeMainTab === '账户设置' && (
        <div className="absolute left-[400px] top-[120px] right-[40px]">
          {/* 子标签导航 */}
          <div className="flex gap-8 mb-8">
            {accountSubTabs.map((subTab) => (
              <button
                key={subTab}
                onClick={() => setActiveSubTab(subTab)}
                className={`font-${activeSubTab === subTab ? 'bold' : 'normal'} text-[16px] text-${activeSubTab === subTab ? '[#333333]' : '[#999999]'} hover:text-[#333333] transition-colors cursor-pointer pb-2 ${
                  activeSubTab === subTab ? 'border-b-2 border-[#333333]' : ''
                }`}
              >
                {subTab}
              </button>
            ))}
          </div>

          {/* 账户信息表单 */}
          {activeSubTab === '账户信息' && (
            <div className="bg-white rounded-[10px] p-8 border border-[#e0e0e0]">
              <div className="space-y-6">
                <div>
                  <label className="block text-[#333333] text-[16px] font-medium mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full h-[50px] px-4 border border-[#ddd] rounded-[8px] text-[16px] focus:border-[#2663ff] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-[#333333] text-[16px] font-medium mb-2">
                    电话
                  </label>
                  <input
                    type="text"
                    placeholder="电话"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full h-[50px] px-4 border border-[#ddd] rounded-[8px] text-[16px] focus:border-[#2663ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] text-[16px] font-medium mb-2">
                    公司
                  </label>
                  <input
                    type="text"
                    placeholder="公司"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full h-[50px] px-4 border border-[#ddd] rounded-[8px] text-[16px] focus:border-[#2663ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] text-[16px] font-medium mb-2">
                    国家/地区
                  </label>
                  <input
                    type="text"
                    placeholder="国家/地区"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full h-[50px] px-4 border border-[#ddd] rounded-[8px] text-[16px] focus:border-[#2663ff] focus:outline-none"
                  />
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleSave}
                    className="bg-[#2663ff] text-white px-6 py-3 rounded-[8px] text-[16px] font-medium hover:bg-[#1a4dcc] transition-colors"
                  >
                    保存更改
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-[#f5f5f5] text-[#666666] px-6 py-3 rounded-[8px] text-[16px] font-medium hover:bg-[#e0e0e0] transition-colors"
                  >
                    取消
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 电子邮件标签页 */}
          {activeSubTab === '电子邮件' && (
            <div className="bg-white rounded-[10px] p-8 border border-[#e0e0e0]">
              <div className="space-y-6">
                <div>
                  <label className="block text-[#333333] text-[16px] font-medium mb-2">
                    原电子邮箱
                  </label>
                  <input
                    type="email"
                    placeholder="原电子邮箱"
                    className="w-full h-[50px] px-4 border border-[#ddd] rounded-[8px] text-[16px] focus:border-[#2663ff] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-[#333333] text-[16px] font-medium mb-2">
                    新电子邮箱
                  </label>
                  <input
                    type="email"
                    placeholder="新电子邮箱"
                    className="w-full h-[50px] px-4 border border-[#ddd] rounded-[8px] text-[16px] focus:border-[#2663ff] focus:outline-none"
                  />
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-4 pt-4">
                  <button className="bg-[#2663ff] text-white px-6 py-3 rounded-[8px] text-[16px] font-medium hover:bg-[#1a4dcc] transition-colors">
                    保存更改
                  </button>
                  <button className="bg-[#f5f5f5] text-[#666666] px-6 py-3 rounded-[8px] text-[16px] font-medium hover:bg-[#e0e0e0] transition-colors">
                    取消
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 密码标签页 */}
          {activeSubTab === '密码' && (
            <div className="bg-white rounded-[10px] p-8 border border-[#e0e0e0]">
              <div className="space-y-6">
                <div>
                  <label className="block text-[#333333] text-[16px] font-medium mb-2">
                    原密码
                  </label>
                  <input
                    type="password"
                    placeholder="原密码"
                    className="w-full h-[50px] px-4 border border-[#ddd] rounded-[8px] text-[16px] focus:border-[#2663ff] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-[#333333] text-[16px] font-medium mb-2">
                    新密码
                  </label>
                  <input
                    type="password"
                    placeholder="新密码"
                    className="w-full h-[50px] px-4 border border-[#ddd] rounded-[8px] text-[16px] focus:border-[#2663ff] focus:outline-none"
                  />
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-4 pt-4">
                  <button className="bg-[#2663ff] text-white px-6 py-3 rounded-[8px] text-[16px] font-medium hover:bg-[#1a4dcc] transition-colors">
                    保存更改
                  </button>
                  <button className="bg-[#f5f5f5] text-[#666666] px-6 py-3 rounded-[8px] text-[16px] font-medium hover:bg-[#e0e0e0] transition-colors">
                    取消
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 其他主标签页的占位内容 */}
      {activeMainTab === '订阅信息' && (
        <div className="absolute left-[400px] top-[120px] right-[40px]">
          <div className="bg-white rounded-[10px] p-8 border border-[#e0e0e0]">
            <h3 className="text-[#333333] text-[24px] font-bold mb-6">订阅信息</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-[#e0e0e0] rounded-[8px]">
                <div>
                  <h4 className="text-[#333333] text-[18px] font-medium">当前套餐</h4>
                  <p className="text-[#666666] text-[14px]">专业版 - 月付</p>
                </div>
                <div className="text-right">
                  <p className="text-[#2663ff] text-[20px] font-bold">¥299/月</p>
                  <button className="text-[#2663ff] text-[14px] hover:underline">升级套餐</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#f8f9fa] rounded-[8px]">
                  <h5 className="text-[#333333] text-[16px] font-medium mb-2">下次付费日期</h5>
                  <p className="text-[#666666] text-[14px]">2024年2月15日</p>
                </div>
                <div className="p-4 bg-[#f8f9fa] rounded-[8px]">
                  <h5 className="text-[#333333] text-[16px] font-medium mb-2">付费方式</h5>
                  <p className="text-[#666666] text-[14px]">信用卡 ****1234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMainTab === '用户管理' && (
        <div className="absolute left-[400px] top-[120px] right-[40px]">
          <div className="bg-white rounded-[10px] p-8 border border-[#e0e0e0]">
            {!showEditUser && !userAdded ? (
              <>
                {/* 标题区域 */}
                <div className="text-center mb-12">
                  <h3 className="text-[#333333] text-[30px] font-bold mb-4">用户管理</h3>
                  <p className="text-[#666666] text-[16px] mb-6">
                    让您团队中的各个成员都可以使用 Semrush 无缝协作。
                  </p>
                  <button 
                    onClick={() => setShowEditUser(true)}
                    className="bg-[#2663ff] text-white px-6 py-3 rounded-[8px] text-[16px] font-medium hover:bg-[#1a4dcc] transition-colors"
                  >
                    添加用户
                  </button>
                </div>

                {/* 分割线 */}
                <div className="flex justify-center mb-12">
                  <div 
                    className="bg-[#EAEAEA]"
                    style={{
                      width: '1470px',
                      height: '1px',
                      boxShadow: '0 1px 8px 0 #2663FF'
                    }}
                  />
                </div>

                {/* 主要内容区域 */}
                <div className="flex items-center justify-between">
                  {/* 左侧插图 */}
                  <div className="flex-1 flex justify-center">
                    <img 
                      src="../images/leadership.png" 
                      alt="团队管理插图" 
                      className="max-w-[400px] w-full h-auto"
                    />
                  </div>

                  {/* 右侧内容 */}
                  <div className="flex-1 pl-12">
                    <h4 className="text-[#333333] text-[24px] font-bold mb-6">团队工作取得更多成就</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#2663ff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-[#666666] text-[16px] leading-[1.6]">
                          使用每个团队成员的唯一登录名来最大限度地提高效率，同时确保您的隐私安全
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#2663ff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-[#666666] text-[16px] leading-[1.6]">
                          分享项目并与其他成员合作
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#2663ff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-[#666666] text-[16px] leading-[1.6]">
                          通过使用相关的个性化信息中心来最大限度地减少干扰，并专注于您的工作
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#2663ff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-[#666666] text-[16px] leading-[1.6]">
                          通过查看成员的项目、使用情况和查询历史记录来监控 每个成员的工作
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#2663ff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-[#666666] text-[16px] leading-[1.6]">
                          分配管理员来帮助您执行用户管理任务
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : userAdded && addedUser ? (
              <>
                {/* 用户添加完成界面 */}
                <div className="space-y-8">
                  <h3 className="text-[#333333] text-[32px] font-bold">用户管理</h3>
                  
                  {/* 用户卡片 */}
                  <div className="bg-white border border-[#999999] rounded-[10px] p-8 min-h-[120px]">
                    <div className="flex items-center justify-between h-full">
                      {/* 左侧用户信息 */}
                      <div className="flex items-center">
                        {/* 用户头像 */}
                        <div className="w-10 h-10 bg-[#e91e63] rounded-full flex items-center justify-center mr-6">
                          <span className="text-white text-[16px] font-medium">
                            {addedUser.username.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        {/* 用户名 */}
                        <span className="text-[#333333] text-[18px] font-medium mr-8">{addedUser.username}</span>
                        
                        {/* 竖线 */}
                        <div className="w-px h-[60px] bg-[#999999] mr-8"></div>
                        
                        {/* 邮箱 */}
                        <span className="text-[#999999] text-[16px]">{addedUser.email}</span>
                      </div>

                      {/* 右侧操作按钮 */}
                      <div className="flex items-center gap-4">
                        <button className="bg-[#cccccc] text-white px-4 py-3 rounded-[10px] text-[18px] font-medium min-w-[80px]">
                          删除
                        </button>
                        <button className="bg-[rgba(38,99,255,0.2)] text-[#2663ff] px-4 py-3 rounded-[10px] text-[18px] font-medium min-w-[80px]">
                          查看
                        </button>
                        <button className="bg-[#2663ff] text-white px-6 py-3 rounded-[10px] text-[18px] font-medium min-w-[120px]">
                          修改
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* 编辑用户界面 - 改为单列布局 */}
                <div className="space-y-8 max-w-[600px]">
                  {/* 标题区域 */}
                  <div className="mb-8">
                    <h3 className="text-[#333333] text-[32px] font-bold mb-2">编辑用户</h3>
                    <p className="text-[#999999] text-[14px]">新建用户，并将用户加入此站点。</p>
                  </div>

                  {/* 显示名称区域 */}
                  <div className="space-y-6">
                    <h4 className="text-[#333333] text-[24px] font-bold">显示名称</h4>
                    
                    {/* 用户名 */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">用户名</label>
                      <input
                        type="text"
                        value={editUserData.username}
                        onChange={(e) => setEditUserData({...editUserData, username: e.target.value})}
                        className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px]"
                      />
                      <p className="text-[#1e1e1e] text-[14px] mt-1">用户名不可更改</p>
                    </div>

                    {/* 角色 */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">角色</label>
                      <div className="relative">
                        <select 
                          value={editUserData.role}
                          onChange={(e) => setEditUserData({...editUserData, role: e.target.value})}
                          className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px] appearance-none bg-white"
                        >
                          <option>订阅者</option>
                          <option>编辑者</option>
                          <option>管理员</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* 名字 */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">名字</label>
                      <input
                        type="text"
                        value={editUserData.firstName}
                        onChange={(e) => setEditUserData({...editUserData, firstName: e.target.value})}
                        className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px]"
                      />
                    </div>

                    {/* 姓氏 */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">姓氏</label>
                      <input
                        type="text"
                        value={editUserData.lastName}
                        onChange={(e) => setEditUserData({...editUserData, lastName: e.target.value})}
                        className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px]"
                      />
                    </div>

                    {/* 昵称（必填） */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">昵称（必填）</label>
                      <input
                        type="text"
                        value={editUserData.nickname}
                        onChange={(e) => setEditUserData({...editUserData, nickname: e.target.value})}
                        className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px]"
                      />
                    </div>

                    {/* 公开显示为 */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">公开显示为</label>
                      <div className="relative">
                        <select 
                          value={editUserData.publicDisplay}
                          onChange={(e) => setEditUserData({...editUserData, publicDisplay: e.target.value})}
                          className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px] appearance-none bg-white"
                        >
                          <option>fang, fanging</option>
                          <option>fanging fang</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* 语言 - 添加图标 */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="text-[#1e1e1e] text-[14px] font-medium">语言</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <g clipPath="url(#clip0_2235_325)">
                            <path d="M5.895 3.47842V2.77192C5.895 2.56492 5.922 2.38492 5.9805 2.23642C5.994 2.20942 6.003 2.18242 6.0075 2.15092C6.0075 2.13292 5.94 2.11492 5.8095 2.09692H4.8465V3.48292H2.5335V6.79042H3.492V6.28192H4.878V8.71192H5.895V6.28192H7.308V6.70492H8.352V3.47842H5.895ZM4.878 5.51242H3.4965V4.27042H4.8825L4.878 5.51242ZM7.308 5.51242H5.895V4.27042H7.308V5.51242ZM15.75 5.62492H14.625C14.625 4.38292 13.617 3.37492 12.375 3.37492V2.24992C14.238 2.24992 15.75 3.76192 15.75 5.62492ZM2.25 12.3749H3.375C3.375 13.6169 4.383 14.6249 5.625 14.6249V15.7499C3.762 15.7499 2.25 14.2379 2.25 12.3749Z" fill="#333333"/>
                            <path d="M7.9162 9.44997H1.8907C1.5937 9.44997 1.3507 9.20697 1.3507 8.90997V1.88997C1.3507 1.59297 1.5937 1.34997 1.8907 1.34997H8.9107C9.2077 1.34997 9.4507 1.59297 9.4507 1.88997V7.95597H10.0807V1.82247C10.0807 1.21047 9.5857 0.719971 8.9782 0.719971H1.8232C1.2112 0.719971 0.720703 1.21497 0.720703 1.82247V8.98197C0.720703 9.59397 1.2157 10.0845 1.8232 10.0845H7.9207V9.44997H7.9162Z" fill="#333333"/>
                            <path d="M16.1774 7.91992H9.02242C8.41042 7.91992 7.91992 8.41492 7.91992 9.02242V16.1819C7.91992 16.7939 8.41492 17.2844 9.02242 17.2844H16.1819C16.7939 17.2844 17.2844 16.7894 17.2844 16.1819V9.02242C17.2799 8.41042 16.7849 7.91992 16.1774 7.91992ZM12.2984 14.8229H9.50392V10.3769H12.2309V11.1149H10.3949V12.1409H11.9564V12.8879H10.3949V14.0759H12.2984V14.8229ZM15.7499 14.8229H14.8679V12.8339C14.8679 12.3164 14.7239 12.1319 14.3909 12.1319C14.1164 12.1319 13.9409 12.2624 13.6889 12.5099V14.8229H12.8114V11.4569H13.5359L13.5944 11.9024H13.6169C13.9094 11.6144 14.2559 11.3714 14.7104 11.3714C15.4394 11.3714 15.7499 11.8754 15.7499 12.7259V14.8229Z" fill="#333333"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_2235_325">
                              <rect width="18" height="18" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="relative">
                        <select 
                          value={editUserData.language}
                          onChange={(e) => setEditUserData({...editUserData, language: e.target.value})}
                          className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px] appearance-none bg-white"
                        >
                          <option>站点默认</option>
                          <option>中文</option>
                          <option>English</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 显示名称区域（第二个） */}
                  <div className="space-y-6">
                    <h4 className="text-[#333333] text-[24px] font-bold">显示名称</h4>
                    
                    {/* 邮箱（必填） */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">邮箱（必填）</label>
                      <input
                        type="email"
                        value={editUserData.email}
                        onChange={(e) => setEditUserData({...editUserData, email: e.target.value})}
                        className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px]"
                      />
                    </div>

                    {/* 网站 */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">网站</label>
                      <input
                        type="url"
                        value={editUserData.website}
                        onChange={(e) => setEditUserData({...editUserData, website: e.target.value})}
                        className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px]"
                      />
                    </div>
                  </div>

                  {/* 关于该用户 */}
                  <div className="space-y-6">
                    <h4 className="text-[#333333] text-[24px] font-bold">关于该用户</h4>
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">个人说明</label>
                      <textarea
                        value={editUserData.personalDescription}
                        onChange={(e) => setEditUserData({...editUserData, personalDescription: e.target.value})}
                        className="w-full h-[120px] px-3 py-2 border border-[#cccccc] rounded text-[14px] resize-none"
                        placeholder="分享关于您的一些信息。可能会被公开。"
                      />
                    </div>
                  </div>

                  {/* 账户管理 */}
                  <div className="space-y-6">
                    <h4 className="text-[#333333] text-[24px] font-bold">账户管理</h4>
                    
                    {/* 新密码 */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">新密码</label>
                      <input
                        type="password"
                        value={editUserData.newPassword}
                        onChange={(e) => setEditUserData({...editUserData, newPassword: e.target.value})}
                        className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px]"
                      />
                    </div>

                    {/* 确认新密码 */}
                    <div>
                      <label className="block text-[#1e1e1e] text-[14px] font-medium mb-2">确认新密码</label>
                      <input
                        type="password"
                        value={editUserData.confirmPassword}
                        onChange={(e) => setEditUserData({...editUserData, confirmPassword: e.target.value})}
                        className="w-full h-10 px-3 border border-[#cccccc] rounded text-[14px]"
                      />
                      <button className="bg-[#2663ff] text-white px-4 py-2 rounded text-[14px] font-medium hover:bg-[#1a4dcc] transition-colors mt-3">
                        确认密码
                      </button>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex gap-4 pt-6">
                    <button 
                      onClick={() => {
                        console.log('更新用户:', editUserData)
                        // 提取用户名和邮箱，设置添加的用户信息
                        setAddedUser({
                          username: editUserData.username,
                          email: editUserData.email
                        })
                        setUserAdded(true)
                        setShowEditUser(false)
                      }}
                      className="bg-[#2663ff] text-white px-8 py-3 rounded text-[14px] font-medium hover:bg-[#1a4dcc] transition-colors"
                    >
                      更新用户
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {activeMainTab === '通知' && (
        <div className="absolute left-[400px] top-[120px] right-[50px] bottom-[50px]">
          {/* 产品及新闻区域 */}
          <div className="absolute bg-white h-[920px] left-0 top-0 w-[540px] rounded-[10px] border border-[#cccccc]">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[#333333] text-[28px] font-bold">产品及新闻</h3>
                <button className="text-[#2663ff] text-[16px] hover:underline">查看更多&gt;&gt;</button>
              </div>
              
              <div className="space-y-8">
                {/* 新闻项目1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#2663ff] rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-[#000000] text-[16px] font-bold mb-3 leading-[1.4]">
                      全能战士登场:英特尔酷睿i5-14600K，中高端装机性价比首选
                    </h4>
                    <div className="flex items-center space-x-4 text-[12px] text-[#333333] mb-4">
                      <span className="underline">Ethelbert Williams</span>
                      <span className="underline">2025年7月18日</span>
                    </div>
                    <p className="text-[#666666] text-[14px] leading-[1.6]">
                      在这个追求极致性能与性价比并重的黄金时代，选择一款恰如其分的 CPU 并精心搭配一套均衡的装机配置.......
                    </p>
                  </div>
                </div>

                <div className="h-px bg-[#e0e0e0] mx-4"></div>

                {/* 新闻项目2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#2663ff] rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-[#000000] text-[16px] font-bold mb-3 leading-[1.4]">
                      全能战士登场:英特尔酷睿i5-14600K，中高端装机性价比首选
                    </h4>
                    <div className="flex items-center space-x-4 text-[12px] text-[#333333] mb-4">
                      <span className="underline">Ethelbert Williams</span>
                      <span className="underline">2025年7月18日</span>
                    </div>
                    <p className="text-[#666666] text-[14px] leading-[1.6]">
                      在这个追求极致性能与性价比并重的黄金时代，选择一款恰如其分的 CPU 并精心搭配一套均衡的装机配置.......
                    </p>
                  </div>
                </div>

                <div className="h-px bg-[#e0e0e0] mx-4"></div>

                {/* 新闻项目3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#2663ff] rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-[#000000] text-[16px] font-bold mb-3 leading-[1.4]">
                      全能战士登场:英特尔酷睿i5-14600K，中高端装机性价比首选
                    </h4>
                    <div className="flex items-center space-x-4 text-[12px] text-[#333333] mb-4">
                      <span className="underline">Ethelbert Williams</span>
                      <span className="underline">2025年7月18日</span>
                    </div>
                    <p className="text-[#666666] text-[14px] leading-[1.6]">
                      在这个追求极致性能与性价比并重的黄金时代，选择一款恰如其分的 CPU 并精心搭配一套均衡的装机配置.......
                    </p>
                  </div>
                </div>

                <div className="h-px bg-[#e0e0e0] mx-4"></div>

                {/* 新闻项目4 */}
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#2663ff] rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-[#000000] text-[16px] font-bold mb-3 leading-[1.4]">
                      全能战士登场:英特尔酷睿i5-14600K，中高端装机性价比首选
                    </h4>
                    <div className="flex items-center space-x-4 text-[12px] text-[#333333] mb-4">
                      <span className="underline">Ethelbert Williams</span>
                      <span className="underline">2025年7月18日</span>
                    </div>
                    <p className="text-[#666666] text-[14px] leading-[1.6]">
                      在这个追求极致性能与性价比并重的黄金时代，选择一款恰如其分的 CPU 并精心搭配一套均衡的装机配置.......
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 日常信息区域 */}
          <div className="absolute bg-white h-[290px] right-0 top-0 w-[900px] rounded-[10px] border border-[#cccccc]">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[#333333] text-[28px] font-bold">日常信息</h3>
                <button className="text-[#2663ff] text-[16px] hover:underline">查看更多&gt;&gt;</button>
              </div>
              
              <div className="space-y-8">
                {/* 日常信息项目1 */}
                <div className="flex justify-between items-center py-4">
                  <div>
                    <h4 className="text-[#444444] text-[20px] font-medium mb-2">
                      Intel关键词GEO分析已完成
                    </h4>
                  </div>
                  <span className="text-[#cccccc] text-[16px] font-bold">2025-7-23 14:20:38</span>
                </div>

                {/* 日常信息项目2 */}
                <div className="flex justify-between items-center py-4">
                  <div>
                    <h4 className="text-[#333333] text-[20px] font-medium mb-2">
                      CPU关键词分析正在进行中
                    </h4>
                  </div>
                  <span className="text-[#cccccc] text-[16px] font-bold">2025-7-25 10:00:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* 公告栏区域 */}
          <div className="absolute bg-white h-[600px] right-0 top-[320px] w-[900px] rounded-[10px] border border-[#cccccc]">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-[#333333] text-[28px] font-bold inline">公告栏</h3>
                  <span className="text-[#999999] text-[16px] ml-4">| 收到一条新消息！</span>
                </div>
                <button className="text-[#2663ff] text-[16px] hover:underline">查看更多&gt;&gt;</button>
              </div>

              {/* 公告消息 */}
              <div className="bg-[#f8f9fb] h-[200px] rounded-[10px] p-8 mb-8">
                <div className="space-y-8">
                  <div className="flex justify-between items-center py-3">
                    <h4 className="text-[#333333] text-[20px] font-medium">
                      [平台公告] GEO公开版正式上线啦！
                    </h4>
                    <span className="text-[#cccccc] text-[16px] font-bold">2023-3-13 10:00:00</span>
                  </div>

                  <div className="flex justify-between items-center py-3">
                    <h4 className="text-[#333333] text-[20px] font-medium">
                      [平台公告] GEO企业版正式上线啦！
                    </h4>
                    <span className="text-[#cccccc] text-[16px] font-bold">2023-3-13 10:00:00</span>
                  </div>
                </div>
              </div>

              {/* Banner图片区域 */}
              <div className="h-[268px] rounded-[10px] overflow-hidden relative">
                <img 
                  src="/images/Banner.png" 
                  alt="智慧触达 让联系客户更高效率" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMainTab === '日志' && (
        <div className="absolute left-[400px] top-[120px] right-[50px]">
          <div className="bg-white rounded-[10px] p-8 border border-[#cccccc] min-h-[936px]">
            {/* 表头 */}
            <div className="grid grid-cols-[180px_120px_120px_80px_1fr] gap-4 pb-4 border-b border-[#e0e0e0]">
              <div className="text-[#333333] text-[16px] font-medium">日期和时间</div>
              <div className="text-[#333333] text-[16px] font-medium">活动类型</div>
              <div className="text-[#333333] text-[16px] font-medium">IP</div>
              <div className="text-[#333333] text-[16px] font-medium">国家</div>
              <div className="text-[#333333] text-[16px] font-medium">用户代理</div>
            </div>

            {/* 表格内容 */}
            <div className="space-y-0">
              {[
                {
                  time: '2025-07-25 13:22:52',
                  type: 'login',
                  ip: '45.8.204.64',
                  country: 'us',
                  userAgent: 'Mozilla/5.0 (Macintosh; intel Mac OS X 10_15_7)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
                },
                {
                  time: '2025-07-24 18:35:22',
                  type: 'registration',
                  ip: '45.8.204.74',
                  country: 'us',
                  userAgent: 'Mozilla/5.0 (Macintosh; intel Mac OS X 10_15_7)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
                },
                {
                  time: '2025-07-24 18:35:22',
                  type: 'login',
                  ip: '45.8.204.74',
                  country: 'us',
                  userAgent: 'Mozilla/5.0 (Macintosh; intel Mac OS X 10_15_7)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
                },
                {
                  time: '2025-07-24 18:35:22',
                  type: 'registration',
                  ip: '45.8.204.74',
                  country: 'us',
                  userAgent: 'Mozilla/5.0 (Macintosh; intel Mac OS X 10_15_7)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
                },
                {
                  time: '2025-07-24 18:35:22',
                  type: 'login',
                  ip: '45.8.204.74',
                  country: 'us',
                  userAgent: 'Mozilla/5.0 (Macintosh; intel Mac OS X 10_15_7)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
                },
                {
                  time: '2025-07-24 18:35:22',
                  type: 'login',
                  ip: '45.8.204.74',
                  country: 'us',
                  userAgent: 'Mozilla/5.0 (Macintosh; intel Mac OS X 10_15_7)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[180px_120px_120px_80px_1fr] gap-4 py-[15px] border-b border-[#e0e0e0]">
                  <div className="text-[#333333] text-[14px] font-medium">{item.time}</div>
                  <div className="text-[#333333] text-[14px] font-medium">{item.type}</div>
                  <div className="text-[#333333] text-[14px] font-medium">{item.ip}</div>
                  <div className="text-[#333333] text-[14px] font-medium">{item.country}</div>
                  <div className="text-[#333333] text-[14px] font-medium whitespace-nowrap overflow-x-auto">{item.userAgent}</div>
                </div>
              ))}
            </div>

            {/* 分页 */}
            <div className="flex items-center justify-end mt-8 space-x-2">
              <span className="text-[14px] text-[#1d1d1d]">共有150条</span>
              <div className="flex items-center border border-[#e0e0e0] rounded px-4 py-1">
                <span className="text-[14px] text-[#1d1d1d]">10 条/页</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="w-8 h-8 flex items-center justify-center border border-[#e0e0e0] rounded hover:border-[#2663ff] hover:text-[#2663ff] disabled:opacity-50 disabled:hover:border-[#e0e0e0] disabled:hover:text-current"
                disabled={currentPage === 1}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded ${
                    page === currentPage
                      ? 'bg-[#2663ff] text-white'
                      : 'border border-[#e0e0e0] text-[#1d1d1d] hover:border-[#2663ff] hover:text-[#2663ff]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="mx-2">...</span>
              <button 
                onClick={() => setCurrentPage(50)}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  currentPage === 50
                    ? 'bg-[#2663ff] text-white'
                    : 'border border-[#e0e0e0] text-[#1d1d1d] hover:border-[#2663ff] hover:text-[#2663ff]'
                }`}
              >
                50
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(50, prev + 1))}
                className="w-8 h-8 flex items-center justify-center border border-[#e0e0e0] rounded hover:border-[#2663ff] hover:text-[#2663ff] disabled:opacity-50 disabled:hover:border-[#e0e0e0] disabled:hover:text-current"
                disabled={currentPage === 50}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <span className="text-[14px] text-[#1d1d1d]">跳至</span>
              <input
                type="text"
                className="w-12 h-8 border border-[#e0e0e0] rounded text-center"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const value = parseInt(e.currentTarget.value);
                    if (!isNaN(value) && value >= 1 && value <= 50) {
                      setCurrentPage(value);
                      e.currentTarget.value = '';
                    }
                  }
                }}
              />
              <span className="text-[14px] text-[#1d1d1d]">页</span>
            </div>
          </div>
        </div>
      )}

      {activeMainTab === '授权插件' && (
        <div className="absolute left-[400px] top-[120px] right-[40px]">
          <div className="bg-white rounded-[10px] p-8 border border-[#e0e0e0]">
            <h3 className="text-[#333333] text-[24px] font-bold mb-6">授权插件管理</h3>
            <div className="space-y-6">
              <div className="p-4 border border-[#e0e0e0] rounded-[8px]">
                <h4 className="text-[#333333] text-[18px] font-medium mb-3">已安装插件</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#333333] text-[16px] font-medium">SEO分析插件</p>
                      <p className="text-[#666666] text-[14px]">提供高级SEO分析功能</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#11ca9c] text-white px-3 py-1 rounded-[4px] text-[12px]">已启用</span>
                      <button className="text-[#2663ff] text-[14px] hover:underline">设置</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#333333] text-[16px] font-medium">关键词监控插件</p>
                      <p className="text-[#666666] text-[14px]">实时监控关键词排名变化</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#cccccc] text-white px-3 py-1 rounded-[4px] text-[12px]">已禁用</span>
                      <button className="text-[#2663ff] text-[14px] hover:underline">启用</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border border-[#e0e0e0] rounded-[8px]">
                <h4 className="text-[#333333] text-[18px] font-medium mb-3">插件商店</h4>
                <div className="flex items-center gap-4">
                  <button className="bg-[#2663ff] text-white px-4 py-2 rounded-[6px] text-[14px] font-medium hover:bg-[#1a4dcc] transition-colors">
                    浏览插件
                  </button>
                  <button className="bg-[#f5f5f5] text-[#666666] px-4 py-2 rounded-[6px] text-[14px] font-medium hover:bg-[#e0e0e0] transition-colors">
                    上传插件
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMainTab !== '账户设置' && activeMainTab !== '订阅信息' && activeMainTab !== '用户管理' && activeMainTab !== '通知' && activeMainTab !== '日志' && activeMainTab !== '授权插件' && (
        <div className="absolute left-[400px] top-[120px] right-[40px]">
          <div className="bg-white rounded-[10px] p-8 border border-[#e0e0e0]">
            <div className="text-center text-[#666666] text-[18px] py-20">
              {activeMainTab}功能即将推出
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 