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
import { isNowBetween } from 'utils/date';
import { useCurrentLanguage } from 'utils/customHooks';

const navigationData = [
  {
    to: '',
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

const normalizePathname = (lng, pathname) => {
  const page = pathname.split('/')[lng ? 2 : 1];
  return `${lng}${page ? `/${page}` : ''}`;
};

const PageNavigation = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const lng = useCurrentLanguage();
  const { pathname } = useLocation();
  const chat = useSelector(state => state.general.chat);
  const [value, setValue] = useState(normalizePathname(lng, pathname));
  const currency = useSelector(state => state.general.currency);
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
    setValue(normalizePathname(lng, pathname));
  }, [pathname, lng]);

  const handleClick = () => {
    dispatch(generalActions.setChatDisplay(true));
  };

  return (
    matches &&
    !chat.isOpen && (
      <Box className={classes.root}>
        {isNowBetween(Date.UTC(2020, 8, 7, 7), Date.UTC(2020, 8, 8, 7)) && (
          <MobileCounterBar
            content={`Alexa Skill for only ${currency}29`}
            date={Date.UTC(2020, 8, 8, 7)}
          />
        )}
        <BottomNavigation component="nav" value={value} showLabels className={classes.navigation}>
          {navigationData.map(({ to, label, ...props }) => (
            <BottomNavigationAction
              component={Link}
              to={`${lng}${to}`}
              className={classes.action}
              value={`${lng}${to}`}
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
