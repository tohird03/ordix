/*
  Warnings:

  - The values [REVOKED] on the enum `DeviceStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DeviceStatus_new" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'BLOCK');
ALTER TABLE "public"."Device" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Device" ALTER COLUMN "status" TYPE "DeviceStatus_new" USING ("status"::text::"DeviceStatus_new");
ALTER TYPE "DeviceStatus" RENAME TO "DeviceStatus_old";
ALTER TYPE "DeviceStatus_new" RENAME TO "DeviceStatus";
DROP TYPE "public"."DeviceStatus_old";
ALTER TABLE "Device" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;
