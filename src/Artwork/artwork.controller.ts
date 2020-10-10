import { Artwork } from '../entity/Artwork.entity';
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
import {ArtworkService} from './artwork.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import {artworkDto} from './artwork.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Artwork')
@Controller('artwork')
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Get('findAll')
  async getAllPages(): Promise<Artwork[]> {
    return await this.artworkService.getAll();
  }

  @Get('findByArtwork/:id')
  @HttpCode(200)
  async getArtworkById(@Param('id') id:number): Promise<Artwork> {
    return await this.artworkService.getById(id);
  }

  @Post('addArtwork')
  @HttpCode(200)
  async addArtwork(@Body(new ValidationPipe({transform: true})) artwork: artworkDto): Promise<any>{
    return  await this.artworkService.addArtwork(artwork);
  }

  @Delete('deleteArtwork')
  async deleteArtwork(@Res() res,  @Body() artwork: artworkDto): Promise<DeleteResult> {
    return await this.artworkService.deleteArtwork(artwork);
  }

  @Put('updateArtwork')
  async updateArtwork(@Body() artwork: artworkDto): Promise<any>{
    return await this.artworkService.updateArtwork(artwork);
  }
  @Get('getArtworkByCategory/:id')
  @HttpCode(200)
  async getArtworkByCategory(@Param('id') id:number): Promise<any>{
    return await this.artworkService.getArtworkByCategory(id);
  }





}
