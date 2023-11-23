import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	activeCategory: 1,
}

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setActiveCategory(state,action) {
			state.activeCategory = action.payload
			// console.log(state.activeCategory)
		},
	},
})

export const {
	setActiveCategory,
} = filterSlice.actions

export default filterSlice.reducer
