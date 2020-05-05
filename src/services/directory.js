import axios from 'axios';
import directoryActions from 'actions/directoryActions';
import normalizeSongMetadata from 'utils/normalizeSongMetadata';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com' : ''}/radio-directory/serverreact.php`;

let source = axios.CancelToken.source();

const getStationList = async params => {
  const request = await axios.get(baseUrl, {
    cancelToken: source.token,
    params: {
      ...params,
    },
  });
  return request.data;
};

const getSongMetadata = (url, servertype) => async dispatch => {
  const { data } = await axios.get(url, {
    cancelToken: source.token,
  });
  dispatch(directoryActions.setSongMetadata(normalizeSongMetadata(servertype, data)));
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default { getStationList, getSongMetadata, cancel };
