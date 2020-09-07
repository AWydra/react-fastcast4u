import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Box, IconButton, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import Countdown from 'components/atoms/Countdown/Countdown';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { isNowBetween } from 'utils/date';

const Notification = styled(Link)`
  ${({ theme }) => css`
    width: 280px;
    padding: ${theme.spacing(2.5, 0)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.palette.primary.main};
    border: solid black 4px;
    border-radius: 20px;
    color: white;
    text-decoration: none;
    text-align: center;
  `}
`;

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    right: 10,
    bottom: theme.spacing(8),
    zIndex: theme.zIndex.appBar,
  },
  icon: {
    position: 'absolute',
    top: -20,
    right: -10,
    filter: 'drop-shadow( 0px 0px 2px white)',
    zIndex: 1,
  },
  img: {
    paddingBottom: theme.spacing(2),
    position: 'absolute',
    top: 0,
    transform: 'translateY(-100%)',
  },
  countdown: {
    display: 'block',
    fontSize: theme.typography.pxToRem(26),
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
}));

const PromoNotification = ({ ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const handleClick = () => setOpen(false);

  return (
    matches &&
    open &&
    isNowBetween(Date.UTC(2020, 8, 7, 5), Date.UTC(2020, 8, 8, 5)) && (
      <Box className={classes.root} {...props}>
        <IconButton
          className={classes.icon}
          onClick={handleClick}
          size="small"
          aria-label="close popup"
        >
          <HighlightOffIcon fontSize="inherit" />
        </IconButton>
        <Notification to="/alexa-skill">
          <Image className={classes.img} src="https://img.fastcast4u.com/flash/flashsale.png" />
          <Text variant="h5" fontWeight={600} mb={1} px={2}>
            Alexa Radio Skill
          </Text>
          <Countdown className={classes.countdown} date={Date.UTC(2020, 8, 8, 7)} />
        </Notification>
      </Box>
    )
  );
};

export default PromoNotification;
