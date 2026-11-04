import { BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
export const IMAGE_TYPES = {
    'image/png': '.png',
    'image/jpeg': '.jpg',
    'image/webp': '.webp',
    'image/gif': '.gif',
};
export const ProductImageInterceptor = FileInterceptor('image', {
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        if (!IMAGE_TYPES[file.mimetype]) {
            return cb(new BadRequestException('Faqat PNG, JPG, WEBP yoki GIF rasm yuklash mumkin'), false);
        }
        cb(null, true);
    },
});
//# sourceMappingURL=product-image.interceptor.js.map