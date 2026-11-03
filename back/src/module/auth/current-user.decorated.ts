import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { AuthRequest, AuthUser } from './auth.guard.js';

export const CurrentUser = createParamDecorator(
  (field: keyof AuthUser | undefined, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest<AuthRequest>().user;
    return field ? user[field] : user;
  },
);
