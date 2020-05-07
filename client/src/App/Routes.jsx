import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Test from '../Views/Test';

const Routes = () => (
  <BrowserRouter>
    <Route path='/' component={Test} />
  </BrowserRouter>
);

export default Routes;
