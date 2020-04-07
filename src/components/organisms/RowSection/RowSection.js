// @ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Slide } from '@material-ui/core';
import RowContent from 'components/molecules/RowContent/RowContent';
import Image from 'components/atoms/Image/Image';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    minHeight: 450,
    padding: theme.spacing(4, 0),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: reverse => (reverse ? 'flex-end' : 'flex-start'),
    align: reverse => (reverse ? 'right' : 'left'),
  },
  image: {
    minHeight: 200,
    padding: theme.spacing(0, 2),
    display: 'flex',
    justifyContent: 'center',

    '& img': {
      margin: '0 auto',
      maxHeight: '100%',
      padding: theme.spacing(0, 8),
    },
    '& > *': {
      width: '100%',
    },

    [theme.breakpoints.up('lg')]: {
      order: reverse => (reverse ? 1 : 0),
    },

    [theme.breakpoints.down('md')]: {
      order: 'unset',
      padding: theme.spacing(0, 4),
      '& img': {
        padding: theme.spacing(0),
      },
    },
  },
}));

const RowSection = ({ img, reverse, heading, ...props }) => {
  const classes = useStyles(reverse);
  const [show, setShow] = useState(false);

  return (
    <LazyLoadComponent
      threshold={0}
      height={380}
      afterLoad={() => {
        setShow(true);
      }}
    >
      <Grid className={classes.container} container>
        <Slide direction={reverse ? 'left' : 'right'} in={show} timeout={{ enter: 900 }}>
          <Grid className={classes.image} item xs={12} lg={7}>
            <Image src={img} alt={heading} />
          </Grid>
        </Slide>
        <Slide direction={reverse ? 'right' : 'left'} in={show} timeout={{ enter: 900 }}>
          <Grid className={classes.item} item xs={12} lg={5}>
            <RowContent reverse={reverse} heading={heading} {...props} />
          </Grid>
        </Slide>
      </Grid>
    </LazyLoadComponent>
  );
};

RowSection.propTypes = {
  img: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
};

export default RowSection;
