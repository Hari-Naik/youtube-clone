import { createSlice } from '@reduxjs/toolkit'

type state = {
	showMenu: boolean
}

const initialState: state = {
	showMenu: false
}

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setMenu: (state) => {
			state.showMenu = !state.showMenu
		}
	}
})

export const {setMenu} = menuSlice.actions
export default menuSlice.reducer