// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import directoryActions from 'actions/directoryActions';
import { List } from '@material-ui/core';
import StationItem from 'components/molecules/StationItem/StationItem';

const DirectoryList = () => {
  const params = useParams();
  const location = useLocation();
  const stations = useSelector(state => state.directory.stations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(directoryActions.setParams(params));
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <List>
      {stations.map(station => (
        <StationItem data={station} key={station.id} />
      ))}
    </List>
  );
};

export default DirectoryList;
