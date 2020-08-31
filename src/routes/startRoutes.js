import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const MobileApp = lazy(() => import('views/Start/MobileApp/MobileApp'));
const WebPlayer = lazy(() => import('views/Start/WebPlayer/WebPlayer'));

const StartRoutes = () => (
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      <Route path="/start/radio-control-panel">Radio Control Panel</Route>
      <Route path="/start/web-player" component={WebPlayer} />
      <Route path="/start/mobile-app" component={MobileApp} />
      <Route path="/start">Radio Server</Route>
    </Switch>
  </Suspense>
);

export default StartRoutes;
