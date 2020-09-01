import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import PhoneSection from 'components/organisms/PhoneSection/PhoneSection';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const list = [
  'Radio Stream Player',
  'Your Custom Design',
  'Social Media',
  'Podcasts',
  'WebView Page display',
  'Push Notification',
  'Monetization through Ads',
];

const useStyles = makeStyles(theme => ({
  phoneSection: {
    marginTop: theme.spacing(4),
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
}));

const MobileApp = () => {
  const classes = useStyles();
  const content = useSelector(state => state.language.app);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Image src="https://img.fastcast4u.com/react/app/phon2.png" />
        </Grid>
        <Grid item xs={12} md={5}>
          <Text component="h2" variant="h4" fontWeight={500}>
            Mobile App for your Radio Station
          </Text>
          <Text color="textSecondary" variant="h6" my={2}>
            Easily listen to your online station on mobile devices
          </Text>
          <List>
            {list.map(content => (
              <ListItem key={content} disableGutters className={classes.item}>
                <ListItemIcon className={classes.listIcon}>
                  <CheckCircleIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={content} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <PhoneSection className={classes.phoneSection} data={content.slider} />
    </>
  );
};

export default MobileApp;
