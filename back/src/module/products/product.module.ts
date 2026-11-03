import { Module } from '@nestjs/common';
import { ProductsService } from './product.service.js';
import { ProductsController } from './product.controller.js';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductModule {}
