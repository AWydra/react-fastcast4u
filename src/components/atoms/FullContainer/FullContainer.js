// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

const FullContainer = styled(({ center, children, ...props }) => (
  <Container component="section" {...props}>
    {children}
  </Container>
))`
  width: 100%;
  min-height: 70vh;

  ${({ center }) =>
    center &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`;

export default FullContainer;
