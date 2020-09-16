import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const ControlPanel = lazy(() => import('views/Start/ControlPanel/ControlPanel'));
const AlexaSkill = lazy(() => import('views/Start/AlexaSkill/AlexaSkill'));
const MobileApp = lazy(() => import('views/Start/MobileApp/MobileApp'));
const WebPlayer = lazy(() => import('views/Start/WebPlayer/WebPlayer'));
const More = lazy(() => import('views/Start/More/More'));

const StartRoutes = () => (
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      <Route path="/start/control-panel" component={ControlPanel} />
      <Route path="/start/web-player" component={WebPlayer} />
      <Route path="/start/mobile-app" component={MobileApp} />
      <Route path="/start/alexa-skill" component={AlexaSkill} />
      <Route path="/start/more" component={More} />
      <Route path="/start">Radio Server</Route>
    </Switch>
  </Suspense>
);

export default StartRoutes;
