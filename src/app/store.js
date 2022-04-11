import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    goods : goodsReducer,
    cart : cartReducer
  },
});
