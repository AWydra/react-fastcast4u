import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import generalReducer from 'reducers/generalReducer';
import orderReducer from 'reducers/orderReducer';
import directoryReducer from 'reducers/directoryReducer';
import languageReducer from 'reducers/languageReducer';
import cmsReducer from 'reducers/cmsReducer';

const generalPersistConfig = {
  key: 'general',
  storage,
  blacklist: ['chat', 'alert'],
};

const orderPersistConfig = {
  key: 'order',
  storage,
  blacklist: ['loading', 'products', 'addons', 'invalidPromocode'],
};

const rootReducer = combineReducers({
  general: persistReducer(generalPersistConfig, generalReducer),
  order: persistReducer(orderPersistConfig, orderReducer),
  directory: directoryReducer,
  language: languageReducer,
  cms: cmsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
export default { store, persistor };
