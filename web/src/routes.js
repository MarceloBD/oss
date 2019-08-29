import { Redirect, Route, makeRouteConfig } from 'found';
import React from 'react';

export default makeRouteConfig(
  <Route>
    <Route path="/" Component={() => <div>Teste</div>} />
    <Redirect from="*" to="/" />
  </Route>,
);
