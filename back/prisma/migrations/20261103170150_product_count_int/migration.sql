/*
  Warnings:

  - You are about to alter the column `count` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(18,3)` to `Integer`.
  - You are about to alter the column `minAmount` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(18,3)` to `Integer`.
  - You are about to alter the column `lastSellingCount` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(18,3)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "count" SET DEFAULT 0,
ALTER COLUMN "count" SET DATA TYPE INTEGER,
ALTER COLUMN "minAmount" SET DEFAULT 0,
ALTER COLUMN "minAmount" SET DATA TYPE INTEGER,
ALTER COLUMN "lastSellingCount" SET DATA TYPE INTEGER;
