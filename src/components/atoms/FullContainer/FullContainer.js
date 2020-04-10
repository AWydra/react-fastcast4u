// @ts-nocheck
import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';

const FullContainer = styled(({ center, centerX, overflowHidden, ...props }) => (
  <Container component="section" {...props} />
))`
  ${({ theme, overflowHidden, center, centerX }) => css`
    width: 100%;
    min-height: 70vh;
    
    ${overflowHidden &&
      css`
        overflow-x: hidden;
      `}

    ${(center || centerX) &&
      css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}

    ${center &&
      css`
        justify-content: center;
      `}

    ${centerX &&
      css`
        justify-content: flex-start;
        padding-top: 40px;
      `}

    @media (orientation: landscape) AND (max-height: ${theme.breakpoints.values.md}px) {
      min-height: 100vh;
    }

    ${theme.breakpoints.down('sm')} {
      justify-content: center;
    }
  `}
`;

export default FullContainer;
