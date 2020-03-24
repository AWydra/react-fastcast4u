import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import RadioIcon from '@material-ui/icons/Radio';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChatIcon from '@material-ui/icons/Chat';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    borderTop: 'solid 2px',
    borderTopColor: modeSwitch(theme.palette.grey[300], theme.palette.grey[700]),
    boxShadow: theme.shadows[4],
    zIndex: theme.zIndex.appBar,
  },
  action: {
    padding: theme.spacing(1, 0),
    minWidth: 'unset',
    '&.Mui-selected': {
      padding: theme.spacing(1, 0),
      '& .MuiBottomNavigationAction-label': { fontSize: '0.75rem' },
    },
  },
}));

const PageNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.action}
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        className={classes.action}
        label="Order"
        value="order"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        className={classes.action}
        label="Directory"
        value="directory"
        icon={<RadioIcon />}
      />
      <BottomNavigationAction
        className={classes.action}
        label="FAQ"
        value="faq"
        icon={<HelpIcon />}
      />
      <BottomNavigationAction
        className={classes.action}
        label="Chat"
        value="chat"
        icon={<ChatIcon />}
      />
    </BottomNavigation>
  );
};

export default PageNavigation;
