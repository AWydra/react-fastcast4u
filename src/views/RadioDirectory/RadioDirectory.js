// @ts-nocheck
import React from 'react';
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

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const data = [
  { icon: <ThumbUpAltIcon />, label: 'Popular', value: 'popular' },
  { icon: <FontDownloadIcon />, label: 'Name', value: 'name' },
  { icon: <PeopleAltIcon />, label: 'Listeners', value: 'listeners' },
];

const RadioDirectory = () => {
  const showPlayer = useSelector(state => state.directory.player.show);
  return (
    <FullContainer maxWidth="xl" component="main">
      <HeadingBlock
        title="Online Radio Directory"
        subtitle="Listen, Share and Vote Up your favorite Internet Radio Stations"
        component="h1"
      />
      <SearchBar mb={6} />
      <Grid spacing={3} container>
        <Grid item xs={12} lg={8} component="section">
          <DirectoryTabs data={data} />
          <DirectoryList />
          <DirectoryPagination />
        </Grid>
        <Grid item xs={12} lg={4} component="aside">
          <Ad />
        </Grid>
      </Grid>
      {showPlayer && <RadioPlayer />}
    </FullContainer>
  );
};

export default RadioDirectory;
