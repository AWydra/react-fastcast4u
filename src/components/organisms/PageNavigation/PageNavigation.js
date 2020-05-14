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
import tawkto from 'utils/tawkto';

import { Home, Help, Chat, Radio, ShoppingCart } from '@material-ui/icons';
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
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chat.onLoaded) return;

    if (isChatOpened) {
      chat.maximize();
    } else {
      chat.minimize();
    }
    // eslint-disable-next-line
  }, [chat.onLoaded, isChatOpened]);

  useEffect(() => {
    tawkto.init(
      '55fb4794e1ea4c1012fe49df',
      tawk => {
        return dispatch(generalActions.setChat(tawk));
      },
      [
        {
          ev: 'onChatMinimized',
          fn: () => {
            dispatch(generalActions.setChatDisplay(false));
          },
        },
        {
          ev: 'onChatMaximized',
          fn: () => {
            dispatch(generalActions.setChatDisplay(true));
          },
        },
      ],
    );
  }, [dispatch]);

  useEffect(() => {
    if (!chat.onLoaded) return;

    if (matches) {
      dispatch(generalActions.setChatDisplay(false));
      chat.hideWidget();
    } else {
      chat.showWidget();
    }
    // eslint-disable-next-line
  }, [matches, chat.onLoaded]);

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
        {navigationData.map(({ to, label, ...props }) => (
          <BottomNavigationAction
            component={Link}
            to={to}
            className={classes.action}
            value={to}
            label={<StyledLabel>{label}</StyledLabel>}
            key={to}
            {...props}
          />
        ))}
        <BottomNavigationAction
          className={classes.action}
          label={<StyledLabel>Chat</StyledLabel>}
          icon={<Chat />}
          onClick={handleClick}
        />
      </BottomNavigation>
    )
  );
};

export default PageNavigation;
