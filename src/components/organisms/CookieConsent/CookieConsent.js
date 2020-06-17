import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { AppBar, Button, Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bar: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.grey[900],
    zIndex: 2000000001,
  },
  container: {
    padding: theme.spacing(1.75),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    marginLeft: theme.spacing(0.75),
    color: theme.palette.grey[200],
    '&:hover': {
      color: 'white',
    },
  },
  text: {
    paddingRight: theme.spacing(0.5),
    flex: 1,
  },
  button: {
    color: 'white',
    borderColor: 'white',
  },
}));

const CookieConsent = () => {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies(['cookie-consent']);

  const handleClick = () => {
    const d = new Date();
    d.setTime(d.getTime() + 3.154e11);
    setCookie('cookie-consent', true, {
      expires: d,
    });
  };

  return (
    !cookies['cookie-consent'] && (
      <AppBar component="section" position="static" className={classes.bar}>
        <Container className={classes.container} maxWidth="xl">
          <Typography className={classes.text} variant="body1">
            This website uses cookies to ensure you get the best experience on our website.
            <Link aria-label="learn more about cookies" className={classes.link} to="/privacy">
              Learn more
            </Link>
          </Typography>
          <Button className={classes.button} onClick={handleClick} variant="outlined">
            Got it
          </Button>
        </Container>
      </AppBar>
    )
  );
};

export default CookieConsent;
