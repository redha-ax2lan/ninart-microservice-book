import { Category } from '../entity/Category.entity';
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
import { CategoryService } from './category.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { createCategoryDto } from './create-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('findAll')
  async getAllPages(): Promise<Category[]> {
    return await this.categoryService.getAll();
  }

  @Get('findByCategory/:id')
  @HttpCode(200)
  async getCategoryById(@Param('id') id:number): Promise<Category> {
    return await this.categoryService.getById(id);
  }

  @Post('addCategory')
  @HttpCode(200)
  async addCategory(@Body(new ValidationPipe({transform: true})) categoryDto: createCategoryDto): Promise<any>{
    return  await this.categoryService.addCategory(categoryDto);
  }

  @Delete('deleteCategory')
  async deleteCategory(@Res() res,  @Body() category: createCategoryDto): Promise<DeleteResult> {
    return await this.categoryService.deleteCategory(category);
  }

  @Put('updateCategory')
  async updateCategory(@Body() category: createCategoryDto): Promise<any>{
    return await this.categoryService.updateCategory(category);
  }





}
