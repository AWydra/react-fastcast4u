import axios from 'axios';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com/api' : '/api'}/order/api/`;

let source = axios.CancelToken.source();

const setStep1 = async () => {
  const request = await axios.get(`${baseUrl}step1.php`);
  return request.data;
};

const getPricing = promocode => async dispatch => {
  try {
    const order = await axios.get(`${baseUrl}pricing.php`, {
      params: {
        promocode,
      },
    });
    dispatch({ type: 'SET_PRICES', payload: order.data });
    return true;
  } catch (error) {
    dispatch({ type: 'SET_PRICES', payload: error.response.data });
    dispatch({ type: 'PRICING_FETCH_FAIL', payload: promocode });
    return false;
  }
};

const setStep2 = async data => {
  const request = await axios.get(`${baseUrl}step2.php`, {
    params: { ...data },
    cancelToken: source.token,
  });
  return request.data;
};

const setStep3 = async data => {
  const request = await axios.get(`${baseUrl}step3.php`, {
    params: { ...data },
    cancelToken: source.token,
  });
  return request.data;
};

const setPaymentMethod = async method => {
  const request = await axios.get(`${baseUrl}step4.php`, {
    params: {
      method,
    },
    cancelToken: source.token,
  });
  return request.data;
};

const checkCompatibility = async () => {
  const request = await axios.get(`${baseUrl}seemsToBeOk.php`, {
    cancelToken: source.token,
  });
  return request.data;
};

const setStep6 = async data => {
  const request = await axios.get(`${baseUrl}step5.php`, {
    params: { ...data },
    cancelToken: source.token,
  });
  return request.data;
};

const updateDetails = async data => {
  const request = await axios.post(`/api/details/details.php`, data, {
    cancelToken: source.token,
  });
  return request.data;
};

const checkFinalCompatibility = async () => {
  const request = await axios.get(`${baseUrl}isOk.php`, {
    cancelToken: source.token,
  });
  return request.data;
};

const isReady = async () => {
  const request = await axios.get(`${baseUrl}isReady.php`, {
    cancelToken: source.token,
  });
  return request.data;
};

const getLoginURL = async url => {
  const request = await axios.get(url, {
    cancelToken: source.token,
  });
  return request.data.url;
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default {
  cancel,
  getPricing,
  setStep1,
  setStep2,
  setStep3,
  setPaymentMethod,
  checkCompatibility,
  setStep6,
  updateDetails,
  checkFinalCompatibility,
  isReady,
  getLoginURL,
};
