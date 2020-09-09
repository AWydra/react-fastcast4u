/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect } from 'react';
import generalServices from 'services/general';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles({
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

const MarqueeBar = () => {
  const [items, setItems] = useState('...');
  const classes = useStyles();

  useEffect(() => {
    generalServices.getItemsLeft('flashsaleapp').then(res => setItems(res.uses));
  }, []);

  return (
    <Box py={0.5} bgcolor="primary.main">
      <Text className={classes.text} variant="h6">
        Flash Sale: UNLIMITED Package + FREE Mobile App | LIMITED SUPPLY: {items} items left in
        stock
      </Text>
    </Box>
  );
};

export default MarqueeBar;
