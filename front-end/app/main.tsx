"use client";
import SearchBox from "./components/micro/searchBox";
import SideBar, { SideBarHandle } from "./components/sideBar";
import { useRef } from "react";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sideBarRef = useRef<SideBarHandle>(null);

  return (
    <div className="flex h-full">
      {/* Side Bar */}
      <SideBar ref={sideBarRef} />

      {/* Page */}
      <div className="bg-primary flex-1 p-8 md:ms-60">
        <div className="sticky top-6 box-border flex gap-3">
          <button
            onClick={() => sideBarRef.current?.toggle()}
            className="flex md:hidden bg-secondary rounded-full text-3xl text-white p-5">
            <i className="iconoir-menu"></i>
          </button>
          <SearchBox />
        </div>
        <div className="text-white mt-12">{children}</div>
      </div>
    </div>
  );
}
