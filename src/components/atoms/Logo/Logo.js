import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ButtonBase } from '@material-ui/core';
import Image from 'components/atoms/Image/Image';
import LogoFile from 'assets/img/logo.png';

const Logo = styled(({ ...other }) => <Image {...other} src={LogoFile} alt="Site logo" />)`
  ${({ theme }) => css`
    width: 150px;
    padding: 18px;
    ${theme.breakpoints.up('md')} {
      width: 300px;
    }
  `}
`;

const StyledButtonBase = styled(ButtonBase)`
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
  <StyledButtonBase
    // @ts-ignore
    component={Link}
    to={to}
    centerRipple
    focusRipple
  >
    <Logo {...props} />
  </StyledButtonBase>
);

LogoLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default LogoLink;
