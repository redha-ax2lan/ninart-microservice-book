import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artwork } from '../entity/Artwork.entity';
import { ArtworkService } from './artwork.service';
import { ArtworkController } from './artwork.controller';
import { Category } from '../entity/Category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artwork, Category])],
  providers: [ArtworkService],
  controllers: [ArtworkController]
})
export class ArtworkModule {}
