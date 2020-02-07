import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import FeatureBox from 'components/molecules/FeatureBox/FeatureBox';

const Features = ({ data }) => (
  <Grid container spacing={3}>
    {data.map(({ ...props }, i) => (
      <Grid key={i} item xs={12} md={6} xl={4}>
        <FeatureBox {...props} />
      </Grid>
    ))}
  </Grid>
);
Features.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Features;
