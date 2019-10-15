import { Redirect, Route, makeRouteConfig } from 'found';
import React from 'react';

import NavbarLayout from './layouts/Navbar/NavbarLayout';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import MaterialPage from './pages/Material/MaterialPage';
import MaterialsListPage from './pages/Material/MaterialsListPage';
import CreateMaterialPage from './pages/Material/CreateMaterialPage';

export default makeRouteConfig(
  <Route>
    <Route path="/">
      <Route Component={NavbarLayout}>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/materials/:materialType" Component={MaterialsListPage} />
        <Route path="/material/:materialId" Component={MaterialPage} />
        <Route path="/create" Component={CreateMaterialPage} />
        <Redirect from="*" to="/" />
      </Route>
    </Route>
  </Route>,
);
