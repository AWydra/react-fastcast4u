// @ts-nocheck
import React from 'react';
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

const data = [
  {
    heading: 'Server',
    content: [
      'Unlimited Listeners',
      'Unlimited Traffic (Bandwidth)',
      'Unlimited AutoDJ Disc Space',
    ],
  },
  {
    heading: 'Features',
    content: [
      'Online Radio Control Panel',
      'AutoDJ Stream Automation',
      'Easy Live Stream Connection',
    ],
  },
  {
    heading: 'Addons',
    content: [
      'WebPlayer Page & Radio Player',
      'Server Downtime Monitoring',
      'Twitter and Tunein Addons',
    ],
  },
];

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
  const products = useSelector(state => state.order.products);
  const addons = useSelector(state => state.order.addons);

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item className={classes.content}>
          <Stepper
            steps={['Create your Server Package', 'Create Account', 'Payment & Setup']}
            activeStep={0}
          />
          <FancyTitle component="h3" variant="h4">
            Your Package Includes
          </FancyTitle>
          <IconListSection>
            {data.map((props, i) => (
              <IconList key={i} {...props} icon={<CheckCircleRoundedIcon />} />
            ))}
          </IconListSection>
          <FancyTitle component="h3" variant="h4">
            Select Control Panel
          </FancyTitle>
          <PackageGrid>
            {products.map(product => (
              <ProductBox key={product.id} data={product} showPrice={false} />
            ))}
          </PackageGrid>
          <FancyTitle component="h3" variant="h4">
            Select Addons
          </FancyTitle>
          <PackageGrid addons>
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

// For better future: obj1.map((el, i) => ({...el, ...obj2[i]}))

export default OrderPackage;
