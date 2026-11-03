import { Transform, Type } from 'class-transformer';
import {
  IsLatitude, IsLongitude, IsNotEmpty, IsOptional, IsString, Matches, MaxLength,
} from 'class-validator';
import { normalizePhone } from '../phone.util.js';

// Qarz va oxirgi sotuv bu yerdan o'zgartirilmaydi, ularni sotuv va to'lov hujjatlari boshqaradi.
// address, lat, lng ni null yuborib tozalash mumkin.
export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Ismni kiriting' })
  @MaxLength(150)
  name?: string;

  @IsOptional()
  @Transform(({ value }) => (typeof value === 'string' ? (normalizePhone(value) ?? value) : value))
  @Matches(/^\+998\d{9}$/, { message: "Telefon raqami noto'g'ri (masalan, +998 90 123 45 67)" })
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  address?: string | null;

  @IsOptional()
  @Type(() => Number)
  @IsLatitude()
  lat?: number | null;

  @IsOptional()
  @Type(() => Number)
  @IsLongitude()
  lng?: number | null;
}
