// import Image from "next/image";

import axios from "axios";
import PodcastBox from "../components/podcastBox";
import type { Podcasts } from "../types/podcasts";
import { redirect } from "next/navigation";

// import { useSearchParams } from 'next/navigation'
export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // console.log("run");
  const param = await searchParams;
  if (!param.text) {
    redirect("/");
  }

  const podcasts = (
    await axios.get<Podcasts>("http://localhost:4000/podcasts/search", {
      params: {
        text: param.text,
      },
    })
  ).data;
  return (
    <div>
      <PodcastBox
        title={`نتائج البحــث عن "${param.text}"`}
        podcasts={podcasts}
      />
      {!podcasts.length && "لا يوجد نتائج"}
    </div>
  );
}
