'use client'

import Link from 'next/link'

// 图标资源常量 - 参考Figma设计
const img2 = "../images/img2.png";
const imgLine2 = "../images/Line2.svg";
const imgFrame = "../images/Frame.svg";
const imgFrame1 = "../images/Frame1.svg";
const imgFrame2 = "../images/Frame2.svg";
const imgFrame3 = "../images/Frame3.svg";
const imgFrame4 = "../images/Frame4.svg";
const imgLine6 = "../images/Line6.svg";
const imgFrame5 = "../images/Frame5.svg";
const imgFrame6 = "../images/Frame6.svg";
const imgVector = "../images/Vector.svg";
const imgFrame7 = "../images/Frame7.svg";
const imgFrame8 = "../images/Frame7.svg";
const imgGroup134 = "../images/Group134.svg";

// Earned图标组件
const EarnedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <g clipPath="url(#clip0_332_2262)">
      <path d="M9.69145 11.4867L1.07716 7.38984C0.784128 7.27635 0.532274 7.07688 0.354673 6.81764C0.177073 6.55839 0.0820313 6.2515 0.0820312 5.93725C0.0820313 5.62301 0.177073 5.31611 0.354673 5.05687C0.532274 4.79762 0.784128 4.59816 1.07716 4.48466L9.69145 0.387812C10.1026 0.19684 10.5505 0.0979004 11.0038 0.0979004C11.4572 0.0979004 11.9051 0.19684 12.3162 0.387812L20.9305 4.48466C21.2236 4.59816 21.4754 4.79762 21.653 5.05687C21.8306 5.31611 21.9257 5.62301 21.9257 5.93725C21.9257 6.2515 21.8306 6.55839 21.653 6.81764C21.4754 7.07688 21.2236 7.27635 20.9305 7.38984L12.3162 11.4867C11.9051 11.6777 11.4572 11.7766 11.0038 11.7766C10.5505 11.7766 10.1026 11.6777 9.69145 11.4867Z" fill="#2663FF"/>
      <path d="M11.0039 16.9662C10.3772 16.9664 9.75898 16.8225 9.19688 16.5456L0.746156 12.3475C0.594687 12.2888 0.457124 12.1992 0.34225 12.0843C0.227376 11.9695 0.137717 11.8319 0.0789981 11.6805C0.0202789 11.529 -0.00620962 11.367 0.00122396 11.2047C0.00865755 11.0424 0.0498499 10.8835 0.12217 10.738C0.194491 10.5926 0.29635 10.4638 0.421244 10.3599C0.546137 10.256 0.69132 10.1793 0.84752 10.1347C1.00372 10.0901 1.16751 10.0786 1.32842 10.1009C1.48933 10.1231 1.64383 10.1787 1.78205 10.264L10.225 14.4621C10.4677 14.58 10.734 14.6412 11.0039 14.6412C11.2737 14.6412 11.54 14.58 11.7827 14.4621L20.2335 10.264C20.3717 10.1787 20.5262 10.1231 20.6871 10.1009C20.848 10.0786 21.0118 10.0901 21.168 10.1347C21.3242 10.1793 21.4694 10.256 21.5943 10.3599C21.7192 10.4638 21.821 10.5926 21.8933 10.738C21.9657 10.8835 22.0068 11.0424 22.0143 11.2047C22.0217 11.367 21.9952 11.529 21.9365 11.6805C21.8778 11.8319 21.7881 11.9695 21.6733 12.0843C21.5584 12.1992 21.4208 12.2888 21.2693 12.3475L12.8108 16.5456C12.2489 16.8229 11.6305 16.9669 11.0039 16.9662Z" fill="#2663FF"/>
      <path d="M11.0039 21.9042C10.3772 21.9049 9.75884 21.7609 9.19688 21.4836L0.746156 17.2855C0.594687 17.2268 0.457124 17.1372 0.34225 17.0223C0.227376 16.9075 0.137717 16.7699 0.0789981 16.6184C0.0202789 16.467 -0.00620962 16.3049 0.00122396 16.1427C0.00865755 15.9804 0.0498499 15.8215 0.12217 15.676C0.194491 15.5305 0.29635 15.4018 0.421244 15.2979C0.546137 15.194 0.69132 15.1173 0.84752 15.0727C1.00372 15.0281 1.16751 15.0166 1.32842 15.0389C1.48933 15.0611 1.64383 15.1167 1.78205 15.202L10.225 19.4001C10.4671 19.5199 10.7337 19.5823 11.0039 19.5823C11.274 19.5823 11.5406 19.5199 11.7827 19.4001L20.2335 15.202C20.3717 15.1167 20.5262 15.0611 20.6871 15.0389C20.848 15.0166 21.0118 15.0281 21.168 15.0727C21.3242 15.1173 21.4694 15.194 21.5943 15.2979C21.7192 15.4018 21.821 15.5305 21.8933 15.676C21.9657 15.8215 22.0068 15.9804 22.0143 16.1427C22.0217 16.3049 21.9952 16.467 21.9365 16.6184C21.8778 16.7699 21.7881 16.9075 21.6733 17.0223C21.5584 17.1372 21.4208 17.2268 21.2693 17.2855L12.8108 21.4836C12.2489 21.7609 11.6305 21.9049 11.0039 21.9042Z" fill="#2663FF"/>
    </g>
    <defs>
      <clipPath id="clip0_332_2262">
        <rect width="22" height="22" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default function ReferencesPage() {
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
      <Link href="/dashboard/tips">
        <div className="absolute font-normal leading-[0] left-[571px] not-italic text-[#999999] text-[20px] text-left text-nowrap top-7 cursor-pointer hover:text-[#333333] transition-colors">
          <p className="block leading-[normal] whitespace-pre">提示</p>
        </div>
      </Link>
      {/* 引用 - 激活状态 */}
      <div className="absolute font-bold leading-[0] left-[661px] not-italic text-[#333333] text-[20px] text-left text-nowrap top-7">
        <p className="block leading-[normal] whitespace-pre">引用</p>
      </div>

      {/* Tab下划线 - 引用激活状态 */}
      <div className="absolute bg-[#333333] h-1 left-[636px] top-[76px] w-[90px]" />

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

      {/* 主要搜索区域 */}
      <div className="absolute bg-[#ffffff] h-[162px] left-[400px] rounded-[10px] top-[110px] w-[1470px] border border-[#cccccc]" />

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

      {/* 筛选选项 */}
      <div className="absolute bg-[#ffffff] h-[42px] left-[420px] rounded-[10px] top-[210px] w-[200px] border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[484px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">最近7日</p>
      </div>

      <div className="absolute font-normal leading-[0] left-[640px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">VS</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[684px] rounded-[10px] top-[210px] w-[200px] border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[735px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[219px]">
        <p className="block leading-[normal] whitespace-pre">前一个7日</p>
      </div>

      <div className="absolute bg-[#ffffff] h-[42px] left-[894px] rounded-[10px] top-[210px] w-[190px] border border-[#cccccc]" />
      <div className="absolute font-normal leading-[0] left-[926px] not-italic text-[#666666] text-[18px] text-left text-nowrap top-[219px]">
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

      {/* 引用数据表格区域 */}
      {/* 表格表头 */}
      <div className="absolute font-medium leading-[0] left-[484px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="block leading-[1.5] whitespace-pre">排名</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[636px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="block leading-[1.5] whitespace-pre">域名</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1266px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="block leading-[1.5] whitespace-pre">类别</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1487px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="block leading-[1.5] whitespace-pre">数量</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1704px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[310px]">
        <p className="block leading-[1.5] whitespace-pre">分享</p>
      </div>

      {/* 表格分割线 */}
      <div className="absolute h-0 left-[400px] top-[352px] w-[1469px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px] bg-[#cccccc] h-[1px]" />
      </div>
      <div className="absolute h-0 left-[400px] top-[412px] w-[1469px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px] bg-[#cccccc] h-[1px]" />
      </div>
      <div className="absolute h-0 left-[400px] top-[472px] w-[1469px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px] bg-[#cccccc] h-[1px]" />
      </div>
      <div className="absolute h-0 left-[400px] top-[532px] w-[1469px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px] bg-[#cccccc] h-[1px]" />
      </div>
      <div className="absolute h-0 left-[400px] top-[592px] w-[1469px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px] bg-[#cccccc] h-[1px]" />
      </div>
      <div className="absolute h-0 left-[400px] top-[652px] w-[1469px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px] bg-[#cccccc] h-[1px]" />
      </div>

      {/* 表格数据行 */}
      {/* 第一行 */}
      <div className="absolute font-medium leading-[0] left-[484px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[370px]">
        <p className="block leading-[1.5] whitespace-pre">1.</p>
      </div>
      <div className="absolute font-light leading-[0] left-[652px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[370px]">
        <p className="block leading-[1.5] whitespace-pre">http://deeplumen.cn/?p=79337</p>
      </div>
      <div className="absolute bg-[rgba(38,99,255,0.2)] h-[34px] left-[1222px] rounded-[10px] top-[365px] w-[120px]" />
      <div className="absolute contents left-[1247px] top-[371px]">
        <div className="absolute font-regular h-4 leading-[0] left-[1280px] not-italic text-[#2663ff] text-[12px] text-left top-[374px] w-10">
          <p className="block leading-[normal]">Earned</p>
        </div>
        <div className="absolute left-[1247px] size-[22px] top-[371px]">
          <EarnedIcon />
        </div>
      </div>
      <div className="absolute font-medium leading-[0] left-[1457px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[371px]">
        <p className="block leading-[normal] whitespace-pre">5.3k</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1512px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[371px]">
        <p className="block leading-[normal] whitespace-pre">-507</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1678px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[371px]">
        <p className="block leading-[normal] whitespace-pre">6%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1723px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[371px]">
        <p className="block leading-[normal] whitespace-pre">+0.2%</p>
      </div>

      {/* 第二行 */}
      <div className="absolute font-medium leading-[0] left-[484px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[430px]">
        <p className="block leading-[1.5] whitespace-pre">2.</p>
      </div>
      <div className="absolute font-light leading-[0] left-[652px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[430px]">
        <p className="block leading-[1.5] whitespace-pre">http://deeplumen.cn/?p=65</p>
      </div>
      <div className="absolute bg-[rgba(38,99,255,0.2)] h-[34px] left-[1222px] rounded-[10px] top-[425px] w-[120px]" />
      <div className="absolute contents left-[1247px] top-[431px]">
        <div className="absolute font-regular h-4 leading-[0] left-[1280px] not-italic text-[#2663ff] text-[12px] text-left top-[434px] w-10">
          <p className="block leading-[normal]">Earned</p>
        </div>
        <div className="absolute left-[1247px] size-[22px] top-[431px]">
          <EarnedIcon />
        </div>
      </div>
      <div className="absolute font-medium leading-[0] left-[1457px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[431px]">
        <p className="block leading-[normal] whitespace-pre">4.8k</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1512px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[431px]">
        <p className="block leading-[normal] whitespace-pre">+304</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1661px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[431px]">
        <p className="block leading-[normal] whitespace-pre">5.4%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1723px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[431px]">
        <p className="block leading-[normal] whitespace-pre">-1%</p>
      </div>

      {/* 第三行 */}
      <div className="absolute font-medium leading-[0] left-[484px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[490px]">
        <p className="block leading-[1.5] whitespace-pre">3.</p>
      </div>
      <div className="absolute font-light leading-[0] left-[652px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[490px]">
        <p className="block leading-[1.5] whitespace-pre">https://weibo.com/</p>
      </div>
      <div className="absolute bg-[rgba(38,99,255,0.2)] h-[34px] left-[1222px] rounded-[10px] top-[485px] w-[120px]" />
      <div className="absolute contents left-[1247px] top-[491px]">
        <div className="absolute font-regular h-4 leading-[0] left-[1280px] not-italic text-[#2663ff] text-[12px] text-left top-[494px] w-10">
          <p className="block leading-[normal]">Earned</p>
        </div>
        <div className="absolute left-[1247px] size-[22px] top-[491px]">
          <EarnedIcon />
        </div>
      </div>
      <div className="absolute font-medium leading-[0] left-[1457px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[491px]">
        <p className="block leading-[normal] whitespace-pre">5.3k</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1512px] not-italic text-[#ff4d4d] text-[18px] text-left text-nowrap top-[491px]">
        <p className="block leading-[normal] whitespace-pre">-507</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1678px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[491px]">
        <p className="block leading-[normal] whitespace-pre">6%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1723px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[491px]">
        <p className="block leading-[normal] whitespace-pre">+0.2%</p>
      </div>

      {/* 第四行 */}
      <div className="absolute font-medium leading-[0] left-[484px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[550px]">
        <p className="block leading-[1.5] whitespace-pre">4.</p>
      </div>
      <div className="absolute font-light leading-[0] left-[652px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[550px]">
        <p className="block leading-[1.5] whitespace-pre">https://www.toutiao.com/</p>
      </div>
      <div className="absolute bg-[rgba(38,99,255,0.2)] h-[34px] left-[1222px] rounded-[10px] top-[545px] w-[120px]" />
      <div className="absolute contents left-[1247px] top-[551px]">
        <div className="absolute font-regular h-4 leading-[0] left-[1280px] not-italic text-[#2663ff] text-[12px] text-left top-[554px] w-10">
          <p className="block leading-[normal]">Earned</p>
        </div>
        <div className="absolute left-[1247px] size-[22px] top-[551px]">
          <EarnedIcon />
        </div>
      </div>
      <div className="absolute font-medium leading-[0] left-[1457px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[551px]">
        <p className="block leading-[normal] whitespace-pre">4.8k</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1512px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[551px]">
        <p className="block leading-[normal] whitespace-pre">+304</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1661px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[551px]">
        <p className="block leading-[normal] whitespace-pre">5.4%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1723px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[551px]">
        <p className="block leading-[normal] whitespace-pre">+1%</p>
      </div>

      {/* 第五行 */}
      <div className="absolute font-medium leading-[0] left-[484px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[615px]">
        <p className="block leading-[1.5] whitespace-pre">5.</p>
      </div>
      <div className="absolute font-light leading-[0] left-[652px] not-italic text-[#333333] text-[16px] text-left text-nowrap top-[615px]">
        <p className="block leading-[1.5] whitespace-pre">https://www.smzdm.com/</p>
      </div>
      <div className="absolute bg-[rgba(38,99,255,0.2)] h-[34px] left-[1222px] rounded-[10px] top-[610px] w-[120px]" />
      <div className="absolute contents left-[1247px] top-[616px]">
        <div className="absolute font-regular h-4 leading-[0] left-[1280px] not-italic text-[#2663ff] text-[12px] text-left top-[619px] w-10">
          <p className="block leading-[normal]">Earned</p>
        </div>
        <div className="absolute left-[1247px] size-[22px] top-[616px]">
          <EarnedIcon />
        </div>
      </div>
      <div className="absolute font-medium leading-[0] left-[1457px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[616px]">
        <p className="block leading-[normal] whitespace-pre">4.8k</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1512px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[616px]">
        <p className="block leading-[normal] whitespace-pre">+304</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1661px] not-italic text-[#333333] text-[18px] text-left text-nowrap top-[616px]">
        <p className="block leading-[normal] whitespace-pre">5.4%</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1723px] not-italic text-[#11ca9c] text-[18px] text-left text-nowrap top-[616px]">
        <p className="block leading-[normal] whitespace-pre">+1%</p>
      </div>

      {/* 网站图标 */}
      <div className="absolute size-7 left-[614px] top-[366px]">
        <img alt="网站图标" className="block size-full" src="../images/logo.png" />
      </div>
      <div className="absolute size-7 left-[614px] top-[427px]">
        <img alt="网站图标" className="block size-full" src="../images/logo.png" />
      </div>
      <div className="absolute size-7 left-[614px] top-[488px]">
        <img alt="微博图标" className="block size-full" src="../images/weibo.png" />
      </div>
      <div className="absolute size-7 left-[614px] top-[548px]">
        <img alt="今日头条图标" className="block size-full" src="../images/toutiao.png" />
      </div>
      <div className="absolute size-7 left-[614px] top-[613px]">
        <img alt="什么值得买图标" className="block size-full" src="../images/zhidemai.png" />
      </div>
    </div>
  )
} 