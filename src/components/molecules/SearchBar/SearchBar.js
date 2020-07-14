// @ts-nocheck
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box, Button, IconButton, InputBase, Paper, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import history from 'utils/history';
import directoryLinkParser from 'utils/directoryLinkParser';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    margin: '0 auto',
    maxWidth: 750,
  },
  input: {
    width: '100%',
    fontSize: theme.typography.pxToRem(17),
    '& input': {
      marginLeft: theme.spacing(5),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.pxToRem(20),
      '& input': {
        marginLeft: theme.spacing(6),
      },
    },
  },
  iconButton: {
    margin: theme.spacing(0.25, 0.5, 0.25, 0.25),
    padding: 5,
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: theme.spacing(0, 1),
    display: 'block',
    position: 'absolute',
    color: theme.palette.grey[600],
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
  button: {
    borderRadius: 'unset',
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(14),
    },
  },
}));

const SearchBar = ({ placeholder, ...props }) => {
  const classes = useStyles();
  const storeTitle = useSelector(state => state.directory.title);
  const [title, setTitle] = useState(storeTitle);

  useEffect(() => {
    setTitle(storeTitle);
  }, [storeTitle]);

  const handleClick = () => {
    setTitle('');
    history.push(`/radio-directory`);
  };

  const handleChange = ev => {
    setTitle(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const currentPathname = window.location.pathname;
    const destinationPathname = directoryLinkParser({ page: 1, sort: 'popular', title });
    if (currentPathname === destinationPathname) {
      history.replace(destinationPathname);
    } else {
      history.push(destinationPathname);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} {...props}>
      <Paper elevation={5} className={classes.root}>
        <InputBase
          id="search"
          className={classes.input}
          placeholder={placeholder}
          value={title}
          onChange={handleChange}
          autoComplete="off"
          startAdornment={<SearchIcon className={classes.icon} />}
          endAdornment={
            title && (
              <IconButton
                className={classes.iconButton}
                onClick={handleClick}
                aria-label="clear input"
              >
                <CloseIcon />
              </IconButton>
            )
          }
        />
        <Button
          className={classes.button}
          disableElevation
          size="large"
          color="primary"
          variant="contained"
          type="submit"
        >
          Search
        </Button>
      </Paper>
    </Box>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
