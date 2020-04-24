// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import directoryActions from 'actions/directoryActions';
import { List } from '@material-ui/core';
import StationItem from 'components/molecules/StationItem/StationItem';

const DirectoryList = () => {
  const params = useParams();
  const stations = useSelector(state => state.directory.stations);
  const page = useSelector(state => state.directory.page);
  const title = useSelector(state => state.directory.title);
  const sort = useSelector(state => state.directory.sort);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('params from directory List', params);
    dispatch(directoryActions.initParams(params));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log('page', page, 'title', title, 'sort', sort);
  }, [page, title, sort]);

  return (
    <List>
      {stations.map(station => (
        <StationItem data={station} key={station.id} />
      ))}
    </List>
  );
};

export default DirectoryList;
