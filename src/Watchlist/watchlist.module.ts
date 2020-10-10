import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Watchlist } from '../entity/Watchlist.entity';
import { WatchlistService } from './Watchlist.service';
import { WatchlistController } from './Watchlist.controller';
import { Book } from '../entity/Book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Watchlist, Book])],
  providers: [WatchlistService],
  controllers: [WatchlistController]
})
export class WatchlistModule {}
