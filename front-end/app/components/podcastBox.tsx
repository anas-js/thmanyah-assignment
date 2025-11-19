

import Podcast from "./micro/podcast";

import type { Podcasts } from "@/app/types/podcasts";

export default function PodcastBox({ title, podcasts }: {title:string, podcasts: Podcasts }) {
 
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div>
        <div className="py-7 grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
          {podcasts.map((podcast) => (
            <Podcast key={podcast.itunes_id} podcast={podcast} />
          ))}
        </div>
      </div>
    </>
  );
}
