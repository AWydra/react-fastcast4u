/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';

const useStyles = makeStyles(theme => ({
  box: {
    minHeight: '80vh',
    padding: theme.spacing(10, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(http://img.fastcast4u.com/react/alexa/alexa-bg-mobile.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    [theme.breakpoints.up('xl')]: {
      backgroundImage: 'url(http://img.fastcast4u.com/react/alexa/alexa-bg.png)',
    },
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

const HeroSection = ({ scrollRef }) => {
  const classes = useStyles();

  const handleClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box className={classes.box}>
      <Text className={classes.heading} component="h1" variant="h2">
        Alexa Skill for your Radio Station
      </Text>
      <Box mt={4} display="flex" className={classes.buttonContainer}>
        <CTAButton variant="contained" xlarge color="primary" onClick={handleClick}>
          &nbsp;SEE MORE&nbsp;
        </CTAButton>
        <CTAButton
          variant="contained"
          xlarge
          color="secondary"
          component="a"
          href="https://www.amazon.com/dp/B08B8RN7Y6/"
          target="_blank"
        >
          TEST DEMO
        </CTAButton>
      </Box>
    </Box>
  );
};

export default HeroSection;
