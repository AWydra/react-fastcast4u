import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Tab, Tabs, makeStyles } from '@material-ui/core';
import history from 'utils/history';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(8),
    justifyContent: 'center',
  },
  paper: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, -2),
    },
  },
  scroller: {
    flexGrow: '0',
  },
}));

const StartTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const params = useParams();

  const handleChange = (event, newValue) => {
    history.push(`/start${newValue}`);
  };

  useEffect(() => {
    setValue(`${params.category ? `/${params.category}` : ''}`);
  }, [params.category]);

  return (
    <Paper square className={classes.paper}>
      <Tabs
        classes={{ root: classes.root, scroller: classes.scroller }}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
      >
        <Tab value="" label="Radio Server" />
        <Tab value="/control-panel" label="Control Panel" />
        <Tab value="/mobile-app" label="Mobile App" />
        <Tab value="/web-player" label="Web Player" />
        <Tab value="/alexa-skill" label="Alexa Skill" />
        <Tab value="/social-media-stream" label="Social Media Stream" />
        <Tab value="/more" label="More" />
      </Tabs>
    </Paper>
  );
};

export default StartTabs;
