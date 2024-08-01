import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const mert = await prisma.user.upsert({
    where: { email: "mert@gmail.com" },
    update: {},
    create: {
      email: "mert@gmail.com",
      name: "Mert KISACIK",
      image: "https://github.com/shadcn.png",
    },
  });
  const enes = await prisma.user.upsert({
    where: { email: "enes@gmail.com" },
    update: {},
    create: {
      email: "enes@gmail.com",
      name: "Enes ÇETİN",
      image: "https://github.com/shadcn.png",
    },
  });
  const mertUsers = await prisma.users.upsert({
    where: { email: "mert@gmail.com" },
    update: {},
    create: {
      email: "mert@gmail.com",
      name: "Mert KISACIK",
      image: "https://github.com/shadcn.png",
    },
  });
  const enesUsers = await prisma.users.upsert({
    where: { email: "enes@gmail.com" },
    update: {},
    create: {
      email: "enes@gmail.com",
      name: "Enes ÇETİN",
      image: "https://github.com/shadcn.png",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
