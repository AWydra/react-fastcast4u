// @ts-nocheck
import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';

const FullContainer = styled(({ center, centerX, ...props }) => (
  <Container component="section" {...props} />
))`
  ${({ theme }) => css`
    width: 100%;
    min-height: 70vh;

    @media (orientation: landscape) AND (max-height: ${theme.breakpoints.values.md}px) {
      min-height: 100vh;
    }

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
