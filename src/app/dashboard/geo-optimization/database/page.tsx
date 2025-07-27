'use client'

import { useState } from 'react'
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

export default function DatabasePage() {
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

      {/* 顶部Tab导航 - GEO变为非激活状态 */}
      <Link href="/dashboard/geo-optimization">
        <div className="absolute font-normal leading-[0] left-[469px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">GEO</p>
        </div>
      </Link>
      
      {/* 数据库标签 - 激活状态 */}
      <div className="absolute font-bold leading-[0] left-[571px] not-italic text-[#333333] text-[20px] text-left text-nowrap top-7">
        <p className="block leading-[normal] whitespace-pre">数据库</p>
      </div>

      {/* 数据库标签的下划线（激活状态） */}
      <div className="absolute bg-[#333333] h-1 left-[556px] top-[76px] w-[90px]" />

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

      {/* GEO优化菜单项 - 激活状态 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[30px] rounded-[10px] top-[237px] w-[290px]" />
      <div className="absolute contents left-[88px] top-64">
        <div className="absolute font-medium leading-[0] left-[120px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-64">
          <p className="block leading-[normal] whitespace-pre">GEO优化</p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-64">
          <img alt="" className="block max-w-none size-full" src={imgFrame5} />
        </div>
      </div>

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

      <div className="absolute contents left-[88px] top-[506px]">
        <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[506px]">
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

      {/* 主要搜索和筛选区域 */}
      <div className="absolute bg-[#ffffff] h-[162px] left-[400px] rounded-[10px] top-[110px] right-[50px] border border-[#cccccc]" />

      {/* 数据库标题 */}
      <div className="absolute font-bold leading-[0] left-[426px] not-italic text-[#1e1e1e] text-[24px] text-left text-nowrap top-[148px]">
        <p className="block leading-[1.5] whitespace-pre">数据库</p>
      </div>

      {/* 搜索描述 */}
      <div className="absolute font-medium leading-[0] left-[528px] not-italic text-[#1e1e1e] text-[16px] text-left text-nowrap top-[157px]">
        <p className="block leading-[1.5] whitespace-pre">构建客户搜索内容数据库，实时记录并分析用户查询关键词</p>
      </div>

      {/* 查询按钮 */}
      <div className="absolute bg-[#cccccc] h-[60px] left-[1499px] rounded-[10px] top-[130px] w-[140px]" />
      <div className="absolute font-normal leading-[0] left-[1550px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[149px]">
        <p className="block leading-[normal] whitespace-pre">查询</p>
      </div>

      {/* 下载导出按钮 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[1659px] rounded-[10px] top-[130px] w-[190px]" />
      <div className="absolute contents left-[1694px] top-36">
        <div className="absolute font-normal leading-[0] left-[1735px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[149px]">
          <p className="block leading-[normal] whitespace-pre">下载/导出</p>
        </div>
        <div className="absolute left-[1694px] size-[30px] top-36">
          <img alt="" className="block max-w-none size-full" src={imgFrame7} />
        </div>
      </div>

      {/* 筛选选项 */}
      <div className="absolute bg-[#ffffff] h-[42px] left-[420px] rounded-[10px] top-[210px] w-[200px] border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[484px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">最近7日</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[640px] rounded-[10px] top-[210px] w-[190px] border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[672px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">排序方式：主题</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[1299px] rounded-[10px] top-[210px] w-40 border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[1343px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">区域选择</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[1479px] rounded-[10px] top-[210px] w-40 border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[1523px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">话题筛选</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[1659px] rounded-[10px] top-[210px] w-[190px] border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[1710px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[219px]">
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

      {/* 数据表格区域 */}
      <div className="absolute bg-[#ffffff] h-[750px] left-[400px] rounded-[10px] top-[292px] right-[50px] border border-[#cccccc]">
        {/* 表格内容 */}
        <div className="relative w-full h-full">
          {/* 表头 */}
          <div className="absolute flex items-center text-[#333333] font-medium text-[16px] top-[18px] left-[72px] right-[50px]">
            <div className="w-[50px]">序号</div>
            <div className="flex-1 ml-[64px]">关键词</div>
            <div className="w-[120px] text-center">GEOK</div>
            <div className="w-[120px] text-center">搜索量</div>
            <div className="w-[120px] text-center">提及率</div>
          </div>

          {/* 表格分割线 */}
          <div className="absolute h-[1px] bg-[#cccccc] left-0 top-[60px] right-0" />

          {/* 表格数据行 */}
          {[
            { id: 1, keyword: "6000–8000 元装机推荐哪款 CPU 性价比最高？", search: "5.3k", change: "-507", rate: "6%", trend: "+0.2%" },
            { id: 2, keyword: "在这个预算下，i5 还是 Ryzen 5 更值得买？", search: "4.8k", change: "+304", rate: "5.4%", trend: "-1%" },
            { id: 3, keyword: "有没有适合中高端游戏的性价比 CPU 推荐？", search: "5.3k", change: "-507", rate: "6%", trend: "+0.2%" },
            { id: 4, keyword: "主打生产力与游戏兼顾的装机方案，CPU 如何选？", search: "4.8k", change: "+304", rate: "5.4%", trend: "+1%" },
            { id: 5, keyword: "2025 年性价比最高的中端处理器有哪些？", search: "5.3k", change: "-507", rate: "6%", trend: "+0.2%" },
            { id: 6, keyword: "6000 元装机配置中，Intel 和 AMD 谁更划算？", search: "4.8k", change: "+304", rate: "5.4%", trend: "-1%" },
            { id: 7, keyword: "预算 8000 能不能上 i7 或 Ryzen 7？值得吗？", search: "5.3k", change: "-507", rate: "6%", trend: "+0.2%" },
            { id: 8, keyword: "当前热门 CPU 型号性能对比（含游戏与办公）", search: "4.8k", change: "+304", rate: "5.4%", trend: "+1%" },
            { id: 9, keyword: "预算内搭配哪款主板最适合这些性价比 CPU？", search: "5.3k", change: "-507", rate: "6%", trend: "+0.2%" },
            { id: 10, keyword: "这类 CPU 搭配的散热器推荐有哪些？风冷还是水冷？", search: "4.8k", change: "+304", rate: "5.4%", trend: "+1%" }
          ].map((item, index) => (
            <div key={item.id} className={`absolute flex items-center text-[#333333] text-[18px] font-light left-[72px] right-[50px]`} style={{ top: `${78 + index * 60}px` }}>
              <div className="w-[50px] text-[16px] font-medium">{item.id}.</div>
              <div className="flex-1 ml-[64px] pr-4">
                <span className="text-[#333333]">{item.keyword.split('性价比')[0]}</span>
                {item.keyword.includes('性价比') && (
                  <>
                    <span className="text-[#2663ff]">性价比</span>
                    <span className="text-[#333333]">{item.keyword.split('性价比')[1]}</span>
                  </>
                )}
              </div>
                                            <div className="w-[120px] text-center">
                 <div className="bg-[rgba(38,99,255,0.2)] rounded-[10px] px-4 py-1 inline-flex items-center">
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
                   <span className="text-[#2663ff] text-[12px]">Earned</span>
                 </div>
               </div>
              <div className="w-[120px] text-center">
                <div className="text-[#333333] font-medium">{item.search}</div>
                <div className={`text-[12px] ${item.change.startsWith('+') ? 'text-[#11ca9c]' : 'text-[#ff4d4d]'}`}>
                  {item.change}
                </div>
              </div>
              <div className="w-[120px] text-center">
                <div className="flex items-center justify-between px-2">
                  <span className="text-[#333333] font-medium">{item.rate}</span>
                  <div className="flex items-center space-x-1">
                    <span className={`text-[12px] ${item.trend.startsWith('+') ? 'text-[#11ca9c]' : 'text-[#ff4d4d]'}`}>
                      {item.trend}
                    </span>
                    {/* 趋势箭头 */}
                    {item.trend.startsWith('+') ? (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 0L10 6H0L5 0Z" fill="#11ca9c"/>
                      </svg>
                    ) : (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 6L0 0H10L5 6Z" fill="#ff4d4d"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 表格行分割线 */}
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="absolute h-[1px] bg-[#eeeeee] left-0 right-0" style={{ top: `${120 + i * 60}px` }} />
          ))}
        </div>
      </div>

      {/* 分页组件 */}
      <div className="absolute flex items-center justify-end space-x-2 left-[1195px] top-[1072px] right-[50px]">
        <span className="text-[#1d1d1d] text-[14px]">共有150条</span>
        <span className="text-[#1d1d1d] text-[14px] bg-gray-100 px-2 py-1 rounded">10 条/页</span>
        
        <div className="flex items-center space-x-1">
          {/* 上一页 */}
          <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-[14px]">
            &#8249;
          </button>
          
          {/* 页码 */}
          {[1, 2, 3, 4].map(page => (
            <button 
              key={page} 
              className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-[14px]"
            >
              {page}
            </button>
          ))}
          
          {/* 当前页 */}
          <button className="w-8 h-8 bg-[#2663ff] text-white rounded flex items-center justify-center text-[14px]">
            5
          </button>
          
          <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-[14px]">
            6
          </button>
          
          <span className="text-[14px]">...</span>
          
          <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-[14px]">
            50
          </button>
          
          {/* 下一页 */}
          <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-[14px]">
            &#8250;
          </button>
        </div>
        
        <span className="text-[#1d1d1d] text-[14px]">跳至</span>
        <input 
          type="text" 
          className="w-12 h-8 border border-gray-300 rounded text-center text-[14px]"
          placeholder=""
        />
        <span className="text-[#1d1d1d] text-[14px]">页</span>
      </div>
    </div>
  )
} 