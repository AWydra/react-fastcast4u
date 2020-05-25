import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import OrderRoutes from 'routes/orderRoutes';
import DirectoryRoutes from 'routes/directoryRoutes';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

const Home = lazy(() => import('views/Home/Home'));
const Contact = lazy(() => import('views/Contact/Contact'));
const Privacy = lazy(() => import('views/Privacy/Privacy'));
const NotFound = lazy(() => import('views/NotFound/NotFound'));

const Routes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/order" component={OrderRoutes} />
      <Route path="/radio-directory" component={DirectoryRoutes} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
