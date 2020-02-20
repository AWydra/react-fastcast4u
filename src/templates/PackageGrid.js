import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const PackageGrid = ({ children }) => (
  <Grid container spacing={2}>
    {children.map((el, i) => (
      <Grid key={i} item xs={12} lg={6}>
        {el}
      </Grid>
    ))}
  </Grid>
);

PackageGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PackageGrid;
