import { IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto.js';

export class ListProductsDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  search?: string;
}
