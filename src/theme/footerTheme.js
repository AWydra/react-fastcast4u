import { createMuiTheme } from '@material-ui/core/styles';
import mainTheme from 'theme/mainTheme';

const footerTheme = createMuiTheme({
  ...mainTheme,
  palette: {
    ...mainTheme.palette,
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

export default footerTheme;
