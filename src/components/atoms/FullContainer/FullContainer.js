// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import theme from 'theme/mainTheme';

const FullContainer = styled(({ center, children, ...props }) => (
  <Container component="section" {...props}>
    {children}
  </Container>
))`
  width: 100%;
  min-height: 80vh;

  ${({ center }) =>
    center &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}

  ${theme.breakpoints.down('md')} {
    padding: 0;
    order: unset;
  }
`;

export default FullContainer;