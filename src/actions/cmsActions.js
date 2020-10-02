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

export default {
  setHomeData,
  setAppData,
  setAlexaData,
  setLoginData,
};
