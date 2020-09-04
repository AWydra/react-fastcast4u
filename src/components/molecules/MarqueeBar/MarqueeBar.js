/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Image from 'components/atoms/Image/Image';

const useStyles = makeStyles({
  marquee: {
    display: 'block',
  },
  image: {
    maxWidth: '80% !important',
  },
});

const MarqueeBar = () => {
  const classes = useStyles();
  return (
    <Box py={2} bgcolor="primary.main">
      <marquee className={classes.marquee} behavior="alternate">
        <Image className={classes.image} src="https://fastcast4u.com/img/flash/flash1w.png" />
      </marquee>
    </Box>
  );
};

export default MarqueeBar;
