import { Book } from '../entity/Book.entity';

export interface WatchlistDto{
  id: number;
  name: string;
  idUser: number;
  bookId : number[];
}
