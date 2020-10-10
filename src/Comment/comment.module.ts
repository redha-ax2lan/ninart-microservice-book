import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment } from '../entity/Comment.entity';
import { Book } from '../entity/Book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Book])],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
