import React from 'react';
import { Switch, Route } from 'react-router-dom';

import OrderHome from 'views/Order/OrderHome/OrderHome';
import OrderPackage from 'views/Order/OrderPackage/OrderPackage';
import NotFound from 'views/NotFound/NotFound';

const Order = () => (
  <Switch>
    <Route exact path="/order" component={OrderHome} />
    <Route path="/order/package" component={OrderPackage} />
    <Route component={NotFound} />
  </Switch>
);

export default Order;
