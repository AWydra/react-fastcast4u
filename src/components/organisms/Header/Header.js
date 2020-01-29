import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from 'components/atoms/Logo';
import NavButton from 'components/atoms/NavButton';
import theme from 'theme/mainTheme';

const StyledAppBar = styled(AppBar)`
  padding: ${theme.spacing(1.5)}px 0;
  background-color: ${theme.palette.background.default};

  ${theme.breakpoints.down('md')} {
    padding: 0;
  }
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;

  ${theme.breakpoints.down('md')} {
    justify-content: space-between;
  }
`;

const Header = () => {
  return (
    <div>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Logo to="/" />
          <NavButton to="/login">Login</NavButton>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Header;
