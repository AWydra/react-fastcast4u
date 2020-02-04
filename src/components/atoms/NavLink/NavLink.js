import styled from 'styled-components';
import { ButtonBase } from '@material-ui/core';
import theme from 'theme/footerTheme';

const NavLink = styled(ButtonBase)`
  padding: ${theme.spacing(0.75)}px ${theme.spacing(1)}px;
  transition: ${theme.transitions.create('all')};
  font-size: ${theme.typography.pxToRem(17)};

  &:hover {
    color: ${theme.palette.primary.light};
  }
`;

export default NavLink;
