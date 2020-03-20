// @ts-nocheck
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    height: '100%',
    margin: theme.spacing(4, 2, 6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(10),
    },
  },
  content: {
    padding: theme.spacing(2),
    position: 'relative',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    outline: 'none',
    '& a': {
      color: theme.palette.primary.main,
    },
  },
}));

const TosModal = ({ onClose, ...props }) => {
  const [response, setResponse] = useState('');
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/tos/pure.php');
      setResponse(response.data);
    }
    fetchData();
  }, []);

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      scroll="paper"
      onClose={onClose}
      PaperProps={{ className: classes.paper }}
      {...props}
    >
      <DialogTitle>Terms of Service</DialogTitle>
      <DialogContent className={`${classes.content} ${!response && classes.loading}`} dividers>
        {!response && <CircularProgress size={100} />}
        <DialogContentText
          className={classes.text}
          dangerouslySetInnerHTML={{ __html: response }}
          tabIndex={-1}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

TosModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TosModal;
