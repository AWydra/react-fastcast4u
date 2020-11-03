import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 0,
  },
  listIcon: {
    minWidth: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  icon: {
    fontSize: 18,
  },
  itemText: {
    fontSize: '1rem',
  },
  button: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const WebPlayer = () => {
  const classes = useStyles();
  const content = useSelector(state => state.language.start.sms);

  return (
    <>
      <Container maxWidth="xl">
        <Text variant="h5" align="center" mb={8}>
          {content.heading}
        </Text>
        <Grid spacing={4} container>
          <Grid item xs={12} md={7}>
            <Text component="h2" variant="h4" fontWeight={500}>
              {content.sections[0].title}
            </Text>
            <Text color="textSecondary" variant="h6" my={2}>
              {content.sections[0].subtitle}
            </Text>
            <List>
              {content.sections[0].list.map(content => (
                <ListItem key={content} disableGutters className={classes.item}>
                  <ListItemIcon className={classes.listIcon}>
                    <CheckCircleIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText className={classes.itemText} primary={content} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid className={classes.imageContainer} item xs={12} md={5}>
            <Image src="//img.fastcast4u.com/react/start/iconsv3.png" />
          </Grid>
        </Grid>
        <Text variant="h4" fontWeight={500} align="center" mt={10}>
          {content.cta.heading}
        </Text>
        <CTAButton className={classes.button} component={Link} to="/order" xlarge color="primary">
          {content.cta.label}
        </CTAButton>
      </Container>
    </>
  );
};

export default WebPlayer;
