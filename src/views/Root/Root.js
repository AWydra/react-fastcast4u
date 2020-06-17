// @ts-nocheck
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import history from 'utils/history';
import Routes from 'routes/mainRoutes';
import MainTemplate from 'templates/MainTemplate';

import { CookiesProvider } from 'react-cookie';

const Root = () => {
  useEffect(() => {
    history.listen(location => {
      !location.pathname.includes('radio-directory/') && window.scrollTo(0, 0);
    });
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
