import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import OrderRoutes from 'routes/orderRoutes';
import DirectoryRoutes from 'routes/directoryRoutes';
import HelpRoutes from 'routes/helpRoutes';
import PageLoader from 'components/molecules/PageLoader/PageLoader';
import lng from 'utils/languageRoute';

const Home = lazy(() => import('views/Home/Home'));
const Start = lazy(() => import('views/Start/Start'));
const App = lazy(() => import('views/App/App'));
const AlexaSkill = lazy(() => import('views/AlexaSkill/AlexaSkill'));
const Contact = lazy(() => import('views/Contact/Contact'));
const Login = lazy(() => import('views/Login/Login'));
const Ticket = lazy(() => import('views/Ticket/Ticket'));
const Faq = lazy(() => import('views/Faq/Faq'));
const ToS = lazy(() => import('views/ToS/ToS'));
const Privacy = lazy(() => import('views/Privacy/Privacy'));
const UpdateDetails = lazy(() => import('views/UpdateDetails/UpdateDetails'));
const Language = lazy(() => import('views/Language/Language'));
const AppPublication = lazy(() => import('views/AppPublication/AppPublication'));
const Ceo = lazy(() => import('views/Ceo/Ceo'));
const Agata = lazy(() => import('views/Agata/Agata'));
const Emil = lazy(() => import('views/Emil/Emil'));
const NotFound = lazy(() => import('views/NotFound/NotFound'));

const Routes = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Redirect from="/:url*(/+)" to={window.location.pathname.slice(0, -1)} />
      <Route exact path={`${lng}/`} component={Home} />
      <Route path={`${lng}/order`} component={OrderRoutes} />
      <Route path={`${lng}/start`} component={Start} />
      <Route path={`${lng}/radio-directory`} component={DirectoryRoutes} />
      <Route path={`${lng}/app`} component={App} />
      <Route path={`${lng}/alexa-skill`} component={AlexaSkill} />
      <Route path={`${lng}/login`} component={Login} />
      <Route path={`${lng}/ticket`} component={Ticket} />
      <Route path={`${lng}/contact`} component={Contact} />
      <Route path={`${lng}/help`} component={HelpRoutes} />
      <Route path={`${lng}/faq/:category?`} component={Faq} />
      <Route path={`${lng}/tos`} component={ToS} />
      <Route path={`${lng}/privacy`} component={Privacy} />
      <Route path={`${lng}/update-details`} component={UpdateDetails} />
      <Route path={`${lng}/language`} component={Language} />
      <Route path={`${lng}/app-publication`} component={AppPublication} />
      <Route path={`${lng}/ceo`} component={Ceo} />
      <Route path={`${lng}/agata`} component={Agata} />
      <Route path={`${lng}/emil`} component={Emil} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
