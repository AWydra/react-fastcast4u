import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ArrowForwardIos';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  button: {
    width: '100%',
    margin: theme.spacing(0.75, 0),
    padding: theme.spacing(1.25, 2),
    justifyContent: 'flex-start',
    border: 'solid 1px',
    borderColor: modeSwitch(theme.palette.grey[400], theme.palette.grey[700]),
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 600,
    textTransform: 'unset',
  },
  label: {
    flexWrap: 'wrap',
  },
  arrow: {
    color: theme.palette.grey[700],
    fontSize: `${theme.typography.pxToRem(18)} !important`,
  },
}));

const PaymentButton = ({ ...props }) => {
  const classes = useStyles();

  return (
    <Button
      startIcon={<ArrowIcon className={classes.arrow} />}
      classes={{ root: classes.button, label: classes.label }}
      focusRipple
      variant="outlined"
      size="large"
      {...props}
    />
  );
};

export default PaymentButton;
