import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageError from '../Shared/Components/PageError/PageError';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={PageError}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;