import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import HelpTabs from 'components/molecules/HelpTabs/HelpTabs';
import HelpBox from 'components/molecules/HelpBox/HelpBox';
import helpServices from 'services/help';

const Help = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await helpServices.getCategories();
      setCategories(response);
    };

    getCategories();
  }, []);

  return (
    <FullContainer maxWidth="xl">
      <HeadingBlock title="How can we help you today?" component="h1" />
      <SearchBar placeholder="Have a question? Type search keywords to start search!" mb={6} />
      <HelpTabs categories={categories} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={4}>
          <HelpBox />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <HelpBox />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <HelpBox />
        </Grid>
      </Grid>
    </FullContainer>
  );
};

export default Help;
