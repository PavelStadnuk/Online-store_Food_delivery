import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  delivery:1,
  pay:3,
  deliveryTime:2
}

export const OrderProcessingSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setDelivery(state,action) {
			state.delivery = action.payload
			// console.log(state.activeCategory)
		},
    setPay(state,action) {
			state.pay = action.payload
			// console.log(state.activeCategory)
		},
    setDeliveryTime(state,action) {
			state.deliveryTime = action.payload
			// console.log(state.activeCategory)
		},
	},
})

export const {
	setDelivery,
  setPay,
  setDeliveryTime
} = OrderProcessingSlice.actions

export default OrderProcessingSlice.reducer
