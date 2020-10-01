import history from 'utils/history';

export const handleExternal = (url, lng) => {
  if (url.startsWith('http')) {
    window.location.href = url;
  } else {
    history.push(`${lng}${url}`);
  }
};

export default { handleExternal };
