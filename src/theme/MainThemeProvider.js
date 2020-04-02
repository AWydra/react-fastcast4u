// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import mainTheme from './mainTheme';

const MainThemeProvider = ({ ...props }) => {
  const themeType = useSelector(state => state.general.theme);
  mainTheme.palette.type = themeType;
  if (themeType === 'dark') {
    mainTheme.palette.background = {
      default: 'hsl(0, 0%, 9%)',
      paper: 'hsl(0, 0%, 14%)',
    };
  } else {
    mainTheme.palette.background = {
      default: 'hsl(0, 0%, 98%)',
      paper: 'hsl(0, 0%, 100%)',
    };
  }
  const theme = responsiveFontSizes(createMuiTheme(mainTheme));

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme} {...props} />
    </ThemeProvider>
  );
};

export default MainThemeProvider;
