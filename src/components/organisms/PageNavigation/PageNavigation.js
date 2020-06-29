// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import styled, { css } from 'styled-components';
import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    height: 'auto',
    position: 'fixed',
    bottom: 0,
    left: 0,
    borderTop: 'solid 1px',
    borderTopColor: modeSwitch(theme.palette.grey[300], theme.palette.grey[800]),
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
  const chat = useSelector(state => state.general.chat);
  const isChatOpened = useSelector(state => state.general.chat.isOpen);
  const [value, setValue] = useState(normalizePathname(pathname));
  const isOnline = useOnlineStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chat.onLoaded) return;

    if (isChatOpened) {
      window.Tawk_API.maximize();
    } else {
      window.Tawk_API.minimize();
      matches && window.Tawk_API.hideWidget();
    }
    // eslint-disable-next-line
  }, [chat.onLoaded, isChatOpened]);

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
    !isChatOpened && (
      <BottomNavigation component="nav" value={value} showLabels className={classes.root}>
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
            to="/ticket"
            value="/ticket"
            className={classes.action}
            label={<StyledLabel>Contact</StyledLabel>}
            icon={<Chat />}
          />
        )}
      </BottomNavigation>
    )
  );
};

export default PageNavigation;
