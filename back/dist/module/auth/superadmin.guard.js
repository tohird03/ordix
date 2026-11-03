var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ForbiddenException, Injectable, } from '@nestjs/common';
let SuperadminGuard = class SuperadminGuard {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        if (!req.user?.isSuperadmin) {
            throw new ForbiddenException("Faqat superadmin uchun");
        }
        return true;
    }
};
SuperadminGuard = __decorate([
    Injectable()
], SuperadminGuard);
export { SuperadminGuard };
//# sourceMappingURL=superadmin.guard.js.map