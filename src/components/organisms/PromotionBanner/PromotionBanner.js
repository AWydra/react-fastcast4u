import React from 'react';
// import { Link } from 'react-router-dom';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import { isNowBetween } from 'utils/date';

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
      {!isNowBetween(Date.UTC(2020, 8, 12, 7), Date.UTC(2020, 8, 13, 7)) && (
        <Text className={classes.heading} component="h2" variant="h4">
          Get Your Own Alexa Radio Skill
        </Text>
      )}
      <a
        href={
          isNowBetween(Date.UTC(2020, 8, 12, 7), Date.UTC(2020, 8, 13, 7))
            ? 'https://fastcast4u.com/radio-promotion'
            : 'https://fastcast4u.com/order'
        }
      >
        <Image
          className={classes.image}
          src={
            isNowBetween(Date.UTC(2020, 8, 12, 7), Date.UTC(2020, 8, 13, 7))
              ? 'https://fastcast4u.com/img/flash/package.PNG'
              : 'https://fastcast4u.com/images/landing/alexa.png'
          }
        />
      </a>
      {!isNowBetween(Date.UTC(2020, 8, 12, 7), Date.UTC(2020, 8, 13, 7)) && (
        <CTAButton
          component="a"
          href="https://fastcast4u.com/account/link.php?id=1001"
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
