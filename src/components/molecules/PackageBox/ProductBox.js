// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import orderActions from 'actions/orderActions';
import Base from './Base';

const ProductBox = ({ data }) => {
  const dispatch = useDispatch();
  const activeProduct = useSelector(state => state.order.activeProduct);

  const isActive = data.id === activeProduct;

  const handleClick = () => {
    dispatch(orderActions.toggleProduct(data.id));
  };

  return <Base data={data} onClick={handleClick} isActive={isActive} showPrice={false} />;
};

ProductBox.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

ProductBox.defaultProps = {};

export default ProductBox;
