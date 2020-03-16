// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Grid, Box } from '@material-ui/core';
import RowContent from 'components/molecules/RowContent/RowContent';
import Image from 'components/atoms/Image/Image';

const StyledContainer = styled(Grid)`
  ${({ theme }) =>
    css`
      padding: ${theme.spacing(4)}px 0;
    `}
`;

const StyledGrid = styled(({ reverse, children, ...props }) => (
  <Box component={Grid} {...props}>
    {children}
  </Box>
))`
  ${({ theme }) => css`
    img {
      margin: 0 auto;
      padding: 0 ${theme.spacing(8)}px;
    }

    ${({ reverse }) =>
      reverse &&
      `
    order: 1;
  `}

    ${theme.breakpoints.down('md')} {
      padding: 0 ${theme.spacing(8)}px;
      order: unset;
      img {
        padding: 0;
      }
    }

    ${theme.breakpoints.down('xs')} {
      padding: 0 ${theme.spacing(4)}px;
    }
  `}
`;

const RowSection = ({ img, reverse, ...props }) => (
  <StyledContainer container>
    <StyledGrid item xs={12} lg={7} reverse={reverse}>
      <Image src={img} />
    </StyledGrid>
    <StyledGrid
      item
      xs={12}
      lg={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={reverse ? 'flex-end' : 'flex-start'}
      align={reverse ? 'right' : 'left'}
    >
      <RowContent {...props} reverse={reverse} />
    </StyledGrid>
  </StyledContainer>
);

RowSection.propTypes = {
  img: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
};

export default RowSection;
