import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, useMediaQuery } from '@material-ui/core';
import theme from 'theme/mainTheme';

const NavButton = styled(({ ...props }) => {
  const matches = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);
  return (
    <Button
      color="primary"
      variant="contained"
      size={matches ? 'large' : 'small'}
      component={Link}
      {...props}
    />
  );
})`
  font-weight: 600;
`;
export default NavButton;
