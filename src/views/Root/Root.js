import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import history from 'services/history';
import ReactGA from 'utils/analytics';
import { hotjar } from 'react-hotjar';

import Home from 'views/Home';
import NotFound from 'views/NotFound';

import tawkto from 'react-tawkto';

const Root = () => {
  // Tawk.to
  useEffect(() => {
    tawkto.init('55fb4794e1ea4c1012fe49df', () => console.log('Tawk.to ready'));
  }, []);

  // Google Analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    history.listen(location => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
  }, []);

  // Hotjar
  useEffect(() => {
    hotjar.initialize(95081, 6);
  }, []);

  return (
    <Router history={history}>
      <GlobalStyle />
      <h1>Hello World!</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Root;
