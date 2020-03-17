import axios from 'axios';

const baseUrl = '/order/backend/api/';

const setStep1 = async () => {
  const request = await axios.get(`${baseUrl}steps1.php`);
  return request.data;
};

const getPricing = () => async dispatch => {
  const order = await axios.get(`${baseUrl}pricing2.php`);
  dispatch({ type: 'FETCH_SUCCESS', payload: order.data });
};

export default {
  getPricing,
  setStep1,
};
