import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

// Frontend FormData yuboradi (rasm bor), shuning uchun hamma qiymat string keladi.
// @Type(() => Number) ularni songa aylantiradi.
export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsUUID()
  warehouseId: string;

  @Type(() => Number) @IsNumber() @Min(0)
  count: number;

  @Type(() => Number) @IsNumber() @Min(0)
  minAmount: number;

  @Type(() => Number) @IsNumber() @Min(0)
  prices_cost_price: number;

  @IsOptional() @IsUUID()
  prices_cost_currencyId?: string;

  @Type(() => Number) @IsNumber() @Min(0)
  prices_selling_price: number;

  @IsOptional() @IsUUID()
  prices_selling_currencyId?: string;

  @Type(() => Number) @IsNumber() @Min(0)
  prices_wholesale_price: number;

  @IsOptional() @IsUUID()
  prices_wholesale_currencyId?: string;
}
