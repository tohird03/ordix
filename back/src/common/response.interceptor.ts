import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((body) =>
        body && typeof body === 'object' && 'data' in body
          ? body // sign-in, refresh, profile allaqachon `data` bilan qaytadi
          : { data: body ?? null },
      ),
    );
  }
}
