import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const mainTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: 'hsl(204, 63%, 49%)',
    },
    secondary: {
      main: 'hsl(350, 65%, 46%);',
    },
  },
});

export default responsiveFontSizes(mainTheme);
