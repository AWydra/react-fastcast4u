import React, { useState, useEffect } from 'react';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';
import generalServices from 'services/general';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  tos: {
    '& h1': theme.typography.h4,
    '& p': theme.typography.h6,
    '& li': theme.typography.body1,
    '& a': {
      color: theme.palette.primary[modeSwitch('dark', 'light')],
    },
    '& img': {
      filter: modeSwitch(false, 'invert(1)'),
    },
  },
  loading: {
    marginTop: theme.spacing(8),
  },
}));

const Privacy = () => {
  const [response, setResponse] = useState('');
  const classes = useStyles();

  useEffect(() => {
    const getPrivacyPolicy = async () => {
      const response = await generalServices.getTos();
      setResponse(response.message);
    };

    getPrivacyPolicy();
  }, []);

  return (
    <FullContainer maxWidth="xl">
      {response ? (
        <Box mt={4} className={classes.tos} dangerouslySetInnerHTML={{ __html: response }} />
      ) : (
        <LinearProgress className={classes.loading} />
      )}
    </FullContainer>
  );
};

export default Privacy;
