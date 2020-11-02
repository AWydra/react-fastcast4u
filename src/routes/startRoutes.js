import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import lng from 'utils/languageRoute';

const RadioServer = lazy(() => import('views/Start/RadioServer/RadioServer'));
const ControlPanel = lazy(() => import('views/Start/ControlPanel/ControlPanel'));
const AlexaSkill = lazy(() => import('views/Start/AlexaSkill/AlexaSkill'));
const MobileApp = lazy(() => import('views/Start/MobileApp/MobileApp'));
const WebPlayer = lazy(() => import('views/Start/WebPlayer/WebPlayer'));
const SocialMediaStream = lazy(() => import('views/Start/SocialMediaStream/SocialMediaStream'));
const More = lazy(() => import('views/Start/More/More'));

const StartRoutes = () => (
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      <Route path={`${lng}/start/control-panel`} component={ControlPanel} />
      <Route path={`${lng}/start/social-media-stream`} component={SocialMediaStream} />
      <Route path={`${lng}/start/web-player`} component={WebPlayer} />
      <Route path={`${lng}/start/mobile-app`} component={MobileApp} />
      <Route path={`${lng}/start/alexa-skill`} component={AlexaSkill} />
      <Route path={`${lng}/start/more`} component={More} />
      <Route path={`${lng}/start`} component={RadioServer} />
    </Switch>
  </Suspense>
);

export default StartRoutes;
