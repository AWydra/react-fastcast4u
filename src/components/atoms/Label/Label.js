import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  label: {
    width: '100%',
    margin: 0,
    marginRight: theme.spacing(2),
    fontSize: '1rem',
    fontWeight: 600,
  },
}));

const Label = ({ ...props }) => {
  const classes = useStyles();

  return <Text className={classes.label} component="label" variant="h6" {...props} />;
};

export default Label;
