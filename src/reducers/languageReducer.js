import initialState from 'translations/en.json';

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default languageReducer;
