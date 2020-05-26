import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import CTAButton from 'components/atoms/CTAButton/CTAButton';

const useStyles = makeStyles(theme => ({
  box: {
    maxWidth: 600,
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
      <Text className={classes.heading} component="h2" variant="h4">
        Create Your Own Mobile App
      </Text>
      <Image className={classes.image} src="https://fastcast4u.com/images/tel2.png" />
      <CTAButton
        component="a"
        href="https://fastcast4u.com/public-app-creator/"
        target="_blank"
        className={classes.button}
        xlarge
        color="secondary"
      >
        Create App
      </CTAButton>
    </Box>
  );
};

export default PromotionBanner;
