import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CategoryModule } from './Category/category.module';
import { BookModule } from './Book/book.module';
import { ArtworkModule } from './Artwork/artwork.module';
import { CommentModule } from './Comment/comment.module';
import { WatchlistModule } from './Watchlist/watchlist.module';


@Module({
  imports: [TypeOrmModule.forRoot({
      autoLoadEntities: true
  }), CategoryModule, BookModule, ArtworkModule, CommentModule, WatchlistModule],
  controllers: [],
  providers: []
})
export class AppModule {
  constructor(private connection: Connection) {
  }
}
