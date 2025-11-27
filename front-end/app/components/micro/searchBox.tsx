// import logo from "@/app/assets/image/logo.svg";
// import Image from "next/image";
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchBox() {
  const params = useSearchParams();
  const [searchButtonShow, setSearchButtonShowStatus] = useState(
    params.get("text") || false
  );
  const [searchText, setSearchText] = useState(params.get("text") || "");
  const [loading, setLoadingStatus] = useState(false);
  const router = useRouter();

  function handelOnUserWrite(e) {
    const text = e.target.value;
    setSearchText(text);
    setSearchButtonShowStatus(!!text.length);
  }

  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    setLoadingStatus(false);
    if (!params.get("text")) {
      setSearchText("");
    }
  }, [params]);

  function handelSearch() {
    setLoadingStatus(true);
    router.push(`/search?text=${searchText}`);
  }

  return (
    <div className="bg-secondary w-full  sm:w-1/2 flex p-4 text-white gap-2 items-center box-border rounded-full">
      <i className="iconoir-search text-2xl"></i>
      <input
        className="bg-transparent outline-none w-full placeholder-white"
        placeholder="البحـــث"
        onChange={handelOnUserWrite}
        value={searchText}
        onKeyDown={(e) => e.key == "Enter" && handelSearch()}></input>
      <button
        onClick={handelSearch}
        disabled={loading}
        className={`bg-white rounded-full p-2 text-black ${
          searchButtonShow ? "opacity-100" : "opacity-0"
        } flex`}>
        {loading ? (
          <i className="iconoir-system-restart animate-spin"></i>
        ) : (
          "إبحث"
        )}
        {}
      </button>
    </div>
  );
}
