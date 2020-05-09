import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from '../Shared/Utils/api';
import BaseStyles from './BaseStyles';
import NormalizeStyles from './NormalizeStyles';
import Routes from './Routes';

import './fontStyles.css';

const App = () => (
  <ApolloProvider client={client}>
    <NormalizeStyles />
    <BaseStyles />
    <Routes />
  </ApolloProvider>
);

export default App;
