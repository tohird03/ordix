/*
  Warnings:

  - Made the column `costCurrencyId` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `saleCurrencyId` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wholesaleCurrencyId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_costCurrencyId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_saleCurrencyId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_wholesaleCurrencyId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "costExchangeRate" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "saleExchangeRate" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "wholesaleExchangeRate" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "costCurrencyId" SET NOT NULL,
ALTER COLUMN "saleCurrencyId" SET NOT NULL,
ALTER COLUMN "wholesaleCurrencyId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_costCurrencyId_fkey" FOREIGN KEY ("costCurrencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_saleCurrencyId_fkey" FOREIGN KEY ("saleCurrencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_wholesaleCurrencyId_fkey" FOREIGN KEY ("wholesaleCurrencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
