import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from 'components/atoms/Logo';
import NavButton from 'components/atoms/NavButton';
import theme from 'theme/mainTheme';

const StyledAppBar = styled(AppBar)`
  padding: 0;
  background-color: ${theme.palette.background.default};
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;

  ${theme.breakpoints.up('md')} {
    min-height: ${theme.spacing(10)}px;
    justify-content: flex-end;
  }
`;

const Header = () => {
  return (
    <div>
      <StyledAppBar color="default" position="static">
        <StyledToolbar>
          <Logo to="/" />
          <NavButton to="/login">Login</NavButton>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Header;
