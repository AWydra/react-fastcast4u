// @ts-nocheck
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { makeStyles, Container, Grid } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import FancyTitle from 'components/atoms/FancyTitle/FancyTitle';
import IconList from 'components/molecules/IconList/IconList';
import ProductBox from 'components/molecules/PackageBox/ProductBox';
import AddonBox from 'components/molecules/PackageBox/AddonBox';
import Stepper from 'components/organisms/Stepper/Stepper';
import OrderSummary from 'components/organisms/OrderSummary/OrderSummary';
import IconListSection from 'components/organisms/IconListSection/IconListSection';
import PackageGrid from 'templates/PackageGrid';
import OrderAccessController from 'utils/OrderAccessController';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1500,
    marginTop: theme.spacing(5.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  content: {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(3),
      flex: '1 0 0',
    },
  },
  summary: {
    flex: '1 0 0',
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      flexBasis: 330,
    },
    [theme.breakpoints.up('xl')]: {
      flexBasis: 400,
    },
  },
}));

const OrderPackage = () => {
  const content = useSelector(state => state.language.orderPackage);
  const steps = useSelector(state => state.language.order.stepper);
  const products = useSelector(state => state.order.products);
  const addons = useSelector(state => state.order.addons);
  const loading = useSelector(state => state.order.loading);
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <Container className={classes.root}>
      <OrderAccessController currentStep={1} />
      <Grid container>
        <Grid item className={classes.content}>
          <Stepper steps={steps} activeStep={0} />
          <FancyTitle component="h3" variant="h4">
            {content.headings[0]}
          </FancyTitle>
          <IconListSection>
            {content.features.map((props, i) => (
              <IconList key={i} {...props} icon={<CheckCircleRoundedIcon />} />
            ))}
          </IconListSection>
          <FancyTitle component="h3" variant="h4">
            {content.headings[1]}
          </FancyTitle>
          <PackageGrid loading={loading}>
            {products.map(product => (
              <ProductBox key={product.id} data={product} showPrice={false} />
            ))}
          </PackageGrid>
          <FancyTitle component="h3" variant="h4">
            {content.headings[2]}
          </FancyTitle>
          <PackageGrid addons loading={loading}>
            {addons.map(addon => (
              <AddonBox key={addon.id} data={addon} showPrice />
            ))}
          </PackageGrid>
        </Grid>
        <Grid item className={classes.summary}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderPackage;
