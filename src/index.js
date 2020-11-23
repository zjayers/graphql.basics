const { ApolloServer, PubSub } = require("apollo-server");
import { mockData } from "./data/mockData";
import { Mutation, Post, Query, Subscription, User } from "./resolvers";

import typeDefs from "./schema/type-defs.graphql";

const pubSub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
    Post,
    Query,
    Subscription,
    User,
  },
  context: { db: mockData, subscription: pubSub },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server is ready at ${url}`);
});
