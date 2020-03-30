import axios from 'axios';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com' : ''}/order/backend/api/`;

const source = axios.CancelToken.source();

const cancel = () => source.cancel();

const setStep1 = async () => {
  const request = await axios.get(`${baseUrl}step1.php`);
  return request.data;
};

const getPricing = () => async dispatch => {
  const order = await axios.get(`${baseUrl}pricing2.php`, {
    cancelToken: source.token,
  });
  dispatch({ type: 'PRICING_FETCH_SUCCESS', payload: order.data });
};

const setStep2 = async data => {
  const request = await axios.get(`${baseUrl}step2.php?packageData=${JSON.stringify(data)}`, {
    cancelToken: source.token,
  });
  return request.data;
};

const setStep3 = async data => {
  const request = await axios.get(`${baseUrl}step3.php?accountData=${JSON.stringify(data)}`, {
    cancelToken: source.token,
  });
  return request.data;
};

const setPaymentMethod = async method => {
  const request = await axios.get(`${baseUrl}step4.php?paymentMethod=${method}`, {
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
  const request = await axios.get(`${baseUrl}step6.php?accountData=${JSON.stringify(data)}`, {
    cancelToken: source.token,
  });
  return request.data;
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
};
