import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles(theme => ({
  button: {
    height: 'fit-content',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    fontWeight: 600,
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

const PopupButton = ({ onClick }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const classes = useStyles();

  return matches ? (
    <Button onClick={onClick} variant="contained" disableElevation className={classes.button}>
      Open in popup
    </Button>
  ) : (
    <IconButton
      onClick={onClick}
      className={classes.externalButton}
      color="inherit"
      aria-label="open player in popup"
    >
      <LaunchIcon className={classes.externalIcon} />
    </IconButton>
  );
};

PopupButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PopupButton;
