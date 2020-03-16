import styled, { css } from 'styled-components';
import { modeSwitch } from 'utils/theme';

const ColumnForm = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 450px;
    padding: ${theme.spacing(2, 3)};
    border: solid ${modeSwitch(theme.palette.grey[400], theme.palette.grey[700])} 1px;
    border-radius: 4px;
    background-color: ${theme.palette.background.paper};

    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(3)}px;
    }
  `}
`;

export default ColumnForm;
