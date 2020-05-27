import axios from 'axios';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com/api' : '/api'}`;
let source = axios.CancelToken.source();

const loginUser = async data => {
  const response = await axios.post(`${baseUrl}/login/login.php`, data, {
    cancelToken: source.token,
  });

  return response.data;
};

const forgotPassword = async data => {
  const response = await axios.post(`${baseUrl}/login/oneforgotpassword/index.php`, data, {
    cancelToken: source.token,
  });

  return response.data;
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default { loginUser, forgotPassword, cancel };
