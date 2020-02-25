import { createStore, combineReducers } from 'redux';
import orderReducer from 'reducers/orderReducer';
// import orderActions from 'actions/orderActions';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  order: orderReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
