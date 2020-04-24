import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/molecules/PageLoader/PageLoader';

const RadioDirectory = lazy(() => import('views/RadioDirectory/RadioDirectory'));

const Order = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact path="/radio-directory/station/:id/:station?" component={RadioDirectory} />
      <Route
        path="/radio-directory/search/:title/:page(\d+)/:sort(name|listeners)"
        component={RadioDirectory}
      />
      <Route path="/radio-directory/:page(\d+)/:sort(name|listeners)" component={RadioDirectory} />
      <Route
        path="/radio-directory/search/:title/:sort(name|listeners)"
        component={RadioDirectory}
      />
      <Route path="/radio-directory/search/:title/:page(\d+)" component={RadioDirectory} />
      <Route path="/radio-directory/:sort(name|listeners)" component={RadioDirectory} />
      <Route path="/radio-directory/search/:title" component={RadioDirectory} />
      <Route path="/radio-directory/:page(\d+)" component={RadioDirectory} />
      <Route path="/radio-directory" component={RadioDirectory} />
    </Switch>
  </Suspense>
);

// http://localhost:3000/radio-directory/search/WydraFM/2/name

export default Order;
