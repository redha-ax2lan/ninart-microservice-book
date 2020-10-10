import { Book } from '../entity/Book.entity';
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
import { BookService } from './book.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import {bookDto} from './book.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly BookService: BookService) {}

  @Get('findAll')
  async getAllPages(): Promise<Book[]> {
    return await this.BookService.getAll();
  }

  @Get('findByBook/:id')
  @HttpCode(200)
  async getBookById(@Param('id') id:number): Promise<Book> {
    return await this.BookService.getById(id);
  }

  @Post('addBook')
  @HttpCode(200)
  async addBook(@Body(new ValidationPipe({transform: true})) bookDto: bookDto): Promise<any>{
    return  await this.BookService.addBook(bookDto);
  }

  @Delete('deleteBook')
  async deleteBook(@Res() res,  @Body() book: bookDto): Promise<DeleteResult> {
    return await this.BookService.deleteBook(book);
  }

  @Put('updateBook')
  async updateBook(@Body() book: bookDto): Promise<any>{
    return await this.BookService.updateBook(book);
  }

}
