import React from 'react';
import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import './fontStyles.css';
import SideBar from './../project/sidebar';
import Board from './../project/board';

const App = () => (
  <>
    <NormalizeStyles/>
    <BaseStyles/>
    <SideBar/>
    <Board/>
  </>
);

export default App;