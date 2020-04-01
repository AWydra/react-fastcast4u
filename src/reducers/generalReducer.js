import produce from 'immer';

const initialState = {
  chat: {},
  theme: 'light',
  alert: {},
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return produce(state, draftState => {
        const theme = { light: 'dark', dark: 'light' }[draftState.theme];
        draftState.theme = theme;
      });
    case 'SET_CHAT':
      return produce(state, draftState => {
        draftState.chat = action.payload;
      });
    case 'SET_ALERT':
      return produce(state, draftState => {
        draftState.alert = { ...draftState.alert, ...action.payload };
      });
    default:
      return state;
  }
};

export default generalReducer;
