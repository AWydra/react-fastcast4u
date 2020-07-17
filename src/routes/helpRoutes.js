import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

const Help = lazy(() => import('views/Help/Help'));
const HelpArticle = lazy(() => import('views/HelpArticle/HelpArticle'));

const HelpRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path="/help/:id(\d+)/:slug?" component={HelpArticle} />
      <Route exact path="/help/:category?" component={Help} />
    </Switch>
  </Suspense>
);

export default HelpRoutes;
