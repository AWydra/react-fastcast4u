import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  const content = useSelector(state => state.language.faq);
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
      <HeadingBlock title={content.title} subtitle={content.subtitle} component="h1" />
      <Box className={classes.container}>
        <FaqTabs categories={categories} loading={loading} />
        <FaqArticles categories={categories} />
      </Box>
    </FullContainer>
  );
};

export default Faq;
