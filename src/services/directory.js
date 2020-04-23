import axios from 'axios';
import directoryActions from 'actions/directoryActions';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com' : ''}/radio-directory/servertest.php`;

const source = axios.CancelToken.source();

const cancel = () => source.cancel();

const getStationList = params => async dispatch => {
  const response = await axios.get(baseUrl, {
    cancelToken: source.token,
    params: {
      ...params,
    },
  });
  dispatch(directoryActions.setStations(response.data.data));
};

export default { getStationList, cancel };
