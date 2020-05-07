import React, { Fragment } from 'react';

import BaseStyles from './BaseStyles';
import NormalizeStyles from './NormalizeStyles';

import './fontStyles.css';

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <h1>hello there</h1>
  </Fragment>
);

export default App;
