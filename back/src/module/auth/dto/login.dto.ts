import { IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  phone!: string;

  @IsString()
  @MinLength(8)
  password!: string;

  @IsOptional()
  @IsString()
  deviceToken?: string;
}

export class RefreshDto {
  @IsString()
  refreshToken!: string;
}

export class DeviceLoginDto {
  @IsString()
  deviceToken!: string;
}
