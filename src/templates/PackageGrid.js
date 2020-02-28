import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PremiumBox from 'components/molecules/PackageBox/PremiumBox';

const PackageGrid = ({ addons, children }) => (
  <Grid container spacing={2}>
    {children.map((el, i) => (
      <Fragment key={i}>
        {addons && i === 0 && (
          <Grid item xs={12} lg={6}>
            <PremiumBox />
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          {el}
        </Grid>
      </Fragment>
    ))}
  </Grid>
);

PackageGrid.propTypes = {
  addons: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

PackageGrid.defaultProps = {
  addons: false,
};

export default PackageGrid;
