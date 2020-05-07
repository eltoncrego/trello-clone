import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Board from '../Views/Board';

const Routes = () => (
  <BrowserRouter>
    <Route path='/' component={Board} />
  </BrowserRouter>
);

export default Routes;
