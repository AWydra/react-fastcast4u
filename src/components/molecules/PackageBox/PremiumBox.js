// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import Base from './Base';

const data = {
  id: 'Premium stream quality - 320kbps',
  name: 'Premium stream quality - 320kbps',
  description: 'The highest online audio streaming bitrate for the best sound quality',
  monthly: '10.00',
  annually: '120.00',
  biennially: '240.00',
};

const PremiumBox = () => {
  const dispatch = useDispatch();
  const plan = useSelector(state => state.order.plan);
  const isActive = plan === 'premium';
  const cycle = useSelector(state => state.order.cycle);

  const handleClick = () => {
    dispatch(orderActions.setPlan(plan === 'regular' ? 'premium' : 'regular'));
  };

  return <Base data={data} onClick={handleClick} isActive={isActive} cycle={cycle} showPrice />;
};

export default PremiumBox;
