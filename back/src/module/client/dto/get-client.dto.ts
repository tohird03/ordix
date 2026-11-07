import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class GetClientsDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageNumber: number = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  pageSize: number = 10;

  // ism yoki telefon bo'yicha qidiruv (qisman moslik)
  @IsOptional()
  @IsString()
  description?: string;
}
