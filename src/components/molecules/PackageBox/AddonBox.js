// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import Base from './Base';

const Hide = ({ data, children }) => {
  const dispatch = useDispatch();
  const parentId = data.parent;
  const activeParent = useSelector(state => state.order.activeAddons.includes(parentId));

  if (parentId && !activeParent) {
    dispatch(orderActions.removeAddon(data.relid));
  }

  if (!parentId || activeParent) return children;
  return null;
};

const AddonBox = ({ data }) => {
  const dispatch = useDispatch();
  const cycle = useSelector(state => state.order.cycle);
  const isActive = useSelector(state => state.order.activeAddons.find(id => id === data.relid));

  const handleClick = () => {
    dispatch(orderActions.toggleAddon(data.relid));
  };

  return (
    <Hide data={data}>
      <Base data={data} onClick={handleClick} isActive={!!isActive} cycle={cycle} showPrice />
    </Hide>
  );
};

AddonBox.propTypes = {
  data: PropTypes.shape({
    relid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

AddonBox.defaultProps = {};

export default AddonBox;
