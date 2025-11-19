// import Image from "next/image";

import axios from "axios";
import PodcastBox from "./components/podcastBox";
import { Podcasts } from "./types/podcasts";

export default async function Home() {
  const podcasts = (
    await axios.get<Podcasts>("http://localhost:4000/podcasts/search", {
      params: {
        text: "قران",
      },
    })
  ).data;

  return (
    <div>
      <PodcastBox title="البودكاســــت" podcasts={podcasts} />
    </div>
  );
}
