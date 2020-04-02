// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import styled, { css } from 'styled-components';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import Logo from 'components/atoms/Logo/Logo';
import NavButton from 'components/atoms/NavButton/NavButton';
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

  const handleClick = () => {
    dispatch(generalActions.toggleTheme());
  };

  return (
    <StyledAppBar color="default" position="static">
      <StyledToolbar>
        <Logo mr="auto" to="/" />
        <IconButton color="primary" aria-label="toggle dark mode" onClick={handleClick}>
          {theme === 'light' ? <LightIcon /> : <DarkIcon />}
        </IconButton>
        <NavButton to="/login">Login</NavButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
