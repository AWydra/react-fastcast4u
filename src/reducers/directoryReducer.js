import produce from 'immer';

const initialState = {
  sort: 'popular',
  page: 1,
  title: 'Halooo',
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return produce(state, draftState => {
        draftState.sort = action.payload.sort;
      });
    case 'SET_PAGE':
      return produce(state, draftState => {
        draftState.page = action.payload.page;
      });
    case 'SET_TITLE':
      return produce(state, draftState => {
        draftState.title = action.payload.title;
      });
    default:
      return state;
  }
};

export default directoryReducer;
