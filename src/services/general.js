import axios from 'axios';

const source = axios.CancelToken.source();

const cancel = () => source.cancel();

const getCountryCode = async () => {
  const response = await axios.get(
    'https://vip.timezonedb.com/v2.1/get-time-zone?key=5FNLRO90MNS0&format=json&by=ip',
    {
      cancelToken: source.token,
    },
  );
  return response.data.countryCode.toLowerCase();
};

export default { getCountryCode, cancel };
