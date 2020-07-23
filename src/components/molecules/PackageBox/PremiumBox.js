// @ts-nocheck
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import Base from './Base';

const countPrice = (product, cycle) => product[cycle].premium - product[cycle].regular;
const countBasicPrice = (product, cycle) =>
  product[cycle].premiumBasic - product[cycle].regularBasic;

const PremiumBox = () => {
  const content = useSelector(state => state.language.orderPackage.premium);
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
      name: content.name,
      description: content.description,
      monthly: countPrice(product, 'monthly'),
      monthlyBasic: countBasicPrice(product, 'monthly'),
      annually: countPrice(product, 'annually'),
      annuallyBasic: countBasicPrice(product, 'annually'),
      biennially: countPrice(product, 'biennially'),
      bienniallyBasic: countBasicPrice(product, 'biennially'),
    }),
    [product, content],
  );

  const handleClick = () => {
    dispatch(orderActions.setPlan(plan === 'regular' ? 'premium' : 'regular'));
  };

  return <Base data={data} onClick={handleClick} isActive={isActive} cycle={cycle} showPrice />;
};

export default PremiumBox;
