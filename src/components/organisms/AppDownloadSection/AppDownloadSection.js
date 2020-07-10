import React from 'react';
import PropTypes from 'prop-types';
import { Box, ButtonBase, makeStyles } from '@material-ui/core';
import Image from 'components/atoms/Image/Image';
import TitleSection from 'components/organisms/TitleSection/TitleSection';
import AppleStore from 'assets/svg/AppleStore';
import googlePlayImg from 'assets/img/googlePlay.png';

const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    color: 'black',
  },
  icon: {
    width: 200,
    height: 'unset',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      height: theme.spacing(7),
    },
  },
}));

const AppDownloadSection = ({ heading, googlePlay, appleStore }) => {
  const classes = useStyles();

  return (
    <TitleSection primary={heading}>
      <Box className={classes.box}>
        <ButtonBase
          className={classes.button}
          component="a"
          href={googlePlay}
          target="_blank"
          focusRipple
        >
          <Image className={classes.icon} src={googlePlayImg} />
        </ButtonBase>
        <ButtonBase
          className={classes.button}
          component="a"
          href={appleStore}
          target="_blank"
          focusRipple
        >
          <AppleStore className={classes.icon} />
        </ButtonBase>
      </Box>
    </TitleSection>
  );
};

AppDownloadSection.propTypes = {
  heading: PropTypes.string.isRequired,
  googlePlay: PropTypes.string.isRequired,
  appleStore: PropTypes.string.isRequired,
};

export default AppDownloadSection;
