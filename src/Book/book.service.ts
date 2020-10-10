import { Injectable, Inject } from '@nestjs/common';
import { Repository, InsertResult, DeleteResult, UpdateResult } from 'typeorm';
import {Book} from '../entity/Book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {bookDto} from './book.dto';
import { Artwork } from '../entity/Artwork.entity';
import { Comment } from '../entity/Comment.entity';
import { Category } from '../entity/Category.entity';

@Injectable()
export class BookService{
  constructor(@InjectRepository(Book) private BookRepository: Repository<Book>, @InjectRepository(Artwork) private ArtworkRepository: Repository<Artwork>, @InjectRepository(Comment) private commentRepository: Repository<Comment>, @InjectRepository(Category) private categoryRepository: Repository<Category>) {
  }

  async getAll(): Promise<Book[]>{
    return await this.BookRepository.find({relations : ['artwork']});
  }

  async getById(id: number): Promise<Book>{
    return this.BookRepository.findOne({id: id});
  }


  async addBook(bookdto: bookDto){
    const book = new Book();
    book.name = bookdto.name;
    book.number = bookdto.number;
    book.description = bookdto.description;
    book.artwork = await this.ArtworkRepository.findOne({id: bookdto.artworkId});
    return await this.BookRepository.save(book);
  }

  async deleteBook(book: bookDto): Promise<DeleteResult> {
    const BookDelete: Book = await this.BookRepository.findOne({ id: book.id });
    return await this.BookRepository.delete(BookDelete);
  }

  async updateBook(book: bookDto): Promise<any> {
    return await this.BookRepository.update(book.id, book);
  }

}
