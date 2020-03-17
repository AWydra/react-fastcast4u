import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Cover from 'components/atoms/Cover/Cover';

const useStyles = makeStyles({
  progress: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },
});

const LoadingCover = () => {
  const classes = useStyles();

  return (
    <Cover>
      <LinearProgress className={classes.progress} />
    </Cover>
  );
};

export default LoadingCover;
