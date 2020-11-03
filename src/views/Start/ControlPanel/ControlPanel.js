import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Text from 'components/atoms/Text/Text';
import CTAButton from 'components/atoms/CTAButton/CTAButton';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import PanelComparision from 'components/organisms/PanelComparison/PanelComparison';

const useStyles = makeStyles(theme => ({
  panel: {
    maxWidth: theme.spacing(67),
  },
  button: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const ControlPanel = () => {
  const content = useSelector(state => state.language.start.control);
  const classes = useStyles();

  const everestData = useMemo(
    () => ({
      img: 'https://img.fastcast4u.com/react/app/app-creator.png',
      ...content.everest,
    }),
    [content],
  );

  const centovaData = useMemo(
    () => ({
      img: 'https://img.fastcast4u.com/react/app/app-creator.png',
      ...content.centova,
    }),
    [content],
  );

  return (
    <Container maxWidth="xl">
      <HeadingBlock title={content.heading.title} subtitle={content.heading.subtitle} />
      <Grid container spacing={4} justify="center">
        <Grid className={classes.panel} item xs={12} md={6}>
          <PanelComparision {...everestData} />
        </Grid>
        <Grid className={classes.panel} item xs={12} md={6}>
          <PanelComparision {...centovaData} />
        </Grid>
      </Grid>
      <Text variant="h4" fontWeight={500} align="center" mt={8}>
        {content.cta.heading}
      </Text>
      <CTAButton className={classes.button} component={Link} to="/order" xlarge color="primary">
        {content.cta.label}
      </CTAButton>
    </Container>
  );
};

export default ControlPanel;
