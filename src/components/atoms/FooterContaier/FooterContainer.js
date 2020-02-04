import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import theme from 'theme/footerTheme';

const FooterContainer = styled(Container)`
  ${spacing}
  margin-top: auto;
  background-color: ${theme.palette.grey[900]};
  color: white;

  ${theme.breakpoints.down('xs')} {
    padding-bottom: ${theme.spacing(8)}px;
  }
`;

export default FooterContainer;
