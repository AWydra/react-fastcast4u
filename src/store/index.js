import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import generalReducer from 'reducers/generalReducer';
import orderReducer from 'reducers/orderReducer';

const rootReducer = combineReducers({
  order: orderReducer,
  general: generalReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
