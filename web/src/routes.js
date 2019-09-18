import { Redirect, Route, makeRouteConfig } from 'found';
import React from 'react';

import NavbarLayout from './layouts/Navbar/NavbarLayout';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import MaterialsListPage from './pages/Material/MaterialsListPage';

export default makeRouteConfig(
  <Route>
    <Route path="/">
      <Route Component={NavbarLayout}>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/materials" Component={MaterialsListPage} />
        <Redirect from="*" to="/" />
      </Route>
    </Route>
  </Route>,
);
