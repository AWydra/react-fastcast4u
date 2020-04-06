import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

const OrderHome = lazy(() => import('views/Order/OrderHome/OrderHome'));
const OrderPackage = lazy(() => import('views/Order/OrderPackage/OrderPackage'));
const OrderLogin = lazy(() => import('views/Order/OrderLogin/OrderLogin'));
const OrderPayment = lazy(() => import('views/Order/OrderPayment/OrderPayment'));
const OrderDetails = lazy(() => import('views/Order/OrderDetails/OrderDetails'));
const OrderPending = lazy(() => import('views/Order/OrderPending/OrderPending'));
const NotFound = lazy(() => import('views/NotFound/NotFound'));

const Order = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path="/order" component={OrderHome} />
      <Route path="/order/package" component={OrderPackage} />
      <Route path="/order/login" component={OrderLogin} />
      <Route path="/order/payment" component={OrderPayment} />
      <Route path="/order/details" component={OrderDetails} />
      <Route path="/order/pending" component={OrderPending} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Order;
