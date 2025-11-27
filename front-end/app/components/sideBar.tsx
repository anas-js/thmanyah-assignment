"use client";
import { forwardRef, useImperativeHandle, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/image/logo.svg";

export type SideBarHandle = {
  toggle: () => void;
};

const SideBar = forwardRef<SideBarHandle>((props, ref) => {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow((prev) => !prev);
  }

  useImperativeHandle(ref, () => ({
    toggle,
  }));

  return (
    <div
      className={`bg-secondary fixed h-full w-60 p-4 pt-14 -right-full md:right-0 z-10 transition-all ${
        show ? "right-0" : ""
      }`}>
      <Image
        loading="eager"
        className="m-auto"
        src={logo}
        alt="logo"
        width={107}
      />

      <div className="mt-20 text-white text-lg">
        <ul>
          <li>
            <Link
              className="flex items-center gap-2 bg-white bg-opacity-5 p-2 rounded-lg px-4"
              href="/">
              <i className="iconoir-headset"></i> البودكاست
            </Link>
          </li>
        </ul>
        <button
          onClick={toggle}
          className="gap-2 items-center text-white mt-6 flex sm:hidden">
          <i className="iconoir-xmark text-2xl"></i>إغلاق
        </button>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
