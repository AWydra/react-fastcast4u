import styled from 'styled-components';
import theme from 'theme/mainTheme';
import themeUtils from 'utils/theme';

const ColumnForm = styled.div`
  width: 100%;
  max-width: 450px;
  padding: ${theme.spacing(2, 3)};
  border: solid ${themeUtils.modeSwitch(theme.palette.grey[400], theme.palette.grey[700])} 1px;
  border-radius: 4px;
  background-color: ${theme.palette.background.paper};

  ${theme.breakpoints.up('md')} {
    padding: ${theme.spacing(3)}px;
  }
`;

export default ColumnForm;
