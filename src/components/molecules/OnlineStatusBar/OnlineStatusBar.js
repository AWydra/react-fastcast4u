import React from 'react';
import styled, { css } from 'styled-components';
import useOnlineStatus from '@rehooks/online-status';
import { modeSwitch } from 'utils/theme';

const OfflineBar = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing(0.25, 2)};
    position: sticky;
    top: 0;
    background-color: ${theme.palette.error[modeSwitch('main', 'dark')]};
    color: white;
    text-align: center;
    z-index: ${theme.zIndex.appBar};
    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(0.5, 2)};
      font-size: 1.25em;
    }
  `}
`;

const OnlineStatusBar = () => {
  const isOnline = useOnlineStatus();

  return !isOnline && <OfflineBar>No internet connection</OfflineBar>;
};

export default OnlineStatusBar;
