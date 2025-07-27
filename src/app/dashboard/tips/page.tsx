'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// 图标资源常量 - 从Figma获取的临时占位符
const img2 = "../images/img2.png";
const imgLine2 = "../images/Line2.svg";
const imgFrame = "../images/Frame.svg";
const imgFrame1 = "../images/Frame1.svg";
const imgFrame2 = "../images/Frame2.svg";
const imgFrame3 = "../images/Frame3.svg";
const imgFrame4 = "../images/Frame4.svg";
const imgLine6 = "../images/Line6.svg";
const imgLine7 = "../images/Line7.svg";
const imgFrame5 = "../images/Frame5.svg";
const imgFrame6 = "../images/Frame6.svg";
const imgFrame7 = "../images/Frame7.svg";
const imgVector = "../images/Vector.svg";
const imgVectorSmall = "../images/Vector-small.svg";
const imgVector1 = "../images/Vector1.svg";
const imgFrame8 = "../images/Frame7.svg";
const imgGroup134 = "../images/Group134.svg";

// 排序图标组件
const SortIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11.2469 8.5H4.75318C3.97974 8.5 3.49849 9.34219 3.89224 10.0078L7.13912 15.5078C7.33287 15.8359 7.66724 16 8.00005 16C8.33287 16 8.66724 15.8359 8.86099 15.5078L12.1079 10.0094C12.5016 9.34219 12.0219 8.5 11.2469 8.5ZM12.1079 5.99219L8.86099 0.492188C8.66724 0.164062 8.33287 0 8.00005 0C7.66724 0 7.33287 0.164062 7.13912 0.492188L3.89224 5.99219C3.49849 6.65938 3.97974 7.5 4.75318 7.5H11.2469C12.0219 7.5 12.5016 6.65781 12.1079 5.99219Z" fill="#333333"/>
  </svg>
);

