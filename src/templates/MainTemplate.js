// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

import { CssBaseline, NoSsr, Box } from '@material-ui/core/';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from 'theme/GlobalStyle';
import Alert from 'components/atoms/Alert/Alert';
import Header from 'components/organisms/Header/Header';
import PageNavigation from 'components/organisms/PageNavigation/PageNavigation';
import Footer from 'components/organisms/Footer/Footer';
import MainThemeProvider from 'theme/MainThemeProvider';
import ErrorHandler from 'templates/ErrorHandler';
import ThirdPartyResources from 'utils/ThirdPartyResources';

const MainTemplate = ({ children }) => (
  <ErrorHandler>
    <NoSsr>
      <MainThemeProvider>
        <StylesProvider injectFirst>
          <CssBaseline />
          <GlobalStyle />
          <Alert />
          <Header />
          <Box mb={8}>{children}</Box>
          <PageNavigation />
          <Footer />
          <ThirdPartyResources />
        </StylesProvider>
      </MainThemeProvider>
    </NoSsr>
  </ErrorHandler>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
