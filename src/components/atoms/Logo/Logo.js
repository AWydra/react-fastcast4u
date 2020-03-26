// @ts-nocheck
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ButtonBase } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Image from 'components/atoms/Image/Image';
import LogoFile from 'assets/img/logo.png';

const Logo = styled(({ ...other }) => <Image {...other} src={LogoFile} alt="Site logo" />)`
  ${({ theme }) => css`
    width: 140px;
    padding: ${theme.spacing(2, 0)};
    ${theme.breakpoints.up('md')} {
      width: 300px;
    }
  `}
`;

const StyledButtonBase = styled(ButtonBase)`
  ${spacing}
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`;

const LogoLink = ({ to, ...props }) => (
  <StyledButtonBase component={Link} to={to} centerRipple focusRipple {...props}>
    <Logo {...props} />
  </StyledButtonBase>
);

LogoLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default LogoLink;
