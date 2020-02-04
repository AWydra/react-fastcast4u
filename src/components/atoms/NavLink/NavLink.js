// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonBase } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import theme from 'theme/footerTheme';

const NavButton = styled(ButtonBase)`
  ${spacing}
  transition: ${theme.transitions.create('all')};
  font-size: ${theme.typography.pxToRem(17)};

  &:hover {
    color: ${theme.palette.grey[500]};
  }
`;

const NavLink = ({ children, ...props }) => (
  <NavButton component={Link} focusRipple {...props}>
    {children}
  </NavButton>
);

NavLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default NavLink;
