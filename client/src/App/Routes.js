import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PageError from '../Views/PageError/PageError';
import Login from '../Views/Login/Login';
import { UserProvider, userObject } from './../Shared/Utils/UserContext';
import Home from '../Views/Home/Home';

const Routes = () => (
  <UserProvider value={userObject}>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route component={PageError}/>
      </Switch>
    </BrowserRouter>
  </UserProvider>
);

export default Routes;