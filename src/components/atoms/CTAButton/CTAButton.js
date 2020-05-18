// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing } from '@material-ui/system';
import { Button, CircularProgress } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const ButtonContainer = styled.div`
  ${spacing}

  button {
    height: 100%;
  }
`;

const useStyles = makeStyles(theme => ({
  button: xlarge =>
    xlarge && {
      position: 'relative',
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(0, 4),

        '& .MuiButton-label': {
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 3,
        },
      },
    },
  progress: {
    position: 'absolute',
  },
}));

const CTAButton = ({ loading, disabled, onClick, children, xlarge, ...props }) => {
  const classes = useStyles(xlarge);
  return (
    <ButtonContainer {...props}>
      <Button
        variant="contained"
        className={classes.button}
        disabled={loading || disabled}
        onClick={onClick}
        {...props}
      >
        {children}
        {loading && <CircularProgress className={classes.progress} size={32} />}
      </Button>
    </ButtonContainer>
  );
};

CTAButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  xlarge: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

CTAButton.defaultProps = {
  xlarge: false,
  loading: false,
  disabled: false,
  onClick: null,
};

export default CTAButton;
