import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import Image from 'components/atoms/Image/Image';
import Countdown from 'components/atoms/Countdown/Countdown';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { isOlderThan } from 'utils/date';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    right: 0,
    bottom: theme.spacing(8),
    zIndex: theme.zIndex.appBar,
  },
  icon: {
    position: 'absolute',
    top: 20,
    right: 0,
    filter: 'drop-shadow( 0px 0px 2px white)',
  },
  img: {
    width: theme.spacing(41),
  },
  countdown: {
    width: 'calc(100% - 90px)',
    marginLeft: theme.spacing(1.5),
    display: 'block',
    position: 'absolute',
    bottom: 35,
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: theme.typography.pxToRem(26),
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
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
    !isOlderThan(Date.UTC(2020, 7, 27, 24)) && (
      <Box className={classes.root} {...props}>
        <IconButton
          className={classes.icon}
          onClick={handleClick}
          size="small"
          aria-label="close popup"
        >
          <HighlightOffIcon fontSize="inherit" />
        </IconButton>
        <Link to="/order">
          <Image
            className={classes.img}
            src={`https://img.fastcast4u.com/react/home/promo/summer-popup-${
              isOlderThan(Date.UTC(2020, 7, 20, 24)) ? '10' : '20'
            }.png`}
          />
          <Countdown
            className={classes.countdown}
            date={
              isOlderThan(Date.UTC(2020, 7, 20, 24))
                ? Date.UTC(2020, 7, 27, 24)
                : Date.UTC(2020, 7, 20, 24)
            }
          />
        </Link>
      </Box>
    )
  );
};

export default PromoNotification;
