import { Comment } from '../entity/Comment.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post, Put,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { CommentService } from './Comment.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import {commentDto} from './comment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comment')
@Controller('Comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('findAll')
  async getAllComment(): Promise<any[]> {
    return await this.commentService.getAll();
  }

  @Get('findByComment/:id')
  @HttpCode(200)
  async getCommentById(@Param('id') id:number): Promise<Comment> {
    return await this.commentService.getById(id);
  }

  @Get('findCommentByBook/:id')
  @HttpCode(200)
  async getCommentByBook(@Param('id') id:number): Promise<Comment>{
    return await this.commentService.getCommentByBookId(id);
  }

  @Post('addComment')
  @HttpCode(200)
  async addComment(@Body(new ValidationPipe({transform: true})) comment: commentDto): Promise<any>{
    return  await this.commentService.addComment(comment);
  }

  @Delete('deleteComment')
  async deleteComment(@Res() res,  @Body() comment: commentDto): Promise<DeleteResult> {
    return await this.commentService.deleteComment(comment);
  }

  @Put('updateComment')
  async updateComment(@Body() comment: commentDto): Promise<any>{
    return await this.commentService.updateComment(comment);
  }



}
