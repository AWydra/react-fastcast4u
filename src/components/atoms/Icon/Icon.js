import styled, { css } from 'styled-components';
import { modeSwitch } from 'utils/theme';

const Icon = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacing(0.75)}px;
    display: inline-block;
    vertical-align: text-top;

    & svg {
      vertical-align: baseline;
      font-size: 18px;
      color: ${theme.palette.grey[modeSwitch(700, 300)]};
    }
  `}
`;

export default Icon;
