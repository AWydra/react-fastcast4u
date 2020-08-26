import React from 'react';
import { Link } from 'react-router-dom';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import { isOlderThan } from 'utils/date';

const useStyles = makeStyles(theme => ({
  box: {
    maxWidth: 800,
    padding: theme.spacing(5, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[900],
    borderRadius: theme.shape.borderRadius,
  },
  heading: {
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(28),
    textAlign: 'center',
  },
  image: {
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

const PromotionBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {isOlderThan(Date.UTC(2020, 7, 27, 24)) && (
        <Text className={classes.heading} component="h2" variant="h4">
          Get Your Own Alexa Radio Skill
        </Text>
      )}
      <Link to="/order">
        <Image
          className={classes.image}
          src={
            isOlderThan(Date.UTC(2020, 7, 27, 24))
              ? 'https://fastcast4u.com/images/landing/alexa.png'
              : `https://img.fastcast4u.com/react/login/o1.png`
          }
        />
      </Link>
      {isOlderThan(Date.UTC(2020, 7, 27, 24)) && (
        <CTAButton
          component={Link}
          to="/alexa-skill"
          className={classes.button}
          xlarge
          color="secondary"
        >
          Get Now
        </CTAButton>
      )}
    </Box>
  );
};

export default PromotionBanner;
