import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import generalServices from 'services/general';
import { Box, Button, Container, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  box: {
    marginBottom: theme.spacing(4),
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

const ItemsLeftBar = ({ disableButton }) => {
  const classes = useStyles();
  const [items, setItems] = useState(28);

  useEffect(() => {
    generalServices.getItemsLeft('alexa29').then(res => setItems(res.uses));
  }, []);

  return (
    <Box className={classes.box}>
      <Container className={classes.container} maxWidth="xl">
        <Box className={classes.content}>
          <Text component="h2" variant="h5" fontWeight={500}>
            LIMITED SUPPLY: {items} items left in stock
          </Text>
        </Box>
        <Box className={classes.buttonContainer}>
          {!disableButton && (
            <Button
              className={classes.button}
              component={Link}
              variant="outlined"
              size="large"
              to="/alexa-skill"
            >
              Get Now
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

ItemsLeftBar.defaultProps = {
  disableButton: false,
};

ItemsLeftBar.propTypes = {
  disableButton: PropTypes.bool,
};

export default ItemsLeftBar;
