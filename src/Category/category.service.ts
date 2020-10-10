import { Injectable, Inject } from '@nestjs/common';
import { Repository, InsertResult, DeleteResult, UpdateResult } from 'typeorm';
import {Category} from '../entity/Category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createCategoryDto } from './create-category.dto';

@Injectable()
export class CategoryService{
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {
  }

  async getAll(): Promise<Category[]>{
    return this.categoryRepository.find();
  }

  async getById(id: number): Promise<Category>{
    return this.categoryRepository.findOne({id: id});
  }


  async addCategory(nameCate: createCategoryDto){
    return await this.categoryRepository.save(nameCate);
  }

  async deleteCategory(category: createCategoryDto): Promise<DeleteResult> {
    const categoryDelete: Category = await this.categoryRepository.findOne({ id: category.id });
    return await this.categoryRepository.delete(categoryDelete);
  }

  async updateCategory(category: createCategoryDto): Promise<any> {
    return await this.categoryRepository.update(category.id, category);
  }



}
