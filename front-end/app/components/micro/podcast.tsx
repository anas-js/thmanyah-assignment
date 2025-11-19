"use client";
import { Podcasts } from "@/app/types/podcasts";
import Image from "next/image";
import { useState } from "react";

export default function Podcast({podcast} : {podcast: Podcasts[0]}) {
  return (
    <div className="w-60">
      <Image alt={podcast.name} className="w-full rounded-2xl" src={podcast.image_url || '/default.png'} width={600} height={600} loading="lazy"  quality={75} />

      <div className="mt-6">
        <p className="font-light">{podcast.creator}</p>
        <h2 className="text-2xl">{podcast.name}</h2>
      </div>
    </div>
  );
}
