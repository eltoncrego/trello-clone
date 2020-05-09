const { ApolloServer, gql } = require('apollo-server');
let { lists } = require('./data/testData');

const typeDefs = gql`
  type List {
    title: String
    cards: [Card]
  }

  type Card {
    title: String
    description: String
  }

  type Query {
    lists: [List]
  }

  type Mutation {
    replaceLists(lists: [InputList]!): [List]
  }

  input InputList {
    title: String
    cards: [InputCard]!
  }

  input InputCard {
    title: String
    description: String
  }
`;

const resolvers = {
  Query: {
    lists: () => lists,
  },
  Mutation: {
    replaceLists: (parent, args, context, info) => lists = args.lists
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
