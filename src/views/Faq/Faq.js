import React, { useState, useEffect } from 'react';
import faqServices from 'services/faq';
import { Box, makeStyles } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import FaqTabs from 'components/molecules/FaqTabs/FaqTabs';
import FaqArticles from 'components/molecules/FaqArticles/FaqArticles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  accordionContainer: {
    flex: 1,
  },
}));

const Faq = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    faqServices.getCategories().then(({ categories }) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock
        title="Frequently Asked Questions"
        subtitle="We're always super happy to answer all your questions about our services, but you can also check for an answer there..."
        component="h1"
      />
      <Box className={classes.container}>
        <FaqTabs categories={categories} loading={loading} />
        <FaqArticles categories={categories} />
      </Box>
    </FullContainer>
  );
};

export default Faq;
