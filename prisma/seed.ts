import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding data...");

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "securepassword",
      mobileNumber: 1234567890,
      image: "https://example.com/images/john.jpg",
      Address: {
        create: {
          city: "New York",
          State: "NY",
          Country: "USA",
          pincode: 10001,
          AdressLin1: "123 Main St",
          AdressLine2: "Apt 4B",
        },
      },
    },
    include: { Address: true },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "anothersecurepassword",
      mobileNumber: 9876543210,
      Address: {
        create: {
          city: "Los Angeles",
          State: "CA",
          Country: "USA",
          pincode: 90001,
          AdressLin1: "456 Elm St",
          AdressLine2: "Suite 10A",
        },
      },
    },
    include: { Address: true },
  });

  // Create Orders
  await prisma.order.createMany({
    data: [
      {
        amount: 1,
        weight: "KG10",
        status: "Pending",
        price: 500,
        UserId: user1.id,
        AddressId: user1.Address?.id!,
      },
      {
        amount: 2,
        weight: "KG25",
        status: "Shipped",
        price: 1000,
        UserId: user2.id,
        AddressId: user2.Address?.id!,
      },
    ],
  });

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
