import styled, { css } from 'styled-components';
import { modeSwitch } from 'utils/theme';

const Cover = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${modeSwitch('hsla(0, 0%, 100%, 0.67)', 'hsla(0, 0%, 0%, 0.67)')};
    z-index: ${theme.zIndex.mobileStepper};
  `}
`;

export default Cover;
