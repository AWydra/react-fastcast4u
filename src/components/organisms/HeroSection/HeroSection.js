// @ts-nocheck
import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';

const useStyles = makeStyles(theme => ({
  box: {
    minHeight: '70vh',
    padding: theme.spacing(10, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage:
      'url(http://zephyr.us-themes.com/wp-content/uploads/revslider/vertical_fullscreen/shutterstock_156031910.jpg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  heading: {
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    display: 'flex',
    '& button': {
      margin: theme.spacing(0, 1),
    },
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Text className={classes.heading} component="h1" variant="h2">
        Alexa Skill for your Radio Station
      </Text>
      <Box mt={4} display="flex" className={classes.buttonContainer}>
        <CTAButton variant="contained" xlarge color="primary">
          VIEW FEATURES
        </CTAButton>
        <CTAButton variant="contained" xlarge color="secondary">
          VIEW PORTFOLIO
        </CTAButton>
      </Box>
    </Box>
  );
};

export default HeroSection;
