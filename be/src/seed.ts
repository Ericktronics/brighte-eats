import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.lead.deleteMany({});

  // Sample leads data
  const leads = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "0400123456",
      postcode: "2000",
      services: ["Solar", "Battery"],
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "0400789012",
      postcode: "2010",
      services: ["Solar"],
    },
    {
      name: "Bob Wilson",
      email: "bob.wilson@example.com",
      mobile: "0400345678",
      postcode: "2020",
      services: ["Battery", "EV Charger"],
    },
    {
      name: "Henrick Peralta",
      email: "johnhenrickperalta@gmail.com",
      mobile: "1234567890",
      postcode: "4024",
      services: ["IT Services", "Badminton Coaching"], 
    },
  ];

  for (const lead of leads) {
    await prisma.lead.create({
      data: lead,
    });
  }

  console.log("Seed data inserted successfully");
}

main()
  .then(() => {})
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
