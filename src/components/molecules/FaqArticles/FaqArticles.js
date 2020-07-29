import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import faqServices from 'services/faq';
import { useLocation } from 'react-router-dom';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';
import Accordion from 'components/organisms/Accordion/Accordion';
import history from 'utils/history';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flex: 1,
    },
  },
}));

const FaqArticles = ({ categories }) => {
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categories.length > 0) return;
    setLoading(true);

    const currentCategory =
      categories.find(({ description }) => description === location.pathname.substring(4)) || {};

    if (currentCategory.id) {
      const { id } = currentCategory;
      faqServices.getArticles(id).then(({ articles }) => {
        setArticles(articles);
        setLoading(false);
      });
    } else {
      history.replace(`/faq${categories[0].description}`);
    }
  }, [location, categories]);

  return (
    <Box className={classes.container}>
      {loading ? (
        <LinearProgress />
      ) : (
        <Accordion
          data={articles}
          summaryProps={{
            component: 'h3',
            variant: 'subtitle1',
            fontWeight: 500,
          }}
          injectHTML
          start={null}
        />
      )}
    </Box>
  );
};

FaqArticles.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default FaqArticles;
