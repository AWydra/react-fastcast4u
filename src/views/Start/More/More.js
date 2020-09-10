import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';

const useStyles = makeStyles({
  image: {
    maxHeight: 400,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

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
    </Container>
  );
};

export default More;
