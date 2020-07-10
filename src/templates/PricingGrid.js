import React from 'react';
import { Container, Grid } from '@material-ui/core';

const PricingGrid = ({ ...props }) => (
  <Container component="section" maxWidth="xl">
    <Grid
      container
      spacing={2}
      justify="center"
      style={{
        padding: '24px 0px 56px',
      }}
      {...props}
    />
  </Container>
);

export default PricingGrid;
