import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    justifyContent: 'space-around',
  },
  item: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      flexGrow: 0,
    },
  },
}));

const IconListSection = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      {children.map((child, i) => (
        <Grid key={i} className={classes.item} item>
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

IconListSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default IconListSection;
