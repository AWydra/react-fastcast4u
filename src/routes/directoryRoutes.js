import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

const RadioDirectory = lazy(() => import('views/RadioDirectory/RadioDirectory'));

const Order = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route path="/radio-directory/:page" component={RadioDirectory} />
      <Route exact path="/radio-directory" component={RadioDirectory} />
    </Switch>
  </Suspense>
);

export default Order;
