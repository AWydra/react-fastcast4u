import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cmsActions from 'actions/cmsActions';
import cmsServices from 'services/cms';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import CTAButton from 'components/atoms/CTAButton/CTAButton';

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
  const content = useSelector(state => state.cms.login);
  const dispatch = useDispatch();

  useEffect(() => {
    !content.heading &&
      cmsServices.getLoginData().then(res => {
        dispatch(cmsActions.setLoginData(res));
      });
  }, [dispatch]);

  return (
    <Box className={classes.box}>
      <Text className={classes.heading} component="h2" variant="h4">
        {content.heading}
      </Text>
      <Link to={content.button.To}>
        <Image className={classes.image} src="https://fastcast4u.com/images/landing/alexa.png" />
      </Link>
      {content.button.Button && (
        <CTAButton
          component={Link}
          to={content.button.To}
          className={classes.button}
          xlarge
          color="secondary"
        >
          {content.button.Button}
        </CTAButton>
      )}
    </Box>
  );
};

export default PromotionBanner;
