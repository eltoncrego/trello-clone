import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql } from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({
    addTypename: false,
  }),
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

export const REPLACE_ALL_LISTS = gql`
  mutation ReplaceAllLists($lists: [InputList]!) {
    replaceLists(lists: $lists) {
      title
    }
  }
`;
