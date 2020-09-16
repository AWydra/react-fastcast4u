import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import PanelComparision from 'components/organisms/PanelComparison/PanelComparison';

const everestData = {
  img: 'https://img.fastcast4u.com/react/app/app-creator.png',
  heading: 'Everest Cast',
  content: 'New, evolving Radio Server Control Panel',
  list: [
    'AutoDJ with a graphic scheduler',
    'Live DJ accounts',
    'Drag & Drop Music Library manager',
    'Listener Statistics and Map',
    'Proxy & https Steam link support',
    'Radio Widgets',
    'Quick switch between SHOUTcast and Icecast Radio Server',
  ],
};

const centovaData = {
  img: 'https://img.fastcast4u.com/react/app/app-creator.png',
  heading: 'CentovaCast',
  content: 'Radio Server Control Panel trusted by thousands of stations worldwide',
  list: [
    'AutoDJ with basic Playlist Schedule',
    'Live DJ accounts',
    'Basic Music Library manager',
    'Listener Stats and Map',
    'Advanced Listener Reporting',
    'Proxy & https Steam link support',
    'Radio Widgets',
    'SHOUTcast Server with Icecast available on demand',
  ],
};

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const ControlPanel = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Text align="center" variant="h4" mb={6}>
        Online Radio Panel lets you easily manage your Radio Station. Set up your stream, control
        AutoDJ &amp; Playlist Schedule, manage LiveDJs, track Listener Statistics and more...
      </Text>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <PanelComparision {...everestData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <PanelComparision {...centovaData} />
        </Grid>
      </Grid>
      <Text variant="h3" fontWeight={500} align="center" mt={10}>
        Create Your Server Package
      </Text>
      <CTAButton className={classes.button} component={Link} to="/order" xlarge color="primary">
        Start Now
      </CTAButton>
    </Container>
  );
};

export default ControlPanel;
