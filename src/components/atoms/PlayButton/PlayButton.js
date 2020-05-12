import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, IconButton, makeStyles } from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles(theme => ({
  iconButton: {
    padding: 0,
  },
  icon: {
    fontSize: theme.typography.pxToRem(40),
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.pxToRem(44),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(48),
    },
  },
  progress: {
    padding: theme.spacing(0.75),
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      width: '44px !important',
      height: '44px !important',
    },
    [theme.breakpoints.up('md')]: {
      width: '48px !important',
      height: '48px !important',
    },
  },
}));

const PlayButton = ({ loading, playing, onClick }) => {
  const classes = useStyles();

  return loading ? (
    <CircularProgress className={classes.progress} size={40} />
  ) : (
    <IconButton
      className={classes.iconButton}
      color="inherit"
      aria-label="play or pause radio"
      onClick={onClick}
    >
      {playing ? <PauseIcon className={classes.icon} /> : <PlayIcon className={classes.icon} />}
    </IconButton>
  );
};

PlayButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  playing: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlayButton;
