// Редуктор (cartSlice.js)
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    items: [],
    count: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.idTotal += newItem.price;
      } else {
        state.items.push({ ...newItem, quantity: 1, idTotal: newItem.price });
      }
      state.totalPrice += newItem.price;
      state.count += 1;
    },
    minusItemFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.idTotal -= existingItem.price;
        } else {
          state.items = state.items.filter((item) => item.id !== itemId);
        }
        state.totalPrice -= existingItem.price;
        state.count -= 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const removedItem = state.items.find((item) => item.id === itemId);
      state.totalPrice -= removedItem.idTotal * removedItem.quantity;
      state.count -= removedItem.quantity;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const { addItemToCart, minusItemFromCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;

