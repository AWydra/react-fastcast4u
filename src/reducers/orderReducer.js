const initialState = {
  loading: true,
  currency: '',
  cycle: 'monthly',
  plan: 'regular',
  promocode: '',
  products: [],
  addons: [],
  activeProduct: '',
  activeAddons: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRICING_FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        currency: action.payload.currency,
        products: action.payload.products,
        addons: action.payload.addons,
        activeProduct: action.payload.products[0].id,
      };
    case 'TOGGLE_PRODUCT':
      return {
        ...state,
        activeProduct: action.payload,
      };
    case 'TOGGLE_ADDON':
      const isInArray = state.activeAddons.includes(action.payload);
      const activeAddons = isInArray
        ? state.activeAddons.filter(id => id !== action.payload)
        : [...state.activeAddons, action.payload];

      return {
        ...state,
        activeAddons,
      };
    case 'REMOVE_ADDON':
      return {
        ...state,
        activeAddons: state.activeAddons.filter(id => id !== action.payload),
      };
    case 'SET_CYCLE':
      return {
        ...state,
        cycle: action.payload,
      };
    case 'SET_PLAN':
      return {
        ...state,
        plan: action.payload,
      };
    case 'SET_PROMOCODE':
      return {
        ...state,
        promocode: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
