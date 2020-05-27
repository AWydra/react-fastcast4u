import React, { useState, useEffect } from 'react';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';
import generalServices from 'services/general';
import FullContainer from 'components/atoms/FullContainer/FullContainer';

const useStyles = makeStyles(theme => ({
  privacy: {
    '& h1': theme.typography.h4,
    '& h2': theme.typography.h6,
    '& p': theme.typography.body1,
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
      const response = await generalServices.getPrivacyPolicy();
      setResponse(response.message);
    };

    getPrivacyPolicy();
  }, []);

  return (
    <FullContainer maxWidth="xl">
      {response ? (
        <Box mt={4} className={classes.privacy} dangerouslySetInnerHTML={{ __html: response }} />
      ) : (
        <LinearProgress className={classes.loading} />
      )}
    </FullContainer>
  );
};

export default Privacy;
