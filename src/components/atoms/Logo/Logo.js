import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from 'components/atoms/Image';
import LogoFile from 'assets/img/logo.png';
import theme from 'theme/mainTheme';

const Logo = styled(({ ...other }) => <Image {...other} src={LogoFile} alt="Site logo" />)`
  width: 150px;
  padding: 10px;
  ${theme.breakpoints.up('sm')} {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const LogoLink = ({ to, ...props }) => (
  <Link to={to}>
    <Logo {...props} />
  </Link>
);

LogoLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default LogoLink;
