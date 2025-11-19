import { Module } from '@nestjs/common';
import { PodcastsController } from './podcasts.controller';
import { PodcastsService } from './podcasts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Podcast, PodcastSchema } from './schemas/podcast.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Podcast.name, schema: PodcastSchema }]),
  ],
  controllers: [PodcastsController],
  providers: [PodcastsService],
})
export class PodcastsModule {}
