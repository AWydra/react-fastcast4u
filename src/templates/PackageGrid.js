import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import PremiumBox from 'components/molecules/PackageBox/PremiumBox';

const useStyles = makeStyles({
  grid: {
    '&:empty': {
      display: 'none',
    },
  },
});

const PlaceholderPackage = () => (
  <Grid item xs={12} lg={6}>
    <Skeleton animation="wave" variant="rect" height={174} />
  </Grid>
);

const PackageGrid = ({ addons, loading, children }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Grid container spacing={2}>
        <PlaceholderPackage />
        <PlaceholderPackage />
        {addons && (
          <>
            <PlaceholderPackage />
            <PlaceholderPackage />
          </>
        )}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {addons && (
        <Grid item xs={12} sm={6}>
          <PremiumBox />
        </Grid>
      )}

      {children.map((el, i) => (
        <Grid key={i} item xs={12} sm={6} className={classes.grid}>
          {el}
        </Grid>
      ))}
    </Grid>
  );
};

PackageGrid.propTypes = {
  addons: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

PackageGrid.defaultProps = {
  addons: false,
  loading: false,
};

export default PackageGrid;
