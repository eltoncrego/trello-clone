import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

export const GET_ALL_LIST_DATA = gql`
  {
    lists {
      title
      cards {
        title
        description
      }
    }
  }
`;
