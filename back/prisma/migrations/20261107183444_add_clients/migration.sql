-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "lastSellingDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientDebt" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "currencyId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ClientDebt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_phone_key" ON "Client"("phone");

-- CreateIndex
CREATE INDEX "Client_fullname_idx" ON "Client"("fullname");

-- CreateIndex
CREATE INDEX "ClientDebt_currencyId_idx" ON "ClientDebt"("currencyId");

-- CreateIndex
CREATE UNIQUE INDEX "ClientDebt_clientId_currencyId_key" ON "ClientDebt"("clientId", "currencyId");

-- AddForeignKey
ALTER TABLE "ClientDebt" ADD CONSTRAINT "ClientDebt_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientDebt" ADD CONSTRAINT "ClientDebt_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
