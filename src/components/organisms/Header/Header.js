// @ts-nocheck
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

import styled, { css } from 'styled-components';
import { AppBar, Toolbar, Tooltip, IconButton } from '@material-ui/core';
import Logo from 'components/atoms/Logo/Logo';
import NavButton from 'components/atoms/NavButton/NavButton';
import SocialBar from 'components/molecules/SocialBar/SocialBar';
import LanguageButton from 'components/molecules/LanguageButton/LanguageButton';
import ItemsLeftTopBar from 'components/molecules/ItemsLeftTopBar/ItemsLeftTopBar';
import { useCurrentLanguage } from 'utils/customHooks';
import { isDev } from 'utils/nodeEnv';

import LightIcon from '@material-ui/icons/Brightness4';
import DarkIcon from '@material-ui/icons/Brightness7';

const StyledAppBar = styled(AppBar)`
  ${({ theme, hidden }) => css`
    padding: 0;
    background-color: ${theme.palette.background.paper};
    display: ${hidden && 'none'};
  `}
`;

const StyledToolbar = styled(Toolbar)`
  ${({ theme }) => css`
    justify-content: flex-end;

    ${theme.breakpoints.up('md')} {
      min-height: ${theme.spacing(10)}px;
    }
  `}
`;

const Header = () => {
  const content = useSelector(state => state.language.components.header);
  const theme = useSelector(state => state.general.theme);
  const lng = useCurrentLanguage();
  const dispatch = useDispatch();
  const location = useLocation();
  const isHidden = location.pathname.startsWith(`${lng}/login`);

  const handleClick = () => {
    dispatch(generalActions.toggleTheme());
  };

  return (
    <>
      <StyledAppBar color="default" position="static" hidden={isHidden}>
        <SocialBar />
        <StyledToolbar>
          <Logo mr="auto" to={`${lng}`} />
          {isDev() && <LanguageButton />}
          <Tooltip title={content.toggle}>
            <IconButton color="primary" aria-label="toggle dark theme" onClick={handleClick}>
              {theme === 'light' ? <LightIcon /> : <DarkIcon />}
            </IconButton>
          </Tooltip>
          <NavButton to={`${lng}/login`}>{content.login}</NavButton>
        </StyledToolbar>
      </StyledAppBar>
      <ItemsLeftTopBar />
    </>
  );
};

export default Header;
