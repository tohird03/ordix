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

  console.log(`Superadmin tayyor: ${phone}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
