import "./globals.scss";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import "iconoir/css/iconoir.css";
import SearchBox from "./components/micro/searchBox";
import SideBar from "./components/sideBar";
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "thmanyah",
  description: "thmanyah app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-full">
          {/* Side Bar */}
          <SideBar />

          {/* Page */}
          <div className="bg-primary flex-1 p-8 pt-24 md:ms-60">
            <SearchBox />
            <div className="text-white mt-12">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
