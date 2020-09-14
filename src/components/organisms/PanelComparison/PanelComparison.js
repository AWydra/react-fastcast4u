import React from 'react';
import PropTypes from 'prop-types';
import { Paper, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  paper: {
    height: '100%',
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: '50%',
    paddingTop: theme.spacing(4),
  },
  heading: {
    fontWeight: 500,
  },
  list: {
    marginTop: 'auto',
  },
  listItem: {
    padding: theme.spacing(0.5, 2),
    textAlign: 'center',
  },
}));

const PanelComparison = ({ heading, content, list }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={6}>
      <Text className={classes.heading} variant="h3" my={2}>
        {heading}
      </Text>
      <Text className={classes.content} variant="h6" mb={3}>
        {content}
      </Text>
      <List className={classes.list}>
        {list.map(content => (
          <ListItem className={classes.listItem} key={content}>
            <ListItemText primary={content} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

PanelComparison.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PanelComparison;
