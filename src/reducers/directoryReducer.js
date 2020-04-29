import produce from 'immer';

const initialState = {
  loading: true,
  pages: 100,
  sort: 'popular',
  page: 1,
  title: '',
  stations: [...Array(9)].map((el, i) => ({ id: i, image: `${i}` })),
  source: {
    cancel: () => {},
  },
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PARAMS':
      return {
        ...state,
        sort: action.payload.sort || 'popular',
        page: action.payload.page || 1,
        title: action.payload.title || '',
        id: action.payload.id || '',
      };
    case 'SET_LOADING':
      return produce(state, draftState => {
        draftState.loading = action.payload.loading;
      });
    case 'SET_PAGES':
      return produce(state, draftState => {
        draftState.pages = action.payload.pages;
      });
    case 'SET_STATIONS':
      return produce(state, draftState => {
        draftState.stations = action.payload.stations;
        draftState.loading = false;
      });
    case 'SET_STATIONS_PLACEHOLDER':
      return produce(state, draftState => {
        draftState.loading = true;
        draftState.stations = [...Array(action.payload.number)].map((el, i) => ({
          id: i,
          image: `${i}`,
        }));
      });
    default:
      return state;
  }
};

export default directoryReducer;
