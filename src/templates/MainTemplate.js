import React from 'react';
import PropTypes from 'prop-types';

import { CssBaseline, NoSsr, Box } from '@material-ui/core/';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import theme from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => (
  <NoSsr>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <GlobalStyle />
        <Header />
        <Box mb={8}>{children}</Box>
        <Footer />
      </StylesProvider>
    </ThemeProvider>
  </NoSsr>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
