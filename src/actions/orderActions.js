const toggleProduct = item => ({
  type: 'TOGGLE_PRODUCT',
  payload: item,
});

const toggleAddon = item => ({
  type: 'TOGGLE_ADDON',
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
  toggleProduct,
  toggleAddon,
  setCycle,
  resetProducts,
};
