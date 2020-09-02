// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import Base from './Base';

const Hide = ({ data, children }) => {
  const dispatch = useDispatch();
  const parentId = data.parent;
  const isParentActive = useSelector(state => state.order.activeAddons.includes(parentId));
  const isChildActive = useSelector(state => state.order.activeAddons.includes(data.relid));

  if (parentId && isChildActive && !isParentActive) {
    dispatch(orderActions.removeAddon(data.relid));
  }

  if (!parentId || isParentActive) return children;
  return null;
};

const AddonBox = ({ data }) => {
  const dispatch = useDispatch();
  const cycle = useSelector(state => state.order.cycle);
  const cycles = useSelector(state => state.language.orderPackage.cycles);
  const isActive = useSelector(state => state.order.activeAddons.find(id => id === data.relid));

  const handleClick = () => {
    dispatch(orderActions.toggleAddon(data.relid));
  };

  return (
    <Hide data={data}>
      <Base
        data={data}
        onClick={handleClick}
        isActive={!!isActive}
        cycle={cycle}
        cycleLabel={cycles[cycle]}
        showPrice
      />
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
