import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const footerTheme = createMuiTheme({
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
    type: 'dark',
    primary: {
      main: 'hsl(204, 63%, 49%)',
    },
    secondary: {
      main: 'hsl(350, 65%, 46%);',
    },
    text: {
      secondary: 'hsla(0, 0%, 100%, 0.4);',
    },
  },
});

export default responsiveFontSizes(footerTheme);
