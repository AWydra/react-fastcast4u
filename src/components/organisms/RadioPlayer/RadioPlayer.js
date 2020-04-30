import React from 'react';
import { AppBar, Container, IconButton, makeStyles } from '@material-ui/core';
import Image from 'components/atoms/Image/Image';
import IconButtonWithLabel from 'components/atoms/IconButtonWithLabel/IconButtonWithLabel';
import PlayerInfo from 'components/molecules/PlayerInfo/PlayerInfo';
import VolumeSlider from 'components/molecules/VolumeSlider/VolumeSlider';
import PlayIcon from '@material-ui/icons/PlayArrow';
// import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    zIndex: 2000000001,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  button: {
    margin: theme.spacing(0.5, 0),
    padding: theme.spacing(0),
  },
  icon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  image: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(0.5, 2),
  },
  album: {
    flex: 3,
  },
  station: {
    margin: theme.spacing(0, 2),
    flex: 4,
  },
  slider: {
    width: 'unset',
    flex: 2,
  },
}));

const RadioPlayer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed" color="primary" component="section">
      <Container className={classes.container} maxWidth="xl">
        <IconButton className={classes.button} color="inherit" aria-label="play or pause radio">
          <PlayIcon className={classes.icon} />
        </IconButton>
        <Image
          className={classes.image}
          src="https://images-na.ssl-images-amazon.com/images/I/61Y%2B05GJETL._SY450_.jpg"
        />
        <PlayerInfo
          className={classes.album}
          title="Blue Oyster Cult"
          subtitle="Cities On Flame With Rock And Roll"
        />
        <PlayerInfo
          className={classes.station}
          title="UP THE IRONS web Radio"
          subtitle="Listeners: 0"
          center
        />
        <IconButtonWithLabel icon={PlayIcon} label="Vote" />
        <VolumeSlider className={classes.slider} />
      </Container>
    </AppBar>
  );
};

export default RadioPlayer;
