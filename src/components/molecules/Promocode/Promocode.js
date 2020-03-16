// @ts-nocheck
import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Label from 'components/atoms/Label/Label';

const PromocodeContainer = styled.form`
  padding: 10px 0;
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
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -15,
    marginLeft: -15,
  },
}));

const Promocode = () => {
  const [promocode, setPromocode] = useState('');
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [invalid, setInvalid] = useState('');
  const classes = useStyles();

  const handleChange = ev => {
    setPromocode(ev.target.value);
    setInvalid('');
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    if (!promocode) {
      setInvalid('Provide promocode');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      active && setPromocode('');
      setLoading(false);
      setActive(!active);
      setInvalid('');
    }, 2000);
  };

  return (
    <PromocodeContainer onSubmit={handleSubmit}>
      <Label htmlFor="promocode-input">Promocode:</Label>
      <div className={classes.inputContainer}>
        <TextField
          id="promocode-input"
          error={!!invalid}
          helperText={invalid}
          className={classes.input}
          value={promocode}
          margin="dense"
          onChange={handleChange}
          disabled={loading || active}
          placeholder="Promocode"
          variant="outlined"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color={active ? 'secondary' : 'primary'}
          size="large"
          disabled={loading}
        >
          {active ? 'Remove' : 'Apply'}
          {loading && <CircularProgress size={30} className={classes.buttonProgress} />}
        </Button>
      </div>
    </PromocodeContainer>
  );
};

export default Promocode;
