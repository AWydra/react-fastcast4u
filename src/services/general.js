import axios from 'axios';

const getCountryCode = async () => {
  const response = await axios.get(
    'https://vip.timezonedb.com/v2.1/get-time-zone?key=5FNLRO90MNS0&format=json&by=ip',
  );
  return response.data.countryCode.toLowerCase();
};

export default { getCountryCode };
