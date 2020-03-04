import axios from 'axios';

const baseUrl = '/order/backend/api/pricing2.php';

const fetchPricing = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const getPricing = () => async dispatch => {
  const order = await fetchPricing();
  dispatch({ type: 'FETCH_SUCCESS', payload: order });
};

export default {
  fetchPricing,
  getPricing,
};
