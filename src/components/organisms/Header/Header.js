// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import styled, { css } from 'styled-components';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import Logo from 'components/atoms/Logo/Logo';
import NavButton from 'components/atoms/NavButton/NavButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const StyledAppBar = styled(AppBar)`
  ${({ theme }) => css`
    padding: 0;
    background-color: ${theme.palette.background.default};
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
        <IconButton color="primary" onClick={handleClick}>
          {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <NavButton to="/login">Login</NavButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
