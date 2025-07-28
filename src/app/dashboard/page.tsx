'use client'

import { useState } from 'react'
import Link from 'next/link'

// 图标资源常量 - 从Figma获取
const img2 = "../images/img2.png";
const imgEllipse14 = "images/Ellipse14.png";
const imgEllipse15 = "images/Ellipse15.png";
const imgEllipse16 = "images/Ellipse16.png";
const imgEllipse17 = "images/Ellipse17.png";
const imgEllipse18 = "images/Ellipse18.png";
const imgLine2 = "images/Line2.svg";
const imgFrame = "images/Frame.svg";
const imgFrame1 = "images/Frame1.svg";
const imgFrame2 = "images/Frame2.svg";
const imgFrame3 = "images/Frame3.svg";
const imgFrame4 = "images/Frame4.svg";
const imgLine6 = "images/Line6.svg";
const imgLine7 = "images/Line7.svg";
const imgFrame5 = "images/Frame5.svg";
const imgFrame6 = "images/Frame6.svg";
const imgVector12 = "images/Vector12.svg";
const imgVector1 = "images/Vector1.svg";
const imgGroup49 = "images/Group49.svg";
const imgVector7 = "images/Vector7.svg";
const imgVector8 = "images/Vector8.svg";
const imgVector9 = "images/Vector9.svg";
const imgVector10 = "images/Vector10.svg";
const imgPolygon2 = "images/Polygon2.svg";
const imgPolygon3 = "images/Polygon3.svg";
const imgPolygon4 = "images/Polygon4.svg";
const imgPolygon5 = "images/Polygon5.svg";
const imgLine3 = "images/Line3.svg";
const imgLine4 = "images/Line4.svg";
const imgLine5 = "images/Line5.svg";
const imgPolygon6 = "images/Polygon6.svg";
const imgEllipse25 = "images/Ellipse25.svg";
const imgVector = "images/Vector.svg";
const imgFrame7 = "images/Frame7.svg";
const imgGroup134 = "images/Group134.svg";
const imgHomeIcon = "images/home-icon.svg";
const imgHomeIconWhite = "images/home-icon-white.svg";

