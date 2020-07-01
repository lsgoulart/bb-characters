import React, { lazy } from 'react';
import { Router } from '@reach/router';

import Route from 'components/Route';

const Routes = () => (
  <Router>
    <Route
      path="/"
      component={lazy(() => import('../containers/Characters'))}
    />
    <Route
      path="/personagem/:id"
      component={lazy(() => import('../containers/Details'))}
    />
  </Router>
);

export default Routes;
