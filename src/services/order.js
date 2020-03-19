import axios from 'axios';

const baseUrl = '/order/backend/api/';

const setStep1 = async () => {
  const request = await axios.get(`${baseUrl}step1.php`);
  return request.data;
};

const getPricing = () => async dispatch => {
  const order = await axios.get(`${baseUrl}pricing2.php`);
  dispatch({ type: 'PRICING_FETCH_SUCCESS', payload: order.data });
};

const setStep2 = async data => {
  // TEMPORARY USE

  // const request = await axios.get(`${baseUrl}step2.php`, {
  //   params: {
  //     ...data,
  //   },
  // });
  const request = await axios.get(`${baseUrl}step2.php?packageData=${JSON.stringify(data)}`);
  return request.data;
};

export default {
  getPricing,
  setStep1,
  setStep2,
};
