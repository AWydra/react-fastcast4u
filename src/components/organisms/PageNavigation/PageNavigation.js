import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const normalizePathname = pathname => {
  return `/${pathname.split('/')[1]}`;
};

const PageNavigation = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [value, setValue] = useState(normalizePathname(pathname));

  useEffect(() => {
    setValue(normalizePathname(pathname));
  }, [pathname]);

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
        component={Link}
        to="/"
        className={classes.action}
        label="Home"
        value="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/order"
        className={classes.action}
        label="Order"
        value="/order"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/radio-directory"
        className={classes.action}
        label="Directory"
        value="/radio-directory"
        icon={<RadioIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/faq"
        className={classes.action}
        label="FAQ"
        value="/faq"
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
