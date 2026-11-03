import type { AuthUser } from './auth.guard.js';
export declare const CurrentUser: (...dataOrPipes: (keyof AuthUser | import("@nestjs/common").ParameterDecoratorOptions | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | undefined)[]) => ParameterDecorator;
