import React from 'react';
import PropTypes from 'prop-types';

import { CssBaseline, NoSsr } from '@material-ui/core/';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import theme from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

const MainTemplate = ({ children }) => (
  <NoSsr>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <GlobalStyle />
        <h1>Hello World!</h1>
        {children}
      </StylesProvider>
    </ThemeProvider>
  </NoSsr>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
