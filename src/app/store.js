import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import goodsReducer from './slices/goodsSlice';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const reducers = combineReducers({
  goods : goodsReducer,
  cart : cartReducer,
  user: userReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList:[
    'userLogin',
    'cart',
    'checkout',
    'orderAfterCheckout',
    'currency',
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
});

export default store;
