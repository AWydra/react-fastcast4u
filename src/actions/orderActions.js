const addProduct = item => ({
  type: 'ADD_PRODUCT',
  payload: item,
});

const setCycle = item => ({
  type: 'SET_CYCLE',
  payload: item,
});

const resetProducts = item => ({
  type: 'RESET_PRODUCTS',
  payload: item,
});

export default {
  addProduct,
  setCycle,
  resetProducts,
};
