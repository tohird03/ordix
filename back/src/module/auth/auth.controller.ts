import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import type { Request } from 'express';
import { AuthService } from './auth.service.js';
import { DeviceLoginDto, LoginDto, RefreshDto } from './dto/login.dto.js';
import { AuthGuard, type AuthUser } from './auth.guard.js';
import { CurrentUser } from './current-user.decorated.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-in')
  login(@Body() dto: LoginDto, @Req() req: Request) {
    return this.authService.login(dto, {
      userAgent: req.headers['user-agent'],
      ip: req.ip,
    });
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  profile(@CurrentUser() user: AuthUser) {
    return this.authService.profile(user.id);
  }

  @Post('refresh')
  refresh(@Body() dto: RefreshDto) {
    return this.authService.refresh(dto.refreshToken);
  }

  @Post('device-login')
  deviceLogin(@Body() dto: DeviceLoginDto) {
    return this.authService.deviceLogin(dto.deviceToken);
  }
}
