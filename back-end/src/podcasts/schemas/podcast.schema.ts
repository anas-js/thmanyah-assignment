import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PodcastDocument = HydratedDocument<Podcast>;

@Schema({ timestamps: true })
export class Podcast {
  @Prop({ type: Number, required: true, unique: true })
  itunes_id: number;

  @Prop({ type: String, required: true })
  image_url: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  creator: string;
}

export const PodcastSchema = SchemaFactory.createForClass(Podcast);
