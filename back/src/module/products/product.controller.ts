import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'node:path';
import { randomUUID } from 'node:crypto';
import { AuthGuard } from '../auth/auth.guard.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { ListProductsDto } from './dto/get-products.dto.js';
import { ProductsService } from './product.service.js';

const imageUpload = FileInterceptor('image', {
  storage: diskStorage({
    destination: './uploads/products',
    filename: (_req, file, cb) => cb(null, `${randomUUID()}${extname(file.originalname)}`),
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => cb(null, /^image\//.test(file.mimetype)),
});

const toUrl = (file?: Express.Multer.File) =>
  file ? `/uploads/products/${file.filename}` : undefined;

@UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  @Get()
  list(@Query() query: ListProductsDto) {
    return this.products.list(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.products.findOne(id);
  }

  @Post()
  @UseInterceptors(imageUpload)
  create(@Body() dto: CreateProductDto, @UploadedFile() file?: Express.Multer.File) {
    return this.products.create(dto, toUrl(file));
  }

  @Patch(':id')
  @UseInterceptors(imageUpload)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProductDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.products.update(id, dto, toUrl(file));
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.products.remove(id);
  }
}
