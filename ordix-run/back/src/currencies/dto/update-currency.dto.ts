import { Transform, Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, Min } from 'class-validator';

const toUpper = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim().toUpperCase() : value;

export class UpdateCurrencyDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @Transform(toUpper)
  @Matches(/^[A-Z]{2,10}$/, {
    message: "symbol faqat lotin harflaridan iborat bo'lishi kerak (masalan, USD)",
  })
  symbol?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  exchangeRate?: number;
}
