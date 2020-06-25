// @ts-nocheck
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import styled, { css } from 'styled-components';
import { AppBar, Toolbar, Tooltip, IconButton } from '@material-ui/core';
import Logo from 'components/atoms/Logo/Logo';
import NavButton from 'components/atoms/NavButton/NavButton';
import SocialBar from 'components/molecules/SocialBar/SocialBar';
import LightIcon from '@material-ui/icons/Brightness4';
import DarkIcon from '@material-ui/icons/Brightness7';

const StyledAppBar = styled(AppBar)`
  ${({ theme }) => css`
    padding: 0;
    background-color: ${theme.palette.background.paper};
  `}
`;

const StyledToolbar = styled(Toolbar)`
  ${({ theme }) => css`
    justify-content: flex-end;

    ${theme.breakpoints.up('md')} {
      min-height: ${theme.spacing(10)}px;
    }
  `}
`;

const Header = () => {
  const theme = useSelector(state => state.general.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  const isHidden = location.pathname.startsWith('/login');

  const handleClick = () => {
    dispatch(generalActions.toggleTheme());
  };

  return (
    !isHidden && (
      <StyledAppBar color="default" position="static">
        <SocialBar />
        <StyledToolbar>
          <Logo mr="auto" to="/" />
          <Tooltip title="Toggle light/dark theme">
            <IconButton color="primary" aria-label="toggle dark theme" onClick={handleClick}>
              {theme === 'light' ? <LightIcon /> : <DarkIcon />}
            </IconButton>
          </Tooltip>
          <NavButton to="/login">Login</NavButton>
        </StyledToolbar>
      </StyledAppBar>
    )
  );
};

export default Header;
