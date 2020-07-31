/* eslint-disable import/prefer-default-export */

export const getUTCTime = () => {
  const tmLoc = new Date();
  return tmLoc.getTime() + tmLoc.getTimezoneOffset() * 60000;
};

export const isOlderThan = date => date < getUTCTime();
