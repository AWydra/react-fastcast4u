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
    margin: theme.spacing(2, 0),
    padding: theme.spacing(4, 0),
  },
  item: {
    padding: ({ long }) => long && theme.spacing(0, 1.5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: ({ reverse, long }) =>
      long ? (reverse ? 'flex-start' : 'flex-end') : reverse ? 'flex-end' : 'flex-start',
    textAlign: ({ reverse, long }) =>
      long ? (reverse ? 'left' : 'right') : reverse ? 'right' : 'left',
    [theme.breakpoints.down('sm')]: {
      padding: '0 !important',
      textAlign: 'center !important',
      alignItems: 'center !important',
    },
  },
  image: {
    minHeight: 200,
    padding: ({ long }) => (long ? theme.spacing(0, 1.5) : theme.spacing(0, 2)),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      margin: '0 auto',
      maxHeight: '100%',
      padding: ({ long }) => !long && theme.spacing(0, 8),
    },
    '& > *': {
      width: '100%',
    },

    [theme.breakpoints.up('md')]: {
      order: ({ reverse }) => (reverse ? 1 : 0),
    },

    [theme.breakpoints.down('sm')]: {
      order: 'unset',
      padding: '0 !important',
      '& img': {
        padding: theme.spacing(0),
      },
    },
  },
}));

const RowSection = ({ img, reverse, heading, long, ...props }) => {
  const classes = useStyles({ reverse, long });
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
          <Grid className={classes.image} item xs={12} md={long ? 6 : 7}>
            {React.isValidElement(img) ? img : <Image src={img} alt={heading} />}
          </Grid>
        </Slide>
        <Slide direction={reverse ? 'right' : 'left'} in={show} timeout={{ enter: 900 }}>
          <Grid className={classes.item} item xs={12} md={long ? 6 : 5}>
            <RowContent long={long} heading={heading} {...props} />
          </Grid>
        </Slide>
      </Grid>
    </LazyLoadComponent>
  );
};

RowSection.defaultProps = {
  long: false,
};

RowSection.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  reverse: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  long: PropTypes.bool,
};

export default RowSection;
