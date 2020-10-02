import axios from 'axios';

const baseUrl = `https://fastciast-cms.herokuapp.com/`;
let source = axios.CancelToken.source();

const getTopBarData = async () => {
  const response = await axios.get(`${baseUrl}general`, {
    cancelToken: source.token,
  });
  return { bar: response.data.bar };
};

const getHomeData = async () => {
  const response = await axios.get(`${baseUrl}home`, {
    cancelToken: source.token,
  });
  return { bar: response.data.bar, hero: response.data.hero };
};

const getAppData = async () => {
  const response = await axios.get(`${baseUrl}app`, {
    cancelToken: source.token,
  });
  return { bar: response.data.bar, hero: response.data.hero, promocode: response.data.promocode };
};

const getAlexaData = async () => {
  const response = await axios.get(`${baseUrl}alexa`, {
    cancelToken: source.token,
  });
  return { bar: response.data.bar, hero: response.data.hero, promocode: response.data.promocode };
};

const getLoginData = async () => {
  const response = await axios.get(`${baseUrl}login`, {
    cancelToken: source.token,
  });
  return {
    heading: response.data.Heading,
    button: response.data.button,
  };
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default {
  getTopBarData,
  getHomeData,
  getAppData,
  getAlexaData,
  getLoginData,
  cancel,
};
