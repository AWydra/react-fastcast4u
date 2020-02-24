const add = item => ({
  type: 'ADD_PRODUCT',
  payload: item,
});

const reset = item => ({
  type: 'RESET_PRODUCTS',
  payload: item,
});

export default {
  add,
  reset,
};
