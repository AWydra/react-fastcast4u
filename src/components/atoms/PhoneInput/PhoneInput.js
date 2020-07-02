import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    marginTop: theme.spacing(1),
    position: 'relative',
    fontFamily: 'inherit !important',
    fontSize: '1rem',
    '& .flag-dropdown:before': {
      content: ({ label }) => `"${label}" !important`,
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
    padding: '9.5px 14px 9.5px 58px !important',
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

const PhoneInput = ({ value, label, ...props }) => {
  const country = useSelector(state => state.general.country);
  const classes = useStyles({ label });

  return (
    <ReactPhoneInput
      value={value}
      country={country}
      containerClass={`react-tel-input ${classes.container}`}
      inputClass={`form-control ${classes.input}`}
      searchClass={classes.search}
      dropdownClass={classes.dropdown}
      {...props}
    />
  );
};

PhoneInput.defaultProps = {
  label: 'Phone Number (optional)',
};

PhoneInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default PhoneInput;
