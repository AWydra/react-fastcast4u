import React, { useState, useEffect } from 'react';
import generalServices from 'services/general';
import { makeStyles } from '@material-ui/core';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { modeSwitch } from 'utils/theme';

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
    '& .arrow': {
      borderTopColor: modeSwitch(
        `${theme.palette.grey[700]} !important`,
        `${theme.palette.grey[50]} !important`,
      ),
    },
    '& .arrow.up': {
      borderBottomColor: modeSwitch(
        `${theme.palette.grey[700]} !important`,
        `${theme.palette.grey[50]} !important`,
      ),
    },
  },
  input: {
    width: '100% !important',
    padding: '10.5px 14px 10.5px 58px !important',
    backgroundColor: 'transparent !important',
    borderColor: modeSwitch(
      'hsla(0, 0%, 0%, 0.23) !important',
      'hsla(0, 0%, 100%, 0.23) !important',
    ),
    color: modeSwitch('inherit !important', 'hsl(0, 0%, 100%) !important'),
    fontFamily: theme.typography.fontFamily,
    lineHeight: '1.1875em',
    transition: 'unset !important',
    '&:hover': {
      borderColor: modeSwitch(
        'hsla(0, 0%, 0%, 0.87) !important',
        'hsl(100, 100%, 100%) !important',
      ),
    },
    '&:focus': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  search: {
    padding: '10px 10px 16px !important',
    backgroundColor: modeSwitch('inherit', `${theme.palette.grey[700]} !important`),
    '& input': {
      width: '100% !important',
      margin: '0 !important',
      backgroundColor: 'inherit !important',
      borderColor: modeSwitch('inherit', `${theme.palette.grey[500]} !important`),
      color: modeSwitch('inherit', `${theme.palette.grey[50]} !important`),
      '&::placeholder': {
        color: 'inherit !important',
      },
    },
  },
  dropdown: {
    backgroundColor: modeSwitch('inherit', `${theme.palette.grey[700]} !important`),
    '& .dial-code': {
      color: 'inherit !important',
    },
    '& .country:hover, & .country.highlight': {
      backgroundColor: modeSwitch('inherit', `${theme.palette.grey[600]} !important`),
    },
  },
}));

const PhoneInput = ({ ...props }) => {
  const [country, setCountry] = useState('us');
  const classes = useStyles();

  useEffect(() => {
    const sendRequest = async () => {
      const code = await generalServices.getCountryCode();
      setCountry(code);
    };

    sendRequest();
  }, []);

  return (
    <ReactPhoneInput
      country={country}
      enableSearch
      containerClass={`react-tel-input ${classes.container}`}
      inputClass={`form-control ${classes.input}`}
      searchClass={classes.search}
      dropdownClass={classes.dropdown}
      {...props}
    />
  );
};

export default PhoneInput;
