import React from 'react';
import { Link } from 'react-router-dom';
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
import Promobar from 'components/organisms/Promobar/Promobar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const devList = [
  'FREE & Fully Customizable',
  'Compatible with Mobile Devices',
  'Automatic Page Setup',
  'Social Media Buttons',
  'Put your ads or additional content',
  'Over 100 configuration options',
  'Light, HTML5 based & HTTPS compatible',
];

const playerList = [
  'Custom Themes and skins',
  'Cover Art',
  'No hosting and complicated web building',
  'Geoblocking TBA',
];

const useStyles = makeStyles(theme => ({
  devSection: {
    marginBottom: theme.spacing(8),
  },
  iframe: {
    width: '100%',
    height: '100%',
    minHeight: 400,
    [theme.breakpoints.up('md')]: {
      minHeight: 360,
    },
  },
  item: {
    padding: 0,
  },
  listIcon: {
    minWidth: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  icon: {
    fontSize: 18,
  },
  itemText: {
    fontSize: '1rem',
  },
  promobar: {
    margin: theme.spacing(8, 0, -8),
    padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const WebPlayer = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl">
        <Grid className={classes.devSection} spacing={4} container>
          <Grid item xs={12} md={6}>
            <Image src="//img.fastcast4u.com/react/customize/wpdev.png" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Text component="h2" variant="h4" fontWeight={500}>
              FREE WebPlayer Page
            </Text>
            <Text color="textSecondary" variant="h6" my={2}>
              Get Listeners from Customizable WebPlayer Page!
            </Text>
            <Text>
              Now you can easily set up a WebPlayer Page for your online station! You don&apos;t
              need any webbuliding skills, domains or webhosting plans.
            </Text>
            <List>
              {devList.map(content => (
                <ListItem key={content} disableGutters className={classes.item}>
                  <ListItemIcon className={classes.listIcon}>
                    <CheckCircleIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText className={classes.itemText} primary={content} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Grid spacing={4} container>
          <Grid item xs={12} md={7}>
            <iframe
              className={classes.iframe}
              src="//player.fastcast4u.com/wydra/"
              title="Web player"
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Text component="h2" variant="h4" fontWeight={500}>
              Radio Player website widget
            </Text>
            <Text color="textSecondary" variant="h6" my={2}>
              Your Free Web Player Page will be set up automatically. It’s customizable and easy to
              share online
            </Text>
            <List>
              {playerList.map(content => (
                <ListItem key={content} disableGutters className={classes.item}>
                  <ListItemIcon className={classes.listIcon}>
                    <CheckCircleIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={content} />
                </ListItem>
              ))}
            </List>
            <Text variant="h6">Free Radio Player - easy application on your website</Text>
          </Grid>
        </Grid>
      </Container>
      <Promobar
        className={classes.promobar}
        primary="Lorem ipsum dolor sit amet"
        button={{
          label: 'Learn More',
          component: Link,
          to: '/order',
        }}
      />
    </>
  );
};

export default WebPlayer;