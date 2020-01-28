import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'views/Home';
import NotFound from 'views/NotFound';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default MainRoutes;
