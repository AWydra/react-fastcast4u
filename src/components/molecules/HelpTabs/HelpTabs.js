/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box,
  ButtonBase,
  FormControl,
  InputLabel,
  Select,
  Paper,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  tabsContainer: {
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  listItem: {
    margin: theme.spacing(0.75),
    boxShadow: theme.shadows[2],
    listStyle: 'none',
  },
  tab: {
    height: '100%',
    padding: theme.spacing(1),
    display: 'block',
    fontSize: 16,
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.1s ease-in-out',
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
}));

const HelpTabs = ({ categories, activeId, loading, onClick }) => {
  const content = useSelector(state => state.language.help);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();

  const memoizedSelectCategories = useMemo(() => {
    return (
      !matches &&
      categories
        .concat({
          name: 'Show All',
          id: 'all',
        })
        .map(category => (
          <option key={category.id} value={category.id}>
            {category.name.replace('&amp;', '&')}
          </option>
        ))
    );
    // eslint-disable-next-line
  }, [categories, activeId, matches]);

  const memoizedCategories = useMemo(() => {
    return (
      matches &&
      categories
        .concat({
          name: content.showAll,
          id: 'all',
        })
        .map(category => (
          <li className={classes.listItem} key={category.id}>
            <Paper
              className={`${classes.tab} ${category.id === activeId && classes.active}`}
              component={ButtonBase}
              focusRipple
              variant="outlined"
              square
              onClick={() => onClick(category.id)}
            >
              {category.name.replace('&amp;', '&')}
            </Paper>
          </li>
        ))
    );
    // eslint-disable-next-line
  }, [categories, activeId, matches, content]);

  return matches ? (
    <Box className={classes.tabsContainer} component="ul">
      {loading
        ? [...Array(9)].map((el, i) => (
            <Skeleton key={i} className={classes.listItem} variant="rect" width={180} height={40} />
          ))
        : memoizedCategories}
    </Box>
  ) : (
    <FormControl variant="outlined" className={classes.formControl}>
      {loading ? (
        <Skeleton variant="rect" width="100%" height={56} />
      ) : (
        <>
          <InputLabel htmlFor="category-select">Select category</InputLabel>
          <Select
            native
            value={activeId}
            onChange={ev => onClick(ev.target.value)}
            inputProps={{
              id: 'category-select',
            }}
            label="Select category"
          >
            {memoizedSelectCategories}
          </Select>
        </>
      )}
    </FormControl>
  );
};

HelpTabs.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default HelpTabs;
