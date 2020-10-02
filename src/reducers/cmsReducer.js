import produce from 'immer';

const initialState = {
  home: {
    hero: {
      title: '',
      content: '',
      buttons: [],
    },
    bar: {},
  },
  app: {
    hero: {
      title: '',
      content: '',
      buttons: [],
    },
    bar: {},
  },
  alexa: {
    hero: {
      title: '',
      content: '',
      buttons: [],
    },
    bar: {},
  },
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HOME_DATA':
      return produce(state, draftState => {
        draftState.home = action.payload;
      });
    case 'SET_APP_DATA':
      return produce(state, draftState => {
        draftState.app = action.payload;
      });
    case 'SET_ALEXA_DATA':
      return produce(state, draftState => {
        draftState.alexa = action.payload;
      });
    default:
      return state;
  }
};

export default generalReducer;
