import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import generalServices from 'services/general';
import Promobar from 'components/organisms/Promobar/Promobar';

const useStyles = makeStyles({
  promobar: {
    marginTop: 0,
  },
});

const ItemsLeftBar = ({ primary, promocode, ...props }) => {
  const [items, setItems] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    promocode && generalServices.getItemsLeft(promocode).then(res => setItems(res.uses));
  }, [promocode]);

  return (
    <Promobar
      className={classes.promobar}
      primary={primary.replace('{items}', items || '...')}
      {...props}
    />
  );
};

ItemsLeftBar.propTypes = {
  primary: PropTypes.string.isRequired,
  promocode: PropTypes.string.isRequired,
};

export default ItemsLeftBar;
