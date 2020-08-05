// @ts-nocheck
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import orderServices from 'services/order';

import styled, { css } from 'styled-components';
import { Divider, makeStyles } from '@material-ui/core';
import ProductTable from 'components/molecules/ProductTable/ProductTable';
import BillingCycle from 'components/molecules/BillingCycle/BillingCycle';
import SummaryPrice from 'components/molecules/SummaryPrice/SummaryPrice';
import Promocode from 'components/molecules/Promocode/Promocode';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import { modeSwitch } from 'utils/theme';
import history from 'utils/history';
import { useCurrentLanguage } from 'utils/customHooks';

const SummaryContainer = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: ${theme.spacing(5)}px;
    background-color: ${theme.palette.background.paper};
    border: solid 1px ${modeSwitch(theme.palette.grey[400], theme.palette.grey[800])};
    border-radius: ${theme.shape.borderRadius}px;

    ${theme.breakpoints.down('sm')} {
      margin-top: ${theme.spacing(5)}px;
    }
  `}
`;

const FormContainer = styled.div`
  padding: 15px;
  ${({ flexEnd }) =>
    flexEnd &&
    css`
      display: flex;
      justify-content: flex-end;
    `}
`;

const Continue = () => {
  const [loading, setLoading] = useState(false);
  const content = useSelector(state => state.language.orderPackage.summary.continue);
  const products = useSelector(state => state.order.products);
  const activeProduct = useSelector(state => state.order.activeProduct);
  const plan = useSelector(state => state.order.plan);
  const activeAddons = useSelector(state => state.order.activeAddons);
  const cycle = useSelector(state => state.order.cycle);
  const promocode = useSelector(state => state.order.promocode);
  const orderLoading = useSelector(state => state.order.loading);
  const lng = useCurrentLanguage();

  const handleClick = async () => {
    setLoading(true);

    const productID = products.find(({ id }) => id === activeProduct).plan[plan];

    const packageData = {
      product: productID,
      addons: activeAddons.join(','),
      billingcycle: cycle,
      promocode,
    };

    try {
      await orderServices.setStep2(packageData);
    } catch (err) {
      setLoading(false);
    }
    history.push(`${lng}/order/login`);
  };

  return (
    <FormContainer flexEnd>
      <CTAButton loading={loading} disabled={orderLoading} onClick={handleClick} color="primary">
        {content}
      </CTAButton>
    </FormContainer>
  );
};

const useStyles = makeStyles(({ palette }) => ({
  heading: {
    color: palette.type !== 'dark' && palette.grey[800],
    fontWeight: 600,
    fontSize: 20,
  },
}));

const OrderSummary = () => {
  const classes = useStyles();
  const heading = useSelector(state => state.language.orderPackage.summary.heading);

  return (
    <SummaryContainer>
      <Text className={classes.heading} component="h5" variant="h5" p={2}>
        {heading}
      </Text>
      <Divider />
      <ProductTable />
      <FormContainer>
        <BillingCycle />
        <Divider />
        <SummaryPrice />
        <Divider />
        <Promocode />
      </FormContainer>
      <Divider />
      <Continue />
    </SummaryContainer>
  );
};

export default OrderSummary;
