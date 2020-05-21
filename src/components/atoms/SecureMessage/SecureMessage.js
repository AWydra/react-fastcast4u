import React from 'react';
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
  const classes = useStyles();

  return (
    <Text variant="caption" className={classes.text}>
      Secure Server <PadlockIcon className={classes.icon} />
    </Text>
  );
};

export default SecureMessage;
