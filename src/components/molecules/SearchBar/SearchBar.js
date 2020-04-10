import React from 'react';
import { Button, IconButton, InputBase, Paper, makeStyles } from '@material-ui/core';
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
  },
  iconButton: {
    margin: theme.spacing(0.25, 0.5, 0.25, 0.25),
    padding: theme.spacing(1),
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    display: 'block',
  },
  button: {
    borderRadius: 'unset',
    fontSize: theme.typography.pxToRem(18),
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Paper elevation={5} component="form" className={classes.root}>
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
      />
      <Button
        className={classes.button}
        disableElevation
        size="large"
        color="primary"
        variant="contained"
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchBar;
