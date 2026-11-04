import { Transform, Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString, IsUUID, Length, MaxLength, Min } from 'class-validator';

export class CreateProductDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(1, 200)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  count!: number;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  minAmount!: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  prices_cost_price!: number;

  @IsUUID()
  prices_cost_currencyId!: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  prices_selling_price!: number;

  @IsUUID()
  prices_selling_currencyId!: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  prices_wholesale_price!: number;

  @IsUUID()
  prices_wholesale_currencyId!: string;
}
