/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Button, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
    height: '100%',
    display: 'inherit',
    flexDirection: 'inherit',
    justifyContent: 'inherit',
    alignItems: 'inherit',
    textAlign: 'inherit',
  },
  heading: long =>
    long
      ? {
          width: '100%',
          fontSize: 27,
          marginTop: theme.spacing(3),
          [theme.breakpoints.up('lg')]: {
            fontSize: 34,
            marginTop: theme.spacing(0),
          },
        }
      : {
          width: '100%',
          ...theme.typography.h3,
        },
  content: long =>
    long
      ? {
          width: '100%',
          fontSize: 16,
          [theme.breakpoints.up('lg')]: {
            fontSize: 18,
          },
        }
      : {
          width: '100%',
          ...theme.typography.h5,
        },
}));

const RowContent = ({ heading, content, button, long }) => {
  const classes = useStyles(long);

  return (
    <Box className={classes.box}>
      <Text component="h3" variant="h3" mb={3} className={classes.heading}>
        {heading}
      </Text>
      <Text component="p" variant="h5" mt={0} mb={4} className={classes.content}>
        {content}
      </Text>
      <Button
        component={button.onClick ? 'button' : button.href ? 'a' : Link}
        size="large"
        variant="contained"
        color="secondary"
        target={button.href && '_blank'}
        {...button}
      >
        {button.label}
      </Button>
    </Box>
  );
};

RowContent.defaultProps = {
  long: false,
};

RowContent.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
  }).isRequired,
  long: PropTypes.bool,
};

export default RowContent;
