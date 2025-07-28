"use client";

import { useState } from "react";
import Link from "next/link";
import { GeoDatabaseTable } from "@/components/geo";

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

      {/* 价格页面链接 */}
      <Link href="/dashboard/geo-optimization/pricing">
        <div className="absolute font-normal leading-[0] left-[689px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">价格</p>
        </div>
      </Link>

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
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgGroup134}
          />
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
            <p className="block leading-[normal] whitespace-pre">
              首页 Home Page
            </p>
          </div>
          <div className="absolute left-[86px] size-6 top-[118px]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgHomeIcon}
            />
          </div>
        </div>
      </Link>

      <Link href="/dashboard/conversations">
        <div className="absolute contents left-[88px] top-[188px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[188px] hover:text-[#2663ff] transition-colors">
            <p className="leading-[normal] whitespace-pre">
              <span>对话 </span>
              <span>Conversations</span>
            </p>
          </div>
          <div className="absolute left-[88px] size-[22px] top-[188px]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgFrame3}
            />
          </div>
        </div>
      </Link>

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
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgFrame6}
            />
          </div>
        </div>
      </Link>

      <div className="absolute contents left-[88px] top-[438px]">
        <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[438px]">
          <p className="block leading-[normal] whitespace-pre">收件箱 Inbox</p>
        </div>
        <div className="absolute left-[88px] size-[22px] top-[438px]">
          <img alt="" className="block max-w-none size-full" src={imgFrame1} />
        </div>
      </div>

      <Link href="/dashboard/settings">
        <div className="absolute contents left-[88px] top-[506px] cursor-pointer">
          <div className="absolute font-normal leading-[0] left-[120px] not-italic text-[#444444] text-[18px] text-left text-nowrap top-[506px] hover:text-[#2663ff] transition-colors">
            <p className="leading-[normal] whitespace-pre">
              <span>设置 </span>
              <span>Settings</span>
            </p>
          </div>
          <div className="absolute left-[88px] size-[22px] top-[506px]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgFrame4}
            />
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
          <p className="block leading-[30px] whitespace-pre">
            Ethelbert Williams
          </p>
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
        <p className="block leading-[1.5] whitespace-pre">
          构建客户搜索内容数据库，实时记录并分析用户查询关键词
        </p>
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
      <div className="absolute left-[400px] top-[292px] right-[50px]">
        <GeoDatabaseTable
          brandId="4fc86ecb-8e0e-476b-8826-bf4dc95fce0d"
          onRowClick={(record) => {
            console.log("点击行:", record);
          }}
        />
      </div>
    </div>
  );
}
