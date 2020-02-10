// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import theme from 'theme/mainTheme';

const StyledButton = styled(Button)`
  ${spacing}

  ${theme.breakpoints.up('lg')} {
    padding: 0 ${theme.spacing(4)}px;

    .MuiButton-label {
      font-size: 18px;
      font-weight: 700;
      line-height: 3;
    }
  }
`;

const CTAButton = ({ children, ...props }) => (
  <StyledButton component={Link} variant="contained" color="primary" size="large" {...props}>
    {children}
  </StyledButton>
);

CTAButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default CTAButton;
