import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import PadlockIcon from 'assets/svg/PadlockIcon';

const useStyles = makeStyles(theme => ({
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: theme.spacing(0.5),
    fontSize: 'inherit',
    color: theme.palette.warning.main,
  },
}));

const SecureMessage = () => {
  const content = useSelector(state => state.language.orderPayment.secure);
  const classes = useStyles();

  return (
    <Text variant="caption" className={classes.text}>
      {content} <PadlockIcon className={classes.icon} />
    </Text>
  );
};

export default SecureMessage;
