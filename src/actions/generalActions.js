const toggleTheme = () => ({
  type: 'TOGGLE_THEME',
});

const setChat = chat => ({
  type: 'SET_CHAT',
  payload: chat,
});

const setAlert = alert => ({
  type: 'SET_ALERT',
  payload: alert,
});

export default { toggleTheme, setChat, setAlert };
