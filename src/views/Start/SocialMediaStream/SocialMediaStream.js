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
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const devList = [
  'Facebook Radio Streaming',
  'YouTube Radio Streaming',
  'Twitter by Periscope Radio Streaming',
  'One panel to control all streams',
  'Custom Video or Thumbnail graphics',
  'Over 100 configuration options',
  'Light, HTML5 based & HTTPS compatible',
];

const useStyles = makeStyles(theme => ({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const WebPlayer = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl">
        <Text variant="h5" align="center" mb={8}>
          Make your Online Radio Stream available on your Facebook Fanpage, private account or
          groups.
        </Text>
        <Grid spacing={4} container>
          <Grid item xs={12} md={7}>
            <Text component="h2" variant="h4" fontWeight={500}>
              Social Media Live Streaming
            </Text>
            <Text color="textSecondary" variant="h6" my={2}>
              Get even more listeners by Streaming your Radio Live to Facebook, YouTube and Twitter.
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
          <Grid className={classes.imageContainer} item xs={12} md={5}>
            <Image src="//img.fastcast4u.com/react/start/iconsv3.png" />
          </Grid>
        </Grid>
        <Text variant="h4" fontWeight={500} align="center" mt={10}>
          Add to your Radio Server Package
        </Text>
        <CTAButton className={classes.button} component={Link} to="/order" xlarge color="primary">
          More
        </CTAButton>
      </Container>
    </>
  );
};

export default WebPlayer;
