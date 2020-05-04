import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonBase, makeStyles } from '@material-ui/core';

const Button = styled(ButtonBase)`
  display: 'flex';
  flex-direction: column;
  justify-content: space-around;
`;

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: theme.typography.pxToRem(25),
  },
  label: {
    fontSize: theme.typography.pxToRem(14.5),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const IconButtonWithLabel = ({ icon: Icon, label, ...props }) => {
  const classes = useStyles();

  return (
    <Button focusRipple centerRipple {...props}>
      <Icon className={classes.icon} />
      <span className={classes.label}>{label}</span>
    </Button>
  );
};

IconButtonWithLabel.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconButtonWithLabel;
