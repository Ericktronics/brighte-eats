import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    leads: () => prisma.lead.findMany(),
    lead: (_: any, args: { id: number }) => prisma.lead.findUnique({ where: { id: args.id } }),
  },
  Mutation: {
    register: (_: any, args: any) => prisma.lead.create({ data: args }),
  },
};
// This code defines GraphQL resolvers for querying and mutating lead data using Prisma ORM.
// It includes queries to fetch all leads or a specific lead by ID, and a mutation to register a new lead.