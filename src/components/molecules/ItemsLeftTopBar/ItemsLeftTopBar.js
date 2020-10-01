/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import generalServices from 'services/general';
import cmsServices from 'services/cms';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles({
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

const ItemsLeftTopBar = () => {
  const [data, setData] = useState({
    isActive: false,
    promocode: '',
    content: '',
  });

  const [items, setItems] = useState('...');
  const currency = useSelector(state => state.general.currency);
  const classes = useStyles();

  useEffect(() => {
    cmsServices.getTopBarData().then(({ bar }) => {
      setData({
        ...bar,
      });
      bar.promocode && generalServices.getItemsLeft(bar.promocode).then(res => setItems(res.uses));
    });
  }, []);

  return (
    data.isActive && (
      <Box py={0.5} bgcolor="primary.main">
        <Text className={classes.text} variant="h6">
          {data.content.replace('{items}', items).replace('{currency}', currency)}
        </Text>
      </Box>
    )
  );
};

export default ItemsLeftTopBar;
