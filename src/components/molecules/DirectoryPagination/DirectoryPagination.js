// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import directoryActions from 'actions/directoryActions';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { modeSwitch } from 'utils/theme';

const useStyles = makeStyles(theme => ({
  pagination: {
    marginTop: theme.spacing(2),
    '& ul': {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'center',
    },
    '& a, & div': {
      margin: matches => matches && 0,
    },
    '& a': {
      [theme.breakpoints.up('lg')]: {
        border: '1px solid',
        borderColor: modeSwitch(theme.palette.grey[400], theme.palette.grey[700]),
      },
    },
  },
}));

const DirectoryPagination = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles(matches);
  const page = useSelector(state => state.directory.page);
  const dispatch = useDispatch();

  const handleChange = (ev, value) => {
    dispatch(directoryActions.setPage(value));
  };

  return (
    <Pagination
      className={classes.pagination}
      onChange={handleChange}
      page={Number(page)}
      count={169}
      color="primary"
      shape="rounded"
      size={matches ? 'medium' : 'large'}
      siblingCount={matches ? 1 : 2}
      renderItem={item => (
        <PaginationItem component={Link} to={`/radio-directory/${item.page}`} {...item} />
      )}
    />
  );
};

export default DirectoryPagination;
