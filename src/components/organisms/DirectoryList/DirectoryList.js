// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { List } from '@material-ui/core';
import StationItem from 'components/molecules/StationItem/StationItem';
import directoryServices from 'services/directory';

const DirectoryList = () => {
  const params = useParams();
  const location = useLocation();
  const stations = useSelector(state => state.directory.stations);
  const dispatch = useDispatch();

  useEffect(() => {
    let request;
    const getStationList = async () => {
      request = await dispatch(directoryServices.getStationList(params));
    };

    getStationList();

    return () => {
      request.cancel();
    };
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      directoryServices.cancel();
    };
  }, []);

  return (
    <List>
      {stations.map(station => (
        <StationItem data={station} key={station.id} />
      ))}
    </List>
  );
};

export default DirectoryList;
