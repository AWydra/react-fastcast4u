// @ts-nocheck
import React, { useState } from 'react';
import { IconButton, Grid, Slider, makeStyles } from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

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
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const VolumeSlider = ({ ...props }) => {
  const classes = useStyles();
  const [volume, setVolume] = useState(50);

  return (
    <Grid container alignItems="center" {...props}>
      <Grid item>
        <IconButton className={classes.button} color="inherit" aria-label="play or pause radio">
          <VolumeDownIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid className={classes.item} item xs>
        <Slider
          className={classes.slider}
          value={volume}
          onChange={(ev, val) => setVolume(val)}
          aria-labelledby="continuous-slider"
        />
      </Grid>
    </Grid>
  );
};

export default VolumeSlider;
