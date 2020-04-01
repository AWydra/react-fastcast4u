import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import generalReducer from 'reducers/generalReducer';
import orderReducer from 'reducers/orderReducer';

const generalPersistConfig = {
  key: 'general',
  storage,
};

const orderPersistConfig = {
  key: 'order',
  storage,
};

const rootReducer = combineReducers({
  order: persistReducer(orderPersistConfig, orderReducer),
  general: persistReducer(generalPersistConfig, generalReducer),
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
export default { store, persistor };
