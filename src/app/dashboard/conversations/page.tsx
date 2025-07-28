'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// 图标资源常量 - 参考Figma设计和现有页面
const img2 = "../images/img2.png";
const imgLine2 = "../images/Line2.svg";
const imgFrame = "../images/Frame.svg";
const imgFrame1 = "../images/Frame1.svg";
const imgFrame2 = "../images/Frame2.svg";
const imgFrame3 = "../images/Frame3.svg";
const imgFrame4 = "../images/Frame4.svg";
const imgFrame5 = "../images/Frame5.svg";
const imgFrame6 = "../images/Frame6.svg";
const imgVector = "../images/Vector.svg";
const imgGroup134 = "../images/Group134.svg";
const imgSearchBg = "../images/search.png";

export default function ConversationsPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState('平台筛选')
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const platforms = ['DeepSeek', '豆包', '文心一言', 'ChatGPT', 'Claude']
  
  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform)
    setIsDropdownOpen(false)
  }

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className="bg-[#ffffff] relative size-full min-h-screen w-full min-w-[1920px] overflow-x-auto"
      style={{ fontFamily: "'PingFang SC', sans-serif" }}
    >
      {/* 背景色块 */}
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-[#ffffff] h-[1000px] left-0 top-20 w-[350px]" />
        <div className="absolute bg-[rgba(255,255,255,0.1)] h-20 left-0 top-0 w-[350px]" />
        <div className="absolute bg-[rgba(255,255,255,0.1)] h-20 left-[350px] top-0 w-[1570px]" />
      </div>

      {/* 主背景图片 */}
      <div 
        className="absolute bg-center bg-cover bg-no-repeat h-[999px] left-[350px] top-20 w-[1570px]"
        style={{ backgroundImage: `url('${imgSearchBg}')` }}
      />

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

      {/* 左侧导航 */}
      <div className="absolute h-0 left-[65px] top-[392px] w-[220px]">
        <div className="absolute bottom-[-1px] left-[-0.455%] right-[-0.455%] top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine2} />
        </div>
      </div>

      {/* 首页菜单项 */}
      <Link href="/dashboard">
        <div className="absolute contents left-[86px] top-[118px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[119px] hover:text-[#2663ff] transition-colors">
            <p className="block leading-[normal] whitespace-pre">首页  Home Page</p>
          </div>
          <div className="absolute left-[86px] size-6 top-[118px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_332_105_black)">
                <path d="M23.2499 9.75L13.1999 1.05C12.4499 0.449998 11.5499 0.449998 10.7999 1.05L0.749902 9.75C0.149902 10.2 -9.76622e-05 10.95 0.299902 11.7C0.599902 12.45 1.1999 12.9 2.0999 12.9H2.9999V21.45C2.9999 22.5 3.8999 23.4 4.9499 23.4H19.3499C20.3999 23.4 21.2999 22.5 21.2999 21.45V20.1C21.2999 19.65 20.8499 19.2 20.3999 19.2C19.9499 19.2 19.4999 19.65 19.4999 20.1L19.3499 21.45H16.1999V15.6C16.1999 14.55 15.4499 13.8 14.3999 13.8H9.8999C8.8499 13.8 8.0999 14.55 8.0999 15.6V21.45H4.9499V12.15C4.9499 11.7 4.4999 11.25 4.0499 11.25H2.0999L11.9999 2.55L22.0499 11.25H20.0999C19.6499 11.25 19.1999 11.7 19.1999 12.15V15.9C19.1999 16.35 19.6499 16.8 20.0999 16.8C20.5499 16.8 20.9999 16.35 20.9999 15.9V12.9H22.0499C22.7999 12.9 23.5499 12.45 23.8499 11.7C23.9999 10.95 23.8499 10.2 23.2499 9.75ZM9.7499 15.75H14.2499V21.6H9.7499V15.75Z" fill="#444444"/>
              </g>
              <defs>
                <clipPath id="clip0_332_105_black">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </Link>

      {/* 对话菜单项 - 激活状态 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[30px] rounded-[10px] top-[169px] w-[290px]" />
      <div className="absolute contents left-[88px] top-[188px]">
        <div className="absolute font-medium leading-[0] left-[120px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[188px]">
          <p className="block leading-[normal] whitespace-pre">对话  Conversations</p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-[188px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame3} />
        </div>
      </div>

      {/* 其他菜单项 */}
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

      <Link href="/dashboard/settings">
        <div className="absolute contents left-[88px] top-[506px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[506px] hover:text-[#2663ff] transition-colors">
            <p className="leading-[normal] whitespace-pre">
              <span>设置  </span>
              <span>Settings</span>
            </p>
          </div>
          <div className="absolute left-[88px] size-[22px] top-[506px]">
            <img alt="" className="block max-w-none size-full" src={imgFrame4} />
          </div>
        </div>
      </Link>

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

      {/* 主标题 */}
      <div className="absolute font-semibold leading-[0] left-[785px] not-italic text-[#333333] text-[36px] text-center top-[399px] w-[700px]">
        <p className="block leading-[50px]">AI用户都在问什么</p>
      </div>

      {/* 搜索区域 */}
      <div className="absolute contents left-[785px] top-[515px]">
        {/* 主搜索框 */}
        <div className="absolute bg-[#ffffff] h-[60px] left-[785px] rounded-[10px] shadow-[0px_0px_4px_1px_rgba(38,99,255,0.5)] top-[515px] w-[540px]" />
        <input 
          type="text"
          placeholder="interCPU发售"
          className="absolute font-normal leading-[0] left-[810px] not-italic text-[#999999] text-[16px] text-left text-nowrap top-[536px] bg-transparent border-none outline-none w-[400px]"
        />
        <div className="absolute left-[1270px] size-[30px] top-[530px] cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M13.5316 24.5846C10.8592 24.5846 8.26598 23.6581 6.22988 21.9758C3.04163 19.3427 1.50653 15.0277 2.31923 10.9829C2.99483 7.62126 5.24138 4.60686 8.18198 3.11631C9.85433 2.26851 11.7071 1.82031 13.54 1.82031C15.1652 1.82031 16.7384 2.15931 18.2153 2.82771C21.4501 4.29201 23.903 7.29741 24.6166 10.6712C25.4306 14.5196 24.2852 18.4828 21.5528 21.2728C21.3626 21.4669 21.146 21.5653 20.909 21.5653C20.5259 21.5653 20.1304 21.2852 19.9681 20.8994C19.8196 20.5459 19.8953 20.1785 20.1761 19.8919C22.1831 17.8435 23.1812 15.0793 22.9148 12.3083C22.6645 9.70086 21.2705 7.17246 19.2772 5.70966C17.5391 4.43421 15.5197 3.76011 13.4372 3.76011C12.2177 3.75853 11.0097 3.99702 9.88223 4.46196C6.80633 5.72361 4.60088 8.58216 4.12613 11.9224C3.65453 15.242 5.09978 18.7655 7.72238 20.6902C9.44543 21.955 11.4484 22.6234 13.5148 22.6234C14.7307 22.6234 15.9416 22.3934 17.1139 21.9397C17.1939 21.9087 17.279 21.8929 17.3648 21.8929C17.7691 21.8929 18.1883 22.2212 18.2993 22.625C18.4384 23.1305 18.1588 23.6147 17.6041 23.8297C16.3345 24.3206 14.9924 24.5747 13.6151 24.5845H13.5316V24.5846Z" fill="#999999"/>
            <path d="M27.1807 27.7113C26.9434 27.7113 26.7257 27.617 26.5337 27.431L20.2532 21.3504C19.9688 21.0749 19.8859 20.7186 20.0257 20.3729C20.1848 19.9797 20.5897 19.6944 20.9884 19.6944C21.2257 19.6944 21.4433 19.7888 21.6355 19.9749L27.9157 26.0555C28.2002 26.3309 28.2832 26.6873 28.1434 27.0332C27.9844 27.4262 27.5794 27.7113 27.1807 27.7113ZM10.6496 11.3405C9.86391 11.3405 9.22461 10.7012 9.22461 9.91548C9.22461 9.12978 9.86391 8.49048 10.6496 8.49048C11.4353 8.49048 12.0746 9.12978 12.0746 9.91548C12.0746 10.7012 11.4353 11.3405 10.6496 11.3405Z" fill="#999999"/>
          </svg>
        </div>

        {/* 平台筛选下拉框 */}
        <div className="absolute left-[1335px] top-[515px] w-[150px]" ref={dropdownRef}>
          {/* 下拉框容器 */}
          <div className={`bg-[#ffffff] rounded-[10px] shadow-[0px_0px_4px_1px_rgba(38,99,255,0.5)] transition-all duration-200 ${
            isDropdownOpen ? '' : ''
          }`}>
            
            {/* 主选择区域 */}
            <div 
              className="h-[60px] px-4 flex items-center justify-between cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="font-normal text-[16px] text-[#333333]">{selectedPlatform}</span>
              <div className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                <img alt="下拉箭头" className="block w-full h-full" src={imgVector} />
              </div>
            </div>

            {/* 下拉选项列表 */}
            {isDropdownOpen && (
              <div className="border-t border-[#eeeeee]">
                {platforms.map((platform, index) => (
                  <div
                    key={platform}
                    className={`h-[36px] px-4 flex items-center cursor-pointer hover:bg-[#f5f5f5] transition-colors ${
                      index < platforms.length - 1 ? 'border-b border-[#eeeeee]' : ''
                    } ${
                      selectedPlatform === platform ? 'text-[#333333]' : 'text-[#999999]'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePlatformSelect(platform)
                    }}
                  >
                    <span className="font-normal text-[16px]">{platform}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>


    </div>
  )
} 