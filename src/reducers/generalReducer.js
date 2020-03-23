import produce from 'immer';

const initialState = {
  theme: 'light',
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return produce(state, draftState => {
        const theme = { light: 'dark', dark: 'light' }[draftState.theme];
        draftState.theme = theme;
      });
    default:
      return state;
  }
};

export default generalReducer;
