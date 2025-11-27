import "./globals.scss";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import "iconoir/css/iconoir.css";
import Main from "./main";

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
        <Main>{children}</Main>
      </body>
    </html>
  );
}
