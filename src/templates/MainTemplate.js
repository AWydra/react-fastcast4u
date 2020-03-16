// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, NoSsr, Box } from '@material-ui/core/';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import MainThemeProvider from 'theme/MainThemeProvider';

const MainTemplate = ({ children }) => {
  return (
    <NoSsr>
      <MainThemeProvider>
        <StylesProvider injectFirst>
          <CssBaseline />
          <GlobalStyle />
          <Header />
          <Box mb={8}>{children}</Box>
          <Footer />
        </StylesProvider>
      </MainThemeProvider>
    </NoSsr>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
