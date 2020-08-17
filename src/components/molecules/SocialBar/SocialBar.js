import React, { useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  Container,
  Link as MuiLink,
  Tooltip,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { Call, Chat, Facebook, Twitter, YouTube, Instagram, LinkedIn } from '@material-ui/icons';
import { modeSwitch } from 'utils/theme';

const CallRequestModal = lazy(() => import('components/organisms/Modals/CallRequestModal'));

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

const data = [
  {
    href: 'https://www.facebook.com/freeshoutcast/',
    icon: Facebook,
    label: 'Facebook',
  },
  {
    href: 'https://www.youtube.com/user/FastCast4u',
    icon: YouTube,
    label: 'YouTube',
  },
  {
    href: 'https://www.linkedin.com/company/fastcast4u',
    icon: LinkedIn,
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/FastCast4u',
    icon: Twitter,
    label: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/fastcast4u/',
    icon: Instagram,
    label: 'Instagram',
  },
];

const SocialBar = () => {
  const content = useSelector(state => state.language.components.header);
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
            <Tooltip title={content.request}>
              <Button
                className={classes.btn}
                startIcon={<Call />}
                onClick={handlePhoneClick}
                disabled={open}
              >
                +1 (844) 203-2278
              </Button>
            </Tooltip>
            {isChatOnline ? (
              <Button className={classes.btn} startIcon={<Chat />} onClick={handleChatClick}>
                {content.open}
              </Button>
            ) : (
              <Button component={Link} to="/ticket" className={classes.btn} startIcon={<Chat />}>
                {content.message}
              </Button>
            )}
          </Box>
          <Box className={classes.linkContainer}>
            {data.map(({ href, icon: Icon, label }) => (
              <Tooltip key={href} title={label}>
                <MuiLink
                  className={classes.link}
                  href={href}
                  target="_blank"
                  aria-label={label.toLowerCase()}
                >
                  <Icon className={classes.icon} />
                </MuiLink>
              </Tooltip>
            ))}
          </Box>
        </Container>
        <Suspense fallback="">
          {open && <CallRequestModal open={open} onClose={() => setOpen(false)} />}
        </Suspense>
      </Box>
    )
  );
};

export default SocialBar;
