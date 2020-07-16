// @ts-nocheck
import React, { useState, useEffect } from 'react';
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

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const data = [
  { icon: <ThumbUpAltIcon />, label: 'Popular', value: 'popular' },
  { icon: <FontDownloadIcon />, label: 'Name', value: 'name' },
  { icon: <PeopleAltIcon />, label: 'Listeners', value: 'listeners' },
];

const ad = {
  image: '//img.fastcast4u.com/react/radio-directory/directory-banner.png',
  text: 'Start Your Own Online Radio Station',
  label: 'Start Now',
  to: '/order',
};

const RadioDirectory = () => {
  const showPlayer = useSelector(state => state.directory.player.show);
  const storeTitle = useSelector(state => state.directory.title);
  const [title, setTitle] = useState(storeTitle);

  useEffect(() => {
    setTitle(storeTitle);
  }, [storeTitle]);

  const handleClear = () => {
    setTitle('');
    history.push(`/radio-directory`);
  };

  const handleChange = ev => {
    setTitle(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const currentPathname = window.location.pathname;
    const destinationPathname = directoryLinkParser({ page: 1, sort: 'popular', title });
    if (currentPathname === destinationPathname) {
      history.replace(destinationPathname);
    } else {
      history.push(destinationPathname);
    }
  };

  return (
    <FullContainer maxWidth="xl" component="main">
      <HeadingBlock
        title="Online Radio Directory"
        subtitle="Listen, Share and Vote Up your favorite Internet Radio Stations"
        component="h1"
      />
      <SearchBar
        placeholder="Search a radio..."
        mb={6}
        value={title}
        onChange={handleChange}
        onClear={handleClear}
        onSubmit={handleSubmit}
      />
      <Grid spacing={3} container>
        <Grid item xs={12} lg={8} component="section">
          <DirectoryTabs data={data} />
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
