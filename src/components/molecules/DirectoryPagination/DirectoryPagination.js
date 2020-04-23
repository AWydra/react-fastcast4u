// @ts-nocheck
import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import directoryActions from 'actions/directoryActions';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

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
        border: '1px solid rgba(0, 0, 0, 0.23)',
      },
    },
  },
}));

const DirectoryPagination = () => {
  const params = useParams();
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles(matches);
  const page = useSelector(state => state.directory.page);
  const dispatch = useDispatch();

  console.log('params', params);

  const handleChange = (ev, value) => {
    dispatch(directoryActions.setPage(value));
  };

  useEffect(() => {
    dispatch(directoryActions.setPage(Number(params.page || 1)));
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <Pagination
      className={classes.pagination}
      onChange={handleChange}
      page={page || 1}
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
