import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, useMediaQuery } from '@material-ui/core';
import theme from 'theme/mainTheme';

const NavButton = styled(({ children, ...other }) => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Button
      color="primary"
      variant="contained"
      size={matches ? 'large' : 'small'}
      component={Link}
      {...other}
    >
      {children}
    </Button>
  );
})`
  font-weight: ${theme.typography.fontWeightBold};
`;
export default NavButton;
