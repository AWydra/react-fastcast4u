// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import directoryServices from 'services/directory';
import ReactHowler from 'react-howler';

import { AppBar, Container, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Image from 'components/atoms/Image/Image';
import IconButtonWithLabel from 'components/atoms/IconButtonWithLabel/IconButtonWithLabel';
import PlayButton from 'components/atoms/PlayButton/PlayButton';
import PopupButton from 'components/atoms/PopupButton/PopupButton';
import ShareButton from 'components/molecules/ShareButton/ShareButton';
import PlayerInfo from 'components/molecules/PlayerInfo/PlayerInfo';
import VolumeSlider from 'components/molecules/VolumeSlider/VolumeSlider';

import LikeIcon from '@material-ui/icons/ThumbUpOutlined';
import openPopup from 'utils/openPopup';
import { useDidUpdate } from 'utils/customHooks';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 59,
    zIndex: theme.zIndex.appBar,
    backgroundColor: error => error && 'black',
    '@media (orientation: landscape)': {
      bottom: 41,
    },
    [theme.breakpoints.up('md')]: {
      bottom: 0,
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1, 0, 0.5),
    },
  },
  image: {
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
    margin: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      margin: theme.spacing(0.5, 2, 0.5, 1),
    },
  },
  album: {
    flex: 5,
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 0.5),
    },
  },
  station: {
    margin: theme.spacing(0, 2),
    flex: 5,
    [theme.breakpoints.down('xs')]: {
      display: 'none !important',
    },
  },
  labelButton: {
    minHeight: theme.spacing(6),
    padding: theme.spacing(0.5),

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0.5, 1),
    },
    [theme.breakpoints.up('md')]: {
      minHeight: theme.spacing(8),
      flexBasis: 70,
    },
  },
  slider: {
    width: 'unset',
    flex: 3,
  },
}));

const RadioPlayer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const player = useSelector(state => state.directory.player);
  const dispatch = useDispatch();
  const audio = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [stream, setStream] = useState(player.proxy);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const classes = useStyles(error);
  const chat = useSelector(state => state.general.chat);

  useEffect(() => {
    chat.hideWidget();

    return () => {
      chat.showWidget();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let request;
    let interval;

    const getSongMetadata = async () => {
      request = await dispatch(
        directoryServices.getSongMetadata(player.metadata, player.servertype),
      );
      interval = setInterval(async () => {
        request = await dispatch(
          directoryServices.getSongMetadata(player.metadata, player.servertype),
        );
      }, 10000);
    };

    getSongMetadata();

    return () => {
      clearInterval(interval);
      request.cancel();
    };
    // eslint-disable-next-line
  }, [player.metadata, dispatch]);

  useDidUpdate(() => {
    setStream(player.proxy);
    setError(false);
    setLoading(true);
    setPlaying(true);
  }, [player.proxy]);

  const handleLoad = () => {
    setError(false);
    setPlaying(true);
  };

  const handlePlay = () => {
    setError(false);
    setLoading(false);
  };

  const handleClick = () => {
    if (playing) {
      setPlaying(false);
    } else {
      setLoading(true);
      setStream(`${stream}?`);
      setPlaying(true);
    }
  };

  const handlePopup = () => {
    setPlaying(false);
    openPopup(player.player);
  };

  const handleLoadError = err => {
    if (err !== null) {
      setLoading(false);
      setPlaying(false);
      setError(true);
    }
  };

  return (
    <AppBar className={classes.appBar} position="fixed" color="primary" component="section">
      <Container className={classes.container} maxWidth="xl">
        <ReactHowler
          src={stream}
          playing={playing}
          ref={audio}
          html5
          onLoad={handleLoad}
          onPlay={handlePlay}
          onLoadError={handleLoadError}
        />
        <PlayButton loading={loading} playing={playing} onClick={handleClick} />
        <Image className={classes.image} src={player.image} />
        <PlayerInfo
          className={classes.album}
          title={player.artist}
          subtitle={player.title}
          error={error}
        />
        <PlayerInfo
          className={classes.station}
          title={player.station}
          subtitle={`Listeners: ${player.listeners}`}
          center
        />
        <IconButtonWithLabel className={classes.labelButton} icon={LikeIcon} label="Vote" />
        <ShareButton className={classes.labelButton} id={player.id} />
        <PopupButton onClick={handlePopup} />
        {matches && <VolumeSlider className={classes.slider} />}
      </Container>
    </AppBar>
  );
};

export default RadioPlayer;
