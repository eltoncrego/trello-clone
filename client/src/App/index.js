import React from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import './fontStyles.css';

import SideBar from './../project/sidebar';

const App = () => (
  <>
    <NormalizeStyles/>
    <BaseStyles/>
    <SideBar/>
  </>
);

export default App;