import { ApolloServer } from 'apollo-server';
import { readFileSync } from 'fs';
import path from 'path';
import { resolvers } from './resolvers/lead.resolver';

const typeDefs = readFileSync(path.join(__dirname, 'schema/schema.graphql'), 'utf8');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
// This code sets up an Apollo Server with GraphQL schema and resolvers for handling lead data.
// It reads the schema from a file and uses resolvers defined in a separate module.