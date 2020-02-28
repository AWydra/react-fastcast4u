// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import Base from './Base';

const AddonBox = ({ data }) => {
  const dispatch = useDispatch();
  const isActive = useSelector(state => state.order.activeAddons.find(({ id }) => id === data.id));

  const handleClick = () => {
    dispatch(orderActions.toggleAddon(data));
  };

  return <Base data={data} onClick={handleClick} isActive={!!isActive} showPrice />;
};

AddonBox.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

AddonBox.defaultProps = {};

export default AddonBox;
