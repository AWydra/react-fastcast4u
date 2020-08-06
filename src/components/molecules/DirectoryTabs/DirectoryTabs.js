// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Paper, Tabs as MuiTabs, Tab, makeStyles } from '@material-ui/core';
import directoryLinkParser from 'utils/directoryLinkParser';
import history from 'utils/history';
import { useCurrentLanguage } from 'utils/customHooks';

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
  const classes = useStyles();
  const lng = useCurrentLanguage();

  const handleChange = (ev, value) => {
    const currentPathname = window.location.pathname;
    const destinationPathname = directoryLinkParser({ page: 1, sort: value, lng });
    if (currentPathname === destinationPathname) {
      history.replace(destinationPathname);
    } else {
      history.push(destinationPathname);
    }
  };

  return (
    <Paper square className={classes.tabs}>
      <MuiTabs onChange={handleChange} indicatorColor="primary" textColor="primary" value={sort}>
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
