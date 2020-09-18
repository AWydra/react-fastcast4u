import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import PanelComparision from 'components/organisms/PanelComparison/PanelComparison';

const everestData = {
  img: 'https://img.fastcast4u.com/react/app/app-creator.png',
  heading: 'Everest Cast',
  content: 'New, evolving Radio Server Control Panel with a user-friendly interface',
  list: [
    'AutoDJ with a graphic scheduler',
    'Live DJ accounts',
    'Drag & Drop Music Library manager',
    'Listener Statistics and Map',
    'Basic Listener Reporting',
    'Proxy & HTTPS Stream link support',
    'Radio Widgets',
    'Switch between SHOUTcast and Icecast Server',
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
    'Proxy & HTTPS Stream link support',
    'Radio Widgets',
    'SHOUTcast Server with Icecast available on demand',
  ],
};

const useStyles = makeStyles(theme => ({
  panel: {
    maxWidth: theme.spacing(67),
  },
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
      <HeadingBlock
        title="Choose your Online Radio Control Panel"
        subtitle="Online Radio Panel lets you easily manage your Radio Station. Set up your stream, control AutoDJ & Playlist Schedule, manage LiveDJs, track Listener Statistics and more..."
      />
      <Grid container spacing={4} justify="center">
        <Grid className={classes.panel} item xs={12} md={6}>
          <PanelComparision {...everestData} />
        </Grid>
        <Grid className={classes.panel} item xs={12} md={6}>
          <PanelComparision {...centovaData} />
        </Grid>
      </Grid>
      <Text variant="h4" fontWeight={500} align="center" mt={8}>
        Create Your Server Package
      </Text>
      <CTAButton className={classes.button} component={Link} to="/order" xlarge color="primary">
        Start Now
      </CTAButton>
    </Container>
  );
};

export default ControlPanel;
