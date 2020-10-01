const setHomeData = data => ({
  type: 'SET_HOME_DATA',
  payload: data,
});

const setAppData = data => ({
  type: 'SET_APP_DATA',
  payload: data,
});

export default {
  setHomeData,
  setAppData,
};
