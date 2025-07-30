import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { GeokLogo } from '@/components/GeokLogo';
import { SearchIcon, AnalyticsIcon, CheckIcon, FrameIcon, LocationIcon, ActionIcon, WeiboIcon, WechatIcon, TwitterIcon, LinkedInIcon, PinterestIcon, DownloadIcon } from '@/components/SocialIcons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 顶部导航栏 */}
      <Navigation />

      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 opacity-60 pointer-events-none" />

      {/* Hero区域 */}
      <section className="relative max-w-7xl mx-auto px-8 py-16 text-center">
        {/* 主标题 */}
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          让您的品牌被AI提及
        </h1>
        
        {/* GEOK Logo + 文字 - 调整为与顶部导航相同大小 */}
        <div className="flex justify-center items-center mb-8">
          <GeokLogo width={73} height={64} className="mr-4" />
          <span className="text-4xl font-bold">
            <span className="text-blue-600">GEO</span>
            <span className="text-yellow-500">K</span>
          </span>
        </div>

        {/* 副标题 */}
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          触及数百万正在利用人工智能来发现
          <br />
          新产品和新品牌的消费者群体
        </p>

        {/* CTA按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link 
            href="/auth/login" 
            className="bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center"
            style={{
              width: '144px',
              height: '40px',
              flexShrink: 0,
              borderRadius: '10px',
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'PingFang SC',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '-0.308px'
            }}
          >
            获取演示版
          </Link>
          <Link 
            href="/auth/login" 
            className="hover:bg-blue-50 transition-colors flex items-center justify-center"
            style={{
              width: '144px',
              height: '40px',
              flexShrink: 0,
              borderRadius: '10px',
              boxShadow: '0 0 12px 0 rgba(38, 99, 255, 0.26)',
              color: 'rgba(38, 99, 255, 0.40)',
              textAlign: 'center',
              fontFamily: 'PingFang SC',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '-0.308px'
            }}
          >
            开始使用
          </Link>
        </div>
      </section>

      {/* 功能特色卡片 */}
      <section className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 功能卡片1 - 追踪你的行踪 */}
          <div 
            className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
            style={{
              boxShadow: '0 0 12px 0 rgba(38, 99, 255, 0.26)'
            }}
          >
            <div className="flex justify-start mb-6">
              <SearchIcon size={18} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">
              追踪你的行踪
            </h3>
            <p className="text-gray-600 text-left leading-relaxed">
              看看您的品牌在AI答案中出现的频率
            </p>
          </div>

          {/* 功能卡片2 - 分析人工智能响应 */}
          <div 
            className="bg-blue-600 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            style={{
              boxShadow: '0 0 12px 0 rgba(38, 99, 255, 0.26)'
            }}
          >
            <div className="flex justify-start mb-6">
              <AnalyticsIcon size={25} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-left">
              分析人工智能响应
            </h3>
            <p className="text-white text-left leading-relaxed">
              了解人工智能对您的品牌和主题的看法。
            </p>
          </div>

          {/* 功能卡片3 - 发现引文 */}
          <div 
            className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
            style={{
              boxShadow: '0 0 12px 0 rgba(38, 99, 255, 0.26)'
            }}
          >
            <div className="flex justify-start mb-6">
              <FrameIcon size={24} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">
              发现引文
            </h3>
            <p className="text-gray-600 text-left leading-relaxed">
              找出哪些网站可以驱动人工智能回答有关您的问题
            </p>
          </div>

          {/* 功能卡片4 - 采取行动 */}
          <div 
            className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
            style={{
              boxShadow: '0 0 12px 0 rgba(38, 99, 255, 0.26)'
            }}
          >
            <div className="flex justify-start mb-6">
              <ActionIcon size={26} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">
              采取行动
            </h3>
            <p className="text-gray-600 text-left leading-relaxed">
              提高您的排名并增加曝光率
            </p>
          </div>
        </div>
      </section>

            {/* 数据分析仪表板 */}
       <section className="relative max-w-7xl mx-auto px-8 py-16">
         <div 
           className="bg-white rounded-[20px] p-6 w-full"
           style={{
             height: '680px',
             flexShrink: 0,
             boxShadow: '0 0 12px 0 rgba(38, 99, 255, 0.26)'
           }}
         >
           <div className="flex items-center justify-center h-full">
             <img 
               src="/images/Group143.png" 
               alt="数据分析仪表板" 
               className="w-full h-full object-contain"
             />
           </div>
         </div>
       </section>

      {/* 赢得AI搜索与GEOK */}
      <section className="relative max-w-7xl mx-auto px-8 py-16">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            赢得AI搜索与GEOK
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            生成式AI正在塑造品牌发现，GEOK确保您的品牌引领对话
          </p>
        </div>

        {/* 邮箱订阅区域 */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm max-w-2xl w-full">
            <input
              type="email"
              placeholder="输入您的公司邮箱"
              className="flex-1 px-6 py-4 text-sm text-gray-700 placeholder-gray-500 outline-none"
            />
            <Link href="/auth/login" className="bg-blue-600 text-white px-8 py-4 text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
              获取免费报告（30秒）
            </Link>
          </div>
        </div>

        {/* 功能卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI搜索推荐 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 relative">
              <div 
                className="absolute top-3 left-3 flex items-center justify-center flex-shrink-0"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.30)'
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 23 23" 
                  fill="none"
                  className="flex-shrink-0"
                  style={{
                    width: '22px',
                    height: '22px',
                    fill: '#FFF'
                  }}
                >
                  <path d="M11.0469 17.7171C7.92316 17.7459 5.36565 15.2484 5.33053 12.1345C5.42901 9.05665 7.96052 6.61219 11.0498 6.61219C14.1392 6.61219 16.6707 9.05665 16.7692 12.1345C16.7309 15.2493 14.1717 17.746 11.0469 17.7171ZM11.047 8.46465C8.98465 8.43694 7.28874 10.0781 7.25531 12.1338C7.33327 14.1667 9.00906 15.7746 11.0498 15.7746C13.0906 15.7746 14.7664 14.1667 14.8444 12.1338C14.8049 10.0803 13.1073 8.44491 11.047 8.47574V8.46465ZM12.5457 22.9233H10.164C9.85256 22.9233 9.56491 22.6823 9.40928 22.4135C9.33281 22.2814 9.29255 22.1316 9.29255 21.9792C9.29255 21.8267 9.33281 21.6769 9.40928 21.5448C9.56491 21.2761 9.85258 21.035 10.164 21.035H12.5457C13.027 21.035 13.4171 21.4994 13.4171 21.9791C13.4171 22.4589 13.027 22.9233 12.5457 22.9233ZM14.6313 20.3049H7.77622C7.29508 20.3049 6.90491 19.8556 6.90491 19.3758C6.90491 18.896 7.29506 18.4316 7.77622 18.4316H14.6313C15.1125 18.4316 15.5027 18.896 15.5027 19.3758C15.5027 19.8556 15.1125 20.3049 14.6313 20.3049ZM3.6052 13.0904H0.927082C0.445802 13.0904 0.0556641 12.6259 0.0556641 12.1461C0.0556641 11.6664 0.445802 11.2019 0.927082 11.2019H3.6052C4.08648 11.2019 4.47662 11.6664 4.47662 12.1461C4.47662 12.6259 4.08648 13.0904 3.6052 13.0904ZM21.1842 13.0904H18.5061C18.0248 13.0904 17.6347 12.6259 17.6347 12.1461C17.6347 11.6664 18.0248 11.2019 18.5061 11.2019H21.1842C21.6655 11.2019 22.0557 11.6664 22.0557 12.1461C22.0557 12.6259 21.6655 13.0904 21.1842 13.0904ZM5.6675 7.65817C5.43687 7.65606 5.1705 7.61004 5.00616 7.44873L3.11818 5.60146C2.7684 5.26398 2.80487 4.66257 3.14332 4.31391C3.48175 3.96536 4.0852 3.91093 4.43496 4.24829L6.32881 6.13039C6.6685 6.46954 6.623 7.06424 6.28331 7.40339C6.11894 7.5647 5.89814 7.65605 5.6675 7.65817ZM10.9423 5.31866C10.4611 5.31866 9.9951 4.92976 9.9951 4.45001V1.792C9.9951 1.31224 10.4611 0.92334 10.9423 0.92334C11.4236 0.92334 11.8896 1.31224 11.8896 1.792V4.45002C11.8896 4.92978 11.4236 5.31866 10.9423 5.31866ZM16.3218 7.36868C16.1022 7.36245 15.8938 7.271 15.7409 7.11381C15.6594 7.03356 15.5947 6.93798 15.5505 6.83262C15.5064 6.72726 15.4836 6.61421 15.4836 6.50003C15.4836 6.2693 15.5157 6.00294 15.6802 5.84081L17.5741 3.95879C17.9158 3.61976 18.5291 3.66636 18.8692 4.00697C19.2093 4.34756 19.2535 4.95897 18.9118 5.298L17.0005 7.1801C16.8313 7.34414 16.5577 7.37329 16.3218 7.36868Z" fill="#FFF"/>
                </svg>
              </div>
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold tracking-wider">
                AI搜索推荐
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-base tracking-wider">
                人工智能搜索引擎推荐
              </p>
            </div>
          </div>

          {/* AI呈现占比-品牌 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-green-400 to-green-500 h-32 relative">
              <div 
                className="absolute top-3 left-3 flex items-center justify-center flex-shrink-0"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.30)'
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 30 30" 
                  fill="none"
                  className="flex-shrink-0"
                  style={{
                    width: '30px',
                    height: '30px',
                    fill: '#FFF'
                  }}
                >
                  <path d="M26.7036 16.6152H21.8033C21.5056 16.689 21.2841 16.5413 21.2091 16.2436L20.466 13.8714L18.1641 24.7716C18.1641 24.7716 18.0903 25.3658 17.7926 25.3658H16.9769C16.7542 25.4397 16.4576 25.2908 16.3826 24.9943L13.4865 10.831L11.3335 21.0643C11.2585 21.287 10.9619 21.5097 10.7392 21.4347H9.99618C9.69965 21.5097 9.47696 21.3609 9.40196 21.0643L7.91698 16.5413H3.98243C3.92331 16.5592 3.86089 16.5633 3.79996 16.5532C3.73903 16.5432 3.68121 16.5193 3.63095 16.4834C3.58069 16.4475 3.53933 16.4006 3.51005 16.3462C3.48077 16.2919 3.46435 16.2315 3.46205 16.1698V15.1314C3.46047 15.0627 3.47282 14.9945 3.49836 14.9308C3.52389 14.8671 3.56208 14.8092 3.61061 14.7607C3.65914 14.7122 3.71701 14.674 3.78072 14.6484C3.84443 14.6229 3.91265 14.6106 3.98127 14.6121H8.88274C9.17927 14.6121 9.40196 14.6121 9.47696 14.9098L10.2189 17.2821L12.3731 6.15918C12.3731 6.15918 12.4469 5.78764 12.8184 5.78764H13.8569C14.0807 5.7138 14.3773 5.86264 14.4523 6.15918L17.2734 20.1747L19.3526 10.0891C19.4264 9.86643 19.6491 9.64374 19.8718 9.71874H20.6887C20.9864 9.64374 21.2079 9.79259 21.2829 10.0891L22.6941 14.6871H26.6286C26.6973 14.6854 26.7657 14.6976 26.8295 14.7231C26.8934 14.7486 26.9514 14.7867 27 14.8353C27.0487 14.8838 27.087 14.9417 27.1126 15.0055C27.1382 15.0693 27.1506 15.1376 27.149 15.2064V16.1698C27.224 16.3925 27.0002 16.6152 26.7036 16.6152Z" fill="#FFF"/>
                </svg>
              </div>
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold tracking-wider">
                AI呈现占比-品牌
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-base tracking-wider">
                内容在AI中呈现占比
              </p>
            </div>
          </div>

          {/* 市场声量 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 h-32 relative">
              <div 
                className="absolute top-3 left-3 flex items-center justify-center flex-shrink-0"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.30)'
                }}
              >
                <div className="relative flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 21 21" 
                    fill="none"
                    className="flex-shrink-0"
                    style={{
                      width: '21px',
                      height: '21px',
                      fill: '#FFF'
                    }}
                  >
                    <path d="M6.70023 12.2343L7.00813 12.2483H9.44334C10.0172 10.7657 11.0948 9.53496 12.4664 8.75173H7.00813C6.04244 8.75173 5.25869 7.96851 5.25869 7.00346C5.25869 6.12233 5.91648 5.36708 6.7982 5.26918L7.00813 5.25519H14.4677C15.4334 6.93353 17.5747 7.49298 19.2542 6.52793C20.9336 5.56289 21.4934 3.423 20.5278 1.74466C19.5621 0.0663259 17.4208 -0.493121 15.7413 0.471924C15.2095 0.77962 14.7756 1.21319 14.4677 1.74466H7.00813C4.11106 1.74466 1.75982 4.09434 1.75982 6.98947C1.74583 9.77272 3.91513 12.0804 6.70023 12.2343ZM9.05147 15.7448H6.53228C5.56659 14.0665 3.42529 13.507 1.74583 14.4721C0.0663701 15.4371 -0.493449 17.577 0.472239 19.2553C1.43793 20.9337 3.57924 21.4931 5.25869 20.5281C5.79052 20.2204 6.22438 19.7868 6.53228 19.2553H10.6749C9.83521 18.2763 9.2614 17.0735 9.05147 15.7448Z" fill="#FFF"/>
                  </svg>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 12 12" 
                    fill="none"
                    className="absolute bottom-0 right-0 flex-shrink-0"
                    style={{
                      width: '12px',
                      height: '12px',
                      fill: '#FFF',
                      transform: 'translate(4%, 0%)'
                    }}
                  >
                    <path d="M5.98614 0C2.67436 0 0 2.67746 0 5.99306C0 9.30867 2.68822 12 6 12C9.31178 12 12 9.30867 12 5.99306C12 2.67746 9.29792 0 5.98614 0ZM9.25635 4.45318H6.59584V5.21619H8.93764V7.53295C8.93764 7.72717 8.90993 7.89364 8.8545 8.03237C8.79908 8.1711 8.70208 8.28208 8.59122 8.36532C8.48037 8.44856 8.3418 8.50405 8.18938 8.51792C8.03695 8.54566 7.67668 8.55954 7.10855 8.55954C7.03926 8.26821 6.95612 7.99075 6.87298 7.71329C7.10854 7.72717 7.35797 7.74104 7.60739 7.74104C7.91224 7.74104 8.06467 7.58844 8.06467 7.29711V6.03468H6.6097V9.23931H5.66744V6.03468H4.37875V8.54566H3.49192V5.20231H5.66744V4.43931H3.03464V3.60694H5.5843C5.50116 3.38497 5.41801 3.17688 5.33487 2.99653L6.37413 2.76069C6.48499 3.03815 6.58199 3.31561 6.67898 3.62081H9.25635V4.45318Z" fill="#FFF"/>
                  </svg>
                </div>
              </div>
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold tracking-wider">
                市场声量
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-base tracking-wider">
                品牌的提及次数
              </p>
            </div>
          </div>

          {/* 多维度精准的数据监控 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 h-32 relative">
              <div 
                className="absolute top-3 left-3 flex items-center justify-center flex-shrink-0"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.30)'
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 21 22" 
                  fill="none"
                  className="flex-shrink-0"
                  style={{
                    width: '21px',
                    height: '22px',
                    fill: '#FFF'
                  }}
                >
                  <path d="M10.5 0C16.2991 0 21 4.79911 21 10.7194C21.0036 13.3454 20.0594 15.8808 18.3478 17.841L20.5442 20.0834C20.69 20.2323 20.7719 20.4342 20.7719 20.6448C20.7719 20.8553 20.69 21.0572 20.5442 21.2061L19.9943 21.7675C19.8485 21.9164 19.6507 22 19.4444 22C19.2382 22 19.0404 21.9164 18.8945 21.7675L16.6118 19.437C14.8306 20.7422 12.6925 21.4424 10.5 21.4388C4.70089 21.4388 0 16.6397 0 10.7194C0 4.79911 4.70089 0 10.5 0ZM10.5 2.38209C5.98966 2.38209 2.33333 6.11482 2.33333 10.7194C2.33333 15.324 5.98966 19.0567 10.5 19.0567C15.0103 19.0567 18.6667 15.324 18.6667 10.7194C18.6667 6.11482 15.0103 2.38209 10.5 2.38209ZM7 8.73432C7.20628 8.73432 7.40411 8.81798 7.54997 8.96689C7.69583 9.1158 7.77777 9.31776 7.77777 9.52835V15.0866C7.77777 15.2971 7.69583 15.4991 7.54997 15.648C7.40411 15.7969 7.20628 15.8806 7 15.8806H6.22222C6.01594 15.8806 5.81811 15.7969 5.67225 15.648C5.52639 15.4991 5.44444 15.2971 5.44444 15.0866V9.52835C5.44444 9.31776 5.52639 9.1158 5.67225 8.96689C5.81811 8.81798 6.01594 8.73432 6.22222 8.73432H7ZM10.8889 5.55821C11.0952 5.55821 11.293 5.64186 11.4389 5.79077C11.5847 5.93968 11.6667 6.14164 11.6667 6.35223V15.0866C11.6667 15.2971 11.5847 15.4991 11.4389 15.648C11.293 15.7969 11.0952 15.8806 10.8889 15.8806H10.1111C9.90483 15.8806 9.707 15.7969 9.56113 15.648C9.41527 15.4991 9.33333 15.2971 9.33333 15.0866V6.35223C9.33333 6.14164 9.41527 5.93968 9.56113 5.79077C9.707 5.64186 9.90483 5.55821 10.1111 5.55821H10.8889ZM14.7778 7.14626C14.984 7.14626 15.1819 7.22992 15.3277 7.37883C15.4736 7.52774 15.5555 7.7297 15.5555 7.94029V15.0866C15.5555 15.2971 15.4736 15.4991 15.3277 15.648C15.1819 15.7969 14.984 15.8806 14.7778 15.8806H14C13.7937 15.8806 13.5959 15.7969 13.45 15.648C13.3042 15.4991 13.2222 15.2971 13.2222 15.0866V7.94029C13.2222 7.7297 13.3042 7.52774 13.45 7.37883C13.5959 7.22992 13.7937 7.14626 14 7.14626H14.7778Z" fill="#FFF"/>
                </svg>
              </div>
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold tracking-wider">
                多维度精准的数据监控
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-base tracking-wider">
                多AI平台信源/索引监控
              </p>
            </div>
          </div>
        </div>
      </section>

              {/* AI洞察部分 */}
        <section className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="relative flex items-center justify-center">
            {/* 图片容器带渐变边缘 */}
            <div className="relative">
              <img 
                src="/images/picture.png" 
                alt="AI洞察" 
                className="w-full h-auto object-contain max-w-full"
              />
              {/* 顶部渐变遮罩 */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none"></div>
              {/* 底部渐变遮罩 */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
              {/* 左侧渐变遮罩 */}
              <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
              {/* 右侧渐变遮罩 */}
              <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
            </div>
          </div>

        {/* 未来展望部分 */}
        <div className="relative mt-32">
          {/* 文字内容 */}
          <div className="max-w-[1374px] mx-auto relative py-[72px]">
            {/* 背景图标 */}
            <div 
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
              style={{
                width: '35vw',
                maxWidth: '512.269px',
                height: '35vw',
                maxHeight: '512.269px',
                transform: 'rotate(21.334deg)',
                flexShrink: 0,
                aspectRatio: '512.27/512.27',
                opacity: 0.3,
                background: 'url(/images/shield.svg) lightgray 50% / cover no-repeat'
              }}
            />

            <div className="relative text-center">
              <div className="mb-16">
                <h2 className="font-['PingFang_SC'] font-semibold text-[58px] leading-[80px] tracking-[-0.308px]">
                  <span className="block text-[#2663FF] mb-4">在未来，</span>
                  <span className="block text-[#333333]">50%的传统搜索流量将被生成式AI取代</span>
                </h2>
              </div>

              <div className="mb-8">
                <p className="font-['PingFang_SC'] font-light text-[58px] leading-normal text-[#2663FF]">
                  你的品牌准备好了吗?
                </p>
              </div>

              <div>
                <p className="font-['PingFang_SC'] font-light text-[14px] leading-normal text-[#666666]">
                  数据来源: Gartnel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 定价方案部分 */}
      <section className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            选择适合你的方案
          </h2>
          <p className="text-xl text-gray-600">
            灵活的定价选项，满足不同规模企业的需求
          </p>
        </div>

        {/* 用户方案部分 */}
        <div className="relative mt-32">
          {/* 旋转背景图 */}
          <div className="absolute left-[10%] top-[347px] pointer-events-none hidden lg:block">
            <div className="transform rotate-[352.061deg] opacity-40">
              <div 
                className="w-[40vw] max-w-[744px] h-[30vw] max-h-[569px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/www-okx-placeholder.png')`
                }}
              />
              </div>
            </div>

          {/* 模糊圆形背景 */}
          <div className="absolute right-0 top-[343px] w-[45vw] max-w-[838px] h-[45vw] max-h-[838px] pointer-events-none hidden lg:block">
            <img src="/images/ellipse-blur.svg" alt="" className="w-full h-full" />
          </div>

          {/* 标题部分 */}
          <div className="text-left mb-8">
            <h2 className="font-['PingFang_SC'] font-bold text-[32px] text-[#333333] mb-2 text-center">
              用户方案
            </h2>
            <p className="font-['PingFang_SC'] text-[14px] text-[#666666] text-center">
              使用GEOK来追踪并优化
            </p>
          </div>

          {/* 切换按钮 */}
          <div className="flex justify-center mb-16">
            <div className="bg-white rounded-[10px] h-[70px] max-w-[400px] w-full mx-4 flex items-center px-6 shadow-sm relative">
              <span className="font-['PingFang_SC'] text-[18px] text-[#333333] mr-8">每月支付</span>
              <div className="bg-[#2663FF] rounded-lg h-[52px] max-w-[184px] w-full flex items-center justify-center px-4">
                <span className="font-['PingFang_SC'] text-[16px] text-white">年付（首月免费）</span>
              </div>
            </div>
          </div>

          {/* 价格卡片 */}
          <div className="flex flex-wrap gap-6 justify-center">
            {/* 功能增长卡片 */}
            <div className="relative bg-white rounded-xl max-w-[360px] w-full shadow-lg flex flex-col">
              {/* 卡片内容 */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-['PingFang_SC'] text-[18px] text-[#333333]">功能增长</h3>
                  <div className="bg-[rgba(38,99,255,0.1)] rounded h-[30px] w-[108px] border border-[#2663FF] flex items-center justify-center">
                    <span className="font-['PingFang_SC'] font-medium text-[14px] text-[#2663FF]">最受欢迎</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="font-['PingFang_SC'] font-medium text-[32px] text-[#333333]">¥4999</span>
                    <span className="font-['PingFang_SC'] text-[14px] text-[#333333] ml-1">/月 (年费用户)</span>
                  </div>
                  <p className="font-['PingFang_SC'] font-medium text-[14px] text-[#2663FF] mt-2">试用一个月</p>
                </div>

                {/* 平台图标 */}
                <div className="relative mb-8" style={{ height: '22.576px' }}>
                  <div className="absolute left-0 w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-google.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[27.671px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-behance.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[55.342px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-openai.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[83.013px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-ai.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[110.684px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-google.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[138.355px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-behance.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[166.026px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-openai.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[193.697px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-ai.svg" alt="" className="w-full h-full" />
                  </div>
                </div>

                {/* 功能列表 */}
                <div className="space-y-3 mb-16">
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">
                      <span className="text-[#2663FF]">10,000</span> 信用额度
                    </span>
                    <div className="w-[18px] h-[18px] ml-auto bg-gray-100 rounded flex items-center justify-center">
                      <img src="/images/check-icon.svg" alt="" className="w-3 h-3" />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">每1000个信用额度充值100元</span>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">竞争对手分析</span>
                    <div className="w-[18px] h-[18px] ml-auto bg-gray-100 rounded flex items-center justify-center">
                      <img src="/images/check-icon.svg" alt="" className="w-3 h-3" />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">在所有平台上的AI可见性</span>
                    <div className="w-[18px] h-[18px] ml-auto bg-gray-100 rounded flex items-center justify-center">
                      <img src="/images/check-icon.svg" alt="" className="w-3 h-3" />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">情报数据汇总</span>
                    <div className="w-[18px] h-[18px] ml-auto bg-gray-100 rounded flex items-center justify-center">
                      <img src="/images/check-icon.svg" alt="" className="w-3 h-3" />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666] leading-5">内容投放的自动化外联</span>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">AI人工智能盲点检测</span>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">网页分析</span>
                    <div className="w-[18px] h-[18px] ml-auto bg-gray-100 rounded flex items-center justify-center">
                      <img src="/images/check-icon.svg" alt="" className="w-3 h-3" />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">多语言支持</span>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-green.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">自助服务</span>
                  </div>
                </div>

                {/* 按钮 */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-5">
                  <Link href="/auth/login" className="bg-[#2663FF] text-white rounded-[10px] h-10 w-full flex items-center justify-center">
                    <span className="font-['PingFang_SC'] text-[16px]">开始使用</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 企业版卡片 */}
            <div className="relative bg-white rounded-xl max-w-[330px] w-full shadow-lg flex flex-col">
              <div className="p-5">
                <h3 className="font-['PingFang_SC'] text-[18px] text-[#333333] mb-4">企业版</h3>
                
                <div className="mb-8">
                  <div className="font-['PingFang_SC'] font-medium text-[32px] text-[#333333] mb-2">联系我们</div>
                  <p className="font-['PingFang_SC'] font-medium text-[14px] text-[#2663FF]">起始价格 每月15999</p>
                </div>

                {/* 平台图标 */}
                <div className="relative mb-8" style={{ height: '22.576px' }}>
                  <div className="absolute left-0 w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-google.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[27.671px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-behance.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[55.342px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-openai.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[83.013px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-ai.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[110.684px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-google.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[138.355px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-behance.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[166.026px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-openai.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-[193.697px] w-[22.576px] h-[22.576px]">
                    <img src="/images/platform-ai.svg" alt="" className="w-full h-full" />
                  </div>
                </div>

                {/* 功能列表 */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <img src="/images/check-icon.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">
                      <span className="text-[#2663FF]">自定义</span> 信用额度
              </span>
            </div>

                  <div className="flex items-start">
                    <img src="/images/check-icon.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">高级分析和报告</span>
              </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-icon.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">贴身式的客户支持和运营服务</span>
            </div>

                  <div className="flex items-start">
                    <img src="/images/check-icon.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">企业私享沟通通道</span>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-icon.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">SAML SSO登录方式</span>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-icon.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">专业的培训课程</span>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-icon.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">
                      AI搜索内容本地化 <span className="text-[12px]">(60+ 地区)</span>
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-icon.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">数据保留长达5年</span>
                  </div>
                  
                  <div className="flex items-start">
                    <img src="/images/check-icon.svg" alt="" className="w-2 h-2 mt-1.5 mr-3 flex-shrink-0" />
                    <span className="font-['PingFang_SC'] text-[14px] text-[#666666]">Access to exclusive founder office hours</span>
                  </div>
                </div>

                {/* 按钮 */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-5">
                  <Link href="/auth/login" className="border border-[#2663FF] text-[#2663FF] rounded-[10px] h-10 w-full flex items-center justify-center">
                    <span className="font-['PingFang_SC'] text-[16px]">开始使用</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* 公司信息 */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <GeokLogo width={48} height={42} className="mr-3" />
                <span className="text-xl font-bold">GEOK</span>
              </div>
              <p className="text-gray-400 mb-6">
                专业的品牌监控与分析平台，助力企业精准把握品牌影响力。
              </p>
              
              {/* 社交媒体图标 - 使用新的图标 */}
              <div className="flex space-x-4">
                <WeiboIcon size={40} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <WechatIcon size={40} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <TwitterIcon size={40} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>

            {/* 产品链接 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">产品</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">功能特色</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">定价方案</Link></li>
                <li><Link href="/api" className="text-gray-400 hover:text-white transition-colors">API文档</Link></li>
                <li><Link href="/integrations" className="text-gray-400 hover:text-white transition-colors">第三方集成</Link></li>
              </ul>
            </div>

            {/* 解决方案链接 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">解决方案</h4>
              <ul className="space-y-2">
                <li><Link href="/enterprise" className="text-gray-400 hover:text-white transition-colors">企业版</Link></li>
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition-colors">代理商</Link></li>
                <li><Link href="/startups" className="text-gray-400 hover:text-white transition-colors">初创公司</Link></li>
                <li><Link href="/personal" className="text-gray-400 hover:text-white transition-colors">个人品牌</Link></li>
              </ul>
            </div>

            {/* 支持链接 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">支持</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">帮助中心</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">联系我们</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">隐私政策</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">服务条款</Link></li>
              </ul>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GEOK. 保留所有权利。
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              京ICP备12345678号-1
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie横幅 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">
            我们使用Cookie来改善您的体验。继续使用本网站即表示您同意我们的Cookie政策。
          </p>
          <div className="flex space-x-4">
            <button className="text-sm text-blue-600 hover:underline">
              了解更多
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              接受
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
