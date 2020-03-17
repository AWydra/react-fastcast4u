import React from 'react';
import styled, { css } from 'styled-components';
import { Paper } from '@material-ui/core';

const ColumnForm = styled(({ ...props }) => <Paper variant="outlined" {...props} />)`
  ${({ theme }) => css`
    width: 100%;
    max-width: 450px;
    padding: ${theme.spacing(2, 3)};
    position: relative;
    overflow: hidden;
    box-shadow: ${theme.shadows[5]};
    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(3)}px;
    }
  `}
`;

export default ColumnForm;
