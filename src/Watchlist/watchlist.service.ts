import { Injectable, Inject } from '@nestjs/common';
import { Repository, InsertResult, DeleteResult, UpdateResult } from 'typeorm';
import {Watchlist} from '../entity/Watchlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { WatchlistDto } from './Watchlist.dto';
import { Book } from '../entity/Book.entity';

@Injectable()
export class WatchlistService{
  constructor(@InjectRepository(Watchlist) private WatchlistRepository: Repository<Watchlist>, @InjectRepository(Book) private bookRepository: Repository<Book>) {
  }

  async getAll(): Promise<Watchlist[]>{
    return this.WatchlistRepository.find({relations: ['book']});
  }

  async getById(id: number): Promise<Watchlist>{
    return this.WatchlistRepository.findOne({id: id});
  }

  async addWatchlist(watchlistdto: WatchlistDto){
    const watchlist = new Watchlist();
    watchlist.name = watchlistdto.name;
    watchlist.idUser = watchlistdto.idUser;
    watchlist.book = [];
    for(let i = 0; i<watchlistdto.bookId.length; i++){
        const book = await this.bookRepository.findOne({id: watchlistdto.bookId[i]});
        watchlist.book.push(book);
    }
    return await this.WatchlistRepository.save(watchlist);
  }

  async deleteWatchlist(watchlistdto: WatchlistDto): Promise<DeleteResult> {
    const WatchlistDelete: Watchlist = await this.WatchlistRepository.findOne({ id: watchlistdto.id });
    return await this.WatchlistRepository.delete(WatchlistDelete);
  }

  async updateWatchlist(watchlistdto: WatchlistDto): Promise<any> {
    return await this.WatchlistRepository.update(watchlistdto.id, watchlistdto);
  }

  async getWatchlistByUser(id: number): Promise<any>{
    return await this.WatchlistRepository.find({idUser: id});
  }



}
