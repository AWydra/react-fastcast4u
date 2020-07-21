// @ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Picture from 'components/molecules/Picture/Picture';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import YtModal from 'components/organisms/Modals/YtModal';

const useStyles = makeStyles(theme => ({
  box: {
    minHeight: '80vh',
    padding: theme.spacing(10, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: ({ left }) => (left ? 'flex-start' : 'center'),
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
  },
  left: ({ left }) =>
    left && {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      [theme.breakpoints.up('lg')]: {
        width: '50%',
        maxWidth: theme.spacing(98),
        marginLeft: '10%',
        textAlign: 'left',
      },
    },
  picture: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  heading: {
    marginLeft: ({ left }) => left && theme.spacing(1),
    textAlign: 'inherit',
    color: 'white',
    lineHeight: ({ left }) => left && 1.5,
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0.5, 1),
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: ({ left }) => (left ? 'flex-start' : 'center'),
    },
  },
}));

const HeroSection = ({ data, left, youtube, ...props }) => {
  const classes = useStyles({ left });
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.box} component="section" {...props}>
      <Picture
        className={classes.picture}
        desktop={data.pictures.desktop}
        mobile={data.pictures.mobile}
        alt={data.pictures.alt}
      />
      <Box className={classes.left}>
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
            {youtube.label && (
              <CTAButton
                variant="contained"
                color="secondary"
                xlarge
                onClick={() => setOpen(true)}
                {...props}
              >
                {youtube.label}
              </CTAButton>
            )}
          </Box>
        )}
      </Box>
      {youtube.url && <YtModal open={open} onClose={() => setOpen(false)} url={youtube.url} />}
    </Box>
  );
};

HeroSection.defaultProps = {
  left: false,
  youtube: {},
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
  left: PropTypes.bool,
  youtube: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default HeroSection;
