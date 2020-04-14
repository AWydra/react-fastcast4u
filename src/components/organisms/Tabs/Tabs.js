// @ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs as MuiTabs, Tab, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  tabs: { [theme.breakpoints.up('lg')]: { maxWidth: 'fit-content' } },
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

const Tabs = ({ data }) => {
  const [value, setValue] = useState('popular');

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <Paper square className={classes.tabs}>
      <MuiTabs
        indicatorColor="primary"
        textColor="primary"
        centered
        value={value}
        onChange={handleChange}
      >
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

Tabs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.element, label: PropTypes.any }))
    .isRequired,
};

export default Tabs;
