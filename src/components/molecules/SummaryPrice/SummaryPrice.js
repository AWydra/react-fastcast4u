// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Text from 'components/atoms/Text/Text';
import generateCycle from 'utils/generateCycle';

const SummaryPriceItem = ({ period, cycle, price, after, label, ...props }) => {
  const currency = useSelector(state => state.order.currency);

  return (
    <Box my={1} display="flex" justifyContent="space-between" {...props}>
      <Text component="h5" variant="h6" fontSize="inherit" fontWeight={600}>
        {label || (after ? 'After' : 'Next')} {!label && generateCycle(period, cycle, after)}:
      </Text>
      <Text component="h5" variant="h6" fontSize="inherit" fontWeight={600}>
        {currency}
        {price}
      </Text>
    </Box>
  );
};

const SummaryPrice = () => {
  const order = useSelector(state => state.order);
  const { products, activeProduct, addons, activeAddons, cycle, plan, loading, recurfor } = order;

  if (loading) {
    return <Skeleton animation="wave" width="100%" height={57} />;
  }

  const productPrices = products.find(({ id }) => id === activeProduct)[cycle];
  const addonsArray = activeAddons.map(addonId => addons.find(el => el.relid === addonId));
  const addonsPrice = addonsArray.reduce((acc, el) => acc + el[cycle] * 1, 0);
  const addonsBasicPrice = addonsArray.reduce((acc, el) => acc + el[`${cycle}Basic`] * 1, 0);
  const price = productPrices[plan] * 1 + addonsPrice * 1;
  const basicPrice = productPrices[`${plan}Basic`] * 1 + addonsBasicPrice * 1;

  return (
    <>
      <SummaryPriceItem label="Total due today" cycle={cycle} price={price} fontSize={26} />
      {recurfor && recurfor[cycle] && price !== basicPrice && (
        <>
          <SummaryPriceItem
            period={recurfor[cycle] - 1}
            cycle={cycle}
            price={price}
            fontSize={20}
          />
          <SummaryPriceItem
            period={recurfor && recurfor[cycle]}
            cycle={cycle}
            price={basicPrice}
            fontSize={20}
            after
          />
        </>
      )}
    </>
  );
};

SummaryPriceItem.defaultProps = {
  period: 1,
  after: false,
  label: '',
};

SummaryPriceItem.propTypes = {
  period: PropTypes.number,
  cycle: PropTypes.oneOf(['monthly', 'annually', 'biennially']).isRequired,
  price: PropTypes.number.isRequired,
  after: PropTypes.bool,
  label: PropTypes.string,
};

export default SummaryPrice;
