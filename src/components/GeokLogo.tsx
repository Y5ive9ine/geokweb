import React from 'react';

interface GeokLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const GeokLogo: React.FC<GeokLogoProps> = ({ 
  width = 73, 
  height = 64, 
  className = '' 
}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    viewBox="0 0 73 64" 
    fill="none" 
    className={className}
  >
    <g clipPath="url(#clip0_431_1043)">
      <path d="M0.969727 56.2L11.2797 62.22V31.53L0.969727 24.91V56.2Z" fill="#2663FF" stroke="white" strokeMiterlimit="10"/>
      <path d="M21.9196 56.2L11.5996 62.22V31.53L21.9196 24.91V56.2Z" fill="#2663FF" stroke="white" strokeMiterlimit="10"/>
      <path d="M0.969727 24.59L11.4397 18.63L21.9197 24.59L11.4397 31.31L0.969727 24.59Z" fill="#2663FF" stroke="white" strokeMiterlimit="10"/>
      <path d="M25.6602 56.2L35.9802 62.22V25.51L25.6602 18.89V56.2Z" fill="#FFB200" stroke="white" strokeMiterlimit="10"/>
      <path d="M46.6098 56.2L36.2998 62.22V25.51L46.6098 18.89V56.2Z" fill="#FFB200" stroke="white" strokeMiterlimit="10"/>
      <path d="M25.6602 18.57L36.1402 12.61L46.6102 18.57L36.1402 25.29L25.6602 18.57Z" fill="#FFB200" stroke="white" strokeMiterlimit="10"/>
      <path d="M50.3604 56.2L60.6703 62.22V13.48L50.3604 6.85999V56.2Z" fill="#2663FF" stroke="white" strokeMiterlimit="10"/>
      <path d="M71.3102 56.2L60.9902 62.22V13.48L71.3102 6.85999V56.2Z" fill="#2663FF" stroke="white" strokeMiterlimit="10"/>
      <path d="M50.3604 6.53002L60.8304 0.580017L71.3103 6.53002L60.8304 13.25L50.3604 6.53002Z" fill="#2663FF" stroke="white" strokeMiterlimit="10"/>
    </g>
    <defs>
      <clipPath id="clip0_431_1043">
        <rect width="72.28" height="63.09" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

// 导出一个简化的文字版本GEOK Logo
export const GeokTextLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`font-bold text-2xl ${className}`}>
    <span className="text-[#2663FF]">GEO</span>
    <span className="text-[#FFB200]">K</span>
  </div>
);

// 默认导出GeokLogo
export default GeokLogo;

// 兼容性导出（处理代码中的大小写不一致）
export const Geoklogo = GeokLogo; 