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

const getOrderData = async () => {
  const response = await axios.get(`${baseUrl}order`, {
    cancelToken: source.token,
  });
  return {
    promocode: response.data.promocode,
    cycle: response.data.cycle,
  };
};

const getSLSData = async () => {
  const response = await axios.get(`${baseUrl}social-live-streaming`, {
    cancelToken: source.token,
  });
  return {
    promocode: response.data.promocode,
    hero: response.data.hero,
    bar: response.data.bar,
  };
};

const getNotificationData = async () => {
  const response = await axios.get(`${baseUrl}promo-notification`, {
    cancelToken: source.token,
  });
  return {
    active: response.data.active,
    content: response.data.content,
    date: response.data.date,
    image: response.data.image.url,
    mobile: response.data.mobile,
    link: response.data.link,
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
  getOrderData,
  getSLSData,
  getNotificationData,
  cancel,
};
