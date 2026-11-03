import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller.js';
import { AuthGuard } from './auth.guard.js';
import { AuthService } from './auth.service.js';
import { SuperadminGuard } from './superadmin.guard.js';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: 60 * 60 * 12 },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, SuperadminGuard],
  exports: [AuthGuard, SuperadminGuard, JwtModule],
})
export class AuthModule {}
