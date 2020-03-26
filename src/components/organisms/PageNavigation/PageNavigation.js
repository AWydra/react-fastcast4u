// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import { useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import tawkto from 'utils/tawkto';

import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import ChatIcon from '@material-ui/icons/Chat';
import RadioIcon from '@material-ui/icons/Radio';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { modeSwitch } from 'utils/theme';

const navigationData = [
  {
    to: '/',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    to: '/order',
    label: 'Order',
    icon: <ShoppingCartIcon />,
  },
  {
    to: '/radio-directory',
    label: 'Directory',
    icon: <RadioIcon />,
  },
  {
    to: '/faq',
    label: 'FAQ',
    icon: <HelpIcon />,
  },
];

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
    zIndex: 2000000001,
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
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState(normalizePathname(pathname));
  const dispatch = useDispatch();

  useEffect(() => {
    const matchResolution = () =>
      window.matchMedia(`(max-width: ${theme.breakpoints.values.md}px)`);
    tawkto.init(
      '55fb4794e1ea4c1012fe49df',
      tawk => {
        const mql = matchResolution();
        mql.matches && tawk.hideWidget();

        mql.addEventListener('change', ev => {
          if (ev.matches) {
            tawk.minimize();
            tawk.hideWidget();
          } else {
            tawk.showWidget();
          }
        });
        return dispatch(generalActions.setChat(tawk));
      },
      [
        {
          ev: 'onChatMinimized',
          fn: () => {
            matchResolution().matches && setTimeout(window.Tawk_API.hideWidget, 0);
            setShowMenu(true);
          },
        },
      ],
    );
  }, [dispatch, theme]);

  useEffect(() => {
    setValue(normalizePathname(pathname));
  }, [pathname]);

  const handleClick = () => {
    window.Tawk_API.maximize();
    setShowMenu(false);
  };

  return (
    matches &&
    showMenu && (
      <BottomNavigation value={value} showLabels className={classes.root}>
        {navigationData.map(({ to, ...props }) => (
          <BottomNavigationAction
            component={Link}
            to={to}
            className={classes.action}
            value={to}
            key={to}
            {...props}
          />
        ))}
        <BottomNavigationAction
          className={classes.action}
          label="Chat"
          icon={<ChatIcon />}
          onClick={handleClick}
        />
      </BottomNavigation>
    )
  );
};

export default PageNavigation;
