// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { IconButton, Grid, Slider, makeStyles } from '@material-ui/core';
import { VolumeUp, VolumeDown, VolumeMute, VolumeOff } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  slider: {
    color: 'white',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: theme.spacing(0.5),
    svg: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  active: {
    boxShadow: '0px 0px 0px 14px hsla(0, 0%, 100%, 0.16) !important',
  },
}));

const icons = {
  off: <VolumeOff />,
  mute: <VolumeMute />,
  down: <VolumeDown />,
  up: <VolumeUp />,
};

const VolumeSlider = ({ ...props }) => {
  const classes = useStyles();
  const [volume, setVolume] = useState(75);
  const [icon, setIcon] = useState('');
  const [mute, setMute] = useState(false);

  useEffect(() => {
    window.Howler.volume(volume / 100);
    setMute(false);

    if (volume > 66) {
      setIcon('up');
    } else if (volume > 33) {
      setIcon('down');
    } else if (volume > 0) {
      setIcon('mute');
    } else {
      setIcon('off');
    }
  }, [volume]);

  const handleClick = () => {
    setMute(!mute);
  };

  useEffect(() => {
    window.Howler.mute(mute);
  }, [mute]);

  return (
    <Grid container alignItems="center" {...props}>
      <Grid item>
        <IconButton
          onClick={handleClick}
          className={classes.button}
          color="inherit"
          aria-label="mute volume"
        >
          {mute ? icons.off : icons[icon]}
        </IconButton>
      </Grid>
      <Grid className={classes.item} item xs>
        <Slider
          classes={{ root: classes.slider, active: classes.active, focusVisible: classes.active }}
          value={volume}
          onChange={(ev, val) => setVolume(val)}
        />
      </Grid>
    </Grid>
  );
};

export default VolumeSlider;
