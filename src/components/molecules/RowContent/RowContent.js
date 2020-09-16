/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import { modeSwitch } from 'utils/theme';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
  item: {
    padding: 0,
  },
  listIcon: {
    minWidth: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  icon: {
    fontSize: 18,
  },
  itemText: {
    fontSize: '1rem',
  },
  btn: {
    marginTop: theme.spacing(3),
  },
}));

const RowContent = ({ heading, content, button, list, long }) => {
  const classes = useStyles(long);

  return (
    <Box className={classes.box}>
      <Text component="h3" variant="h3" mb={3} className={classes.heading}>
        {heading}
      </Text>
      {content && (
        <Text component="p" variant="h5" mt={0} className={classes.content}>
          {content}
        </Text>
      )}
      {!!list.length && (
        <List>
          {list.map(content => (
            <ListItem key={content} disableGutters className={classes.item}>
              <ListItemIcon className={classes.listIcon}>
                <CheckCircleIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.itemText} primary={content} />
            </ListItem>
          ))}
        </List>
      )}
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
  content: '',
  list: [],
  button: {},
  long: false,
};

RowContent.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  button: PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
  }),
  long: PropTypes.bool,
};

export default RowContent;
