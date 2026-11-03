-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "fingerprint" TEXT;

-- CreateIndex
CREATE INDEX "Device_employeeId_status_fingerprint_idx" ON "Device"("employeeId", "status", "fingerprint");
