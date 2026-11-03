/*
  Warnings:

  - You are about to drop the column `costExchangeRate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `saleExchangeRate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `wholesaleExchangeRate` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "costExchangeRate",
DROP COLUMN "saleExchangeRate",
DROP COLUMN "wholesaleExchangeRate";