export default function DashboardPage() {
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

      {/* 顶部Tab导航 */}
      <div className="absolute font-bold leading-[0] left-[461px] not-italic text-[#333333] text-[20px] text-left text-nowrap top-7">
        <p className="block leading-[normal] whitespace-pre">可见性</p>
      </div>
      <Link href="/dashboard/tips">
        <div className="absolute font-normal leading-[0] left-[571px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">提示</p>
        </div>
      </Link>
      <Link href="/dashboard/references">
        <div className="absolute font-normal leading-[0] left-[661px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">引用</p>
        </div>
      </Link>

      {/* Tab下划线 - 可见性激活状态 */}
      <div className="absolute bg-[#333333] h-1 left-[446px] top-[76px] w-[90px]" />

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

      {/* 首页菜单项 - 激活状态 */}
      <div className="absolute bg-[#2663ff] h-[60px] left-[30px] rounded-[10px] top-[100px] w-[290px]" />
      <div className="absolute contents left-[86px] top-[118px]">
        <div className="absolute font-medium leading-[0] left-[120px] not-italic text-[#ffffff] text-[18px] text-left text-nowrap top-[119px]">
          <p className="block leading-[normal] whitespace-pre">首页  Home Page</p>
        </div>
        <div className="absolute left-[86px] size-6 top-[118px]">
          <img alt="" className="block max-w-none size-full" src={imgHomeIconWhite} />
            </div>
          </div>

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

      {/* 主要搜索区域 */}
      <div className="absolute bg-[#ffffff] h-[162px] left-[400px] rounded-[10px] top-[110px] right-[20px] border border-[#999999]" />

      {/* 品牌标题 */}
      <div className="absolute font-bold leading-[0] left-[426px] not-italic text-[#1e1e1e] text-[24px] text-left text-nowrap top-[148px]">
        <p className="block leading-[1.5] whitespace-pre">品牌</p>
      </div>

      {/* 搜索描述 */}
      <div className="absolute font-medium leading-[0] left-[504px] not-italic text-[#1e1e1e] text-[16px] text-left text-nowrap top-[157px]">
        <p className="block leading-[1.5] whitespace-pre">搜索内容XXXX在人工智能中出现频率</p>
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

      {/* 在AI中出现频率标题 */}
      <div className="absolute font-medium leading-[0] left-[440px] not-italic text-[#333333] text-[24px] text-left text-nowrap top-[332px]">
        <p className="block leading-[normal] whitespace-pre">在AI中出现频率</p>
      </div>
      <div className="absolute font-normal leading-[0] left-[440px] not-italic text-[#1e1e1e] text-[16px] text-left text-nowrap top-[375px]">
        <p className="block leading-[1.5] whitespace-pre">搜索关键词内容在人工智能中出现频率</p>
      </div>

      {/* 在AI中出现频率 - 六边形图表区域 */}
      <div className="absolute bg-[#ffffff] h-[747px] left-[400px] rounded-[20px] top-[292px] w-[540px] border border-[#cccccc]" />

      {/* 六边形图形 */}
      <div className="absolute left-[455px] size-[420px] top-[478px]">
        <div className="absolute bottom-0 left-[6.699%] right-[6.699%] top-0">
          <img alt="" className="block max-w-none size-full" src={imgPolygon2} />
        </div>
      </div>
      <div className="absolute left-[497px] size-[336px] top-[520px]">
        <div className="absolute bottom-0 left-[6.699%] right-[6.699%] top-0">
          <img alt="" className="block max-w-none size-full" src={imgPolygon3} />
        </div>
      </div>
      <div className="absolute left-[548px] size-[234px] top-[571px]">
        <div className="absolute bottom-0 left-[6.699%] right-[6.699%] top-0">
          <img alt="" className="block max-w-none size-full" src={imgPolygon4} />
        </div>
      </div>
      <div className="absolute left-[590px] size-[150px] top-[613px]">
        <div className="absolute bottom-0 left-[6.699%] right-[6.699%] top-0">
          <img alt="" className="block max-w-none size-full" loading="lazy" src={imgPolygon5} />
        </div>
      </div>

      {/* 六边形连线 */}
      <div className="h-[301.5px] left-[497.5px] top-[562.5px] w-[326px] absolute">
        <img alt="" className="block max-w-none size-full" src={imgPolygon6} />
      </div>

      {/* 关键词标签和圆点 */}
      {/* <div className="absolute font-medium leading-[0] left-[425px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[437px]">
        <div className="absolute left-[640px] top-[437px]">
          <p className="block leading-[1.5] text-nowrap whitespace-pre">价格</p>
        </div>
        <div className="absolute left-[847px] top-[544px]">
          <p className="block leading-[1.5] text-nowrap whitespace-pre">质量</p>
        </div>
        <div className="absolute left-[851px] top-[811px]">
          <p className="block leading-[1.5] text-nowrap whitespace-pre">性能</p>
        </div>
        <div className="absolute left-[425px] top-[811px]">
          <p className="block leading-[1.5] text-nowrap whitespace-pre">性价比</p>
        </div>
        <div className="absolute left-[639px] top-[919px]">
          <p className="block leading-[1.5] text-nowrap whitespace-pre">品牌</p>
        </div>
        <div className="absolute left-[425px] top-[544px]">
          <p className="block leading-[1.5] text-nowrap whitespace-pre">产品</p>
        </div>
      </div> */}

      {/* 圆点 */}
      <div className="absolute left-[550px] size-[5px] top-[619px]">
        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgEllipse25} />
      </div>
      <div className="absolute left-[664px] size-[5px] top-[560px]">
        <img alt="" className="block max-w-none size-full" src={imgEllipse25} />
      </div>
      <div className="absolute left-[791px] size-[5px] top-[611px]">
        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgEllipse25} />
      </div>
      <div className="absolute left-[821px] size-[5px] top-[777px]">
        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgEllipse25} />
      </div>
      <div className="absolute left-[663px] size-[5px] top-[861px]">
        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgEllipse25} />
      </div>
      <div className="absolute left-[495px] size-[5px] top-[782px]">
        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgEllipse25} />
      </div>

      {/* 底部文本 */}
      <div className="absolute font-light leading-[0] left-[499px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[971px]">
        <p className="block leading-[1.5] whitespace-pre">看看您的品牌关键词在 AI答案中出现的频率</p>
      </div>

      {/* 品牌搜索率卡片 */}
      <div className="absolute bg-[#ffffff] h-[326px] left-[1306px] rounded-[20px] top-[292px] w-[563px] border border-[#cccccc]">
        <div className="h-[326px] overflow-clip relative w-[563px]">
          <div className="absolute font-bold leading-[0] left-[30px] not-italic text-[#333333] text-[24px] text-left text-nowrap top-[30px]">
            <p className="block leading-[normal] whitespace-pre">品牌搜索率</p>
          </div>
          <div className="absolute font-bold leading-[0] left-[482px] not-italic text-[#999999] text-[12px] text-left text-nowrap top-[37px]">
            <p className="block leading-[normal] whitespace-pre">总数据</p>
          </div>
          <div className="absolute font-bold leading-[0] left-[30px] not-italic text-[#333333] text-[28px] text-left text-nowrap top-[79px]">
            <p className="block leading-[normal] whitespace-pre">159.8%</p>
          </div>
          <div className="absolute font-bold leading-[0] left-[30px] not-italic text-[16px] text-[rgba(51,51,51,0.2)] text-left text-nowrap top-[145px]">
            <p className="block leading-[normal] whitespace-pre">70%</p>
          </div>
          <div className="absolute font-bold leading-[0] left-[30px] not-italic text-[16px] text-[rgba(51,51,51,0.2)] text-left text-nowrap top-52">
            <p className="block leading-[normal] whitespace-pre">50%</p>
            </div>

          {/* 图表 */}
          <div className="absolute h-[183px] left-0 top-[143px] w-[574px]">
            <img alt="" className="block max-w-none size-full" src={imgVector12} />
          </div>
          <div className="absolute h-[156px] left-0 top-[140px] w-[577px]">
            <div className="absolute bottom-[-0.321%] left-[-0.087%] right-[-0.087%] top-[-0.321%]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
        </div>
      </div>

      {/* 品牌推荐率卡片 */}
      <div className="absolute bg-[#ffffff] left-[960px] rounded-[20px] size-[326px] top-[292px] border border-[#cccccc]">
        <div className="overflow-clip relative size-[326px]">
          <div className="absolute left-[61.068px] size-[228.81px] top-[87px]">
            <img alt="" className="block max-w-none size-full" src={imgGroup49} />
          </div>

          {/* 标签 */}
          <div className="absolute h-[17px] left-[21px] top-[210.425px] w-[67.75px]">
            <div className="absolute bottom-[-2.223%] left-0 right-[-0.483%] top-[-2.941%]">
              <img alt="" className="block max-w-none size-full" src={imgVector7} />
            </div>
          </div>
          <div className="absolute h-[16.5px] left-[153.75px] top-[106.925px] w-[64.75px]">
            <div className="absolute bottom-[-1.795%] left-[-0.622%] right-0 top-[-3.03%]">
              <img alt="" className="block max-w-none size-full" src={imgVector8} />
              </div>
              </div>
          <div className="absolute h-[9px] left-[237.75px] top-[179.425px] w-[64.25px]">
            <div className="absolute bottom-[-4.307%] left-[-0.492%] right-0 top-[-5.556%]">
              <img alt="" className="block max-w-none size-full" src={imgVector9} />
            </div>
              </div>
          <div className="absolute h-[24.5px] left-[194px] top-[253.425px] w-[72px]">
            <div className="absolute bottom-[-2.041%] left-[-0.577%] right-0 top-[-1.134%]">
              <img alt="" className="block max-w-none size-full" src={imgVector10} />
            </div>
          </div>

          {/* 文本标签 */}
          <div className="absolute font-light h-3.5 leading-[0] left-[170px] not-italic text-[#ffb200] text-[10px] text-left top-[92.425px] w-[45px]">
            <p className="block leading-[normal]">其它品牌1</p>
          </div>
          <div className="absolute font-light h-3.5 leading-[0] left-[252px] not-italic text-[#11ca9c] text-[10px] text-left top-[165.425px] w-[52px]">
            <p className="block leading-[normal]">其它品牌2</p>
          </div>
          <div className="absolute font-light h-3.5 leading-[0] left-[215px] not-italic text-[#ff4d4d] text-[10px] text-left top-[263.425px] w-[47px]">
            <p className="block leading-[normal]">其它品牌3</p>
          </div>
          <div className="absolute font-light h-3.5 leading-[0] left-[26px] not-italic text-[#333333] text-[10px] text-left top-[196.425px] w-[46px]">
            <p className="block leading-[normal]">品牌占比</p>
          </div>

          {/* 按钮 */}
          <div className="absolute bg-[#2663ff] h-6 left-5 rounded top-[53px] w-[79px]" />
          <div className="absolute bg-[rgba(38,99,255,0.2)] h-6 left-[103px] rounded top-[53px] w-[79px]" />
          <div className="absolute h-5 left-[246px] rounded-sm top-[15px] w-[60px] border-[#2663ff] border-[0.5px]" />

          {/* 按钮文本 */}
          <div className="absolute font-light leading-[0] left-[35px] not-italic text-[#ffffff] text-[10px] text-left text-nowrap top-[58px]">
            <p className="block leading-[normal] whitespace-pre">当月搜索量</p>
          </div>
          <div className="absolute font-bold leading-[0] left-5 not-italic text-[#333333] text-[18px] text-left text-nowrap top-[15px]">
            <p className="block leading-[normal] whitespace-pre">品牌推荐率</p>
          </div>
          <div className="absolute font-light leading-[0] left-[118px] not-italic text-[#333333] text-[10px] text-left text-nowrap top-[58px]">
            <p className="block leading-[normal] whitespace-pre">当月流失量</p>
          </div>
          <div className="absolute font-extralight leading-[0] left-64 not-italic text-[#2663ff] text-[10px] text-left text-nowrap top-[19px]">
            <p className="block leading-[normal] whitespace-pre">查看详情</p>
                  </div>
                </div>
              </div>

      {/* 品牌在AI市场的首推率卡片 */}
      <div className="absolute h-[401px] left-[960px] top-[638px] w-[910px]">
        <div className="absolute contents left-0 top-0">
          <div className="absolute bg-[#ffffff] h-[400px] right-0 rounded-[20px] top-0 w-[910px] border border-[#cccccc]" />
          
          <div className="absolute font-bold leading-[0] left-12 not-italic text-[#333333] text-[24px] text-left text-nowrap top-[35px]">
            <p className="block leading-[normal] whitespace-pre">品牌在AI市场的首推率</p>
          </div>
          <div className="absolute font-light leading-[0] left-12 not-italic text-[#666666] text-[16px] text-left text-nowrap top-[77px]">
            <p className="block leading-[normal] whitespace-pre">品牌的在各竞争对手产品中分布情况</p>
          </div>

          {/* 品牌列表 */}
          <div className="absolute contents left-[541px] top-[92px]">
            {/* Intel */}
            <div className="absolute contents left-[541px] top-[92px]">
              <div className="absolute font-light h-[27.245px] leading-[0] left-[569.363px] not-italic text-[#000000] text-[16px] text-left top-[92px] w-[69.852px]">
                <p className="block leading-[normal]">Intel</p>
              </div>
              <div className="absolute font-normal h-[21.509px] leading-[0] left-[855.478px] not-italic text-[#000000] text-[12px] text-right top-[95px] translate-x-[-100%] w-[49.478px]">
                <p className="block leading-[normal]">72.5%</p>
              </div>
              <div className="absolute bg-[#2663ff] h-[17.207px] left-[541px] rounded-sm top-[92px] w-[17.463px] border border-[#cccccc]" />
            </div>

            {/* AMD */}
            <div className="absolute contents left-[541px] top-[142px]">
              <div className="absolute font-light h-[27.245px] leading-[0] left-[569.363px] not-italic text-[#000000] text-[16px] text-left top-[142px] w-[85.859px]">
                <p className="block leading-[normal]">AMD</p>
              </div>
              <div className="absolute font-normal h-[21.509px] leading-[0] left-[854.568px] not-italic text-[#000000] text-[12px] text-right top-[145px] translate-x-[-100%] w-[46.568px]">
                <p className="block leading-[normal]">15.7%</p>
                </div>
              <div className="absolute bg-[#ffb200] h-[17.207px] left-[541px] rounded-sm top-[142px] w-[17.463px] border border-[#cccccc]" />
                </div>
                
            {/* Apple */}
            <div className="absolute contents left-[541px] top-48">
              <div className="absolute font-light h-[27.245px] leading-[0] left-[569.363px] not-italic text-[#000000] text-[16px] text-left top-48 w-[106.233px]">
                <p className="block leading-[normal]">Apple</p>
              </div>
              <div className="absolute font-normal h-[21.509px] leading-[0] left-[855.292px] not-italic text-[#000000] text-[12px] text-right top-[195px] translate-x-[-100%] w-[39.291px]">
                <p className="block leading-[normal]">9.3%</p>
                    </div>
              <div className="absolute bg-[#11ca9c] h-[17.207px] left-[541px] rounded-sm top-48 w-[17.463px] border border-[#cccccc]" />
                </div>

            {/* Qualcomm */}
            <div className="absolute contents left-[541px] top-[243px]">
              <div className="absolute font-light h-[27.245px] leading-[0] left-[569.363px] not-italic text-[#000000] text-[16px] text-left top-[243px] w-[238.66px]">
                <p className="block leading-[normal]">Qualcomm</p>
                      </div>
              <div className="absolute font-normal h-[21.509px] leading-[0] left-[855.381px] not-italic text-[#000000] text-[12px] text-right top-[246px] translate-x-[-100%] w-[36.381px]">
                <p className="block leading-[normal]">1.3%</p>
                    </div>
              <div className="absolute bg-[#fa8919] h-[17.207px] left-[541px] rounded-sm top-[243px] w-[17.463px] border border-[#cccccc]" />
                </div>

            {/* ARM Holdings */}
            <div className="absolute contents left-[541px] top-[293px]">
              <div className="absolute font-light h-[27px] leading-[0] left-[569px] not-italic text-[#000000] text-[16px] text-left top-[293px] w-[115px]">
                <p className="block leading-[normal]">ARM Holdings</p>
                  </div>
              <div className="absolute font-normal h-[21.509px] leading-[0] left-[855.381px] not-italic text-[#000000] text-[12px] text-right top-[296px] translate-x-[-100%] w-[36.381px]">
                <p className="block leading-[normal]">1.2%</p>
              </div>
              <div className="absolute bg-[#ff4d4d] h-[17.207px] left-[541px] rounded-sm top-[293px] w-[17.463px] border border-[#cccccc]" />
            </div>
          </div>
                  
                  {/* 饼图 */}
          <div className="absolute left-10 size-[452px] top-[173px]">
            <div className="absolute bottom-1/2 left-0 right-0 top-0">
              <img alt="" className="block max-w-none size-full" height="226" loading="lazy" src={imgEllipse14} width="452" />
                  </div>
                </div>
          <div className="absolute left-10 size-[452px] top-[173px]">
            <div className="absolute bottom-1/2 left-[65.773%] right-0 top-[7.469%]">
              <img alt="" className="block max-w-none size-full" height="192.24" loading="lazy" src={imgEllipse15} width="154.704" />
                      </div>
                    </div>
          <div className="absolute left-10 size-[452px] top-[173px]">
            <div className="absolute bottom-1/2 left-[77.129%] right-0 top-[28.656%]">
              <img alt="" className="block max-w-none size-full" height="96.473" loading="lazy" src={imgEllipse16} width="103.375" />
                    </div>
                  </div>
          <div className="absolute left-10 size-[452px] top-[173px]">
            <div className="absolute bottom-1/2 left-[79.633%] right-0 top-[42.203%]">
              <img alt="" className="block max-w-none size-full" height="35.242" loading="lazy" src={imgEllipse17} width="92.059" />
                </div>
              </div>
          <div className="absolute left-10 size-[452px] top-[173px]">
            <div className="absolute bottom-1/2 left-[79.911%] right-0 top-[46.15%]">
              <img alt="" className="block max-w-none size-full" height="17.404" loading="lazy" src={imgEllipse18} width="90.803" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 