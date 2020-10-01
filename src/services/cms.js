import axios from 'axios';

const baseUrl = `https://fastciast-cms.herokuapp.com/`;
let source = axios.CancelToken.source();

const getTopBarData = async () => {
  const response = await axios.get(`${baseUrl}general`, {
    cancelToken: source.token,
  });
  return { bar: response.data.bar };
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default {
  getTopBarData,
  cancel,
};
