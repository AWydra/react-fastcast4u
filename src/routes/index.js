import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'views/Home/Home';
import Order from 'views/Order/Order';
import NotFound from 'views/NotFound/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/order" component={Order} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
