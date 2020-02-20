import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
}));

const PackageGrid = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      {children.map((el, i) => (
        <Grid key={i} item xs={12} lg={12} xl={6}>
          {el}
        </Grid>
      ))}
    </Grid>
  );
};

PackageGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PackageGrid;
