import produce from 'immer';

const initialState = {
  chat: {},
  theme: 'light',
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
    default:
      return state;
  }
};

export default generalReducer;
