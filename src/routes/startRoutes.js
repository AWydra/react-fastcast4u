import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const MobileApp = lazy(() => import('views/Start/MobileApp/MobileApp'));

const StartRoutes = () => (
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      <Route path="/start/radio-control-panel">Radio Control Panel</Route>
      <Route path="/start/web-player">Web Player</Route>
      <Route path="/start/mobile-app" component={MobileApp} />
      <Route path="/start/alexa-skill">Alexa Skill</Route>
      <Route path="/start">Radio Server</Route>
    </Switch>
  </Suspense>
);

export default StartRoutes;
