// @ts-nocheck
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import orderServices from 'services/order';

import styled, { css } from 'styled-components';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductTable from 'components/molecules/ProductTable/ProductTable';
import BillingCycle from 'components/molecules/BillingCycle/BillingCycle';
import SummaryPrice from 'components/molecules/SummaryPrice/SummaryPrice';
import Promocode from 'components/molecules/Promocode/Promocode';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import { modeSwitch } from 'utils/theme';

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

const SummaryPriceContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing(1, 0)};
    display: flex;
    justify-content: space-between;
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
  const [redirect, setRedirect] = useState(false);
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
      console.error(err.message);
      setLoading(false);
    }
    setRedirect(true);
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
        <SummaryPriceContainer>
          <Text component="h5" variant="h6" fontSize={28} fontWeight={600}>
            Total Price:
          </Text>
          <SummaryPrice />
        </SummaryPriceContainer>
        <Divider />
        <Promocode />
      </FormContainer>
      <Divider />
      <FormContainer flexEnd>
        <CTAButton disabled={loading} onClick={handleClick} color="primary">
          CONTINUE
        </CTAButton>
        {redirect && <Redirect push to="/order/login" />}
      </FormContainer>
    </SummaryContainer>
  );
};

export default OrderSummary;
