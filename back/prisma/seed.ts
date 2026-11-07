import 'dotenv/config';
import bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const phone = process.env.SUPERADMIN_LOGIN!.replace(/\D/g, '');
  const password = process.env.SUPERADMIN_PASSWORD!;

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.employee.upsert({
    where: { phone },
    update: {},
    create: {
      fullName: 'Superadmin',
      phone,
      passwordHash,
      isSuperadmin: true,
    },
  });

  await prisma.warehouse.upsert({
    where: {
      id: '7f3a9c21-6d84-4b52-9e17-a2c8f5d03164',
    },
    update: {},
    create: {
      id: '7f3a9c21-6d84-4b52-9e17-a2c8f5d03164',
      name: 'Asosiy ombor',
      isMain: true,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
