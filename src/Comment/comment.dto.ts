import { Book } from '../entity/Book.entity';
import { bookDto } from '../Book/book.dto';
import { RelationIdLoader } from 'typeorm/query-builder/RelationIdLoader';

export interface commentDto{
  id: number;
  libelle: string;
  creationDate: Date;
  idUser: number;
  bookId: number;
}
