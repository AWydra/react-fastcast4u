import axios from 'axios';
import generalActions from 'actions/generalActions';
import { isProd } from 'utils/nodeEnv';

const baseUrl = `${isProd() ? 'https://fastcast4u.com/api' : '/api/translate'}`;
let source = axios.CancelToken.source();

const getRecomendedLangs = async data => {
  const response = await axios.post(`${baseUrl}/languageCode.php`, data, {
    cancelToken: source.token,
  });

  return response.data;
};

const getLangs = async data => {
  const response = await axios.post(`${baseUrl}/countries.php`, data, {
    cancelToken: source.token,
  });

  return response.data;
};

const getTranlations = code => async dispatch => {
  try {
    const translations = await axios.get(`${baseUrl}/getTranslatedLanguage.php`, {
      params: {
        countryCode: code,
      },
    });
    dispatch({ type: 'SET_LANGUAGE', payload: translations.data });
    return true;
  } catch (error) {
    dispatch(generalActions.setAlert.error(error.message));
    return false;
  }
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default { getRecomendedLangs, getLangs, getTranlations, cancel };
