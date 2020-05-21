import React from 'react';
import styled, { css } from 'styled-components';
import { Paper } from '@material-ui/core';
import LoadingCover from 'components/molecules/LoadingCover/LoadingCover';

const ColumnForm = styled(({ loading, children, ...props }) => (
  <Paper variant="outlined" {...props}>
    {loading && <LoadingCover />}
    {children}
  </Paper>
))`
  ${({ theme }) => css`
    width: 100%;
    max-width: 450px;
    padding: ${theme.spacing(3, 2.5)};
    position: relative;
    box-shadow: ${theme.shadows[5]};
    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(3)}px;
    }
  `}
`;

export default ColumnForm;
