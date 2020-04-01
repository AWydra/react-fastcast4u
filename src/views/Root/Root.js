// @ts-nocheck
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import history from 'utils/history';
import Routes from 'routes/mainRoutes';

import ReactGA from 'utils/analytics';
import { hotjar } from 'react-hotjar';
import { CookiesProvider } from 'react-cookie';

import MainTemplate from 'templates/MainTemplate';

const Root = () => {
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
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <CookiesProvider>
            <MainTemplate>
              <Routes />
            </MainTemplate>
          </CookiesProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default Root;
