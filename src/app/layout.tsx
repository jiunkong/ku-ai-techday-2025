import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import Image from "next/image";
import { Background } from "@/components/Background";

export const metadata: Metadata = {
  title: "AI Tech Day 2025",
  description: "고려대학교 AI Tech Day 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`antialiased relative w-screen h-screen`}
      > 
        <Background/>
        <Header/>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
