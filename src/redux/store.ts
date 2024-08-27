import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/couter-slice';
import cartReducer from './slices/cart-slice';
import accessTokenSlice from '@/redux/slices/access-token-slice';
import productReducer from '@/redux/slices/product.slice';
import { useDispatch, useSelector } from 'react-redux';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer
    },
  })
};

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>()