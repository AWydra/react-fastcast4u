// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import RowContent from 'components/molecules/RowContent/RowContent';
import Image from 'components/atoms/Image/Image';

const useStyles = makeStyles(theme => ({
  container: {
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
    padding: theme.spacing(0, 2),

    '& img': {
      margin: '0 auto',
      padding: theme.spacing(0, 8),
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

const RowSection = ({ img, reverse, ...props }) => {
  const classes = useStyles(reverse);

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.image} item xs={12} lg={7}>
        <Image src={img} />
      </Grid>
      <Grid className={classes.item} item xs={12} lg={5}>
        <RowContent reverse={reverse} {...props} />
      </Grid>
    </Grid>
  );
};

RowSection.propTypes = {
  img: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
};

export default RowSection;
