import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from '@brainhubeu/react-carousel';
import { Button, Box, Grid, Hidden, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import Phone from 'components/molecules/Phone/Phone';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: { flexWrap: 'nowrap', height: 700 },
  },
  content: {
    height: '50%',
    padding: theme.spacing(0, 2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    order: 1,
    '& > *': {
      maxWidth: theme.spacing(80),
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
    },
    [theme.breakpoints.up('md')]: {
      order: 'unset',
    },
    [theme.breakpoints.up('lg')]: {
      height: '40%',
    },
  },
  phoneContainer: {
    padding: theme.spacing(0, 2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 250,
      height: 460,
    },
  },
  phone: {
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(.70)',
    },
  },
  slider: {
    '& ul': {
      margin: 0,
      padding: 0,
      display: 'flex',
    },
    '& li': {
      listStyle: 'none',
    },
  },
  buttonContainer: {
    width: '100%',
    maxWidth: theme.spacing(38),
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      maxWidth: 'unset',
    },
  },
}));

const PhoneSection = ({ device, data }) => {
  const classes = useStyles();
  const [slide, setSlide] = useState(0);

  const onSlideChange = value => setSlide(value);

  const handleSlideChangePrev = () => setSlide(value => value - 1);
  const handleSlideChangeNext = () => setSlide(value => value + 1);

  return (
    <Grid container className={classes.container} justify="center">
      <Grid className={classes.content} item>
        <Hidden smDown>
          <Text align="center" component="h3" variant="h4" fontWeight={500}>
            {data[Math.abs(slide) % data.length].heading}
          </Text>
          <Text align="center" mt={4}>
            {data[Math.abs(slide) % data.length].content}
          </Text>
        </Hidden>
        <Box className={classes.buttonContainer}>
          <Button
            onClick={handleSlideChangePrev}
            variant="contained"
            color="primary"
            startIcon={<NavigateBefore />}
          >
            Prev
          </Button>
          <Button
            onClick={handleSlideChangeNext}
            variant="contained"
            color="primary"
            endIcon={<NavigateNext />}
          >
            Next
          </Button>
        </Box>
      </Grid>
      <Grid className={classes.phoneContainer} item>
        <Phone device={device} className={classes.phone}>
          <Carousel
            className={classes.slider}
            draggable={false}
            infinite
            value={slide}
            onChange={onSlideChange}
          >
            {[...Array(data.length)].map((_, i) => (
              <span key={i}>
                <Image src={`https://img.fastcast4u.com/react/app/slider/${i}.png`} />
              </span>
            ))}
          </Carousel>
        </Phone>
      </Grid>
    </Grid>
  );
};

PhoneSection.defaultProps = {
  device: 'iphone-x',
};

PhoneSection.propTypes = {
  device: PropTypes.oneOf(['iphone-x', 'note8']),
  data: PropTypes.arrayOf(
    PropTypes.exact({
      heading: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};

export default PhoneSection;
