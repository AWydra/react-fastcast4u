// @ts-nocheck
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import directoryActions from 'actions/directoryActions';
import { Box, Button, IconButton, InputBase, Paper, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    margin: '0 auto',
    maxWidth: 750,
  },
  input: {
    paddingRight: theme.spacing(2),
    flexGrow: 1,
    fontSize: theme.typography.pxToRem(20),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(17),
    },
  },
  iconButton: {
    margin: theme.spacing(0.25, 0.5, 0.25, 0.25),
    padding: 5,
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    display: 'block',
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

const SearchBar = ({ ...props }) => {
  const classes = useStyles();
  const storeTitle = useSelector(state => state.directory.title);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(storeTitle);

  const handleChange = ev => {
    setTitle(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    dispatch(directoryActions.setTitle(title));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} {...props}>
      <Paper elevation={5} className={classes.root}>
        <IconButton
          component="label"
          htmlFor="search"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon className={classes.icon} />
        </IconButton>
        <InputBase
          type="search"
          id="search"
          className={classes.input}
          placeholder="Search a radio..."
          value={title}
          onChange={handleChange}
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

export default SearchBar;
