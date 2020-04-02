import { createMuiTheme } from '@material-ui/core/styles';
import mainTheme from './mainTheme';

const footerTheme = createMuiTheme({
  ...mainTheme,
  palette: {
    ...mainTheme.palette,
    type: 'dark',
    primary: {
      main: 'hsl(204, 63%, 49%)',
    },
    secondary: {
      main: 'hsl(350, 65%, 46%)',
    },
    text: {
      secondary: 'hsla(0, 0%, 94%, 0.5)',
    },
  },
});

export default footerTheme;
