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

export default { setSort, setPage, setTitle };
