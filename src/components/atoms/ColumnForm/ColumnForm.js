import styled from 'styled-components';
import theme from 'theme/mainTheme';
import themeUtils from 'utils/theme';

const ColumnForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: ${theme.spacing(3, 2)};
  border: solid ${themeUtils.modeSwitch(theme.palette.grey[400], theme.palette.grey[700])} 1px;
  background-color: ${theme.palette.background.paper};
`;

export default ColumnForm;
