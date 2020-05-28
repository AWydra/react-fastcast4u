// @ts-nocheck
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Text from 'components/atoms/Text/Text';
import generateCycle from 'utils/generateCycle';

const OldPrice = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacing(0.5)}px;
    color: ${theme.palette.grey[600]};
    font-size: 1rem;
    font-weight: 400;
    text-decoration: line-through;
    vertical-align: text-top;
  `}
`;

const SummaryPriceItem = ({ period, cycle, price, after, label, basicPrice, ...props }) => {
  const currency = useSelector(state => state.order.currency);

  return (
    <Box my={1} display="flex" justifyContent="space-between" {...props}>
      <Text component="h5" variant="h6" fontSize="inherit" fontWeight={600}>
        {label || (after ? 'After' : 'Next')} {!label && generateCycle(period, cycle, after)}
      </Text>
      <Text component="h5" variant="h6" fontSize="inherit" fontWeight={600}>
        {basicPrice && (
          <OldPrice>
            {currency}
            {basicPrice}
          </OldPrice>
        )}
        {currency}
        {price}
      </Text>
    </Box>
  );
};

const SummaryPrice = () => {
  const order = useSelector(state => state.order);
  const { products, activeProduct, addons, activeAddons, cycle, plan, recurfor } = order;

  const productPrices = useMemo(() => products.find(({ id }) => id === activeProduct)[cycle], [
    products,
    activeProduct,
    cycle,
  ]);
  const addonsArray = useMemo(
    () => activeAddons.map(addonId => addons.find(el => el.relid === addonId)),
    [activeAddons, addons],
  );
  const addonsPrice = useMemo(() => addonsArray.reduce((acc, el) => acc + el[cycle] * 1, 0), [
    addonsArray,
    cycle,
  ]);
  const addonsBasicPrice = useMemo(
    () => addonsArray.reduce((acc, el) => acc + el[`${cycle}Basic`] * 1, 0),
    [addonsArray, cycle],
  );
  const price = useMemo(
    () => ({
      basic: (productPrices[`${plan}Basic`] * 1 + addonsBasicPrice * 1).toFixed(2),
      discounted: (productPrices[plan] * 1 + addonsPrice * 1).toFixed(2),
    }),
    [productPrices, addonsPrice, addonsBasicPrice, plan],
  );

  return (
    <>
      <SummaryPriceItem
        label="Total due today:"
        cycle={cycle}
        price={price.discounted}
        fontSize={25}
      />
      {recurfor && recurfor[cycle] && price.discounted !== price.basic && (
        <>
          {recurfor[cycle] > 1 && (
            <SummaryPriceItem
              period={recurfor[cycle] - 1}
              cycle={cycle}
              price={price.discounted}
              basicPrice={price.basic}
              fontSize={20}
            />
          )}
          <SummaryPriceItem
            period={recurfor && recurfor[cycle]}
            cycle={cycle}
            price={price.basic}
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
  basicPrice: false,
};

SummaryPriceItem.propTypes = {
  period: PropTypes.number,
  cycle: PropTypes.oneOf(['monthly', 'annually', 'biennially']).isRequired,
  price: PropTypes.string.isRequired,
  after: PropTypes.bool,
  label: PropTypes.string,
  basicPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default () => {
  const loading = useSelector(state => state.order.loading);

  return loading ? <Skeleton animation="wave" width="100%" height={57} /> : <SummaryPrice />;
};
