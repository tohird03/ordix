import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
export declare class ResponseInterceptor implements NestInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler): import("rxjs").Observable<any>;
}
