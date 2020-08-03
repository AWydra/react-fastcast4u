import axios from 'axios';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com/api' : '/api/translate'}`;
let source = axios.CancelToken.source();

const getRecomendedLangs = async data => {
  const response = await axios.post(`${baseUrl}/languageCode.php`, data, {
    cancelToken: source.token,
  });

  return response.data;
};

const getLangs = async data => {
  const response = await axios.post(`${baseUrl}/countries.php`, data, {
    cancelToken: source.token,
  });

  return response.data;
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default { getRecomendedLangs, getLangs, cancel };
