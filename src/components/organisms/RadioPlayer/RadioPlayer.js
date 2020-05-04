import React from 'react';
import {
  AppBar,
  Button,
  Container,
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Image from 'components/atoms/Image/Image';
import IconButtonWithLabel from 'components/atoms/IconButtonWithLabel/IconButtonWithLabel';
import PlayerInfo from 'components/molecules/PlayerInfo/PlayerInfo';
import VolumeSlider from 'components/molecules/VolumeSlider/VolumeSlider';
import PlayIcon from 'assets/svg/PlayIcon';
// import PauseIcon from '@material-ui/icons/Pause';
import LikeIcon from '@material-ui/icons/ThumbUpOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 59,
    zIndex: 2000000001,
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
  iconButton: {
    padding: theme.spacing(0.5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
    },
  },
  icon: {
    fontSize: theme.typography.pxToRem(28),
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.pxToRem(32),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(36),
    },
  },
  image: {
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
    margin: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
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
  button: {
    height: 'fit-content',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    fontWeight: 600,
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
  externalButton: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
      display: 'block',
    },
  },
  externalIcon: {
    fontSize: theme.typography.pxToRem(25),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(32),
    },
  },
}));

const RadioPlayer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed" color="primary" component="section">
      <Container className={classes.container} maxWidth="xl">
        <IconButton className={classes.iconButton} color="inherit" aria-label="play or pause radio">
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
        <IconButtonWithLabel className={classes.labelButton} icon={LikeIcon} label="Vote" />
        <IconButtonWithLabel className={classes.labelButton} icon={ShareIcon} label="Share" />
        {matches ? (
          <Button variant="contained" disableElevation className={classes.button}>
            Open in popup
          </Button>
        ) : (
          <IconButton
            className={classes.externalButton}
            color="inherit"
            aria-label="open player in popup"
          >
            <LaunchIcon className={classes.externalIcon} />
          </IconButton>
        )}

        {matches && <VolumeSlider className={classes.slider} />}
      </Container>
    </AppBar>
  );
};

export default RadioPlayer;