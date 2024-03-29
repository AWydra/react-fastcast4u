import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';
import { spacing } from '@material-ui/system';

const FooterContainer = styled(Container)`
  ${spacing}
  ${({ theme }) => css`
    margin-top: auto;
    background-color: ${theme.palette.background.paper};
    border-top: solid 1px ${theme.palette.grey[800]};
    color: white;

    ${theme.breakpoints.down('xs')} {
      padding-bottom: ${theme.spacing(8)}px;
    }
  `}
`;

export default FooterContainer;
