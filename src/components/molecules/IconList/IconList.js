import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  item: {
    padding: 0,
  },
  icon: {
    minWidth: 'unset',
    color: theme.palette.primary.main,
    '& svg': { width: 18, height: 18 },
  },
  text: {
    marginLeft: theme.spacing(1),
  },
}));

const IconList = ({ icon, heading, content }) => {
  const classes = useStyles();

  return (
    <>
      <Text component="h6" variant="h6" ml={3.3} fontSize={20} fontWeight={600}>
        {heading}
      </Text>
      <List>
        {content.map(text => (
          <ListItem key={text} className={classes.item}>
            <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
            <ListItemText className={classes.text} primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

IconList.propTypes = {
  icon: PropTypes.element.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IconList;
