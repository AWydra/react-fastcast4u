// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import mainTheme from './mainTheme';

const MainThemeProvider = ({ ...props }) => {
  const themeType = useSelector(state => state.general.theme);
  mainTheme.palette.type = themeType;
  const theme = responsiveFontSizes(createMuiTheme(mainTheme));

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme} {...props} />
    </ThemeProvider>
  );
};

export default MainThemeProvider;
