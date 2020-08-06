import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase, Box, Grid, makeStyles } from '@material-ui/core';
import Image from 'components/atoms/Image/Image';
import PromotionBanner from 'components/organisms/PromotionBanner/PromotionBanner';
import LoginForm from 'components/organisms/Forms/LoginForm/LoginForm';
import { modeSwitch } from 'utils/theme';
import { useCurrentLanguage } from 'utils/customHooks';
import logo from 'assets/img/logo.png';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    marginBottom: theme.spacing(-8),
  },
  login: {
    padding: theme.spacing(12, 1, 4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: modeSwitch(theme.palette.grey[50], theme.palette.grey[900]),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 1),
    },
    [theme.breakpoints.up('xl')]: {
      flex: 0,
      flexBasis: '550px',
    },
  },
  logo: {
    width: theme.spacing(28),
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(1),
    left: '50%',
    transform: 'translateX(-50%)',
  },
  loginContainer: {
    width: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2, 6),
    },
  },
  banner: {
    padding: theme.spacing(6, 2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[800],
    [theme.breakpoints.up('xl')]: {
      maxWidth: 'unset',
      flex: 1,
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const lng = useCurrentLanguage();

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.login} item xs={12} md={6} lg={5} xl={4}>
        <ButtonBase className={classes.logo} component={Link} to={lng} centerRipple focusRipple>
          <Image src={logo} />
        </ButtonBase>
        <Box className={classes.loginContainer}>
          <LoginForm />
        </Box>
      </Grid>
      <Grid className={classes.banner} item xs={12} md={6} lg={7} xl={8}>
        <PromotionBanner />
      </Grid>
    </Grid>
  );
};

export default Login;
