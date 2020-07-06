// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import RowContent from 'components/molecules/RowContent/RowContent';
import Picture from 'components/molecules/Picture/Picture';
import { Slide } from 'react-awesome-reveal';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    margin: theme.spacing(2, 0),
    padding: theme.spacing(4, 0),
    [theme.breakpoints.up('md')]: {
      minHeight: 450,
    },
  },
  item: {
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(0, 2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },

    '& img': {
      margin: '0 auto',
      maxHeight: 365,
    },

    [theme.breakpoints.up('sm')]: {
      order: ({ reverse }) => (reverse ? 1 : 0),
    },
  },
}));

const RowSection = ({ img, reverse, heading, long, ...props }) => {
  const classes = useStyles({ reverse, long });

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.image} item xs={12} sm={6} md={long ? 6 : 7}>
        <Slide direction={reverse ? 'right' : 'left'} triggerOnce>
          <div>{React.isValidElement(img) ? img : <Picture mobile={img} alt={heading} />}</div>
        </Slide>
      </Grid>
      <Grid className={classes.item} item xs={12} sm={6} md={long ? 6 : 5}>
        <RowContent long={long} heading={heading} {...props} />
      </Grid>
    </Grid>
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
