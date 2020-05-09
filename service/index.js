const { ApolloServer, gql } = require('apollo-server');
const { lists } = require('./data/testData');

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
`;

const resolvers = {
  Query: {
    lists: () => lists
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
