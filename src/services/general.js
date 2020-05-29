import axios from 'axios';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com/api' : '/api'}`;
let source = axios.CancelToken.source();

const getCountryCode = async () => {
  const response = await axios.get(
    'https://vip.timezonedb.com/v2.1/get-time-zone?key=5FNLRO90MNS0&format=json&by=ip',
    {
      cancelToken: source.token,
    },
  );
  return response.data.countryCode.toLowerCase();
};

const requestPhoneCall = async data => {
  const response = await axios.post(`${baseUrl}/request_phone/call_web-react.php`, data, {
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
  const response = await axios.post(`${baseUrl}/ticket/ticket.php`, data, {
    cancelToken: source.token,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default { getCountryCode, requestPhoneCall, getTos, getPrivacyPolicy, sendTicket, cancel };
