/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Button, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing(2),
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
          [theme.breakpoints.up('lg')]: {
            fontSize: 34,
            marginTop: theme.spacing(0),
          },
        }
      : {
          width: '100%',
          fontSize: 27,
          [theme.breakpoints.up('lg')]: {
            fontSize: 38,
            marginTop: theme.spacing(0),
          },
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
          fontSize: 17,
          color: theme.palette.grey[modeSwitch(700, 300)],
          [theme.breakpoints.up('lg')]: {
            fontSize: 19,
          },
        },
  btn: {
    marginTop: theme.spacing(4),
  },
}));

const RowContent = ({ heading, content, button, long }) => {
  const classes = useStyles(long);

  return (
    <Box className={classes.box}>
      <Text component="h3" variant="h3" mb={3} className={classes.heading}>
        {heading}
      </Text>
      <Text component="p" variant="h5" mt={0} className={classes.content}>
        {content}
      </Text>
      {button.label && (
        <Button
          className={classes.btn}
          component={button.onClick ? 'button' : button.href ? 'a' : Link}
          size="large"
          variant="contained"
          color="secondary"
          target={button.href && '_blank'}
          {...button}
        >
          {button.label}
        </Button>
      )}
    </Box>
  );
};

RowContent.defaultProps = {
  button: {},
  long: false,
};

RowContent.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
  }),
  long: PropTypes.bool,
};

export default RowContent;
