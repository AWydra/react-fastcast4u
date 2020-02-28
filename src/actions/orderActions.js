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

const setPlan = item => ({
  type: 'SET_PLAN',
  payload: item,
});

export default {
  toggleProduct,
  toggleAddon,
  setCycle,
  setPlan,
};
