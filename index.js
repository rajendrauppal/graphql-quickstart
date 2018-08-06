#!/usr/bin/env node

'use strict';

const { ApolloServer, gql } = require('apollo-server');

//Our data
const menu = [
  {
    item: 'Pizza',
    price: '100',
  },
  {
    item: 'Lasagna',
    price: '150',
  },
];

//Building schema in GraphQL
const typeDefs = gql`
  type Menu {
    item: String
    price: String
  }

  type Query {
    menu: [Menu]
  }
`;

const resolvers = {
  Query: {
    menu: () => menu,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

