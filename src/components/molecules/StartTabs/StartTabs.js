import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  const content = useSelector(state => state.language.components.startTabs);

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
        <Tab value="" label={content.server} />
        <Tab value="/control-panel" label={content.panel} />
        <Tab value="/mobile-app" label={content.app} />
        <Tab value="/web-player" label={content.player} />
        <Tab value="/alexa-skill" label={content.alexa} />
        <Tab value="/social-media-stream" label={content.sms} />
        <Tab value="/more" label={content.more} />
      </Tabs>
    </Paper>
  );
};

export default StartTabs;
