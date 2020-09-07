import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import generalServices from 'services/general';
import Promobar from 'components/organisms/Promobar/Promobar';

const ItemsLeftBar = ({ primary, promocode, ...props }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    generalServices.getItemsLeft(promocode).then(res => setItems(res.uses));
  }, [promocode]);

  return <Promobar primary={primary.replace('{items}', items || '...')} {...props} />;
};

ItemsLeftBar.propTypes = {
  primary: PropTypes.string.isRequired,
  promocode: PropTypes.string.isRequired,
};

export default ItemsLeftBar;
