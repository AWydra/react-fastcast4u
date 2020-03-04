// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import Text from 'components/atoms/Text/Text';

const SummaryPrice = () => {
  const order = useSelector(state => state.order);
  const { products, activeProduct, addons, activeAddons, cycle, currency, plan, loading } = order;

  if (loading) {
    return <Skeleton animation="wave" width={50} height={44.8} />;
  }
  const productPrice = Number(products.find(({ id }) => id === activeProduct)[cycle][plan]);
  const addonsPrice = activeAddons
    .map(addonId => addons.find(el => el.id === addonId))
    .reduce((acc, el) => acc + el[cycle] * 1, 0);
  return (
    <Text component="h5" variant="h6" fontSize={28} fontWeight={600}>
      {currency}
      {productPrice + addonsPrice}
    </Text>
  );
};

export default SummaryPrice;
