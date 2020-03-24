// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import ChatIcon from '@material-ui/icons/Chat';
import RadioIcon from '@material-ui/icons/Radio';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 'auto',
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
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const chat = useSelector(state => state.general.chat);
  const { pathname } = useLocation();
  const [value, setValue] = useState(normalizePathname(pathname));

  useEffect(() => {
    if (chat.onLoaded && matches) {
      chat.hideWidget();
      const firstChild = document.querySelector('#tawkchat-container > div:first-child');
      firstChild && firstChild.remove();
    }
  }, [chat, matches]);

  const toggleChat = () => {
    if (chat.onLoaded) {
      chat.toggle();
      const container = document.querySelector('#tawkchat-container');
      container && (container.style.zIndex = theme.zIndex.appBar + 1);
    }
  };

  useEffect(() => {
    setValue(normalizePathname(pathname));
  }, [pathname]);

  return (
    matches && (
      <BottomNavigation value={value} showLabels className={classes.root}>
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
          icon={<ChatIcon />}
          onClick={toggleChat}
        />
      </BottomNavigation>
    )
  );
};

export default PageNavigation;
