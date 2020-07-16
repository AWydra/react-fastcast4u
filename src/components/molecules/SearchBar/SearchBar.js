// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, IconButton, InputBase, Paper, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: theme.spacing(5.5),
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

const SearchBar = ({ placeholder, value, onChange, onClear, onSubmit, ...props }) => {
  const classes = useStyles();

  return (
    <Box component={onSubmit && 'form'} onSubmit={onSubmit} {...props}>
      <Paper elevation={5} className={classes.root}>
        <InputBase
          id="search"
          className={classes.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
          startAdornment={<SearchIcon className={classes.icon} />}
          endAdornment={
            value && (
              <IconButton className={classes.iconButton} onClick={onClear} aria-label="clear input">
                <CloseIcon />
              </IconButton>
            )
          }
        />
        {onSubmit && (
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
        )}
      </Paper>
    </Box>
  );
};

SearchBar.defaultProps = {
  onSubmit: undefined,
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onSubmit: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default SearchBar;
