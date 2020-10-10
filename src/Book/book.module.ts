import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../entity/Book.entity';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Artwork } from '../entity/Artwork.entity';
import { Comment } from '../entity/Comment.entity';
import { Category } from '../entity/Category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Artwork, Comment, Category])],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
