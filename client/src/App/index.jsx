import React, { Fragment } from 'react';

import BaseStyles from './BaseStyles';
import NormalizeStyles from './NormalizeStyles';
import Routes from './Routes';

import './fontStyles.css';

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <Routes />
  </Fragment>
);

export default App;
