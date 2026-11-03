/*
  Warnings:

  - You are about to drop the column `permissions` on the `Employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "permissions",
ADD COLUMN     "pages" TEXT[] DEFAULT ARRAY[]::TEXT[];
