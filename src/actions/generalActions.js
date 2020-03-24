const toggleTheme = () => ({
  type: 'TOGGLE_THEME',
});

const setChat = chat => ({
  type: 'SET_CHAT',
  payload: chat,
});

export default { toggleTheme, setChat };
