// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import orderServices from 'services/order';

import styled from 'styled-components';
import { FormHelperText, TextField, makeStyles } from '@material-ui/core';
import Label from 'components/atoms/Label/Label';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import { useDidUpdate } from 'utils/customHooks';

const PromocodeContainer = styled.form`
  padding: 10px 0;
  * {
    transition: unset;
  }
`;

const useStyles = makeStyles(theme => ({
  inputContainer: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'start',
  },
  input: {
    margin: theme.spacing(0, 1, 0, 0),
    paddingRight: theme.spacing(1),
    '& > div': {
      height: 42,
    },
  },
}));

const Promocode = () => {
  const content = useSelector(state => state.language.orderPackage.summary);
  const reduxPromocode = useSelector(state => state.order.promocode);
  const invalidPromocode = useSelector(state => state.order.invalidPromocode);
  const dispatch = useDispatch();
  const [promocode, setPromocode] = useState('');
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState('');
  const inputRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    const getPricing = async () => {
      reduxPromocode && setLoading(true);
      setPromocode(reduxPromocode);
      await dispatch(orderServices.getPricing(reduxPromocode));
      setLoading(false);
    };

    getPricing();
    // eslint-disable-next-line
  }, []);

  useDidUpdate(() => {
    setLoading(false);
    setPromocode(reduxPromocode);
  }, [reduxPromocode]);

  useDidUpdate(() => {
    setLoading(false);
    setPromocode(invalidPromocode);
    setInvalid(content.invalid);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  }, [invalidPromocode]);

  const handleChange = ev => {
    setPromocode(ev.target.value);
    setInvalid('');
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    if (!promocode) {
      setInvalid(content.provide);
      return;
    }
    setLoading(true);
    dispatch(orderServices.getPricing(reduxPromocode ? '' : promocode));
  };

  return (
    <PromocodeContainer onSubmit={handleSubmit}>
      <Label htmlFor="promocode-input">{content.promocode}:</Label>
      <div className={classes.inputContainer}>
        <TextField
          id="promocode-input"
          inputRef={inputRef}
          className={classes.input}
          value={promocode}
          margin="dense"
          onChange={handleChange}
          disabled={loading || !!reduxPromocode}
          placeholder={content.promocode}
          variant="outlined"
          fullWidth
          autoComplete="off"
        />
        <CTAButton
          disableElevation
          type="submit"
          variant="contained"
          color={reduxPromocode ? 'secondary' : 'primary'}
          size="large"
          loading={loading}
          disabled={!!invalid}
        >
          {reduxPromocode ? content.remove : content.apply}
        </CTAButton>
      </div>
      <FormHelperText error variant="filled">
        {invalid}
      </FormHelperText>
    </PromocodeContainer>
  );
};

export default Promocode;
