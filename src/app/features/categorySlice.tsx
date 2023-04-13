import { createSlice } from "@reduxjs/toolkit";

type categoryType = {
	category: string;
}

const initialState:categoryType = {
	category:'New'
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategory: (state,action) => {
			state.category = action.payload
		}
	}

})

export const { setCategory } = categorySlice.actions 
export default categorySlice.reducer