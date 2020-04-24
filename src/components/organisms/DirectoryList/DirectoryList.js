// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@material-ui/core';
import StationItem from 'components/molecules/StationItem/StationItem';

const DirectoryList = () => {
  const stations = useSelector(state => state.directory.stations);

  return (
    <List>
      {stations.map(station => (
        <StationItem data={station} key={station.id} />
      ))}
    </List>
  );
};

export default DirectoryList;
