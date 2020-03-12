import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

const useStyles = makeStyles(theme => ({
  container: {
    fontFamily: 'inherit !important',
    fontSize: '1rem',
    position: 'relative',
    width: '100%',
    '& .flag-dropdown:before': {
      content: '"Phone Number (optional)" !important',
      width: 'auto !important',
      backgroundColor: `${theme.palette.background.paper} !important`,
      color: theme.palette.text.secondary,
      fontSize: `12px !important`,
      whiteSpace: 'nowrap',
      left: '9px !important',
      lineHeight: `1.25 !important`,
    },
  },
  input: {
    width: '100% !important',
    padding: '10.5px 14px 10.5px 58px !important',
    backgroundColor: 'transparent !important',
    transition: 'unset !important',
    '&:focus': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  search: {
    padding: '10px 10px 16px !important',
    '& input': {
      margin: '0 !important',
      width: '100% !important',
    },
  },
}));

const PhoneInput = ({ ...props }) => {
  const classes = useStyles();
  return (
    <ReactPhoneInput
      country="pl"
      enableSearch
      containerClass={`react-tel-input ${classes.container}`}
      inputClass={`form-control ${classes.input}`}
      searchClass={classes.search}
      {...props}
    />
  );
};

export default PhoneInput;
