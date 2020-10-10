import { Watchlist } from '../entity/Watchlist.entity';
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
import { WatchlistService } from './Watchlist.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import {WatchlistDto} from './Watchlist.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Watchlist')
@Controller('Watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Get('findAll')
  async getAllPages(): Promise<Watchlist[]> {
    return await this.watchlistService.getAll();
  }

  @Get('findByWatchlist/:id')
  @HttpCode(200)
  async getWatchlistById(@Param('id') id:number): Promise<Watchlist> {
    return await this.watchlistService.getById(id);
  }

  @Post('addWatchlist')
  @HttpCode(200)
  async addWatchlist(@Body(new ValidationPipe({transform: true})) watchlistDto: WatchlistDto): Promise<any>{
    return  await this.watchlistService.addWatchlist(watchlistDto);
  }

  @Delete('deleteWatchlist')
  async deleteWatchlist(@Res() res,  @Body() watchlistDto: WatchlistDto): Promise<DeleteResult> {
    return await this.watchlistService.deleteWatchlist(watchlistDto);
  }

  @Put('updateWatchlist')
  async updateWatchlist(@Body() watchlistDto: WatchlistDto): Promise<any>{
    return await this.watchlistService.updateWatchlist(watchlistDto);
  }

  @Get('getWatchlistByUser/:id')
  async getWatchlistByUser(@Param('id') id:number): Promise<any>{
    return await this.watchlistService.getWatchlistByUser(id);
  }



}
