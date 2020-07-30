import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/molecules/PageLoader/PageLoader';
import lng from 'utils/languageRoute';

const Help = lazy(() => import('views/Help/Help'));
const HelpArticle = lazy(() => import('views/HelpArticle/HelpArticle'));

const HelpRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path={`${lng}/help/:id(\\d+)/:slug?`} component={HelpArticle} />
      <Route exact path={`${lng}/help/:category?`} component={Help} />
    </Switch>
  </Suspense>
);

export default HelpRoutes;
