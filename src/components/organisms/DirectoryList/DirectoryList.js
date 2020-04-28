// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import directoryActions from 'actions/directoryActions';
import { List } from '@material-ui/core';
import StationItem from 'components/molecules/StationItem/StationItem';
import directoryServices from 'services/directory';
import { useAlert } from 'utils/customHooks';

const DirectoryList = () => {
  const alert = useAlert();
  const params = useParams();
  const location = useLocation();
  const stations = useSelector(state => state.directory.stations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(directoryActions.setParams(params));
    dispatch(directoryActions.setLoading(true));
    const getStationList = async () => {
      try {
        const response = await directoryServices.getStationList(params);
        dispatch(directoryActions.setPages(response.pages));
        dispatch(directoryActions.setStations(response.data));
      } catch (error) {
        if (!error.__CANCEL__) {
          alert.error(error.message);
        }
      }
    };

    getStationList();

    return () => {
      directoryServices.cancel();
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
