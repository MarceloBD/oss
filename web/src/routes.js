import { Redirect, Route, makeRouteConfig } from 'found';
import React from 'react';

export default makeRouteConfig(
  <Route>
    <Redirect from="*" to="/" />
  </Route>,
);
