const initParams = params => ({
  type: 'INIT_PARAMS',
  payload: { ...params },
});

const setSort = sort => ({
  type: 'SET_SORT',
  payload: { sort },
});

const setPage = page => ({
  type: 'SET_PAGE',
  payload: { page },
});

const setTitle = title => ({
  type: 'SET_TITLE',
  payload: { title },
});

const setStations = stations => ({
  type: 'SET_STATIONS',
  payload: { stations },
});

export default { initParams, setSort, setPage, setTitle, setStations };
