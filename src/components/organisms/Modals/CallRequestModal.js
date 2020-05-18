// @ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';
import PhoneInput from 'components/atoms/PhoneInput/PhoneInput';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const useStyles = makeStyles(theme => ({
  title: {
    paddingBottom: 0,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 2, 0),
    },
  },
  paper: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'calc(100% - 32px) !important',
      margin: 16,
    },
  },
  content: {
    padding: theme.spacing(1, 3, 3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 2, 2),
    },
  },
  text: {
    fontSize: theme.typography.pxToRem(18),
  },
  box: {
    marginTop: theme.spacing(2.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'unset',
    },
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(0),
      flex: 'none',
    },
  },
}));

// https://fastcast4u.com/contact/?phone&success

const CallModal = ({ onClose, ...props }) => {
  const classes = useStyles();
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  window.check = parsePhoneNumberFromString;

  const handleChange = phone => {
    const number = parsePhoneNumberFromString(`+${phone}`);
    if (number && number.isValid()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setNumber(phone);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
    }, 4000);
  };

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      onClose={() => {
        onClose();
        setDisabled(false);
      }}
      {...props}
      aria-labelledby="modal-phone"
      scroll="body"
    >
      <DialogTitle className={classes.title} id="modal-phone">
        Prefer phone contact?
      </DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText className={classes.text}>
          {submitted
            ? 'Thank you. Our representative will contact you shortly. Please answer a call from this number: +1 (844) 203-2278'
            : 'Just leave your number. Our agent will call back as soon as possible.'}
        </DialogContentText>
        {!submitted && (
          <>
            <DialogContentText className={classes.text}>
              By submitting a phone number you agree on processing the provided data according to
              our
            </DialogContentText>
            <Box component="form" onSubmit={handleSubmit} className={classes.box}>
              <PhoneInput
                className={classes.input}
                disableDropdown
                inputProps={{
                  autoFocus: true,
                }}
                value={number}
                onChange={handleChange}
              />
              <CTAButton
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
                loading={loading}
              >
                Request a call
              </CTAButton>
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

CallModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CallModal;
