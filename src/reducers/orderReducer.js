const initialState = { products: ['Everest Cast', 'App', 'Alexa'] };

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'RESET_PRODUCTS':
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export default orderReducer;
