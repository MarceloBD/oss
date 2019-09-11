import { Redirect, Route, makeRouteConfig } from 'found';
import React from 'react';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';

export default makeRouteConfig(
  <Route>
    <Route path="/">
      <Route path="/" Component={HomePage} />
      <Route path="login" Component={LoginPage} />
      <Redirect from="*" to="/" />
    </Route>
  </Route>,
);
