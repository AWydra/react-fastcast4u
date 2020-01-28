import { createMuiTheme } from '@material-ui/core/styles';

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'hsl(204, 63%, 49%)',
    },
    secondary: {
      main: 'hsl(350, 65%, 46%);',
    },
  },
});

export default mainTheme;
