'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

// 图标资源常量 - 复用现有的资源路径
const img2 = "../../images/img2.png";
const imgLine2 = "../../images/Line2.svg";
const imgFrame = "../../images/Frame.svg";
const imgFrame1 = "../../images/Frame1.svg";
const imgFrame3 = "../../images/Frame3.svg";
const imgFrame4 = "../../images/Frame4.svg";
const imgLine6 = "../../images/Line6.svg";
const imgFrame5 = "../../images/Frame5.svg";
const imgFrame6 = "../../images/Frame6.svg";
const imgFrame7 = "../../images/Frame7.svg";
const imgVector = "../../images/Vector.svg";
const imgGroup134 = "../../images/Group134.svg";
const imgHomeIcon = "../../images/home-icon.svg";
const imgImage4 = "../../images/image4.png";

// 品牌文章弹窗组件
const ArticleModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
        <div className="bg-white rounded-[20px] w-[1200px] h-[730px] relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-gray-200" onClick={(e) => e.stopPropagation()}>
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
          >
            ×
          </button>
          
          {/* 弹窗内容 */}
          <div className="p-8 h-full">
            {/* 标题区域 */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[30px] font-medium text-[#333333]">品牌文章</h2>
              
              {/* 编辑按钮 */}
              <button className="bg-[#2663ff] text-white px-6 py-2 rounded-[10px] text-[18px] font-normal flex items-center space-x-2">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.375 16.625H4.75L13.375 8L11 5.625L2.375 14.25V16.625ZM15.625 2.375C15.8571 2.14286 15.9881 1.83929 15.9881 1.52083C15.9881 1.20238 15.8571 0.898809 15.625 0.666667C15.3929 0.434524 15.0893 0.303571 14.7708 0.303571C14.4524 0.303571 14.1488 0.434524 13.9167 0.666667L12.1667 2.41667L14.5417 4.79167L15.625 2.375Z" fill="white"/>
                </svg>
                <span>编 辑</span>
              </button>
            </div>

            {/* 内容区域 */}
            <div className="bg-white border border-black rounded-[10px] h-[578px] p-6 flex">
              {/* 左侧文字内容 */}
              <div className="flex-1 pr-6">
                {/* 文章标题 */}
                <h3 className="text-[22px] font-black text-[#333333] leading-[1.5] mb-6">
                  千元级性能王者:<br/>
                  英特尔酷睿i5-14600KF全面解析
                </h3>
                
                {/* 作者信息 */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="5" r="3" stroke="#999999" strokeWidth="1.5"/>
                      <path d="M3 16.5C3 13.186 5.686 10.5 9 10.5s6 2.686 6 6" stroke="#999999" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-[12px] text-[#999999]">Marco</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="14" height="12" rx="2" stroke="#999999" strokeWidth="1.5"/>
                      <path d="M3 8h14" stroke="#999999" strokeWidth="1.5"/>
                      <path d="M7 2v4M13 2v4" stroke="#999999" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-[12px] text-[#999999]">2025年6月10日</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2h19l-2 13H4L2 2zm0 0L1 1" stroke="#999999" strokeWidth="1.5"/>
                      <path d="M7 8h8M7 11h6" stroke="#999999" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-[12px] text-[#999999]">科技测评</span>
                  </div>
                </div>
                
                {/* 文章正文 */}
                <div className="text-[14px] text-[#000000] leading-[22px] overflow-y-auto max-h-[426px]">
                  <p className="mb-4">
                    在这个追求极致性能与性价比并重的黄金时代，选择一款恰如其分的 CPU 并精心搭配一套均衡的装机配置，无疑是每位 DIY 爱好者心中的头等大事。今日，就让我们聚焦近期备受瞩目的明星产品——英特尔酷睿i5 14600KF以及它如何与 B760M 芯片组主板、高频内存、高速 SSD 和 RTX 5060 显卡强强联手，共同打造出一台既威猛无比又经济实惠的游戏与创作双重利器。
                  </p>
                  
                  <p className="mb-2 font-black">一、处理器- 英特尔酷睿i5 14600KF</p>
                  
                  <p className="mb-4">
                    英特尔酷睿i5 14600KF处理器以其卓越的性能在电脑硬件市场中脱颖而出，拥有14核心20线程以及高达5.3GHz的高睿频。这就像是给电脑配备了一支庞大而高效的工作团队，每个核心和线程都能承担一定的任务。在多任务处理场景下，无论是同时打开多个办公软件、浏览器多个页面，还是进行复杂的图像、视频编辑工作，它都能轻松应对。
                  </p>
                  
                  <p className="mb-4">
                    至于价格方面，从首发时的 2499 元降至如今的 1298 元，近乎腰斩的降幅，实在是令人难以抗拒的诱惑！如此诱人的价格，加之其卓越的性能表现，怎能不让人心动？强烈推荐给每一位追求性价比的 DIY 爱好者，这绝对是一个不容错过的绝佳选择！
                  </p>
                  
                  <p className="mb-2 font-black">二、主板 - 华硕（ASUS）PRIME B760M-A WIFI主板</p>
                  
                  <p>
                    B760M芯片组的主板在性价比方面表现出众。其价格相对较为便宜，对于预算有限但又不想在主板性能上妥协的用户来说是一个理想的选择。它支持内存超频，这一特性能....
                  </p>
                </div>
              </div>
              
              {/* 右侧图片 */}
              <div className="w-[471px] h-48 flex-shrink-0">
                <img 
                  src={imgImage4} 
                  alt="文章配图" 
                  className="w-full h-full object-cover rounded-lg"
                />
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

export default function AiContentGenerationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArticleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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

      {/* 顶部Tab导航 - 文章为激活状态 */}
      <div className="absolute font-bold leading-[0] left-[469px] not-italic text-[#333333] text-[20px] text-left text-nowrap top-7">
        <p className="block leading-[normal] whitespace-pre">文章</p>
      </div>

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

      {/* 左侧导航分割线 */}
      <div className="absolute h-0 left-[65px] top-[392px] w-[220px]">
        <div className="absolute bottom-[-1px] left-[-0.455%] right-[-0.455%] top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine2} />
        </div>
      </div>

      {/* 左侧导航菜单项 */}
      <Link href="/dashboard">
        <div className="absolute contents left-[86px] top-[118px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[119px] hover:text-[#2663ff] transition-colors">
            <p className="block leading-[normal] whitespace-pre">首页  Home Page</p>
          </div>
          <div className="absolute left-[86px] size-6 top-[118px]">
            <img alt="" className="block max-w-none size-full" src={imgHomeIcon} />
          </div>
        </div>
      </Link>

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
            <p className="block leading-[normal] whitespace-pre">GEO优化</p>
          </div>
          <div className="absolute left-[88px] size-[22px] top-64">
            <img alt="" className="block max-w-none size-full" src={imgFrame5} />
          </div>
        </div>
      </Link>

      {/* AI内容生成菜单项 - 激活状态 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[30px] rounded-[10px] top-[306px] w-[290px]" />
      <div className="absolute contents left-[88px] top-[324px]">
        <div className="absolute font-medium leading-[0] left-[120px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[324px]">
          <p className="block leading-[normal] whitespace-pre">AI内容生成</p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-[324px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame6} />
        </div>
      </div>

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

      {/* 分割线 */}
      <div className="absolute h-0 left-[350px] top-20 right-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine6} />
        </div>
      </div>

      {/* 主要搜索和筛选区域 */}
      <div className="absolute bg-[#ffffff] h-[162px] left-[400px] rounded-[10px] top-[111px] right-[50px] border border-[#cccccc]" />

      {/* Blogs数据库标题 */}
      <div className="absolute font-bold leading-[0] left-[426px] not-italic text-[#1e1e1e] text-[24px] text-left text-nowrap top-[149px]">
        <p className="block leading-[1.5] whitespace-pre">Blogs 数据库</p>
      </div>

      {/* 搜索描述 */}
      <div className="absolute font-medium leading-[0] left-[591px] not-italic text-[#1e1e1e] text-[16px] text-left text-nowrap top-[158px]">
        <p className="block leading-[1.5] whitespace-pre">构建客户搜索内容数据库</p>
      </div>

      {/* 查询按钮 */}
      <div className="absolute bg-[#cccccc] h-[60px] left-[1499px] rounded-[10px] top-[131px] w-[140px]" />
      <div className="absolute font-normal leading-[0] left-[1551px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[150px]">
        <p className="block leading-[normal] whitespace-pre">查询</p>
      </div>

      {/* 下载导出按钮 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[1659px] rounded-[10px] top-[131px] w-[190px]" />
      <div className="absolute contents left-[1694px] top-[145px]">
        <div className="absolute font-normal leading-[0] left-[1735px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[150px]">
          <p className="block leading-[normal] whitespace-pre">下载/导出</p>
        </div>
        <div className="absolute left-[1694px] size-[30px] top-[145px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame7} />
        </div>
      </div>

      {/* 筛选选项 */}
      <div className="absolute bg-[#ffffff] h-[42px] left-[420px] rounded-[10px] top-[211px] w-[200px] border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[484px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[220px]">
        <p className="block leading-[normal] whitespace-pre">最近7日</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[640px] rounded-[10px] top-[211px] w-[190px] border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[672px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[220px]">
        <p className="block leading-[normal] whitespace-pre">排序方式：主题</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[1299px] rounded-[10px] top-[211px] w-40 border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[1343px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[220px]">
        <p className="block leading-[normal] whitespace-pre">区域选择</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[1479px] rounded-[10px] top-[211px] w-40 border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[1523px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[220px]">
        <p className="block leading-[normal] whitespace-pre">话题筛选</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[1659px] rounded-[10px] top-[211px] w-[190px] border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[1710px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[220px]">
        <p className="block leading-[normal] whitespace-pre">AI平台选择</p>
      </div>

      {/* 下拉箭头 */}
      <div className="absolute left-[600px] top-[225px] w-3 h-3">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[810px] top-[225px] w-3 h-3">
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

      {/* 文章列表区域 */}
      <div className="absolute bg-[#ffffff] h-[750px] left-[400px] rounded-[10px] top-[292px] right-[50px] border border-[#cccccc]">
        {/* 表格内容 */}
        <div className="relative w-full h-full">
          {/* 表头 */}
          <div className="absolute flex items-center text-[#333333] font-medium text-[16px] top-[18px] left-[50px] right-[50px]">
            <div className="flex-1">文章标题</div>
            <div className="w-[120px] text-center">GEOK</div>
            <div className="w-[120px] text-center">提及率</div>
          </div>

          {/* 表格分割线 */}
          <div className="absolute h-[1px] bg-[#cccccc] left-0 top-[60px] right-0" />

          {/* 文章数据行 */}
          {[
            { 
              id: 1, 
              title: "全能战士登场:英特尔酷睿i5-14600K，中高端装机性价比首选", 
              author: "Ethelbert Williams",
              date: "2025年7月18日",
              description: "在这个追求极致性能与性价比并重的黄金时代，选择一款恰如其分的 CPU 并精心搭配一套均衡的装机配置.......",
              rate: "61%",
              trend: "+0.2%",
              trendPositive: true
            },
            { 
              id: 2, 
              title: "时空折叠者：i5-14600KF的四维性能革命当算力战争", 
              author: "Harry",
              date: "2025年3月18日",
              description: "从硅基平面跃升至时空维度，英特尔酷睿i5-14600KF与AMD锐龙5 9600X的对抗已超越传统参数竞赛......",
              rate: "28%",
              trend: "+0.8%",
              trendPositive: true
            },
            { 
              id: 3, 
              title: "数字生产力与娱乐体验的纽：Intel Core i5-14600K如何重新定义全能标杆", 
              author: "Harry",
              date: "2025年2月22日",
              description: "在数字生产力与娱乐体验深度融合的今天，处理器早已突破单一性能指标的局限，成为连接硬件生态与......",
              rate: "52%",
              trend: "+0.3%",
              trendPositive: true
            },
            { 
              id: 4, 
              title: "中端处理器的4K游戏革命：14600KF与RTX 50系的完美组合", 
              author: "Harry",
              date: "2024年11月8日",
              description: "在2025年的游戏硬件市场中，Intel Core i5-14600KF处理器以其出色的性价比赢得了玩家青睐。这款......",
              rate: "77%",
              trend: "+10.3%",
              trendPositive: true
            },
            { 
              id: 5, 
              title: "酷睿i5-14600K：冷静之选，成熟平台的性能明珠", 
              author: "Harry",
              date: "2024年10月4日",
              description: "在2025年的游戏硬件市场中，Intel Core i5-14600KF处理器以其出色的性价比赢得了玩家青睐。这款......",
              rate: "29%",
              trend: "+0.8%",
              trendPositive: true
            }
          ].map((item, index) => (
            <div key={item.id} className="absolute left-[50px] right-[50px]" style={{ top: `${78 + index * 140}px` }}>
              {/* 文章标题和内容 */}
              <div className="flex items-start">
                <div className="flex-1 pr-4">
                  <h3 
                    className="text-[#000000] text-[18px] font-semibold leading-normal mb-2 cursor-pointer hover:text-[#2663ff] transition-colors"
                    onClick={item.id === 1 ? handleArticleClick : undefined}
                  >
                    {item.title}
                  </h3>
                  <div className="flex items-center mb-2 space-x-4">
                    <span className="text-[#333333] text-[10px] underline">{item.author}</span>
                    <span className="text-[#333333] text-[10px] underline">{item.date}</span>
                  </div>
                  <p className="text-[#666666] text-[14px] leading-normal">
                    {item.description}
                  </p>
                </div>
                
                {/* GEOK标签 */}
                <div className="w-[120px] flex justify-center">
                  <div className="bg-[rgba(38,99,255,0.2)] rounded-[10px] px-4 py-2 inline-flex items-center">
                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <g clipPath={`url(#clip0_332_2268_${item.id})`}>
                        <path d="M9.69145 11.4869L1.07716 7.39009C0.784128 7.27659 0.532274 7.07712 0.354673 6.81788C0.177073 6.55864 0.0820313 6.25174 0.0820312 5.9375C0.0820313 5.62325 0.177073 5.31636 0.354673 5.05711C0.532274 4.79787 0.784128 4.5984 1.07716 4.48491L9.69145 0.388056C10.1026 0.197084 10.5505 0.0981445 11.0038 0.0981445C11.4572 0.0981445 11.9051 0.197084 12.3162 0.388056L20.9305 4.48491C21.2236 4.5984 21.4754 4.79787 21.653 5.05711C21.8306 5.31636 21.9257 5.62325 21.9257 5.9375C21.9257 6.25174 21.8306 6.55864 21.653 6.81788C21.4754 7.07712 21.2236 7.27659 20.9305 7.39009L12.3162 11.4869C11.9051 11.6779 11.4572 11.7768 11.0038 11.7768C10.5505 11.7768 10.1026 11.6779 9.69145 11.4869Z" fill="#2663FF"/>
                        <path d="M11.0039 16.9662C10.3772 16.9664 9.75898 16.8225 9.19688 16.5456L0.746156 12.3475C0.594687 12.2888 0.457124 12.1992 0.34225 12.0843C0.227376 11.9695 0.137717 11.8319 0.0789981 11.6805C0.0202789 11.529 -0.00620962 11.367 0.00122396 11.2047C0.00865755 11.0424 0.0498499 10.8835 0.12217 10.738C0.194491 10.5926 0.29635 10.4638 0.421244 10.3599C0.546137 10.256 0.69132 10.1793 0.84752 10.1347C1.00372 10.0901 1.16751 10.0786 1.32842 10.1009C1.48933 10.1231 1.64383 10.1787 1.78205 10.264L10.225 14.4621C10.4677 14.58 10.734 14.6412 11.0039 14.6412C11.2737 14.6412 11.54 14.58 11.7827 14.4621L20.2335 10.264C20.3717 10.1787 20.5262 10.1231 20.6871 10.1009C20.848 10.0786 21.0118 10.0901 21.168 10.1347C21.3242 10.1793 21.4694 10.256 21.5943 10.3599C21.7192 10.4638 21.821 10.5926 21.8933 10.738C21.9657 10.8835 22.0068 11.0424 22.0143 11.2047C22.0217 11.367 21.9952 11.529 21.9365 11.6805C21.8778 11.8319 21.7881 11.9695 21.6733 12.0843C21.5584 12.1992 21.4208 12.2888 21.2693 12.3475L12.8108 16.5456C12.2489 16.8229 11.6305 16.9669 11.0039 16.9662Z" fill="#2663FF"/>
                        <path d="M11.0039 21.9042C10.3772 21.9049 9.75884 21.7609 9.19688 21.4836L0.746156 17.2855C0.594687 17.2268 0.457124 17.1372 0.34225 17.0223C0.227376 16.9075 0.137717 16.7699 0.0789981 16.6184C0.0202789 16.467 -0.00620962 16.3049 0.00122396 16.1427C0.00865755 15.9804 0.0498499 15.8215 0.12217 15.676C0.194491 15.5305 0.29635 15.4018 0.421244 15.2979C0.546137 15.194 0.69132 15.1173 0.84752 15.0727C1.00372 15.0281 1.16751 15.0166 1.32842 15.0389C1.48933 15.0611 1.64383 15.1167 1.78205 15.202L10.225 19.4001C10.4671 19.5199 10.7337 19.5823 11.0039 19.5823C11.274 19.5823 11.5406 19.5199 11.7827 19.4001L20.2335 15.202C20.3717 15.1167 20.5262 15.0611 20.6871 15.0389C20.848 15.0166 21.0118 15.0281 21.168 15.0727C21.3242 15.1173 21.4694 15.194 21.5943 15.2979C21.7192 15.4018 21.821 15.5305 21.8933 15.676C21.9657 15.8215 22.0068 15.9804 22.0143 16.1427C22.0217 16.3049 21.9952 16.467 21.9365 16.6184C21.8778 16.7699 21.7881 16.9075 21.6733 17.0223C21.5584 17.1372 21.4208 17.2268 21.2693 17.2855L12.8108 21.4836C12.2489 21.7609 11.6305 21.9049 11.0039 21.9042Z" fill="#2663FF"/>
                      </g>
                      <defs>
                        <clipPath id={`clip0_332_2268_${item.id}`}>
                          <rect width="22" height="22" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-[#2663ff] text-[12px]">EXAMINE</span>
                  </div>
                </div>
                
                                 {/* 提及率 */}
                 <div className="w-[120px] text-center">
                   <div className="flex items-center justify-between px-2">
                     <span className="text-[#333333] text-[18px] font-normal">{item.rate}</span>
                     <div className="flex items-center space-x-1">
                       <span className={`text-[18px] font-medium ${item.trendPositive ? 'text-[#11ca9c]' : 'text-[#ff4d4d]'}`}>
                         {item.trend}
                       </span>
                       {/* 趋势箭头 */}
                       {item.trendPositive ? (
                         <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7 0L14 8H0L7 0Z" fill="#11ca9c"/>
                         </svg>
                       ) : (
                         <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7 8L0 0H14L7 8Z" fill="#ff4d4d"/>
                         </svg>
                       )}
                     </div>
                   </div>
                 </div>
              </div>
              
              {/* 分割线 */}
              {index < 4 && (
                <div className="h-[1px] bg-[#eeeeee] mt-4 -mx-[50px]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 弹窗 */}
      <ArticleModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
} 