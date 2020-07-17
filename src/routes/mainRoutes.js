import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import OrderRoutes from 'routes/orderRoutes';
import DirectoryRoutes from 'routes/directoryRoutes';
import HelpRoutes from 'routes/helpRoutes';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

const Home = lazy(() => import('views/Home/Home'));
const App = lazy(() => import('views/App/App'));
const AlexaSkill = lazy(() => import('views/AlexaSkill/AlexaSkill'));
const Contact = lazy(() => import('views/Contact/Contact'));
const Login = lazy(() => import('views/Login/Login'));
const Ticket = lazy(() => import('views/Ticket/Ticket'));
const Faq = lazy(() => import('views/Faq/Faq'));
const ToS = lazy(() => import('views/ToS/ToS'));
const Privacy = lazy(() => import('views/Privacy/Privacy'));
const NotFound = lazy(() => import('views/NotFound/NotFound'));
const UpdateDetails = lazy(() => import('views/UpdateDetails/UpdateDetails'));

const Routes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Redirect from="/:url*(/+)" to={window.location.pathname.slice(0, -1)} />
      <Route exact path="/" component={Home} />
      <Route path="/order" component={OrderRoutes} />
      <Route path="/radio-directory" component={DirectoryRoutes} />
      <Route path="/app" component={App} />
      <Route path="/alexa-skill" component={AlexaSkill} />
      <Route path="/login" component={Login} />
      <Route path="/ticket" component={Ticket} />
      <Route path="/contact" component={Contact} />
      <Route path="/help" component={HelpRoutes} />
      <Route path="/faq" component={Faq} />
      <Route path="/tos" component={ToS} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/update-details" component={UpdateDetails} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
