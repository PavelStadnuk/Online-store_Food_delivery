import { configureStore } from '@reduxjs/toolkit'
import FilterSlice from './Slice/FilterSlice'
import cartItemSlice from './Slice/cartSlice'
import OrderProcessingSlice from './Slice/OrderProcessingSlice'
export const store = configureStore({
  reducer: {FilterSlice,cartItemSlice,OrderProcessingSlice},
})