// @ts-nocheck
import axios from 'axios';
import generalActions from 'actions/generalActions';
import directoryActions from 'actions/directoryActions';
import normalizeSongMetadata from 'utils/normalizeSongMetadata';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com' : ''}/api/radio-directory/server.php`;

const getStationList = params => dispatch => {
  const source = axios.CancelToken.source();
  dispatch(directoryActions.setParams(params));
  dispatch(directoryActions.setStationsPlaceholder(params.id && 1));
  axios
    .get(baseUrl, {
      cancelToken: source.token,
      params: {
        ...params,
      },
    })
    .then(({ data }) => {
      if (!data.data) {
        dispatch(
          generalActions.setAlert.error('No valid data - try again later or contact our support'),
        );
        return;
      }
      dispatch(directoryActions.setPages(data.pages));
      dispatch(directoryActions.setStations(data.data));
    })
    .catch(err => {
      if (!axios.isCancel(err)) {
        dispatch(generalActions.setAlert.error(err.message));
      }
    });

  return { cancel: () => source.cancel() };
};

const getSongMetadata = (url, servertype) => dispatch => {
  const source = axios.CancelToken.source();

  axios
    .get(url, {
      cancelToken: source.token,
    })
    .then(({ data }) => {
      dispatch(directoryActions.setSongMetadata(normalizeSongMetadata(servertype, data)));
    })
    .catch(err => {
      if (!axios.isCancel(err)) {
        dispatch(generalActions.setAlert.error(err.response.data.message || err.message));
      }
    });

  return { cancel: () => source.cancel() };
};

export default { getStationList, getSongMetadata };
