import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Ali", email: "ali@test.com", password: "123456" },
      { name: "Reza", email: "reza@test.com", password: "123456" },
      { name: "Sara", email: "sara@test.com", password: "123456" },
      { name: "Mina", email: "mina@test.com", password: "123456" },
      { name: "Amir", email: "amir@test.com", password: "123456" },
    ],
  });

  console.log("Seed done");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());