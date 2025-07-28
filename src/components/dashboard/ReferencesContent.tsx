'use client'

import Image from 'next/image'
import { SearchSection } from './SearchSection'

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
)

// 引用数据行组件
const ReferenceRow = ({ 
  rank, 
  domain, 
  icon,
  count, 
  change, 
  share, 
  shareChange
}: {
  rank: number
  domain: string
  icon: string
  count: string
  change: string
  share: string
  shareChange: string
}) => {
  const isPositiveChange = change.startsWith('+')
  const isPositiveShareChange = shareChange.startsWith('+')

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 items-center">
        {/* 排名列 */}
        <div className="flex items-center">
          <span className="text-sm md:text-base font-medium text-gray-700">{rank}.</span>
        </div>

        {/* 域名列 */}
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
            <Image
              src={icon}
              alt="网站图标"
              width={28}
              height={28}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xs md:text-sm font-light text-gray-700 truncate">{domain}</span>
        </div>

        {/* 类别列 */}
        <div className="flex items-center justify-start md:justify-center">
          <div className="bg-blue-100 rounded-lg px-2 md:px-3 py-1 flex items-center space-x-1 md:space-x-2">
            <EarnedIcon />
            <span className="text-xs font-regular text-blue-600">Earned</span>
          </div>
        </div>

        {/* 数量列 */}
        <div className="flex items-center space-x-2">
          <span className="text-sm md:text-base font-medium text-gray-800">{count}</span>
          <span className={`text-sm md:text-base font-medium ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        </div>

        {/* 分享列 */}
        <div className="flex items-center space-x-2">
          <span className="text-sm md:text-base font-medium text-gray-800">{share}</span>
          <span className={`text-sm md:text-base font-medium ${isPositiveShareChange ? 'text-green-500' : 'text-red-500'}`}>
            {shareChange}
          </span>
        </div>
      </div>
    </div>
  )
}

export function ReferencesContent() {
  const referenceData = [
    {
      rank: 1,
      domain: "http://deeplumen.cn/?p=79337",
      icon: "/images/logo.png",
      count: "5.3k",
      change: "-507",
      share: "6%",
      shareChange: "+0.2%"
    },
    {
      rank: 2,
      domain: "http://deeplumen.cn/?p=65",
      icon: "/images/logo.png",
      count: "4.8k",
      change: "+304",
      share: "5.4%",
      shareChange: "-1%"
    },
    {
      rank: 3,
      domain: "https://weibo.com/",
      icon: "/images/weibo.png",
      count: "5.3k",
      change: "-507",
      share: "6%",
      shareChange: "+0.2%"
    },
    {
      rank: 4,
      domain: "https://www.toutiao.com/",
      icon: "/images/toutiao.png",
      count: "4.8k",
      change: "+304",
      share: "5.4%",
      shareChange: "+1%"
    },
    {
      rank: 5,
      domain: "https://www.smzdm.com/",
      icon: "/images/zhidemai.png",
      count: "4.8k",
      change: "+304",
      share: "5.4%",
      shareChange: "+1%"
    }
  ]

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
      {/* 搜索区域 */}
      <SearchSection />

      {/* 引用数据表格区域 */}
      <div className="mt-6 bg-white rounded-lg border border-gray-300 overflow-hidden">
        {/* 表头 */}
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 text-sm font-medium text-gray-700">
            <div className="flex items-center">
              排名
            </div>
            <div className="flex items-center">
              域名
            </div>
            <div className="flex items-center justify-start md:justify-center">
              类别
            </div>
            <div className="flex items-center justify-start md:justify-center">
              数量
            </div>
            <div className="flex items-center justify-start md:justify-center">
              分享
            </div>
          </div>
        </div>

        {/* 表格内容 */}
        <div className="p-4">
          {referenceData.map((row, index) => (
            <ReferenceRow
              key={index}
              {...row}
            />
          ))}
        </div>
      </div>

      {/* 底部提示文本 */}
      <div className="mt-8 text-center">
        <p className="text-base md:text-lg text-gray-600 font-light">
          网站上的引用、引文和统计数据越多，被人工智能搜索选中并做出响应的可能性就越大
        </p>
      </div>
    </div>
  )
} 