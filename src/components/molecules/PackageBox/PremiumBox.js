// @ts-nocheck
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import Base from './Base';

const countPrice = (product, cycle) => product[cycle].premium - product[cycle].regular;
const countBasicPrice = (product, cycle) =>
  product[cycle].premiumBasic - product[cycle].regularBasic;

const PremiumBox = () => {
  const dispatch = useDispatch();
  const cycle = useSelector(state => state.order.cycle);
  const plan = useSelector(state => state.order.plan);
  const activeProduct = useSelector(state => state.order.activeProduct);
  const products = useSelector(state => state.order.products);
  const product = products.find(el => el.id === activeProduct);
  const isActive = plan === 'premium';

  const data = useMemo(
    () => ({
      id: 'Premium stream quality - 320kbps',
      name: 'Premium stream quality - 320kbps',
      description: 'The highest online audio streaming bitrate for the best sound quality',
      monthly: countPrice(product, 'monthly'),
      monthlyBasic: countBasicPrice(product, 'monthly'),
      annually: countPrice(product, 'annually'),
      annuallyBasic: countBasicPrice(product, 'annually'),
      biennially: countPrice(product, 'biennially'),
      bienniallyBasic: countBasicPrice(product, 'biennially'),
    }),
    [product],
  );

  const handleClick = () => {
    dispatch(orderActions.setPlan(plan === 'regular' ? 'premium' : 'regular'));
  };

  return <Base data={data} onClick={handleClick} isActive={isActive} cycle={cycle} showPrice />;
};

export default PremiumBox;
