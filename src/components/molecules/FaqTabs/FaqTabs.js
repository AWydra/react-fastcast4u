import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  Select,
  Paper,
  Tabs,
  Tab,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import history from 'utils/history';

const useStyles = makeStyles(theme => ({
  tabs: {
    marginRight: theme.spacing(3),
    boxShadow: theme.shadows[3],
  },
  tab: {
    textTransform: 'capitalize',
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
}));

const FaqTabs = ({ categories, loading }) => {
  const [value, setValue] = useState('');
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    location.pathname !== newValue && history.push(newValue);
  };

  const handleSelectChange = ev =>
    location.pathname !== ev.target.value && history.push(ev.target.value);

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  return matches ? (
    loading ? (
      <Skeleton variant="rect" className={classes.tabs} width={250} height={288} />
    ) : (
      <Paper variant="outlined" className={classes.tabs}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          indicatorColor="primary"
        >
          {categories.map(category => (
            <Tab
              key={category.id}
              value={`/faq${category.description}`}
              className={classes.tab}
              label={category.name.replace('&amp;', '&')}
            />
          ))}
        </Tabs>
      </Paper>
    )
  ) : loading ? (
    <Skeleton variant="rect" className={classes.formControl} width="100%" height={56} />
  ) : (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">Select category</InputLabel>
      <Select native value={value} onChange={handleSelectChange} label="Select category">
        {categories.map(category => (
          <option key={category.id} value={`/faq${category.description}`}>
            {category.name.replace('&amp;', '&')}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

FaqTabs.defaultProps = {
  loading: false,
};

FaqTabs.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  loading: PropTypes.bool,
};

export default FaqTabs;
