// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { Snackbar, useMediaQuery, useTheme, makeStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useAlert } from 'utils/customHooks';

const useStyles = makeStyles(theme => ({
  snackbar: {
    marginBottom: matches => matches && theme.spacing(8),
    bottom: matches => matches && theme.spacing(1),
  },
}));

const Alert = () => {
  const alert = useAlert();
  const reduxAlert = useSelector(state => state.general.alert);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles(matches);

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
