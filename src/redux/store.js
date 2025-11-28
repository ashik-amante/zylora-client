import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/carts/cartSlice'
import authApi from './features/auth/authApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})