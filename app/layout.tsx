import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "机电管理平台",
  description: "这是一个demo版本，用于演示。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-100", inter.className)}>
        <div className="hidden sm:block fixed inset-0 w-64 z-10">
          <SideBar />
        </div>
        <div className="h-full sm:pl-64 relative">
          <div className="absolute left-0 top-0 w-full shadow-sm">
            <Header />
          </div>
          <div className="pt-16 h-full w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
