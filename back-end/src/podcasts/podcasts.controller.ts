import { Controller, Get, Query } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { SearchPodcastDto } from './dto/search-prodcast.dto';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly PodcastsService: PodcastsService) {}
  @Get('search')
  search(@Query() query: SearchPodcastDto) {
    return this.PodcastsService.search({
      text: query.text,
      page: query?.page || 1,
    });
  }
}
