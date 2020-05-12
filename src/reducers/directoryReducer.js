// @ts-nocheck
import produce from 'immer';

const generateStationsPlaceholder = number =>
  [...Array(number)].map((el, i) => ({ id: i, image: `${i}` }));

const initialState = {
  loading: true,
  pages: 999,
  sort: 'popular',
  page: 1,
  title: '',
  stations: generateStationsPlaceholder(9),
  player: {
    show: false,
    id: '',
    player: '',
    proxy: '',
    servertype: '',
    metadata: '',
    station: '',
    artist: '',
    title: '',
    listeners: '',
    image: '',
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
        draftState.stations = generateStationsPlaceholder(action.payload.number);
      });
    case 'SET_PLAYER_DATA':
      return produce(state, draftState => {
        draftState.player = { ...draftState.player, ...action.payload, show: true };
      });
    case 'SET_SONG_METADATA':
      return produce(state, draftState => {
        draftState.player = { ...draftState.player, ...action.payload };
      });
    default:
      return state;
  }
};

export default directoryReducer;
