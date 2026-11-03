import { BadRequestException } from '@nestjs/common';

export function normalizePhone(input: string): string {
  let digits = input.replace(/\D/g, '');
  if (digits.length === 9) digits = '998' + digits;
  if (!/^998\d{9}$/.test(digits)) {
    throw new BadRequestException("Telefon raqam noto'g'ri");
  }
  return digits;
}
