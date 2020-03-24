const mainTheme = {
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
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  zIndex: {
    appBar: 1000000000,
    modal: 1000000010,
  },
};

export default mainTheme;
