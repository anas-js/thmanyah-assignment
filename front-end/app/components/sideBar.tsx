import logo from "@/app/assets/image/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="bg-secondary fixed h-full w-60 p-4 pt-14 hidden md:block">
      {/* <img src={logo} /> */}
      <Image loading="eager" className="m-auto" src={logo} alt="logo" width={107} />

      <div className="mt-20 text-white text-lg">
        <ul>
          <li >
            <Link className="flex items-center gap-2 bg-white bg-opacity-5 p-2 rounded-lg px-4" href="/">
              <i className="iconoir-headset"></i> البودكاست
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
