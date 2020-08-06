// @ts-nocheck
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import Ad from 'components/molecules/Ad/Ad';
import DirectoryTabs from 'components/molecules/DirectoryTabs/DirectoryTabs';
import DirectoryPagination from 'components/molecules/DirectoryPagination/DirectoryPagination';
import DirectoryList from 'components/organisms/DirectoryList/DirectoryList';
import RadioPlayer from 'components/organisms/RadioPlayer/RadioPlayer';
import history from 'utils/history';
import directoryLinkParser from 'utils/directoryLinkParser';
import { useCurrentLanguage } from 'utils/customHooks';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const RadioDirectory = () => {
  const content = useSelector(state => state.language.directory);
  const showPlayer = useSelector(state => state.directory.player.show);
  const storeTitle = useSelector(state => state.directory.title);
  const [title, setTitle] = useState(storeTitle);
  const lng = useCurrentLanguage();

  const tabsData = useMemo(
    () => [
      { icon: <ThumbUpAltIcon />, label: content.tabs.popular, value: 'popular' },
      { icon: <FontDownloadIcon />, label: content.tabs.name, value: 'name' },
      { icon: <PeopleAltIcon />, label: content.tabs.listeners, value: 'listeners' },
    ],
    [content],
  );

  const ad = useMemo(
    () => ({
      image: '//img.fastcast4u.com/react/radio-directory/directory-banner.png',
      text: content.ad.title,
      label: content.ad.label,
      to: `${lng}/order`,
    }),
    [content, lng],
  );

  useEffect(() => {
    setTitle(storeTitle);
  }, [storeTitle]);

  const handleClear = () => {
    setTitle('');
    history.push(`${lng}/radio-directory`);
  };

  const handleChange = ev => {
    setTitle(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const currentPathname = window.location.pathname;
    const destinationPathname = directoryLinkParser({ page: 1, sort: 'popular', title, lng });
    if (currentPathname === destinationPathname) {
      history.replace(destinationPathname);
    } else {
      history.push(destinationPathname);
    }
  };

  return (
    <FullContainer maxWidth="xl" component="main">
      <HeadingBlock title={content.title} subtitle={content.subtitle} component="h1" />
      <SearchBar
        placeholder={content.placeholder}
        mb={6}
        value={title}
        onChange={handleChange}
        onClear={handleClear}
        onSubmit={handleSubmit}
      />
      <Grid spacing={3} container>
        <Grid item xs={12} lg={8} component="section">
          <DirectoryTabs data={tabsData} />
          <DirectoryList />
          <DirectoryPagination />
        </Grid>
        <Grid item xs={12} lg={4} component="aside">
          <Ad {...ad} />
        </Grid>
      </Grid>
      {showPlayer && <RadioPlayer />}
    </FullContainer>
  );
};

export default RadioDirectory;
