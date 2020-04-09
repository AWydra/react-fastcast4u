import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/molecules/PageLoader/PageLoader';
import OrderRoutes from 'routes/orderRoutes';

const Home = lazy(() => import('views/Home/Home'));
const RadioDirectory = lazy(() => import('views/RadioDirectory/RadioDirectory'));
const NotFound = lazy(() => import('views/NotFound/NotFound'));

const Routes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/order" component={OrderRoutes} />
      <Route path="/radio-directory" component={RadioDirectory} />
      <Route path="/test" component={PageLoader} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
