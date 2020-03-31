// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar, useMediaQuery, useTheme, makeStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  snackbar: {
    marginBottom: matches => matches && theme.spacing(8),
    bottom: matches => matches && theme.spacing(1),
  },
}));

const Alert = ({ severity, children, ...props }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles(matches);
  return (
    <Snackbar
      className={classes.snackbar}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: matches ? 'center' : 'left' }}
      {...props}
    >
      <MuiAlert elevation={6} variant="filled" severity={severity} {...props}>
        {children}
      </MuiAlert>
    </Snackbar>
  );
};

Alert.propTypes = {
  severity: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default Alert;
