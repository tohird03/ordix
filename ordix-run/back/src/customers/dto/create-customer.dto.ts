import { Transform, Type } from 'class-transformer';
import {
  IsInt, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, IsString, Matches, Max, MaxLength, Min,
} from 'class-validator';
import { normalizePhone } from '../phone.util.js';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty({ message: 'Ismni kiriting' })
  @MaxLength(150)
  name!: string;

  @Transform(({ value }) => (typeof value === 'string' ? (normalizePhone(value) ?? value) : value))
  @Matches(/^\+998\d{9}$/, { message: "Telefon raqami noto'g'ri (masalan, +998 90 123 45 67)" })
  phone!: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  address?: string;

  // Xaritadan tanlangan joy (ikkalasi birga yuboriladi)
  @IsOptional()
  @Type(() => Number)
  @IsLatitude()
  lat?: number;

  @IsOptional()
  @Type(() => Number)
  @IsLongitude()
  lng?: number;

  // Boshlang'ich qarz (so'mda). Keyin qarzni sotuv va to'lov hujjatlari o'zgartiradi
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(Number.MAX_SAFE_INTEGER)
  debt?: number;
}
