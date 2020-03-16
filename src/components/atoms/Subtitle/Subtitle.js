import styled from 'styled-components';
import Text from 'components/atoms/Text/Text';

const Subtitle = styled(Text)`
  ${({ theme }) => `
    margin-top: ${theme.spacing(1.5)}px;
    font-size: ${theme.typography.pxToRem(20)};
    color: ${theme.palette.text.secondary};
    text-align: center;
    line-height: 1.5;

    ${theme.breakpoints.up('md')} {
      font-size: ${theme.typography.pxToRem(22)};
    }

    ${theme.breakpoints.up('lg')} {
      font-size: ${theme.typography.pxToRem(24)};
    }
  `}
`;

export default Subtitle;
