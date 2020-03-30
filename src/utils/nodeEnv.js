export const isDev = () => {
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  return false;
};

export const isProd = () => {
  if (process.env.NODE_ENV === 'production') {
    return true;
  }
  return false;
};

export const isTest = () => {
  if (process.env.NODE_ENV === 'test') {
    return true;
  }
  return false;
};

export default { isDev, isProd, isTest };
