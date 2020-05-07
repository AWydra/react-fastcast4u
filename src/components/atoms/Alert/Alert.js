// @ts-nocheck
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Snackbar, useMediaQuery, useTheme, makeStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useAlert } from 'utils/customHooks';

const useStyles = makeStyles(theme => ({
  snackbar: {
    marginBottom: props =>
      props.showPlayer && props.location.pathname.includes('radio-directory') && theme.spacing(6),
    bottom: props => props.matches && theme.spacing(9),
  },
}));

const Alert = () => {
  const alert = useAlert();
  const reduxAlert = useSelector(state => state.general.alert);
  const showPlayer = useSelector(state => state.directory.player.show);
  const theme = useTheme();
  const location = useLocation();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles({ matches, showPlayer, location });

  return (
    <Snackbar
      className={classes.snackbar}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: matches ? 'center' : 'left' }}
      open={reduxAlert.open}
      onClose={() => alert.hide()}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity={reduxAlert.type}
        onClose={() => alert.hide()}
      >
        {reduxAlert.content}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
