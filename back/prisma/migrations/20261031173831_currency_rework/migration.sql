/*
  Warnings:

  - You are about to alter the column `exchangeRate` on the `Currency` table. The data in that column could be lost. The data in that column will be cast from `Decimal(18,4)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Currency" ALTER COLUMN "exchangeRate" SET DATA TYPE INTEGER;
