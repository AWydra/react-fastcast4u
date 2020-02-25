import React from 'react';
import { connect } from 'react-redux';
import actions from 'actions/orderActions';

import { makeStyles, Container, Grid } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import FancyTitle from 'components/atoms/FancyTitle/FancyTitle';
import IconList from 'components/molecules/IconList/IconList';
import PackageBox from 'components/molecules/ProductBox/ProductBox';
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

const OrderPackage = ({ order, setCycle }) => {
  console.log(order);
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
            <PackageBox isActive />
            <PackageBox isActive={false} />
          </PackageGrid>
          <FancyTitle component="h3" variant="h4">
            Select Addons
          </FancyTitle>
          <PackageGrid>
            <PackageBox price={10} isActive />
            <PackageBox price={10} isActive={false} />
            <PackageBox price={10} isActive={false} />
            <PackageBox price={10} isActive={false} />
          </PackageGrid>
        </Grid>
        <Grid item className={classes.summary}>
          <OrderSummary order={order} setCycle={setCycle} />
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({ order }) => ({
  order,
});

const mapDispatchToProps = dispatch => ({
  setCycle: cycle => {
    dispatch(actions.setCycle(cycle));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPackage);
