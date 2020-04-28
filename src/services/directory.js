import axios from 'axios';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com' : ''}/radio-directory/servertest.php`;

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

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default { getStationList, cancel };
