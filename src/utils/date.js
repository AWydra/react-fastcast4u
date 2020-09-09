/* eslint-disable import/prefer-default-export */

export const getTime = () => {
  const tmLoc = new Date();
  return tmLoc.getTime();
};

export const isOlderThan = date => date < getTime();

export const isNowBetween = (from, to) => {
  const date = getTime();
  return from < date && to > date;
};
