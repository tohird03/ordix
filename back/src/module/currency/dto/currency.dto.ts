import { IsInt, IsOptional, IsPositive, IsString, IsUUID, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCurrencyDto {
  @IsString()
  @Length(1, 50)
  name!: string;

  @Transform(({ value }) => (typeof value === 'string' ? value.trim().toUpperCase() : value))
  @IsString()
  @Length(2, 5)
  symbol!: string;

  @IsInt()
  @IsPositive()
  exchangeRate!: number;
}

export class UpdateCurrencyDto {
  @IsUUID()
  id!: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  name?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  exchangeRate?: number;
}
