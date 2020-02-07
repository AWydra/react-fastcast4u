import styled from 'styled-components';
import Text from 'components/atoms/Text/Text';
import theme from 'theme/mainTheme';

const PageTitle = styled(Text)`
  font-size: ${theme.typography.pxToRem(30)};
  font-weight: 500;
  text-align: center;
  line-height: 1.5;

  ${theme.breakpoints.up('sm')} {
  }

  ${theme.breakpoints.up('md')} {
  }

  ${theme.breakpoints.up('lg')} {
    font-size: ${theme.typography.pxToRem(34)};
  }
`;

export default PageTitle;
