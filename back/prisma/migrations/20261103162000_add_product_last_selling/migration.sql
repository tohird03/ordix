/*
  Warnings:

  - You are about to drop the column `lastSoldAt` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "lastSoldAt",
ADD COLUMN     "lastSellingCount" DECIMAL(18,3),
ADD COLUMN     "lastSellingDate" TIMESTAMP(3),
ADD COLUMN     "lastSellingPrice" DECIMAL(18,2);
