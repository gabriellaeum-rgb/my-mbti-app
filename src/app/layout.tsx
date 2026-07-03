import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "출근길 내 모습으로 알아보는 'IT 부캐' 테스트",
  description:
    "협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는 IT 직무 페르소나는? 8개의 질문으로 확인하는 나만의 IT 부캐 찾기 테스트.",
  openGraph: {
    title: "출근길 내 모습으로 알아보는 'IT 부캐' 테스트",
    description:
      "협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는 IT 직무 페르소나는?",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05061a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <body className="min-h-screen font-sans antialiased">
        <BackgroundGlow />
        {children}
      </body>
    </html>
  );
}
