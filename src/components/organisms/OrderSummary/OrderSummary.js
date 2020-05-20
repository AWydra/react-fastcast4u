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

const useStyles = makeStyles(({ palette }) => ({
  heading: {
    color: palette.type !== 'dark' && palette.grey[800],
    fontWeight: 600,
    fontSize: 20,
  },
}));

const OrderSummary = () => {
  const order = useSelector(state => state.order);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handleClick = async () => {
    setLoading(true);

    const productID = order.products.find(({ id }) => id === order.activeProduct).plan[order.plan];

    const packageData = {
      product: productID,
      addons: order.activeAddons.join(','),
      billingcycle: order.cycle,
      promocode: order.promocode,
    };

    try {
      await orderServices.setStep2(packageData);
    } catch (err) {
      setLoading(false);
    }
    history.push('/order/login');
  };

  return (
    <SummaryContainer>
      <Text className={classes.heading} component="h5" variant="h5" p={2}>
        ORDER SUMMARY
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
      <FormContainer flexEnd>
        <CTAButton loading={loading} onClick={handleClick} color="primary">
          CONTINUE
        </CTAButton>
      </FormContainer>
    </SummaryContainer>
  );
};

export default OrderSummary;
