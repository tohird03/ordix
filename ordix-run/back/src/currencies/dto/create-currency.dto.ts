import { Transform, Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Matches, MaxLength, Min } from 'class-validator';

const toUpper = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim().toUpperCase() : value;

export class CreateCurrencyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  // Valyuta kodi: USD, EUR, ...
  @Transform(toUpper)
  @Matches(/^[A-Z]{2,10}$/, {
    message: "symbol faqat lotin harflaridan iborat bo'lishi kerak (masalan, USD)",
  })
  symbol!: string;

  // 1 birlik necha so'm (butun son)
  @Type(() => Number)
  @IsInt()
  @Min(1)
  exchangeRate!: number;
}
