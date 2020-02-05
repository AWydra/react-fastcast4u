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

const NavLink = ({ children, external, to, ...props }) => {
  const commonProps = {
    focusRipple: true,
    centerRipple: true,
    ...props,
  };

  console.log(commonProps);
  return external ? (
    <NavButton component="a" href={to} target="_blank" rel="noreferrer" {...commonProps}>
      {children}
    </NavButton>
  ) : (
    <NavButton component={Link} to={to} {...commonProps}>
      {children}
    </NavButton>
  );
};

NavLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  external: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

NavLink.defaultProps = {
  external: false,
};

export default NavLink;
