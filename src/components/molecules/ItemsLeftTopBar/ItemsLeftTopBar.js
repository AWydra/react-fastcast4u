/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import generalServices from 'services/general';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import { isNowBetween } from 'utils/date';

const useStyles = makeStyles({
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

const content =
  'FLASH SALE Special Deal: New Radio Server Packages 50% OFF | billed annually and biennially | {items} left'; // prepared for CMS integration

const ItemsLeftTopBar = () => {
  const [items, setItems] = useState('...');
  const currency = useSelector(state => state.general.currency);
  const classes = useStyles();

  useEffect(() => {
    generalServices.getItemsLeft('flashsalebill').then(res => setItems(res.uses));
  }, []);

  return (
    isNowBetween(Date.UTC(2020, 8, 28, 7), Date.UTC(2020, 8, 29, 7)) && (
      <Box py={0.5} bgcolor="primary.main">
        <Text className={classes.text} variant="h6">
          {content.replace('{items}', items).replace('{currency}', currency)}
        </Text>
      </Box>
    )
  );
};

export default ItemsLeftTopBar;
