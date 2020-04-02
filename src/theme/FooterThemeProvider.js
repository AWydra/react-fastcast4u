// @ts-nocheck
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import footerTheme from './footerTheme';

const FooterThemeProvider = ({ ...props }) => {
  footerTheme.palette.type = 'dark';
  footerTheme.palette.background = {
    paper: 'hsl(0, 0%, 13%)',
  };
  const theme = responsiveFontSizes(createMuiTheme(footerTheme));

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme} {...props} />
    </ThemeProvider>
  );
};

export default FooterThemeProvider;
