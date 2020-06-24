import axios from 'axios';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com/api' : '/api'}`;
let source = axios.CancelToken.source();

const getInitialData = async () => {
  const response = await axios.get('https://fastcast4u.com/api/general/initialResponse.php', {
    cancelToken: source.token,
  });
  return response.data;
};

const requestPhoneCall = async data => {
  const response = await axios.post(`${baseUrl}/request_phone/callWeb.php`, data, {
    cancelToken: source.token,
  });

  return response.data;
};

const getTos = async () => {
  const response = await axios.get(`${baseUrl}/tos/pure.php`, {
    cancelToken: source.token,
  });

  return response.data;
};

const getPrivacyPolicy = async () => {
  const response = await axios.get(`${baseUrl}/privacy/privacy.php`, {
    cancelToken: source.token,
  });

  return response.data;
};

const sendTicket = async data => {
  const formData = new FormData();

  Object.keys(data).forEach(key => {
    if (Array.isArray(data[key])) {
      data[key].forEach((el, i) => formData.append(`attachements${i}`, el));
    } else {
      formData.append(key, data[key]);
    }
  });

  const response = await axios.post(`${baseUrl}/ticket/ticket.php`, formData, {
    cancelToken: source.token,
  });

  return response.data;
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default {
  getInitialData,
  requestPhoneCall,
  getTos,
  getPrivacyPolicy,
  sendTicket,
  cancel,
};
