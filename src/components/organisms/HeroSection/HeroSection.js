// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Picture from 'components/molecules/Picture/Picture';
import CTAButton from 'components/atoms/CTAButton/CTAButton';

const useStyles = makeStyles(theme => ({
  box: {
    minHeight: '80vh',
    padding: theme.spacing(10, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  picture: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
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

const HeroSection = ({ data, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.box} component="section" {...props}>
      <Picture
        className={classes.picture}
        desktop={data.pictures.desktop}
        mobile={data.pictures.mobile}
        alt={data.pictures.alt}
      />
      <Text className={classes.heading} component="h1" variant="h2">
        {data.heading}
      </Text>
      {data.buttons && (
        <Box mt={4} display="flex" className={classes.buttonContainer}>
          {data.buttons.map(({ label, ...props }) => (
            <CTAButton variant="contained" xlarge {...props} key={label}>
              {label}
            </CTAButton>
          ))}
        </Box>
      )}
    </Box>
  );
};

HeroSection.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    pictures: PropTypes.shape({
      mobile: PropTypes.string,
      desktop: PropTypes.string,
      alt: PropTypes.string,
    }),
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default HeroSection;
