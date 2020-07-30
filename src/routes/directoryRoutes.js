import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/molecules/PageLoader/PageLoader';
import lng from 'utils/languageRoute';

const RadioDirectory = lazy(() => import('views/RadioDirectory/RadioDirectory'));

const RadioDirectoryRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route
        exact
        path={`${lng}/radio-directory/station/:id/:station?`}
        component={RadioDirectory}
      />
      <Route
        path={`${lng}/radio-directory/search/:title/:page(\\d+)/:sort(name|listeners)`}
        component={RadioDirectory}
      />
      <Route
        path={`${lng}/radio-directory/:page(\\d+)/:sort(name|listeners)`}
        component={RadioDirectory}
      />
      <Route
        path={`${lng}/radio-directory/search/:title/:sort(name|listeners)`}
        component={RadioDirectory}
      />
      <Route path={`${lng}/radio-directory/search/:title/:page(\\d+)`} component={RadioDirectory} />
      <Route path={`${lng}/radio-directory/:sort(name|listeners)`} component={RadioDirectory} />
      <Route path={`${lng}/radio-directory/search/:title`} component={RadioDirectory} />
      <Route path={`${lng}/radio-directory/:page(\\d+)`} component={RadioDirectory} />
      <Route path={`${lng}/radio-directory`} component={RadioDirectory} />
    </Switch>
  </Suspense>
);

export default RadioDirectoryRoutes;
