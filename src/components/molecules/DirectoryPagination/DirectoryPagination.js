// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { modeSwitch } from 'utils/theme';
import directoryLinkParser from 'utils/directoryLinkParser';
import history from 'utils/history';

const useStyles = makeStyles(theme => ({
  pagination: {
    marginTop: theme.spacing(2),
    '& ul': {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'center',
    },
    '& button, & div': {
      margin: matches => matches && 0,
    },
    '& button': {
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
  const pages = useSelector(state => state.directory.pages);
  const loading = useSelector(state => state.directory.loading);

  const handleChange = (ev, value) => {
    history.push(directoryLinkParser({ page: value }));
  };

  return (
    <Pagination
      onChange={handleChange}
      className={classes.pagination}
      page={Number(page)}
      count={pages}
      disabled={loading}
      color="primary"
      shape="rounded"
      size={matches ? 'medium' : 'large'}
      siblingCount={matches ? 1 : 2}
    />
  );
};

export default DirectoryPagination;
