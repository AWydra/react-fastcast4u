import produce from 'immer';

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
  recurfor: {},
  email: '',
  password: '',
  username: '',
  emailmarketing: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRICES':
      return produce(state, draftState => {
        const { currency, products, addons, promocode, recurfor } = action.payload;
        const activeProduct = draftState.activeProduct ? draftState.activeProduct : products[0].id;

        draftState.loading = false;
        draftState.currency = currency;
        draftState.products = products;
        draftState.addons = addons;
        draftState.activeProduct = activeProduct;
        draftState.promocode = promocode || '';
        draftState.recurfor = recurfor;
      });
    case 'PRICING_FETCH_FAIL':
      return produce(state, draftState => {
        draftState.invalidPromocode = action.payload;
      });
    case 'TOGGLE_PRODUCT':
      return produce(state, draftState => {
        draftState.activeProduct = action.payload;
      });
    case 'TOGGLE_ADDON':
      return produce(state, draftState => {
        if (draftState.activeAddons.includes(action.payload)) {
          const newArray = draftState.activeAddons.filter(id => id !== action.payload);
          draftState.activeAddons = newArray;
        } else {
          draftState.activeAddons.push(action.payload);
          draftState.addons
            .filter(el => el.parent === action.payload)
            .forEach(el => draftState.activeAddons.push(el.relid));
        }
      });
    case 'REMOVE_ADDON':
      return produce(state, draftState => {
        const newArray = draftState.activeAddons.filter(id => id !== action.payload);
        draftState.activeAddons = newArray;
      });
    case 'SET_CYCLE':
      return produce(state, draftState => {
        draftState.cycle = action.payload;
      });
    case 'SET_PLAN':
      return produce(state, draftState => {
        draftState.plan = action.payload;
      });
    case 'SET_PROMOCODE':
      return produce(state, draftState => {
        draftState.promocode = action.payload;
      });
    case 'SET_CREDENTIALS':
      return produce(state, draftState => {
        const { email, password, username, emailmarketing } = action.payload;
        draftState.email = email;
        draftState.password = password;
        draftState.username = username;
        draftState.emailmarketing = emailmarketing;
      });
    case 'RESET_ORDER_STORE':
      return initialState;
    default:
      return state;
  }
};

export default orderReducer;
