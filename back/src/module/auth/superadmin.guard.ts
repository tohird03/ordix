import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import type { AuthRequest } from './auth.guard.js';

@Injectable()
export class SuperadminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<AuthRequest>();
    if (!req.user?.isSuperadmin) {
      throw new ForbiddenException("Faqat superadmin uchun");
    }
    return true;
  }
}
