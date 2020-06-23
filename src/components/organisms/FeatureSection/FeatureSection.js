import React from 'react';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import Image from 'components/atoms/Image/Image';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  heading: {
    maxWidth: 800,
    margin: theme.spacing(0, 'auto'),
    textAlign: 'center',
    fontWeight: 500,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemIcon: {
    fontSize: 32,
    '& svg': {
      fontSize: 'unset',
    },
  },
  primary: {
    marginBottom: theme.spacing(0.75),
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  secondary: {
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
}));

const FeatureSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xl">
      <Text className={classes.heading} component="h2" variant="h4">
        Get your Skill for Amazon Echo Smart Speakers with a custom voice command
      </Text>
      <Grid container spacing={2}>
        <Grid item className={classes.item} xs={12} md={5}>
          <Image src="https://www.worldshop.eu/medias/sys_master/h9a/h0b/8895596068894.png" />
        </Grid>
        <Grid item className={classes.item} xs={12} md={7}>
          <List>
            <ListItem disableGutters>
              <ListItemIcon className={classes.listItemIcon}>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary,
                }}
                primary="Retina Ready &amp; Fully Responsive"
                primaryTypographyProps={{
                  component: 'h3',
                }}
                secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon className={classes.listItemIcon}>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary,
                }}
                primary="Four Awesome Header Layouts"
                secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon className={classes.listItemIcon}>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary,
                }}
                primary="Quick-to-Install and Easy-to-Use"
                secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeatureSection;
