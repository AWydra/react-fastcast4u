import produce from 'immer';

const initialState = {
  chat: {
    isOpen: false,
    isOnline: true,
  },
  theme: 'light',
  alert: {},
  country: 'us',
  interacted: false,
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
        draftState.chat = { ...draftState.chat, ...action.payload };
      });
    case 'SET_CHAT_DISPLAY':
      return produce(state, draftState => {
        draftState.chat.isOpen = action.payload.isOpen;
      });
    case 'SET_CHAT_STATUS':
      return produce(state, draftState => {
        draftState.chat.isOnline = action.payload.isOnline;
      });
    case 'SET_INITIAL_DATA':
      return { ...state, ...action.payload.data };
    case 'SET_INTERACTED':
      return produce(state, draftState => {
        draftState.interacted = true;
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
