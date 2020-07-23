// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';
import MobileCounterBar from 'components/molecules/MobileCounterBar/MobileCounterBar';

import styled, { css } from 'styled-components';
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { Chat, Help, Home, Radio, ShoppingCart } from '@material-ui/icons';
import useOnlineStatus from '@rehooks/online-status';
import { modeSwitch } from 'utils/theme';

const navigationData = [
  {
    to: '/',
    label: 'Home',
    icon: <Home />,
  },
  {
    to: '/order',
    label: 'Order',
    icon: <ShoppingCart />,
  },
  {
    to: '/radio-directory',
    label: 'Directory',
    icon: <Radio />,
  },
  {
    to: '/faq',
    label: 'FAQ',
    icon: <Help />,
    external: true,
  },
];

const StyledLabel = styled.div`
  ${({ theme }) => css`
    ${theme.breakpoints.down('sm')} AND (orientation: landscape) {
      display: none;
    }
  `}
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 2000000001,
  },
  navigation: {
    width: '100%',
    height: 'auto',
    borderTop: 'solid 1px',
    borderTopColor: modeSwitch(theme.palette.grey[300], theme.palette.grey[800]),
    boxShadow: theme.shadows[4],
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
  const chat = useSelector(state => state.general.chat);
  const [value, setValue] = useState(normalizePathname(pathname));
  const isOnline = useOnlineStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chat.onLoaded) return;

    if (chat.isOpen) {
      window.Tawk_API.maximize();
    } else {
      window.Tawk_API.minimize();
      matches && window.Tawk_API.hideWidget();
    }
    // eslint-disable-next-line
  }, [chat.onLoaded, chat.isOpen]);

  useEffect(() => {
    if (chat.onLoaded === undefined) {
      dispatch(generalActions.setChatStatus(false));
      return;
    }

    if (chat.onLoaded === false) return;

    if (matches) {
      dispatch(generalActions.setChatDisplay(false));
      window.Tawk_API.hideWidget();
    } else {
      window.Tawk_API.showWidget();
    }
    // eslint-disable-next-line
  }, [matches]);

  useEffect(() => {
    setValue(normalizePathname(pathname));
  }, [pathname]);

  const handleClick = () => {
    dispatch(generalActions.setChatDisplay(true));
  };

  return (
    matches &&
    !chat.isOpen && (
      <Box className={classes.root}>
        <MobileCounterBar content="BUY NOW 50% OFF" date={Date.UTC(2020, 6, 31)} />
        <BottomNavigation component="nav" value={value} showLabels className={classes.navigation}>
          {navigationData.map(({ to, label, external, ...props }) => (
            <BottomNavigationAction
              component={external ? 'a' : Link}
              to={to}
              href={to}
              className={classes.action}
              value={to}
              label={<StyledLabel>{label}</StyledLabel>}
              key={to}
              {...props}
            />
          ))}
          {chat.isOnline && isOnline ? (
            <BottomNavigationAction
              className={classes.action}
              label={<StyledLabel>Chat</StyledLabel>}
              icon={<Chat />}
              onClick={handleClick}
            />
          ) : (
            <BottomNavigationAction
              component={Link}
              to="/contact"
              value="/contact"
              className={classes.action}
              label={<StyledLabel>Contact</StyledLabel>}
              icon={<Chat />}
            />
          )}
        </BottomNavigation>
      </Box>
    )
  );
};

export default PageNavigation;
