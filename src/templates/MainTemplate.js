// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

import { CssBaseline, NoSsr, Box } from '@material-ui/core/';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from 'theme/GlobalStyle';
import Alert from 'components/atoms/Alert/Alert';
import OnlineStatusBar from 'components/molecules/OnlineStatusBar/OnlineStatusBar';
import PromoNotification from 'components/molecules/PromoNotification/PromoNotification';
import Header from 'components/organisms/Header/Header';
import PageNavigation from 'components/organisms/PageNavigation/PageNavigation';
import Footer from 'components/organisms/Footer/Footer';
import CookieConsent from 'components/organisms/CookieConsent/CookieConsent';
import MainThemeProvider from 'theme/MainThemeProvider';
import ErrorHandler from 'templates/ErrorHandler';
import ThirdPartyResources from 'utils/ThirdPartyResources';
import ServiceWorkerHandler from 'utils/ServiceWorkerHandler';

const MainTemplate = ({ children }) => (
  <ErrorHandler>
    <NoSsr>
      <MainThemeProvider>
        <StylesProvider injectFirst>
          <CssBaseline />
          <GlobalStyle />
          <Alert />
          <Header />
          <OnlineStatusBar />
          <Box mb={8}>{children}</Box>
          <PageNavigation />
          <Footer />
          <CookieConsent />
          <PromoNotification />
          <ThirdPartyResources />
          <ServiceWorkerHandler />
        </StylesProvider>
      </MainThemeProvider>
    </NoSsr>
  </ErrorHandler>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
