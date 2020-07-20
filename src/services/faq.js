import axios from 'axios';

const baseUrl = 'https://fastcast4u.com/api/faq';
let source = axios.CancelToken.source();

const getCategories = async () => {
  const response = await axios.get(`${baseUrl}/getCategories.php`, {
    cancelToken: source.token,
  });

  return response.data;
};

const getArticles = async id => {
  const response = await axios.get(`${baseUrl}/getArticles.php`, {
    params: { id },
    cancelToken: source.token,
  });

  return response.data;
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default { getCategories, getArticles, cancel };
