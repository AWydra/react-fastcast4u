import React from 'react';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import { AddCircle, PlayCircleFilled, Help } from '@material-ui/icons';
import Cite from 'components/atoms/Cite/Cite';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  heading: {
    maxWidth: 800,
    margin: theme.spacing(0, 'auto', 5),
    textAlign: 'center',
    fontWeight: 500,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemIcon: {
    minWidth: theme.spacing(7),
    '& svg': {
      fontSize: 38,
    },
  },
  primary: {
    marginBottom: theme.spacing(0.75),
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  secondary: {
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
}));

const FeatureSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xl">
      <Text className={classes.heading} component="h2" variant="h4">
        Handy commands to launch your radio
      </Text>
      <Grid container spacing={2}>
        <Grid item className={classes.item} xs={12} md={5}>
          <Image src="https://fastcast4u.com/images/landing/alexa.png" />
        </Grid>
        <Grid item className={classes.item} xs={12} md={7}>
          <List>
            <ListItem disableGutters>
              <ListItemIcon className={classes.listItemIcon}>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary,
                }}
                primary={<Cite>{'Alexa, enable {Your Radio Name}'}</Cite>}
                primaryTypographyProps={{
                  component: 'h3',
                }}
                secondary="Simple activation on Alexa devices by a voice command or through Amazon App"
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon className={classes.listItemIcon}>
                <PlayCircleFilled />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary,
                }}
                primary={<Cite>{'Alexa, play {Your Radio Name}'}</Cite>}
                secondary="Easily launch and control radio stream with customizable voice commands"
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon className={classes.listItemIcon}>
                <Help />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary,
                }}
                primary={
                  <Cite>
                    {'Alexa, ask {Your Radio Name}, '}
                    title please?
                  </Cite>
                }
                secondary="Whenever asked, Alexa tells the current track title, artist name or broadcast data"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeatureSection;
