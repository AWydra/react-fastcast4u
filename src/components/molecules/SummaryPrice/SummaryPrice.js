// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Text from 'components/atoms/Text/Text';

const FinalPrice = () => {
  const order = useSelector(state => state.order);
  const { products, activeProduct, addons, activeAddons, cycle, currency, plan, loading } = order;

  if (loading) {
    return <Skeleton animation="wave" width={50} height={44.8} />;
  }
  const productPrice = Number(products.find(({ id }) => id === activeProduct)[cycle][plan]);
  const addonsPrice = activeAddons
    .map(addonId => addons.find(el => el.relid === addonId))
    .reduce((acc, el) => acc + el[cycle] * 1, 0);
  return (
    <Text component="h5" variant="h6" fontSize={28} fontWeight={600}>
      {currency}
      {productPrice + addonsPrice}
    </Text>
  );
};

const SummaryPrice = () => (
  <Box my={1} display="flex" justifyContent="space-between">
    <Text component="h5" variant="h6" fontSize={28} fontWeight={600}>
      Total Price:
    </Text>
    <FinalPrice />
  </Box>
);
export default SummaryPrice;
