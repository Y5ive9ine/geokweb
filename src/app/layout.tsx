import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GEOK - 让您的品牌被AI提及",
  description: "触及数百万正在利用人工智能来发现新产品和新品牌的消费者群体。在未来，50%的传统搜索流量将被生成式AI取代。",
  keywords: ["AI搜索", "品牌推广", "人工智能", "搜索引擎优化", "品牌曝光"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
