import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Box, Paper, makeStyles } from '@material-ui/core';

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
}));

const HelpTabs = ({ categories }) => {
  const classes = useStyles();

  return (
    <Box className={classes.tabsContainer} component="ul">
      {categories.map(category => (
        <li className={classes.listItem}>
          <Paper
            key={category.id}
            className={classes.tab}
            component={NavLink}
            exact
            to={`/help${category.description}`}
            activeClassName={classes.active}
            variant="outlined"
            square
          >
            {category.name.slice(5).replace('&amp;', '&')}
          </Paper>
        </li>
      ))}
      <li className={classes.listItem}>
        <Paper
          className={classes.tab}
          component={NavLink}
          exact
          to="/help/all"
          activeClassName={classes.active}
          variant="outlined"
          square
        >
          Show All
        </Paper>
      </li>
    </Box>
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
