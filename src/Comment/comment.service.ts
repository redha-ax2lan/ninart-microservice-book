import { Injectable, Inject } from '@nestjs/common';
import { Repository, InsertResult, DeleteResult, UpdateResult } from 'typeorm';
import {Comment} from '../entity/Comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {commentDto} from './comment.dto';
import { Book } from '../entity/Book.entity';

@Injectable()
export class CommentService{
  constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>, @InjectRepository(Book) private bookRepository: Repository<Book>) {
  }

  async getAll(): Promise<any>{
    return this.commentRepository.find();
  }

  async getById(id: number): Promise<Comment>{
    return this.commentRepository.findOne({id: id});
  }


  async addComment(commentdto: commentDto){
    const comment = new Comment();
    comment.libelle = commentdto.libelle;
    comment.creationDate = commentdto.creationDate;
    comment.idUser = commentdto.idUser;
    comment.book = await this.bookRepository.findOne({id: commentdto.bookId});
    return await this.commentRepository.save(comment);
  }

  async deleteComment(comment: commentDto): Promise<DeleteResult> {
    const commentDelete: Comment = await this.commentRepository.findOne({ id: comment.id });
    return await this.commentRepository.delete(commentDelete);
  }

  async updateComment(comment: commentDto): Promise<any> {
    return await this.commentRepository.update(comment.id, comment);
  }

  async getCommentByBookId(idBook : number):Promise<any>{
    const bookSearch = await this.bookRepository.findOne({id: idBook});
    return await this.commentRepository.find({book : bookSearch});
  }



}
