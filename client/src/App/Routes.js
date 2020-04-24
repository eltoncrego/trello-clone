import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PageError from '../Views/PageError/PageError';
import Login from '../Views/Login/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path='/login' component={Login}/>
      <Route component={PageError}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;