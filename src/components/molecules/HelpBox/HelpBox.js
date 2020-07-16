import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Divider, Paper, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

import 'assets/css/font-icons.css';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    paddingTop: theme.spacing(3),
  },
  paper: {
    height: '100%',
  },
  link: {
    height: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    color: 'inherit',
    textAlign: 'center',
    textDecoration: 'none',
    boxShadow: theme.shadows[3],
    transition: 'all .1s ease-in-out',
    outlineColor: theme.palette.primary.main,
    '&:hover, &:focus': {
      boxShadow: theme.shadows[9],
    },
    '&:hover $divider': {
      width: theme.spacing(15),
    },
  },
  iconContainer: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.primary.main,
    fontSize: '2em',
    color: 'white',
    borderRadius: '50%',
  },
  divider: {
    width: theme.spacing(12),
    height: 2,
    backgroundColor: theme.palette.primary.main,
    transition: 'all .1s ease-in-out',
  },
}));

const HelpBox = ({ title, description, to, iconClassName }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper} component="article" square variant="outlined">
        <Link className={classes.link} to={to}>
          <Box className={classes.iconContainer}>
            <i className={iconClassName} />
          </Box>
          <Text component="h2" variant="h6" mt={2.5} mb={0.5}>
            {title}
          </Text>
          <Divider className={classes.divider} />
          <Text variant="body2" mt={2}>
            {description}
          </Text>
        </Link>
      </Paper>
    </Box>
  );
};

HelpBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
};

export default HelpBox;
