import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import Image from 'components/atoms/Image/Image';
import Text from 'components/atoms/Text/Text';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 800,
    padding: theme.spacing(4, 0),
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  imageContainer: {
    padding: theme.spacing(0, 0, 6, 0),
    flexBasis: '70%',
    minWidth: 200,
    maxWidth: 300,
    [theme.breakpoints.up('md')]: {
      maxWidth: 'unset',
      padding: theme.spacing(0, 4, 0, 0),
      flexBasis: 250,
      flexGrow: 0,
    },
  },
  image: {
    width: '100%',
    padding: theme.spacing(0.5),
    border: '1px solid',
    borderColor: theme.palette.grey[400],
    borderRadius: '50%',
  },
  contentContainer: {
    flexGrow: 1,
  },
}));

const BusinessCard = () => {
  const classes = useStyles();

  return (
    <FullContainer center>
      <Grid className={classes.container} container>
        <Grid className={classes.imageContainer} item xs={12} md={6}>
          <Image className={classes.image} src="https://fastcast4u.com/images/icons/avatar.jpg" />
        </Grid>
        <Grid className={classes.contentContainer} item xs={12} md={6}>
          <Text component="h2" variant="h4" fontWeight={600} mb={1}>
            MIŁOSZ MIEDZIŃSKI
          </Text>
          <Text variant="h6" color="textSecondary" mb={2}>
            CEO of FastCast DWC-LLC
          </Text>
          <Text>
            My Company, founded in 2008, provides Internet Radio Stream Hosting Solutions worldwide.
            I will be honored if you join us with your Business, Organization or Project.
          </Text>
        </Grid>
      </Grid>
    </FullContainer>
  );
};

export default BusinessCard;
