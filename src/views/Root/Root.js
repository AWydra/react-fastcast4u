// @ts-nocheck
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { Router } from 'react-router-dom';
import history from 'services/history';
import Routes from 'routes/mainRoutes';

import ReactGA from 'utils/analytics';
import { hotjar } from 'react-hotjar';
import tawkto from 'react-tawkto';

import MainTemplate from 'templates/MainTemplate';

const Root = () => {
  // Tawk.to
  useEffect(() => {
    tawkto.init('55fb4794e1ea4c1012fe49df', () => console.log('Tawk.to ready'));
  }, []);

  // Google Analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    history.listen(location => {
      window.scrollTo(0, 0);
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
  }, []);

  // Hotjar
  useEffect(() => {
    hotjar.initialize(95081, 6);
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <MainTemplate>
          <Routes />
        </MainTemplate>
      </Router>
    </Provider>
  );
};

export default Root;
