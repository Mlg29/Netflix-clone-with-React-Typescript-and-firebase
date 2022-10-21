import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from "../slice/movieSlice"
import AuthReducer from "../slice/authSlice"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    movie: MovieReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch