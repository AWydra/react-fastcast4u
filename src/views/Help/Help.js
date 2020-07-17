import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import HelpTabs from 'components/molecules/HelpTabs/HelpTabs';
import HelpBox from 'components/molecules/HelpBox/HelpBox';
import helpServices from 'services/help';
import history from 'utils/history';

const Help = () => {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [activeId, setActiveId] = useState(0);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const id = new URLSearchParams(location.search).get('id');
    id && history.push(`/help/${id}`);
  }, [location]);

  const handleChange = ev => {
    setTitle(ev.target.value);
    setActiveId('all');
  };

  const handleClear = () => {
    setTitle('');
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await helpServices.getCategories();
      return response;
    };

    const getArticles = async () => {
      const response = await helpServices.getArticles();
      return response;
    };

    Promise.all([getCategories(), getArticles()]).then(values => {
      setCategories(values[0]);
      setArticles(values[1]);
      setActiveId(values[0][0].id);
      setLoading(false);
    });

    return () => {
      helpServices.cancel();
    };
  }, []);

  const filterArticles = useCallback(
    article => (activeId === 'all' ? true : article.category_id === activeId),
    // eslint-disable-next-line
    [articles, activeId],
  );

  const searchArticles = useCallback(
    article =>
      article.helpTitle.toLowerCase().includes(title.toLowerCase()) ||
      article.helpDescription.toLowerCase().includes(title.toLowerCase()),
    // eslint-disable-next-line
    [articles, title],
  );

  const memoizedArticles = useMemo(
    () =>
      articles
        .filter(filterArticles)
        .filter(searchArticles)
        .map((article, i) => (
          <Grid item xs={12} sm={6} lg={4} key={i}>
            <HelpBox
              title={article.helpTitle}
              description={article.helpDescription}
              to={`/help/${article.id}/${article.slug}`}
              iconClassName={article.icon}
            />
          </Grid>
        )),
    // eslint-disable-next-line
    [articles, activeId, title],
  );

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock title="How can we help you today?" component="h1" />
      <SearchBar
        placeholder="Have a question? Type search keywords to start search!"
        mb={6}
        value={title}
        onChange={handleChange}
        onClear={handleClear}
      />
      <HelpTabs
        categories={categories}
        activeId={activeId}
        onClick={id => {
          setActiveId(id);
          setTitle('');
        }}
        loading={loading}
      />
      <Grid container spacing={4}>
        {loading
          ? [...Array(6)].map((el, i) => (
              <Grid item xs={12} sm={6} lg={4} key={i}>
                <Skeleton variant="rect" width="100%" height={200} />
              </Grid>
            ))
          : memoizedArticles}
      </Grid>
    </FullContainer>
  );
};

export default Help;
