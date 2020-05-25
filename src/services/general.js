import axios from 'axios';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com' : ''}`;
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

const requestPhoneCall = async (data) => {
  const response = await axios.post(`${baseUrl}/request_phone/call_web-react.php`, data, {
    cancelToken: source.token,
  });

  return response.data;
}

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default { getCountryCode, requestPhoneCall, cancel };
