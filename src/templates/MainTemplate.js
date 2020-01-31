import React from 'react';
import PropTypes from 'prop-types';

import { CssBaseline, NoSsr } from '@material-ui/core/';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import theme from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/organisms/Header/Header';

const MainTemplate = ({ children }) => (
  <NoSsr>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <GlobalStyle />
        <Header />
        {children}
      </StylesProvider>
    </ThemeProvider>
  </NoSsr>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
