import React from 'react';
import { List } from '@material-ui/core';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import StationItem from 'components/molecules/StationItem/StationItem';
import FullContainer from 'components/atoms/FullContainer/FullContainer';

const RadioDirectory = () => (
  <FullContainer>
    <HeadingBlock
      title="Online Radio Directory"
      subtitle="Listen, Share and Vote Up your favorite Internet Radio Stations"
      component="h1"
    />
    <List>
      <StationItem />
      <StationItem />
      <StationItem />
      <StationItem />
      <StationItem />
    </List>
  </FullContainer>
);

export default RadioDirectory;
