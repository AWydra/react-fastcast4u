import styled, { css } from 'styled-components';
import Text from 'components/atoms/Text/Text';

const PageTitle = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.typography.pxToRem(30)};
    font-weight: 500;
    text-align: center;
    line-height: 1.5;

    ${theme.breakpoints.up('lg')} {
      font-size: ${theme.typography.pxToRem(34)};
    }
  `}
`;

export default PageTitle;
