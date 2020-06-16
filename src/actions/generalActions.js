const toggleTheme = () => ({
  type: 'TOGGLE_THEME',
});

const setChat = chat => ({
  type: 'SET_CHAT',
  payload: chat,
});

const setChatDisplay = isOpen => ({
  type: 'SET_CHAT_DISPLAY',
  payload: { isOpen },
});

const setChatStatus = isOnline => ({
  type: 'SET_CHAT_STATUS',
  payload: { isOnline },
});

const setCountry = country => ({
  type: 'SET_COUNTRY',
  payload: { country },
});

const setInteracted = () => ({
  type: 'SET_INTERACTED',
});

const setAlert = {
  success: content => ({
    type: 'SET_ALERT',
    payload: {
      content,
      type: 'success',
      open: true,
    },
  }),
  warning: content => ({
    type: 'SET_ALERT',
    payload: {
      content,
      type: 'warning',
      open: true,
    },
  }),
  error: content => ({
    type: 'SET_ALERT',
    payload: {
      content,
      type: 'error',
      open: true,
    },
  }),
  info: content => ({
    type: 'SET_ALERT',
    payload: {
      content,
      type: 'info',
      open: true,
    },
  }),
  show: () => ({
    type: 'SET_ALERT',
    payload: {
      open: true,
    },
  }),
  hide: () => ({
    type: 'SET_ALERT',
    payload: {
      open: false,
    },
  }),
};

export default {
  toggleTheme,
  setChat,
  setChatDisplay,
  setChatStatus,
  setCountry,
  setInteracted,
  setAlert,
};
