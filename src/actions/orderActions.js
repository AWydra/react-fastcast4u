const toggleProduct = item => ({
  type: 'TOGGLE_PRODUCT',
  payload: item,
});

const toggleAddon = item => ({
  type: 'TOGGLE_ADDON',
  payload: item,
});

const removeAddon = id => ({
  type: 'REMOVE_ADDON',
  payload: id,
});

const setCycle = item => ({
  type: 'SET_CYCLE',
  payload: item,
});

const setPlan = item => ({
  type: 'SET_PLAN',
  payload: item,
});

const setPromocode = item => ({
  type: 'SET_PROMOCODE',
  payload: item,
});

const setCredentials = item => ({
  type: 'SET_CREDENTIALS',
  payload: item,
});

const resetStore = () => ({
  type: 'RESET_ORDER_STORE',
});

export default {
  toggleProduct,
  toggleAddon,
  removeAddon,
  setCycle,
  setPlan,
  setPromocode,
  setCredentials,
  resetStore,
};
