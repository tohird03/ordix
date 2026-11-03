/*
  Warnings:

  - You are about to drop the column `code` on the `Currency` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[symbol]` on the table `Currency` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exchangeRate` to the `Currency` table without a default value. This is not possible if the table is not empty.
  - Made the column `symbol` on table `Currency` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Currency_code_key";

-- AlterTable
ALTER TABLE "Currency" DROP COLUMN "code",
ADD COLUMN     "exchangeRate" DECIMAL(18,4) NOT NULL,
ALTER COLUMN "symbol" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Currency_symbol_key" ON "Currency"("symbol");
