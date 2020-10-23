const setHomeData = data => ({
  type: 'SET_HOME_DATA',
  payload: data,
});

const setAppData = data => ({
  type: 'SET_APP_DATA',
  payload: data,
});

const setAlexaData = data => ({
  type: 'SET_ALEXA_DATA',
  payload: data,
});

const setLoginData = data => ({
  type: 'SET_LOGIN_DATA',
  payload: data,
});

const setOrderData = data => ({
  type: 'SET_ORDER_DATA',
  payload: data,
});

const setSLSData = data => ({
  type: 'SET_SLS_DATA',
  payload: data,
});

const setNotificationData = data => ({
  type: 'SET_NOTIFICATION_DATA',
  payload: data,
});

export default {
  setHomeData,
  setAppData,
  setAlexaData,
  setLoginData,
  setOrderData,
  setSLSData,
  setNotificationData,
};
