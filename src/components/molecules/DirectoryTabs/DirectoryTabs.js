// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import directoryActions from 'actions/directoryActions';
import { Paper, Tabs as MuiTabs, Tab, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  tabs: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: 'fit-content',
    },
    '& [role="tablist"]': {
      justifyContent: 'space-around',
    },
  },
  tab: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
    },
    '& svg': {
      width: 20,
      height: 20,
      [theme.breakpoints.down(340)]: {
        display: 'none',
      },
    },
  },
}));

const DirectoryTabs = ({ data }) => {
  const sort = useSelector(state => state.directory.sort);
  const dispatch = useDispatch();

  const handleChange = (ev, value) => {
    dispatch(directoryActions.setSort(value));
  };
  const classes = useStyles();

  return (
    <Paper square className={classes.tabs}>
      <MuiTabs indicatorColor="primary" textColor="primary" value={sort} onChange={handleChange}>
        {data.map(({ icon, label, value }) => (
          <Tab
            className={classes.tab}
            key={value}
            value={value}
            label={
              <>
                {icon} &nbsp;{label}
              </>
            }
          />
        ))}
      </MuiTabs>
    </Paper>
  );
};

DirectoryTabs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.element, label: PropTypes.any }))
    .isRequired,
};

export default DirectoryTabs;
