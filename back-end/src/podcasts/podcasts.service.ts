// import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Podcast } from './schemas/podcast.schema';
import { Model } from 'mongoose';

export interface ItunesPodcast {
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl600: string;
  artworkUrl100: string;
  artworkUrl60: string;
  artworkUrl30: string;
}

const PAGE_LIMIT = 25;

@Injectable()
export class PodcastsService {
  constructor(
    @InjectModel(Podcast.name) private prodcastModel: Model<Podcast>,
  ) {}

  async search({ text, page }: { text: string; page: number }) {
    try {
      const itunesResult = (
        await axios.get<{ results: ItunesPodcast[] }>(
          `https://itunes.apple.com/search`,
          {
            params: {
              term: text,
              entity: 'podcast',
            },
          },
        )
      ).data?.results;

      const podcasts = itunesResult.map((podcast) => ({
        itunes_id: podcast.collectionId,
        name: podcast.collectionName,
        image_url:
          podcast.artworkUrl600 ||
          podcast.artworkUrl100 ||
          podcast.artworkUrl60 ||
          podcast.artworkUrl30 ||
          '',
        creator: podcast.artistName,
      }));

      await this.prodcastModel
        .insertMany(podcasts, { ordered: false })
        .catch(() => {});

      return podcasts.splice((page - 1) * PAGE_LIMIT, PAGE_LIMIT);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_GATEWAY,
          error: 'Oops!',
        },
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
