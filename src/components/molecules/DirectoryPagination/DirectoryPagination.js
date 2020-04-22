// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import directoryActions from 'actions/directoryActions';
import { Pagination } from '@material-ui/lab';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  pagination: {
    marginTop: theme.spacing(2),
    '& ul': {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'center',
    },
    '& button': {
      margin: matches => matches && 0,
    },
  },
}));

const DirectoryPagination = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles(matches);
  const page = useSelector(state => state.directory.page);
  const dispatch = useDispatch();

  const handleChange = (ev, value) => {
    console.log(value);
    dispatch(directoryActions.setPage(value));
  };

  return (
    <Pagination
      className={classes.pagination}
      onChange={handleChange}
      page={page}
      count={169}
      color="primary"
      shape="rounded"
      size={matches ? 'medium' : 'large'}
      siblingCount={matches ? 1 : 2}
    />
  );
};

export default DirectoryPagination;
