import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ButtonBase } from '@material-ui/core';
import Image from 'components/atoms/Image';
import LogoFile from 'assets/img/logo.png';
import theme from 'theme/mainTheme';

const Logo = styled(({ ...other }) => <Image {...other} src={LogoFile} alt="Site logo" />)`
  width: 150px;
  padding: 18px;
  ${theme.breakpoints.up('md')} {
    width: 300px;
  }
`;

const StyledButtonBase = styled(ButtonBase)`
  ${theme.breakpoints.up('md')} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
