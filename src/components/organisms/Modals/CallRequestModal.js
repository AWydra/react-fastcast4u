// @ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import generalServices from 'services/general';

import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  makeStyles,
} from '@material-ui/core';
import PhoneInput from 'components/atoms/PhoneInput/PhoneInput';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import reCaptcha from 'utils/reCaptcha';

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
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(17),
    },
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

const CallRequestModal = ({ onClose, ...props }) => {
  const content = useSelector(state => state.language.components.modals.call);
  const classes = useStyles();
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

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
    if (disabled) return;
    setLoading(true);
    const sendRequest = async () => {
      const token = await reCaptcha.generate();
      const response = await generalServices.requestPhoneCall({
        number,
        token,
      });
      setMessage(response.message);
      setSubmitted(true);
    };

    sendRequest();
  };

  return (
    <Dialog
      scroll="body"
      aria-labelledby="modal-phone"
      classes={{ paper: classes.paper }}
      onClose={onClose}
      {...props}
    >
      <DialogTitle className={classes.title} id="modal-phone">
        {content.title}
      </DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText className={classes.text}>{message || content.leave}</DialogContentText>
        {!submitted && (
          <>
            <DialogContentText className={classes.text}>
              {content.submitting}{' '}
              <Link href="/privacy" target="_blank">
                {content.privacy}
              </Link>
            </DialogContentText>
            <Box component="form" onSubmit={handleSubmit} className={classes.box}>
              <PhoneInput
                label="Phone Number"
                className={classes.input}
                disableDropdown
                inputProps={{
                  autoFocus: true,
                }}
                value={number}
                onChange={handleChange}
                onEnterKeyPress={handleSubmit}
              />
              <CTAButton
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
                disabled={disabled}
                loading={loading}
              >
                {content.label}
              </CTAButton>
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

CallRequestModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CallRequestModal;
