import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import languageActions from 'actions/languageActions';
import languageServices from 'services/language';
import { ButtonBase, Grid, LinearProgress, Paper, makeStyles } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import Text from 'components/atoms/Text/Text';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import history from 'utils/history';

const useStyles = makeStyles(theme => ({
  paper: {
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    padding: theme.spacing(1, 0.5),
    fontSize: theme.typography.pxToRem(16),
  },
}));

const Language = () => {
  const classes = useStyles();
  const [langs, setLangs] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    languageServices.getLangs().then(res => setLangs(res));
  }, []);

  const handleChangeLanguage = (name, code) => {
    dispatch(languageActions.setLanguage({ language: name, code }));
    history.push(`/${code}`);
  };

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock title="Choose your language" subtitle="Lorem ipsum dolor sit amet" />
      {langs ? (
        <Grid container spacing={2}>
          {langs.map(el => (
            <Grid item xs={6} sm={4} xl={3} key={el.code}>
              <Paper className={classes.paper}>
                <ButtonBase
                  onClick={() => handleChangeLanguage(el.name, el.code)}
                  className={classes.button}
                >
                  <Text component="span" dangerouslySetInnerHTML={{ __html: el.name }} />
                </ButtonBase>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <LinearProgress />
      )}
    </FullContainer>
  );
};

export default Language;
