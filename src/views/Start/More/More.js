import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  const content = useSelector(state => state.language.start.more);

  return (
    <Container maxWidth="xl">
      <Grid spacing={4} container>
        <Grid item xs={12} md={4}>
          <Image className={classes.image} src="//img.fastcast4u.com/twittercast.jpg" />
        </Grid>
        <Grid className={classes.content} item xs={12} md={8}>
          <Text component="h2" variant="h4" fontWeight={500}>
            {content.twitter.title}
          </Text>
          <Text color="textSecondary" variant="h5" mt={3} mb={4}>
            {content.twitter.subtitle}
          </Text>
          <Text fontSize={18}>{content.twitter.content[0]}</Text>
        </Grid>
      </Grid>
      <Grid spacing={4} container>
        <Grid className={classes.content} item xs={12} md={8}>
          <Text component="h2" variant="h4" fontWeight={500}>
            {content.directory.title}
          </Text>
          <Text color="textSecondary" variant="h5" mt={3} mb={4}>
            {content.directory.subtitle}
          </Text>
          <Text fontSize={18}>{content.directory.content[0]}</Text>
          <Text fontSize={18}>{content.directory.content[1]}</Text>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image className={classes.image} src="//img.fastcast4u.com/react/start/megafontr.png" />
        </Grid>
      </Grid>
      <Text variant="h4" fontWeight={500} align="center" mt={10}>
        {content.cta.heading}
      </Text>
      <CTAButton className={classes.button} component={Link} to="/order" xlarge color="primary">
        {content.cta.label}
      </CTAButton>
    </Container>
  );
};

export default More;
