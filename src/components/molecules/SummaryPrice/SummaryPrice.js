// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const SummaryPrice = () => {
  const order = useSelector(state => state.order);
  const { activeProduct, activeAddons, cycle, currency } = order;

  const productPrice = activeProduct[cycle].regular * 1;
  const addonsPrice = activeAddons.reduce((acc, el) => acc + el[cycle] * 1, 0);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Text component="h5" variant="h6" fontSize={28} fontWeight={600}>
        Total Price:
      </Text>
      <Text component="h5" variant="h6" fontSize={28} fontWeight={600}>
        {currency}
        {productPrice + addonsPrice}
      </Text>
    </div>
  );
};

export default SummaryPrice;
