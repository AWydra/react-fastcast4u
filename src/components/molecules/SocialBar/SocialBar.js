import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  Container,
  Link as MuiLink,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { Call, Chat, Facebook, Twitter, YouTube, Instagram, LinkedIn } from '@material-ui/icons';
import CallRequestModal from 'components/organisms/Modals/CallRequestModal';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(0.25, 0),
    backgroundColor: modeSwitch(theme.palette.primary.main, theme.palette.primary.dark),
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  btn: {
    padding: theme.spacing(0, 2),
    color: 'white',
    textTransform: 'unset',
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'stretch',
  },
  link: {
    padding: theme.spacing(0.75),
    display: 'flex',
    color: 'white',
    borderRadius: '50%',
    transition: 'color .3s ease-in-out, background-color .3s ease-in-out',
    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.primary.main,
    },
  },
  icon: {
    fontSize: theme.spacing(3),
    color: 'inherit',
  },
}));

const SocialBar = () => {
  const [open, setOpen] = useState(false);
  const isChatOnline = useSelector(state => state.general.chat.isOnline);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();

  const handlePhoneClick = () => {
    setOpen(true);
  };

  const handleChatClick = () => {
    window.Tawk_API.maximize();
  };

  return (
    matches && (
      <Box className={classes.box}>
        <Container className={classes.container} maxWidth="xl">
          <Box className={classes.linkContainer}>
            <Button className={classes.btn} startIcon={<Call />} onClick={handlePhoneClick}>
              +1 (844) 203-2278
            </Button>
            {isChatOnline ? (
              <Button className={classes.btn} startIcon={<Chat />} onClick={handleChatClick}>
                Open Chat
              </Button>
            ) : (
              <Button component={Link} to="/ticket" className={classes.btn} startIcon={<Chat />}>
                Message Us
              </Button>
            )}
          </Box>
          <CallRequestModal open={open} onClose={() => setOpen(false)} />
          <Box className={classes.linkContainer}>
            <MuiLink
              className={classes.link}
              href="https://www.facebook.com/freeshoutcast/"
              target="_blank"
            >
              <Facebook className={classes.icon} />
            </MuiLink>
            <MuiLink
              className={classes.link}
              href="https://www.youtube.com/user/FastCast4u"
              target="_blank"
            >
              <YouTube className={classes.icon} />
            </MuiLink>
            <MuiLink
              className={classes.link}
              href="https://www.linkedin.com/company/fastcast4u"
              target="_blank"
            >
              <LinkedIn className={classes.icon} />
            </MuiLink>
            <MuiLink className={classes.link} href="https://twitter.com/FastCast4u" target="_blank">
              <Twitter className={classes.icon} />
            </MuiLink>
            <MuiLink
              className={classes.link}
              href="https://www.instagram.com/fastcast4u/"
              target="_blank"
            >
              <Instagram className={classes.icon} />
            </MuiLink>
          </Box>
        </Container>
      </Box>
    )
  );
};

export default SocialBar;
