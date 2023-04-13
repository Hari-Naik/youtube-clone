import { configureStore } from '@reduxjs/toolkit'


import menuReducer from '../features/menuSlice'
import categoryReducer from '../features/categorySlice'
import activeTabReducer from '../features/activeTabSlice'

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		category: categoryReducer,
		activeTab: activeTabReducer,
	}
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch