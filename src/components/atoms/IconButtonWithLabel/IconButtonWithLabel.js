import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(0, 1),
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    fontSize: 32,
  },
  label: {
    fontSize: '1em',
  },
}));

const IconButtonWithLabel = ({ icon: Icon, label }) => {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.button}>
      <Icon className={classes.icon} />
      <span className={classes.label}>{label}</span>
    </ButtonBase>
  );
};

IconButtonWithLabel.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconButtonWithLabel;
