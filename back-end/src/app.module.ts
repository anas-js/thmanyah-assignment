import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PodcastsModule } from './podcasts/podcasts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PodcastsModule,
    MongooseModule.forRoot('mongodb://localhost/thmanyah'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
