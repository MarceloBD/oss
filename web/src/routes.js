import { Redirect, Route, makeRouteConfig } from 'found';
import React from 'react';
import HomePage from './pages/Home/HomePage';

export default makeRouteConfig(
  <Route>
    <Route path="/" Component={HomePage} />
    <Redirect from="*" to="/" />
  </Route>,
);
