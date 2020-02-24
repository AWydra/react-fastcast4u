import { createStore, combineReducers } from 'redux';
import orderReducer from 'reducers/orderReducer';
import orderActions from 'actions/orderActions';

const rootReducer = combineReducers({
  order: orderReducer,
});

const store = createStore(rootReducer);
window.store = store;

store.dispatch(orderActions.add('AdMob'));

export default store;
