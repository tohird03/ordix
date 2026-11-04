import {
  Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query,
  UploadedFile, UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PaginationQueryDto } from '../../common/dto/pagination.dto.js';
import { ProductImageInterceptor } from './functions/product-image.interceptor.js';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('many')
  findAll(@Query() q: PaginationQueryDto) {
    return this.productService.findAll(q);
  }

  @Post('one')
  @UseInterceptors(ProductImageInterceptor)
  create(@Body() dto: CreateProductDto, @UploadedFile() image?: Express.Multer.File) {
    return this.productService.create(dto, image);
  }

  @Patch('one')
  @UseInterceptors(ProductImageInterceptor)
  update(@Body() dto: UpdateProductDto, @UploadedFile() image?: Express.Multer.File) {
    return this.productService.update(dto, image);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productService.remove(id);
  }
}
