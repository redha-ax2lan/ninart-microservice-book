import { Injectable, Inject } from '@nestjs/common';
import { Repository, InsertResult, DeleteResult, UpdateResult } from 'typeorm';
import {Artwork} from '../entity/Artwork.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {artworkDto} from './artwork.dto';
import { Category } from '../entity/Category.entity';

@Injectable()
export class ArtworkService{
  constructor(@InjectRepository(Artwork) private ArtworkRepository: Repository<Artwork>, @InjectRepository(Category) private CategoryRepository: Repository<Category>) {
  }

  async getAll(): Promise<Artwork[]>{
    return this.ArtworkRepository.find({relations : ['category']});
  }

  async getById(id: number): Promise<Artwork>{
    return this.ArtworkRepository.findOne({id: id});
  }


  async addArtwork(atwDto: artworkDto){
    const artwork = new Artwork();
    artwork.title = atwDto.title;
    artwork.description = atwDto.description;
    artwork.isActive = atwDto.isActive;
    artwork.creationDate = atwDto.creationDate;
    artwork.updateDate = atwDto.updateDate;
    artwork.promotion = atwDto.promotion;
    artwork.category = [];
    for(let i = 0; i<atwDto.categoryId.length;i++){
      const cate = await this.CategoryRepository.findOne({where : {id: atwDto.categoryId[i]}});
      artwork.category.push(cate)
    }
    return await this.ArtworkRepository.save(artwork);
  }

  async deleteArtwork(atwDto: artworkDto): Promise<DeleteResult> {
    const artworkDelete: Artwork = await this.ArtworkRepository.findOne({ id: atwDto.id });
    return await this.ArtworkRepository.delete(artworkDelete);
  }

  async updateArtwork(atwDto: artworkDto): Promise<any> {
    return await this.ArtworkRepository.update(atwDto.id, atwDto);
  }

  async getArtworkByCategory(id: number): Promise<any>{
    return await this.CategoryRepository.find({where : {id : id, relations: ['artwork']}});
  }



}
