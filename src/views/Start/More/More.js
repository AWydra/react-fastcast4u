import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import CTAButton from 'components/atoms/CTAButton/CTAButton';

const useStyles = makeStyles(theme => ({
  image: {
    maxHeight: 400,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const More = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid spacing={4} container>
        <Grid item xs={12} md={4}>
          <Image className={classes.image} src="//img.fastcast4u.com/twittercast.jpg" />
        </Grid>
        <Grid className={classes.content} item xs={12} md={8}>
          <Text component="h2" variant="h4" fontWeight={500}>
            Twittercast addon
          </Text>
          <Text color="textSecondary" variant="h5" mt={3} mb={4}>
            Use our FREE TwitterCast to automatically post info about your live broadcasts,
            currently played tracks and podcasts.
          </Text>
          <Text fontSize={18}>
            Thanks to TwitterCast App, you can integrate your Internet Radio Server with a Twitter
            account within a few clicks! What distingues our TwitterCast from other solutions?
            It&apos;s extremely user friendly and quick to configure.
          </Text>
        </Grid>
      </Grid>
      <Grid spacing={4} container>
        <Grid className={classes.content} item xs={12} md={8}>
          <Text component="h2" variant="h4" fontWeight={500}>
            Radio Directory Registration Package
          </Text>
          <Text color="textSecondary" variant="h5" mt={3} mb={4}>
            Let us handle Online Promotion of your Radio Station
          </Text>
          <Text fontSize={18}>
            Submit your Radio Station to world&apos;s most popular online Radio Station Directories,
            including Streema, SHOUTcast.com and many more…
            <br />
            Make your Radio Station available on new platforms, what makes it super easy to tune-in!
          </Text>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image className={classes.image} src="//img.fastcast4u.com/react/start/megafontr.png" />
        </Grid>
      </Grid>
      <Text variant="h4" fontWeight={500} align="center" mt={10}>
        Get as Free Addon to Your Server Package
      </Text>
      <CTAButton className={classes.button} component={Link} to="/order" xlarge color="primary">
        Get Now
      </CTAButton>
    </Container>
  );
};

export default More;
