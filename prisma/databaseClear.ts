const tableNames = ['users', 'session', 'electors', 'candidate'];

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  for (const tableName of tableNames)
    await prisma.$queryRawUnsafe(`DROP DATABASE IF EXISTS ${tableName};`);
}

main().finally(async () => {
  await prisma.$queryRawUnsafe('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await prisma.$disconnect();
});
