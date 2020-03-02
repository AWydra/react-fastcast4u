import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import PremiumBox from 'components/molecules/PackageBox/PremiumBox';

const useStyles = makeStyles({
  grid: {
    '&:empty': {
      display: 'none',
    },
  },
});

const PackageGrid = ({ addons, children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {addons && (
        <Grid item xs={12} lg={6}>
          <PremiumBox />
        </Grid>
      )}

      {children.map((el, i) => (
        <Grid key={i} item xs={12} lg={6} className={classes.grid}>
          {el}
          {console.log('el', el.children)}
        </Grid>
      ))}
    </Grid>
  );
};

PackageGrid.propTypes = {
  addons: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

PackageGrid.defaultProps = {
  addons: false,
};

export default PackageGrid;
