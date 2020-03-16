// @ts-nocheck
import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';

const FullContainer = styled(({ center, centerX, children, ...props }) => (
  <Container component="section" {...props}>
    {children}
  </Container>
))`
  ${({ theme }) => css`
    width: 100%;
    min-height: 70vh;

    ${theme.breakpoints.down('sm')} {
      justify-content: center;
    }
  `}

  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}

  ${({ centerX }) =>
    centerX &&
    css`
      justify-content: flex-start;
      padding-top: 40px;
    `}
`;

export default FullContainer;
