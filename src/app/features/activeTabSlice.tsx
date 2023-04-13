import { createSlice } from "@reduxjs/toolkit";

type activeTabType = {
	activeTab: string;
}

const initialState:activeTabType = {
	activeTab:'Home'
}

const activeTabSlice = createSlice({
	name: 'activeTab',
	initialState,
	reducers: {
		setActiveTab: (state,action) => {
			state.activeTab = action.payload
		}
	}

})

export const { setActiveTab } = activeTabSlice.actions 
export default activeTabSlice.reducer
