import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, Container, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  box: {
    margin: theme.spacing(2, 0, 4),
    padding: theme.spacing(4, 0),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  content: {
    paddingRight: theme.spacing(2),
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  buttonContainer: {
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    color: 'white',
    borderColor: 'white',
  },
}));

const Promobar = ({ primary, secondary, button, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.box} {...props}>
      <Container className={classes.container} maxWidth="xl">
        <Box className={classes.content}>
          <Text component="h2" variant="h5" fontWeight={500}>
            {primary}
          </Text>
          {secondary && <Text mt={2}>{secondary}</Text>}
        </Box>
        <Box className={classes.buttonContainer}>
          <Button
            className={classes.button}
            component={Link}
            variant="outlined"
            size="large"
            {...button}
          >
            {button.label}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

Promobar.defaultProps = {
  secondary: '',
};

Promobar.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

export default Promobar;