// 弹窗组件
const KeywordFrequencyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <>
      {/* 轻微的背景遮罩，让弹窗突出但保持背景可见 */}
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center" 
        onClick={onClose}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <div className="bg-white rounded-[20px] w-[1000px] h-[700px] relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-gray-200" onClick={(e) => e.stopPropagation()}>
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
          >
            ×
          </button>
          
          <div className="flex h-full p-6">
            {/* 左侧 - 关键词频率 */}
            <div className="flex-1 mr-6">
              {/* 标题和图例在同一行 */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[30px] font-black text-[#333333]">关键词频率</h2>
                
                {/* 色彩图例 */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#2663ff] rounded-sm"></div>
                    <span className="text-[16px] font-medium text-[#2663ff]">70+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#ffb200] rounded-sm"></div>
                    <span className="text-[16px] font-medium text-[#ffb200]">50+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#11ca9c] rounded-sm"></div>
                    <span className="text-[16px] font-medium text-[#11ca9c]">30+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#fa8919] rounded-sm"></div>
                    <span className="text-[16px] font-medium text-[#fa8919]">15+</span>
                  </div>
                </div>
              </div>

              {/* 词云区域 */}
              <div className="relative bg-white border border-black rounded-[10px] h-[550px] overflow-hidden">
                {/* 径向渐变背景 - 精确复制Figma效果 */}
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80.288%)'
                  }}
                />

                {/* 中心主关键词 - 透明度100% */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                  <div className="text-[32px] font-medium text-[#2663ff] mb-2">
                    CPU性能排行榜最新
                  </div>
                  <div className="text-[16px] text-[#2663ff]">
                    （日均搜索量：48万+）
                  </div>
                </div>

                {/* 第一圈：90度间隔，距离中心100px，透明度1.0 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[30px] text-[#2663ff] z-10"
                  style={{ 
                    top: 'calc(50% - 100px)', 
                    left: '50%',
                    opacity: 1
                  }}
                >
                  超线程
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[30px] text-[#fa8919] z-10"
                  style={{ 
                    top: '50%', 
                    left: 'calc(50% + 100px)',
                    opacity: 1
                  }}
                >
                  SMT
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[30px] text-[#fa8919] z-10"
                  style={{ 
                    top: 'calc(50% + 100px)', 
                    left: '50%',
                    opacity: 1
                  }}
                >
                  多核
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[30px] text-[#fa8919] z-10"
                  style={{ 
                    top: '50%', 
                    left: 'calc(50% - 100px)',
                    opacity: 1
                  }}
                >
                  英特尔
                </div>

                {/* 第二圈：45度偏移，距离中心140px，透明度0.8 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[22px] text-[#ffb200] z-10"
                  style={{ 
                    top: 'calc(50% - 70px)', 
                    left: 'calc(50% - 140px)',
                    opacity: 0.8
                  }}
                >
                  虚拟化支持
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[20px] text-[#ff4d4d] z-10"
                  style={{ 
                    top: 'calc(50% - 140px)', 
                    left: 'calc(50% + 70px)',
                    opacity: 0.8
                  }}
                >
                  缓存
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[20px] text-[#ff4d4d] z-10"
                  style={{ 
                    top: 'calc(50% + 70px)', 
                    left: 'calc(50% + 140px)',
                    opacity: 0.8
                  }}
                >
                  硅基大脑
                </div>

                {/* 第三圈：距离中心180px，透明度0.6，避免重叠 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[18px] text-[#999999] z-10"
                  style={{ 
                    top: 'calc(50% - 190px)', 
                    left: '50%',
                    opacity: 0.6
                  }}
                >
                  ECC内存
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[18px] text-[#999999] z-10"
                  style={{ 
                    top: 'calc(50% - 20px)', 
                    left: 'calc(50% + 190px)',
                    opacity: 0.6
                  }}
                >
                  AI加速核
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[24px] text-[#fa8919] z-10"
                  style={{ 
                    top: 'calc(50% + 190px)', 
                    left: '50%',
                    opacity: 0.6
                  }}
                >
                  国产龙芯CPU
                </div>
                
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-[18px] text-[#999999] z-10"
                  style={{ 
                    top: 'calc(50% + 20px)', 
                    left: 'calc(50% - 190px)',
                    opacity: 0.6
                  }}
                >
                  动态超频技术
                </div>

                {/* 带搜索量的关键词 - 内圈，透明度0.9 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                  style={{ 
                    top: 'calc(50% - 50px)', 
                    left: 'calc(50% + 50px)',
                    opacity: 0.9
                  }}
                >
                  <div className="text-[20px] text-[#ff4d4d] mb-1">CPU温度正常范围是多少</div>
                  <div className="text-[12px] text-[#ff4d4d]">（日均搜索量：32万+）</div>
                </div>

                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                  style={{ 
                    top: 'calc(50% + 50px)', 
                    left: 'calc(50% - 50px)',
                    opacity: 0.9
                  }}
                >
                  <div className="text-[20px] text-[#fa8919] mb-1">高端CPU和普通CPU打游戏区别</div>
                  <div className="text-[12px] text-[#fa8919]">（日均搜索量：35万+）</div>
                </div>

                {/* 带搜索量的关键词 - 中圈，透明度0.7 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                  style={{ 
                    top: 'calc(50% + 140px)', 
                    left: 'calc(50% - 70px)',
                    opacity: 0.7
                  }}
                >
                  <div className="text-[18px] text-[#11ca9c] mb-1">CPU超频教程安全吗</div>
                  <div className="text-[12px] text-[#11ca9c]">（日均搜索量：22万+）</div>
                </div>

                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                  style={{ 
                    top: 'calc(50% - 140px)', 
                    left: 'calc(50% - 70px)',
                    opacity: 0.7
                  }}
                >
                  <div className="text-[24px] text-[#ff4d4d] mb-1">CPU需要配什么显卡</div>
                  <div className="text-[12px] text-[#ff4d4d]">（日均搜索量：28万+）</div>
                </div>

                {/* 带搜索量的关键词 - 外圈，透明度0.4 */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                  style={{ 
                    top: 'calc(50% - 60px)', 
                    left: 'calc(50% - 170px)',
                    opacity: 0.4
                  }}
                >
                  <div className="text-[14px] text-[#999999] mb-1">CPU占用率100%怎么解决</div>
                  <div className="text-[8px] text-[#999999]">（日均搜索量：18万+）</div>
                </div>

                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                  style={{ 
                    top: 'calc(50% - 170px)', 
                    left: 'calc(50% + 60px)',
                    opacity: 0.4
                  }}
                >
                  <div className="text-[14px] text-[#2663ff] mb-1">CPU后缀字母含义解释</div>
                  <div className="text-[8px] text-[#2663ff]">（日均搜索量：20万+）</div>
                </div>

                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                  style={{ 
                    top: 'calc(50% + 60px)', 
                    left: 'calc(50% + 170px)',
                    opacity: 0.4
                  }}
                >
                  <div className="text-[14px] text-[#ffb200] mb-1">CPU核心数量对游戏影响</div>
                  <div className="text-[8px] text-[#ffb200]">（日均搜索量：25万+）</div>
                </div>

                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                  style={{ 
                    top: 'calc(50% + 170px)', 
                    left: 'calc(50% - 60px)',
                    opacity: 0.4
                  }}
                >
                  <div className="text-[14px] text-[#2663ff] mb-1">CPU天梯图高清下载</div>
                  <div className="text-[8px] text-[#2663ff]">（日均搜索量：15万+）</div>
                </div>

                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                  style={{ 
                    top: 'calc(50% - 50px)', 
                    left: 'calc(50% + 200px)',
                    opacity: 0.3
                  }}
                >
                  <div className="text-[12px] text-[#ffb200] mb-1">玩游戏CPU性价比推荐</div>
                  <div className="text-[8px] text-[#ffb200]">（日均搜索量：39万+）</div>
                </div>
              </div>
            </div>

            {/* 右侧 - 主要关键词（和关键词频率标题等高） */}
            <div className="w-[320px]">
              <h2 className="text-[30px] font-black text-[#333333] mb-6">主要关键词</h2>
              
              {/* 主要关键词框 */}
              <div className="bg-white border border-black rounded-[10px] p-6 h-[550px]">
                {/* 使用flexbox确保均匀分布 */}
                <div className="flex flex-col justify-between h-full">
                  {[
                    { rank: 1, keyword: "CPU性能排行榜最新", volume: "48万+" },
                    { rank: 2, keyword: "玩游戏CPU性价比推荐", volume: "39万+" },
                    { rank: 3, keyword: "高端CPU和普通CPU打游戏区别", volume: "35万+" },
                    { rank: 4, keyword: "CPU温度正常范围是多少", volume: "32万+" },
                    { rank: 5, keyword: "CPU需要配什么显卡", volume: "28万+" },
                    { rank: 6, keyword: "CPU核心数量对游戏影响", volume: "25万+" },
                    { rank: 7, keyword: "CPU超频教程安全吗", volume: "22万+" },
                    { rank: 8, keyword: "CPU后缀字母含义解释", volume: "20万+" },
                    { rank: 9, keyword: "CPU占用率100%怎么解决", volume: "18万+" },
                    { rank: 10, keyword: "CPU天梯图高清下载", volume: "15万+" }
                  ].map((item) => (
                    <div key={item.rank} className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="text-[16px] text-[#333333] font-normal">
                          {item.rank}.{item.keyword}
                        </div>
                      </div>
                      <div className="text-[18px] text-[#333333] font-normal ml-4">
                        {item.volume}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // 使用Portal将弹窗渲染到document.body下，绕过页面容器限制
  return createPortal(modalContent, document.body);
};

export default function TipsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTitleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="bg-[#ffffff] relative size-full min-h-screen w-full min-w-[1920px] overflow-x-auto"
      style={{ fontFamily: "'PingFang SC', sans-serif" }}
    >
      {/* 背景色块 */}
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-[#ffffff] h-[1000px] left-0 top-20 w-[350px]" />
        <div className="absolute bg-[rgba(38,99,255,0.1)] h-20 left-0 top-0 w-[350px]" />
        <div className="absolute bg-[rgba(38,99,255,0.1)] h-20 left-[350px] top-0 w-[1570px]" />
      </div>

      {/* 顶部Tab导航 */}
      <Link href="/dashboard">
        <div className="absolute font-bold leading-[0] left-[461px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">可见性</p>
        </div>
      </Link>
      
      <div className="absolute font-bold leading-[0] left-[571px] not-italic text-[#333333] text-[20px] text-left text-nowrap top-7">
        <p className="block leading-[normal] whitespace-pre">提示</p>
      </div>
      
      <Link href="/dashboard/references">
        <div className="absolute font-normal leading-[0] left-[661px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">引用</p>
        </div>
      </Link>

      {/* Tab下划线 - 提示激活状态 */}
      <div className="absolute bg-[#333333] h-1 left-[546px] top-[76px] w-[90px]" />

      {/* 顶部搜索图标 */}
      <div className="absolute left-[400px] size-9 top-[22px]">
        <img alt="" className="block max-w-none size-full" src={imgFrame} />
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

      {/* 左侧导航 */}
      {/* 分割线 */}
      <div className="absolute h-0 left-[65px] top-[392px] w-[220px]">
        <div className="absolute bottom-[-1px] left-[-0.455%] right-[-0.455%] top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine2} />
        </div>
      </div>

      {/* 首页菜单项 - 激活状态 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[30px] rounded-[10px] top-[100px] w-[290px]" />
      <div className="absolute contents left-[86px] top-[118px]">
        <div className="absolute font-medium leading-[0] left-[120px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[119px]">
          <p className="block leading-[normal] whitespace-pre">首页  Home Page</p>
        </div>
        <div className="absolute left-[86px] size-6 top-[118px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame2} />
        </div>
      </div>

      {/* 其他菜单项 */}
      <div className="absolute contents left-[88px] top-[188px]">
        <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[188px]">
          <p className="leading-[normal] whitespace-pre">
            <span>对话  </span>
            <span>Conversations</span>
          </p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-[188px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame3} />
        </div>
      </div>

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
          <p className="adjustLetterSpacing block leading-[30px] whitespace-pre">
            Ethelbert Williams
          </p>
        </div>
      </div>

      {/* 分割线 */}
      <div className="absolute h-0 left-[350px] top-20 w-[1570px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine6} />
        </div>
      </div>

      <div className="absolute flex h-[0px] items-center justify-center left-[350px] top-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[1271px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      {/* 搜索区域容器 */}
      <div className="absolute bg-[#ffffff] h-[162px] left-[400px] rounded-[10px] top-[110px] w-[1470px] border border-[#999999]" />
      
      {/* 品牌标题和描述 */}
      <div className="absolute font-bold leading-[0] left-[426px] not-italic text-[#1e1e1e] text-[24px] text-left text-nowrap top-[148px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">品牌</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[504px] not-italic text-[#1e1e1e] text-[16px] text-left text-nowrap top-[157px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          搜索内容"6000-8000元配置电脑时，哪些 CPU 可供选择？"在AI中出现频率
        </p>
      </div>

      {/* 筛选选项 */}
      <div className="absolute bg-[#ffffff] h-[42px] left-[420px] rounded-[10px] top-[210px] w-[200px] border border-[#999999]" />
      <div className="absolute font-normal leading-[0] left-[484px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">最近7日</p>
      </div>

      <div className="absolute font-normal leading-[0] left-[640px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">VS</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[684px] rounded-[10px] top-[210px] w-[200px] border border-[#999999]" />
      <div className="absolute font-normal leading-[0] left-[735px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">前一个7日</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[894px] rounded-[10px] top-[210px] w-[190px] border border-[#999999]" />
      <div className="absolute font-normal leading-[0] left-[926px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">排序方式：主题</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[1299px] rounded-[10px] top-[210px] w-40 border border-[#999999]" />
      <div className="absolute font-normal leading-[0] left-[1343px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">区域选择</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[1479px] rounded-[10px] top-[210px] w-40 border border-[#999999]" />
      <div className="absolute font-normal leading-[0] left-[1523px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">话题筛选</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[1659px] rounded-[10px] top-[210px] w-[190px] border border-[#999999]" />
      <div className="absolute font-normal leading-[0] left-[1710px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">AI平台选择</p>
      </div>

      {/* 查询按钮 */}
      <div className="absolute bg-[#cccccc] h-[60px] left-[1499px] rounded-[10px] top-[130px] w-[140px]" />
      <div className="absolute font-normal leading-[0] left-[1551px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[149px]">
        <p className="block leading-[normal] whitespace-pre">查询</p>
      </div>

      {/* 下载导出按钮 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[1659px] rounded-[10px] top-[130px] w-[190px]" />
      <div className="absolute contents left-[1694px] top-36">
        <div className="absolute font-normal leading-[0] left-[1735px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[149px]">
          <p className="block leading-[normal] whitespace-pre">下载/导出</p>
        </div>
        <div className="absolute left-[1694px] size-[30px] top-36">
          <img alt="" className="block max-w-none size-full" src={imgFrame8} />
        </div>
      </div>

      {/* 下拉箭头 */}
      <div className="absolute left-[600px] top-[225px] w-3 h-3">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[864px] top-[225px] w-3 h-3">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[1064px] top-[225px] w-3 h-3">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[1439px] top-[225px] w-3 h-3">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[1619px] top-[225px] w-3 h-3">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[1829px] top-[225px] w-3 h-3">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>

      {/* 表格容器 */}
      <div className="absolute bg-[#ffffff] h-[60px] right-[51px] rounded-[10px] top-[292px] w-[1469px] border border-[#cccccc]" />
      <div className="absolute bg-[#ffffff] h-[674px] right-[51px] rounded-[10px] top-[365px] w-[1469px] border border-[#cccccc]" />
      
      {/* 表格列表内容容器 */}
      <div className="absolute bg-[#ffffff] h-[336px] right-20 rounded-[10px] top-[451px] w-[1410px] border border-[#cccccc]" />

      {/* 表头 */}
      <div className="absolute font-medium leading-[0] left-[484px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">内容</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1029px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">评分</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1266px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">排名层级</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1487px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">份额占比</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1704px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">点击数量</p>
      </div>

      {/* 表头排序图标 */}
      <div className="absolute left-[521px] top-[314px]">
        <SortIcon />
      </div>
      <div className="absolute left-[1066px] top-[314px]">
        <SortIcon />
      </div>
      <div className="absolute left-[1335px] top-[314px]">
        <SortIcon />
      </div>
      <div className="absolute left-[1556px] top-[314px]">
        <SortIcon />
      </div>
      <div className="absolute left-[1773px] top-[314px]">
        <SortIcon />
      </div>

      {/* 数据行 */}
      {/* 第一行 */}
      <div 
        className="absolute font-medium leading-[0] left-[450px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[386px] cursor-pointer hover:text-[#2663ff] transition-colors"
        onClick={handleTitleClick}
      >
        <p className="block leading-[normal] whitespace-pre">
          6000-8000元配置电脑时，哪些 CPU 可供选择？
        </p>
      </div>
      <div className="absolute bg-[#cccccc] h-6 left-[857px] rounded top-[385px] w-20" />
      <div className="absolute font-normal leading-[0] left-[878px] not-italic text-[#333333] text-[12px] text-left text-nowrap top-[390px]">
        <p className="block leading-[normal] whitespace-pre">#Topic</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[963px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[401px]">
        <p className="block leading-[normal] whitespace-pre">79.6%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1036px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[401px]">
        <p className="block leading-[normal] whitespace-pre">-2.8%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1285px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[401px]">
        <p className="block leading-[normal] whitespace-pre"># 1</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1472px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[401px]">
        <p className="block leading-[normal] whitespace-pre">16%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1527px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[401px]">
        <p className="block leading-[normal] whitespace-pre">-1.7%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1726px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[401px]">
        <p className="block leading-[normal] whitespace-pre">1k</p>
      </div>
      <div className="absolute font-normal leading-[0] left-[450px] not-italic text-[#999999] text-[14px] text-left text-nowrap top-[412px]">
        <p className="block leading-[normal] whitespace-pre">5个提示内容</p>
      </div>

      {/* 评分进度条 */}
      <div className="absolute bg-[#d9d9d9] h-1.5 left-[1106px] rounded-[10px] top-[409px] w-[100px]" />
      <div className="absolute bg-[#2663ff] h-1.5 left-[1106px] rounded-[10px] top-[409px] w-[76px]" />

      {/* 第一行展开箭头 */}
      <div className="absolute left-[420px] top-[390px]">
        <img alt="" className="block w-[9px] h-[5px]" src={imgVectorSmall} />
      </div>

      {/* 第二行 - Intel 酷睿 i5-12400 和 Ryzen 5 5600G 性能对比 */}
      <div className="absolute font-medium leading-[normal] left-[450px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[471px] whitespace-pre">
        <p className="block mb-0">Intel 酷睿 i5-12400 和 Ryzen 5 5600G </p>
        <p className="block">性能对比</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[963px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[482px]">
        <p className="block leading-[normal] whitespace-pre">97.5%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1036px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[482px]">
        <p className="block leading-[normal] whitespace-pre">-2.5%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1285px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[482px]">
        <p className="block leading-[normal] whitespace-pre"># 1</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1458px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[482px]">
        <p className="block leading-[normal] whitespace-pre">16.7%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1527px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[482px]">
        <p className="block leading-[normal] whitespace-pre">+3.7%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1726px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[482px]">
        <p className="block leading-[normal] whitespace-pre">133</p>
      </div>
      
      {/* 第二行评分进度条 */}
      <div className="absolute bg-[#d9d9d9] h-1.5 left-[1106px] rounded-[10px] top-[490px] w-[100px]" />
      <div className="absolute bg-[#2663ff] h-1.5 left-[1106px] rounded-[10px] top-[490px] w-[97px]" />

      

      {/* 第三行 - 6000 元预算，选择 i3 还是 i5？ */}
      <div className="absolute font-medium leading-[0] left-[450px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[545px]">
        <p className="block leading-[normal] whitespace-pre">
          6000 元预算，选择 i3 还是 i5？
        </p>
      </div>
      <div className="absolute font-medium leading-[0] left-[963px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[545px]">
        <p className="block leading-[normal] whitespace-pre">96.6%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1036px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[545px]">
        <p className="block leading-[normal] whitespace-pre">+1.4%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1285px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[545px]">
        <p className="block leading-[normal] whitespace-pre"># 1</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1458px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[545px]">
        <p className="block leading-[normal] whitespace-pre">20.2%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1527px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[545px]">
        <p className="block leading-[normal] whitespace-pre">-2.9%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1726px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[545px]">
        <p className="block leading-[normal] whitespace-pre">133</p>
      </div>
      
      {/* 第三行评分进度条 */}
      <div className="absolute bg-[#d9d9d9] h-1.5 left-[1106px] rounded-[10px] top-[553px] w-[100px]" />
      <div className="absolute bg-[#2663ff] h-1.5 left-[1106px] rounded-[10px] top-[553px] w-[94px]" />

      

      {/* 第四行 - 性价比高的办公/游戏 CPU 推荐（2025年版） */}
      <div className="absolute font-medium leading-[0] left-[450px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[608px]">
        <p className="block leading-[normal] whitespace-pre">
          性价比高的办公/游戏 CPU 推荐（2025年版）
        </p>
      </div>
      <div className="absolute font-medium leading-[0] left-[963px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[608px]">
        <p className="block leading-[normal] whitespace-pre">93.5%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1036px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[608px]">
        <p className="block leading-[normal] whitespace-pre">-3.7%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1285px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[608px]">
        <p className="block leading-[normal] whitespace-pre"># 1</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1458px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[608px]">
        <p className="block leading-[normal] whitespace-pre">21.1%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1527px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[608px]">
        <p className="block leading-[normal] whitespace-pre">-2.5%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1726px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[608px]">
        <p className="block leading-[normal] whitespace-pre">129</p>
      </div>
      
      {/* 第四行评分进度条 */}
      <div className="absolute bg-[#d9d9d9] h-1.5 left-[1106px] rounded-[10px] top-[616px] w-[100px]" />
      <div className="absolute bg-[#2663ff] h-1.5 left-[1106px] rounded-[10px] top-[616px] w-[92px]" />


      {/* 第五行 - Intel 第12代 vs 第13代，选择建议 */}
      <div className="absolute font-medium leading-[0] left-[450px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[671px]">
        <p className="block leading-[normal] whitespace-pre">
          Intel 第12代 vs 第13代，选择建议
        </p>
      </div>
      <div className="absolute font-medium leading-[0] left-[963px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[671px]">
        <p className="block leading-[normal] whitespace-pre">89.8%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1036px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[671px]">
        <p className="block leading-[normal] whitespace-pre">+7.7%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1285px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[671px]">
        <p className="block leading-[normal] whitespace-pre"># 1</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1458px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[671px]">
        <p className="block leading-[normal] whitespace-pre">16.2%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1527px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[671px]">
        <p className="block leading-[normal] whitespace-pre">-2.5%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1726px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[671px]">
        <p className="block leading-[normal] whitespace-pre">134</p>
      </div>
      
      {/* 第五行评分进度条 */}
      <div className="absolute bg-[#d9d9d9] h-1.5 left-[1106px] rounded-[10px] top-[679px] w-[100px]" />
      <div className="absolute bg-[#2663ff] h-1.5 left-[1106px] rounded-[10px] top-[679px] w-[89px]" />

      

      {/* 第六行 - 哪些主板适配 Intel i5 系列？ */}
      <div className="absolute font-medium leading-[0] left-[450px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[734px]">
        <p className="block leading-[normal] whitespace-pre">
          哪些主板适配 Intel i5 系列？
        </p>
      </div>
      <div className="absolute font-medium leading-[0] left-[963px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[734px]">
        <p className="block leading-[normal] whitespace-pre">89.5%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1036px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[734px]">
        <p className="block leading-[normal] whitespace-pre">-4.2%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1285px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[734px]">
        <p className="block leading-[normal] whitespace-pre"># 1</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1458px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[734px]">
        <p className="block leading-[normal] whitespace-pre">14.4%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1527px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[734px]">
        <p className="block leading-[normal] whitespace-pre">+0.9%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1726px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[734px]">
        <p className="block leading-[normal] whitespace-pre">134</p>
      </div>
      
      {/* 第六行评分进度条 */}
      <div className="absolute bg-[#d9d9d9] h-1.5 left-[1106px] rounded-[10px] top-[742px] w-[100px]" />
      <div className="absolute bg-[#2663ff] h-1.5 left-[1106px] rounded-[10px] top-[742px] w-[92px]" />


      {/* 第七行 - 6000元能配台能打游戏的电脑吗？ */}
      <div className="absolute bg-[#cccccc] h-6 left-[737px] rounded top-[807px] w-20" />
      <div className="absolute font-normal leading-[0] left-[758px] not-italic text-[#333333] text-[12px] text-left text-nowrap top-[812px]">
        <p className="block leading-[normal] whitespace-pre">#Topic</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[450px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[808px]">
        <p className="block leading-[normal] whitespace-pre">
          6000元能配台能打游戏的电脑吗？
        </p>
      </div>
      <div className="absolute font-medium leading-[0] left-[963px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[823px]">
        <p className="block leading-[normal] whitespace-pre">79.6%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1036px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[823px]">
        <p className="block leading-[normal] whitespace-pre">+2.8%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1285px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[823px]">
        <p className="block leading-[normal] whitespace-pre"># 1</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1472px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[823px]">
        <p className="block leading-[normal] whitespace-pre">16%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1527px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[823px]">
        <p className="block leading-[normal] whitespace-pre">-1.7%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1726px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[823px]">
        <p className="block leading-[normal] whitespace-pre">1k</p>
      </div>
      <div className="absolute font-normal leading-[0] left-[450px] not-italic text-[#999999] text-[14px] text-left text-nowrap top-[834px]">
        <p className="block leading-[normal] whitespace-pre">5个提示内容</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-1.5 left-[1106px] rounded-[10px] top-[831px] w-[100px]" />
      <div className="absolute bg-[#2663ff] h-1.5 left-[1106px] rounded-[10px] top-[831px] w-[76px]" />

      {/* 第七行展开箭头 */}
      <div className="absolute left-[420px] top-[812px]">
        <img alt="" className="block w-[9px] h-[5px]" src={imgVectorSmall} />
      </div>
      
      {/* 第八行 - 6000元能配台能打游戏的电脑吗？ */}
      <div className="absolute bg-[#cccccc] h-6 left-[737px] rounded top-[881px] w-20" />
      <div className="absolute font-normal leading-[0] left-[758px] not-italic text-[#333333] text-[12px] text-left text-nowrap top-[886px]">
        <p className="block leading-[normal] whitespace-pre">#Topic</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[450px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[882px]">
        <p className="block leading-[normal] whitespace-pre">
          6000元能配台能打游戏的电脑吗？
        </p>
      </div>
      <div className="absolute font-medium leading-[0] left-[963px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[897px]">
        <p className="block leading-[normal] whitespace-pre">79.6%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1036px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[897px]">
        <p className="block leading-[normal] whitespace-pre">+2.8%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1285px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[897px]">
        <p className="block leading-[normal] whitespace-pre"># 1</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1472px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[897px]">
        <p className="block leading-[normal] whitespace-pre">16%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1527px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[897px]">
        <p className="block leading-[normal] whitespace-pre">-1.7%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1726px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[897px]">
        <p className="block leading-[normal] whitespace-pre">1k</p>
      </div>
      <div className="absolute font-normal leading-[0] left-[450px] not-italic text-[#999999] text-[14px] text-left text-nowrap top-[908px]">
        <p className="block leading-[normal] whitespace-pre">5个提示内容</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-1.5 left-[1106px] rounded-[10px] top-[905px] w-[100px]" />
      <div className="absolute bg-[#2663ff] h-1.5 left-[1106px] rounded-[10px] top-[905px] w-[76px]" />

      {/* 第八行展开箭头 */}
      <div className="absolute left-[420px] top-[886px]">
        <img alt="" className="block w-[9px] h-[5px]" src={imgVectorSmall} />
      </div>

      {/* 第九行 - 6000元能配台能打游戏的电脑吗？ */}
      <div className="absolute bg-[#cccccc] h-6 left-[737px] rounded top-[955px] w-20" />
      <div className="absolute font-normal leading-[0] left-[758px] not-italic text-[#333333] text-[12px] text-left text-nowrap top-[960px]">
        <p className="block leading-[normal] whitespace-pre">#Topic</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[450px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[956px]">
        <p className="block leading-[normal] whitespace-pre">
          6000元能配台能打游戏的电脑吗？
        </p>
      </div>
      <div className="absolute font-medium leading-[0] left-[963px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[971px]">
        <p className="block leading-[normal] whitespace-pre">79.6%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1036px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[971px]">
        <p className="block leading-[normal] whitespace-pre">+2.8%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1285px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[971px]">
        <p className="block leading-[normal] whitespace-pre"># 1</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1472px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[971px]">
        <p className="block leading-[normal] whitespace-pre">16%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1527px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[971px]">
        <p className="block leading-[normal] whitespace-pre">-1.7%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1726px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[971px]">
        <p className="block leading-[normal] whitespace-pre">1k</p>
      </div>
      <div className="absolute font-normal leading-[0] left-[450px] not-italic text-[#999999] text-[14px] text-left text-nowrap top-[982px]">
        <p className="block leading-[normal] whitespace-pre">5个提示内容</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-1.5 left-[1106px] rounded-[10px] top-[979px] w-[100px]" />
      <div className="absolute bg-[#2663ff] h-1.5 left-[1106px] rounded-[10px] top-[979px] w-[76px]" />

            {/* 第九行展开箭头 */}
      <div className="absolute left-[420px] top-[960px]">
        <img alt="" className="block w-[9px] h-[5px]" src={imgVectorSmall} />
      </div>

      {/* 弹窗 */}
      <KeywordFrequencyModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
} 