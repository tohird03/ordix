import { IsUUID } from 'class-validator';
import { CreateProductDto } from './create-product.dto.js';

export class UpdateProductDto extends CreateProductDto {
  @IsUUID()
  id!: string;
}
