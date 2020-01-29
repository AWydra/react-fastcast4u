import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import theme from 'theme/mainTheme';

const NavButton = styled(({ children, ...other }) => (
  <Button variant="contained" size="large" component={Link} {...other}>
    {children}
  </Button>
))`
  background-color: white;
  color: ${theme.palette.primary.main};
  font-weight: ${theme.typography.fontWeightBold};
`;
export default NavButton;
